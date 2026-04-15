import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#4B41DF",
        "primary-light": "#655EF9",

        background: "#F3F4F5",
        "background-secondary": "#F8F9FA",

        surface: "#FFFFFF",
        "surface-alt": "#F3F4F5",

        "primary-text": "#191C1D",
        "secondary-text": "#464554",
        "footer-text": "#64748B",

        border: "#4B41DF",
      },

      backgroundImage: {
        "primary-gradient": "linear-gradient(135deg, #4B41DF 0%, #655EF9 100%)",
      },

      boxShadow: {
        card: "0 10px 30px rgba(0, 0, 0, 0.05)",
        soft: "0 4px 12px rgba(0, 0, 0, 0.04)",
      },

      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.5rem",
      },

      maxWidth: {
        container: "1440px",
      },

      spacing: {
        section: "7rem",
      },

      fontSize: {
        hero: ["3rem", { lineHeight: "1.2" }],
        "hero-mobile": ["2rem", { lineHeight: "1.12" }],
        "hero-desktop": ["56px", { lineHeight: "1.08" }],
        "section-title": ["1.75rem", { lineHeight: "1.2" }],
        "cta-title": ["1.9rem", { lineHeight: "1.15" }],
        "body-13": "13px",
        "body-11": "11px",
        "body-10": "10px",
      },
    },
  },

  plugins: [],
} satisfies Config;
