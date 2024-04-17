/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // content: [""],
  theme: {
    extend: {
      width: {
        "gpt-field": "calc(100vw - 280px)",
      },
      minWidth: {
        tab: "440px",
      },
      fontSize: {
        "table-item": ["16px", "40px"],
        "file-data": ["10px", "40px"],
      },
      colors: {
        nav: "#F6F6F6",
        "nav-item": "#5570F1",
        join: "#396AFF",
        detail: "5D5656",
        send: "#5661F6",
        "knowledge-name": "#3045E6",
        "knowledge-data": "#8A8D8E",
        filter: "#F2F2F2",
      },
      boxShadow: {
        "gpt-search": "0px 1px 2px 1px",
      },
      borderColor: {
        tab: "#3045E6",
      },
      borderRadius: {
        search: "36px",
        send: "60px",
      },
      backgroundImage: {
        "home-background": "url('./assets/img/home_background.jpg')",
      },
    },
  },
  plugins: [],
};
