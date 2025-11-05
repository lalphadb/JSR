#!/usr/bin/env bash
set -euo pipefail

# This script applies priority fixes from the infrastructure analysis:
# - Fix NVIDIA driver/DKMS mismatch
# - Configure UFW with safe defaults
# - Set CPU governor to performance (persistent)
# - Start ai-optimizer container
#
# Usage:
#   sudo bash scripts/apply-infra-fixes.sh [--yes]
#

CONFIRM=${1:-}
if [[ $EUID -ne 0 ]]; then
  echo "❌ Please run as root: sudo bash $0" >&2
  exit 1
fi

confirm() {
  if [[ "${CONFIRM}" == "--yes" ]]; then
    return 0
  fi
  read -r -p "➡️  $1 [y/N]: " ans
  [[ "${ans:-}" == "y" || "${ans:-}" == "Y" ]]
}

log() { echo -e "\n===== $* =====\n"; }

detect_nvidia_branch() {
  # Try installed driver first
  local v
  v=$(dpkg -l | awk '/nvidia-driver-[0-9]+-open/{print $2}' | sed -E 's/.*nvidia-driver-([0-9]+)-open/\1/' | sort -V | tail -1)
  if [[ -z "$v" ]]; then
    v=$(dpkg -l | awk '/nvidia-driver-[0-9]+/{print $2}' | sed -E 's/.*nvidia-driver-([0-9]+)/\1/' | sort -V | tail -1)
  fi
  if [[ -z "$v" ]]; then
    v=$(apt-cache pkgnames | sed -n 's/^nvidia-driver-\([0-9][0-9]*\)-open$/\1/p' | sort -V | tail -1)
  fi
  if [[ -z "$v" ]]; then
    v=$(apt-cache pkgnames | sed -n 's/^nvidia-driver-\([0-9][0-9]*\)$/\1/p' | sort -V | tail -1)
  fi
  echo "${v:-580}"
}

fix_gpu() {
  log "GPU: Fix NVIDIA driver/DKMS mismatch"
  local BRANCH
  BRANCH=$(detect_nvidia_branch)
  echo "Using NVIDIA branch ${BRANCH}"

  # Unstick dpkg if needed
  dpkg --configure -a || true
  apt-get -y -f install || true

  # Purge DKMS variants (source of mismatch)
  apt-get purge -y 'nvidia-dkms-*' 'nvidia-kernel-source-*' || true
  if command -v dkms >/dev/null 2>&1; then
    dkms status | awk '/nvidia/{print $1, $2}' | while read -r mod ver; do dkms remove -m "$mod" -v "${ver#*,}" --all || true; done
    rm -rf /var/lib/dkms/nvidia || true
  fi

  apt-get update
  # Prefer kernel-matching prebuilt modules, fallback to generic
  if ! apt-get install -y "linux-modules-nvidia-${BRANCH}-open-$(uname -r)"; then
    apt-get install -y "linux-modules-nvidia-${BRANCH}-open-generic" || true
  fi

  # Ensure userspace libraries and utils match
  apt-get install -y "nvidia-driver-${BRANCH}-open" "nvidia-compute-utils-${BRANCH}" "libnvidia-compute-${BRANCH}:amd64" "libnvidia-gl-${BRANCH}:amd64" "nvidia-firmware-${BRANCH}" || true
  update-initramfs -u || true
  echo "✅ GPU packages aligned. A reboot is recommended."
}

setup_ufw() {
  log "Firewall: Configure UFW safe defaults"
  apt-get install -y ufw
  ufw --force default deny incoming
  ufw --force default allow outgoing
  # Allow essentials
  ufw allow 22/tcp || true
  ufw allow 80/tcp || true
  ufw allow 443/tcp || true
  ufw allow 25/tcp || true
  ufw allow 587/tcp || true
  ufw allow 993/tcp || true
  # Deny monitoring/LLM ports from internet (use Traefik instead)
  for p in 3000 8080 8081 9090 11434; do ufw deny "$p" || true; done
  ufw --force enable
  echo "✅ UFW enabled with hardened rules. Note: Docker can bypass UFW; prefer removing host port publishes."
}

cpu_performance() {
  log "CPU: Set performance governor (persistent)"
  apt-get install -y linux-tools-common "linux-tools-$(uname -r)" || true
  if command -v cpupower >/dev/null 2>&1; then
    cpupower frequency-set -g performance || true
  else
    echo performance | tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor >/dev/null || true
  fi
  # Systemd unit for persistence
  cat >/etc/systemd/system/cpupower-performance.service <<'UNIT'
[Unit]
Description=Set CPU governor to performance
After=multi-user.target

[Service]
Type=oneshot
ExecStart=/bin/sh -c 'if command -v cpupower >/dev/null 2>&1; then cpupower frequency-set -g performance; else echo performance | tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor; fi'
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
UNIT
  systemctl daemon-reload
  systemctl enable --now cpupower-performance.service
  echo "✅ CPU governor set to performance and persisted."
}

start_ai_optimizer() {
  log "AI-Optimizer: start container via docker compose"
  local dir="/home/lalpha/4lb.ca"
  if [[ -d "$dir" ]]; then
    (cd "$dir" && docker compose up -d ai-optimizer)
    echo "✅ ai-optimizer started (if defined in docker-compose)."
  else
    echo "ℹ️  Skipped: directory $dir not found."
  fi
}

mysql_review() {
  log "MySQL: check service status"
  if systemctl list-unit-files | grep -q '^mysql\.service'; then
    systemctl is-active --quiet mysql && echo "MySQL is active" || echo "MySQL is not active"
    echo "To disable if unused: systemctl disable --now mysql"
  else
    echo "MySQL not installed."
  fi
}

echo "🚀 Apply priority infra fixes"

if confirm "Fix NVIDIA drivers (DKMS mismatch) and align libs?"; then
  fix_gpu
else
  echo "⏭️  Skipped GPU fix"
fi

if confirm "Configure and enable UFW with hardened rules?"; then
  setup_ufw
else
  echo "⏭️  Skipped UFW"
fi

if confirm "Set CPU governor to performance and persist?"; then
  cpu_performance
else
  echo "⏭️  Skipped CPU governor"
fi

if confirm "Start ai-optimizer container (docker compose)?"; then
  start_ai_optimizer
else
  echo "⏭️  Skipped ai-optimizer"
fi

mysql_review

echo -e "\n🎯 Done. Recommended: reboot to finalize GPU driver update (reboot now? sudo reboot)."
