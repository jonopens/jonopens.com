/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      med: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        // Light mode - high contrast
        "bg-light": "#ffffff",
        "text-light": "#1a1a1a",
        "text-secondary-light": "#4a4a4a",
        
        // Dark mode - high contrast
        "bg-dark": "#0f0f0f",
        "text-dark": "#f5f5f5",
        "text-secondary-dark": "#b0b0b0",
        
        // Accent colors - WCAG AA compliant
        "accent-primary": "#ff6b35",
        "accent-secondary": "#f7b731",
        
        // Card/surface colors
        "card-light": "#f8f8f8",
        "card-dark": "#1a1a1a",
        "card-muted-light": "#e5e5e5",
        "card-muted-dark": "#2a2a2a",
        
        // Border colors
        "border-light": "#e0e0e0",
        "border-dark": "#333333",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: ["Fira Code", "Consolas", "Monaco", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
