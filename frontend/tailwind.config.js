/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all files in src/
    "./public/index.html"         // Optional: in case you use classes in HTML
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
