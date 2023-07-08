/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto"],
    },
    extend: {},
    colors: {
      "primary-color": "#ef4444",
      "sec-color": "#fecaca",
      "white-color": "#ffff",
      "black-color": "#0000",
    },
  },
  plugins: [],
};
