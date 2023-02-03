/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#c95466",

          secondary: "#f7d09e",

          accent: "#ebfca6",

          neutral: "#2A333C",

          "base-100": "#242842",

          info: "#60A1CD",

          success: "#0C6E33",

          warning: "#D39C03",

          error: "#F4706C",
        },
      },
      {
        mytheme: {
          primary: "#6af2d7",

          secondary: "#cfff8c",

          accent: "#d1ad21",

          neutral: "#221727",

          "base-100": "#203546",

          info: "#7CBDD5",

          success: "#1C9B4D",

          warning: "#B36D05",

          error: "#EB5C71",
        },
      },
      ,
      "light",
    ],
  },
};
