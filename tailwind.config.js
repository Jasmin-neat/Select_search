/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [""],
  theme: {
    extend: {
      minWidth: {
        tab: "440px",
      },
      fontSize: {
        "table-item": ["16px", "40px"],
      },
      colors: {
        "nav-color": "#F6F6F6",
        "nav-item-color": "#5570F1",
        "join-color": "#396AFF",
        detail: "5D5656",
      },
      borderColor: {
        tab: "#3045E6",
      },
      borderRadius: {
        "search-field": "36px",
      },
      backgroundImage: {
        "home-background": "url('./assets/img/home_background.jpg')",
      },
    },
  },
  plugins: [],
};
