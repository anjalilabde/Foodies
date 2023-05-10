/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {

    extend: {
      colors: {
        gray: {
          "Dark": "#1D1D1F",
          "Light": "#828282",
        },
        green: {
          "Primary": "#06C167",
          "Light": "#F3FCF7",
        },
        white: {
          "white": "#ffffff",
        },
      },
      backgroundImage: {
        "bannerimage": "url('/images/new-banner.png')",
      },
    },
    fontFamily: {
      Inter: ["Inter, sans-serif"],
    },

    container: {
      center: true,
      padding: "1rem",
      screens: {
        DEFAULT: '1320px',
      },
    },

    plugins: [],
  }
}
