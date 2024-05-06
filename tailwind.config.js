export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        secondaryBackground: "rgba(var(--secondaryBackground))",
        primary: "rgba(var(--primary))",
        "primary-dark": "rgba(var(--primary-dark))",
        secondary: "rgba(var(--secondary))",
        "secondary-dark": "rgba(var(--secondary-dark))",
      },
      animation: {
        flicker: 'flicker 1s linear infinite',
        glowing: 'glowing 1s linear infinite',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}