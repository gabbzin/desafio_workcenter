import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#4B41DF",
        "primary-light": "#655EF9",

        background: "#F3F4F5",
        "background-secondary": "#F8F9FA",

        surface: "#FFFFFF",
        "surface-alt": "#F3F4F5",

        "text-primary": "#191C1D",
        "text-secondary": "#464554",
        "text-footer": "#64748B",

        border: "#4B41DF",
      },

      backgroundImage: {
        "primary-gradient":
          "linear-gradient(135deg, #4B41DF 0%, #655EF9 100%)",
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
        container: "1200px",
      },

      spacing: {
        section: "6rem", // espaçamento padrão entre seções
      },

      fontSize: {
        hero: ["3rem", { lineHeight: "1.2" }],
      },
    },
  },

  plugins: [],
} satisfies Config;