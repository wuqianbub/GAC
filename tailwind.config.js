/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        // Spec: 1440px viewport with 80px side padding
        desktop: "1440px",
        // Spec: cap layout behavior for ultra-wide screens (background can stretch)
        ultrawide: "2560px",
      },
      colors: {
        // Pixel-perfect base
        gac: {
          bg: "#FFFFFF",
          text: "#1A1A1A",
        },
        // App theme tokens (maps to existing CSS variables)
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        card: "var(--color-card)",
        "card-foreground": "var(--color-card-foreground)",
        border: "var(--color-border)",
        ring: "var(--color-ring)",
        primary: "var(--color-primary)",
        "primary-foreground": "var(--color-primary-foreground)",
        muted: "var(--color-muted)",
        "muted-foreground": "var(--color-muted-foreground)",
        accent: "var(--color-accent)",
        "accent-foreground": "var(--color-accent-foreground)",
      },
      backgroundImage: {
        // Accent gradient used across designs (blue -> light purple)
        "gac-accent":
          "linear-gradient(90deg, #0A84FF 0%, #6C63FF 45%, #B39DFF 100%)",
        // Rainbow-ish glow for black pill buttons (subtle breathing shadow)
        "gac-rainbow":
          "linear-gradient(90deg, #0A84FF 0%, #6C63FF 25%, #FF6AD5 50%, #FFD66E 75%, #2EE59D 100%)",
      },
      borderRadius: {
        // Match spec naming (Tailwind defaults exist; keep explicit for clarity)
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      maxWidth: {
        // Core 1280 grid
        "gac-content": "1280px",
      },
      boxShadow: {
        // Used for hover focus states / lifted cards
        "gac-lift": "0 16px 40px rgba(0,0,0,0.12)",
        // Used with bg-gac-rainbow + blur for glow
        "gac-glow": "0 10px 30px rgba(10,132,255,0.25)",
      },
      transitionTimingFunction: {
        // Spec: [0.22, 1, 0.36, 1]
        "quint-out": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

