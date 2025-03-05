export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#242424",
        secondary: "#C9C9C9",
        accent: "#00A933",
        accent300: "#018028",
        accent600: "#004314",
        titleWhite: "#FFFFFF",
        grayButton: "#505050",
        grayButtonHover: "#404040",
        navBarBg: "rgba(9, 9, 9, 0.83)",
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
