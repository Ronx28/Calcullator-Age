/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // menambahkan semua file di dalam folder src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sixtyfour Convergence', 'Arial', 'sans-serif' ],
      }
    },
  },
  plugins: [],
}
