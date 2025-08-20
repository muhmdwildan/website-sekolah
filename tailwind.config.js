/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pesantren: {
          green: "#166534",
          gold: "#fbbf24"
        }
      }
    },
  },
  plugins: [],
}
