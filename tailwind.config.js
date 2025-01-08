/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '',
        secondary: '#C9C9C9',
        accent: '#00A933',
        titleWhite: '#FFFFFF',
      }
    },
  },
  plugins: [],
}

