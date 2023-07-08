/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto"],
    },
    extend: {},
    colors: {
      "primary-color": "#3730a3",
      "sec-color": "#f1f5f9",
    },
  },
  plugins: [],
};
