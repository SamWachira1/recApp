// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./client/app/**/*.{js,ts,jsx,tsx}" // Include this if using the client folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
