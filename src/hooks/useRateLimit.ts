import { useState, useCallback } from 'react';

interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number;
}

interface RateLimitState {
  attempts: number;
  windowStart: number;
}

const STORAGE_KEY = 'jsr-rate-limit';

/**
 * Hook pour limiter le nombre de soumissions de formulaire
 * @param config - Configuration du rate limiting
 * @returns { canSubmit, recordAttempt, remainingAttempts, resetTime }
 */
export function useRateLimit(config: RateLimitConfig = { maxAttempts: 3, windowMs: 60000 }) {
  const { maxAttempts, windowMs } = config;

  const getStoredState = (): RateLimitState => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // Ignore localStorage errors
    }
    return { attempts: 0, windowStart: Date.now() };
  };

  const [state, setState] = useState<RateLimitState>(getStoredState);

  const isWindowExpired = useCallback(() => {
    return Date.now() - state.windowStart > windowMs;
  }, [state.windowStart, windowMs]);

  const canSubmit = useCallback(() => {
    if (isWindowExpired()) {
      return true;
    }
    return state.attempts < maxAttempts;
  }, [state.attempts, maxAttempts, isWindowExpired]);

  const recordAttempt = useCallback(() => {
    const now = Date.now();
    let newState: RateLimitState;

    if (isWindowExpired()) {
      newState = { attempts: 1, windowStart: now };
    } else {
      newState = { ...state, attempts: state.attempts + 1 };
    }

    setState(newState);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    } catch {
      // Ignore localStorage errors
    }
  }, [state, isWindowExpired]);

  const remainingAttempts = useCallback(() => {
    if (isWindowExpired()) {
      return maxAttempts;
    }
    return Math.max(0, maxAttempts - state.attempts);
  }, [state.attempts, maxAttempts, isWindowExpired]);

  const resetTime = useCallback(() => {
    if (isWindowExpired()) {
      return 0;
    }
    return Math.ceil((windowMs - (Date.now() - state.windowStart)) / 1000);
  }, [state.windowStart, windowMs, isWindowExpired]);

  return {
    canSubmit: canSubmit(),
    recordAttempt,
    remainingAttempts: remainingAttempts(),
    resetTime: resetTime(),
  };
}
