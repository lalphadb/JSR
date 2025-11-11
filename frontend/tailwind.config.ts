import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // PROFESSIONAL PALETTE - Corporate Construction Industry
        brand: {
          DEFAULT: "hsl(211 55% 24%)",      // Slate Blue #1E3A5F
          hover: "hsl(211 55% 20%)",        // Darker slate
          light: "hsl(211 55% 32%)",        // Lighter slate
          focus: "hsl(211 55% 24%)",        // Focus ring
        },
        // ACCENT - For CTAs and highlights
        orange: {
          DEFAULT: "hsl(32 95% 44%)",       // Professional Orange #D97706
          hover: "hsl(32 95% 38%)",         // Darker orange
          light: "hsl(32 95% 52%)",         // Lighter orange
        },
        // DARK PALETTE - Professional charcoal
        dark: {
          DEFAULT: "hsl(0 0% 10%)",         // #1A1A1A (Professional dark)
          surface: "hsl(0 0% 15%)",         // #262626
          lighter: "hsl(0 0% 20%)",         // #333333
        },
        text: {
          primary: "hsl(220 15% 15%)",      // Dark slate
          secondary: "hsl(220 10% 45%)",    // Medium gray
          muted: "hsl(220 10% 60%)",        // Light gray
        },
        surface: {
          light: "hsl(220 15% 97%)",        // Off-white
          border: "hsl(220 15% 90%)",       // Light border
          hover: "hsl(220 15% 94%)",        // Hover state
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
