/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui"],
      },
      colors: {
        gold: "#d4af37",
        dark: "#0b0f19",
        text: "#1a1f2e",
        muted: "#6b7280",
        soft: "#f6f7fb"
      },
      boxShadow: {
        card: "0 16px 32px rgba(0,0,0,.06)"
      },
      borderRadius: {
        xl2: "1rem"
      }
    }
  },
  plugins: []
};

