/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include your source files
  ],
  theme: {
   extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        kumbhSans: ['Kumbh Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
