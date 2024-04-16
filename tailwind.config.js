/** @type {import('tailwindcss').Config} */

export const breakpoints = {
  mobile: 390,
  tablet: 768,
  desktop: 1440,
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,css}",
  ],

  theme: {
    screens: {
      xs: `${breakpoints.mobile}px`,
      md: `${breakpoints.tablet}px`,
      xl: `${breakpoints.desktop}px`,
    },

    extend: {
      colors: {
        black: "#101828",
        white: "#FFFFFF",
        dark: "#475467",
        accent: "#E44848",
        "accent-hovered": "#D84343",
        yellow: "#FFC531",
        grey: "#F2F4F7",
        input: "#F7F7F7",
      },

      textColor: {},

      backgroundColor: {},

      borderColor: {},

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
