/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      "neutral-50": "#F9F9F9",
      "neutral-100": "#F4F4F4",
      "neutral-200": "#EAEAEA",
      "neutral-300": "#D3D3D3",
      "neutral-400": "#A2A2A2",
      "neutral-500": "#737373",
      "neutral-600": "#525252",
      "neutral-700": "#404040",
      "neutral-800": "#262626",
      "neutral-900": "#171717",
      "neutral-950": "#0A0A0A",
      "neutral-1000": "#000000",
      "primary-100": "#1D9BF0",
      "primary-200": "#1871CA",
      "primary-300": "#1E5D87",
      "primary-400": "#75beef33",
      "fill-100": "#16181C",
      "fill-200": "#212327",
      stroke: "#546A7A",
      success: "#00BE74",
      error: "#8B141A",
    },
    fontSize: {
      xxxs: "0.625rem",
      xxs: "0.75rem",
      xs: "0.8125rem",
      sm: "0.875rem",
      "semi-base": "0.9375rem",
      base: "1rem",
      "semi-lg": "1.0625rem",
      lg: "1.125rem",
      "semi-xl": "1.1875rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.625rem",
      "4xl": "1.9375rem",
      "5xl": "3rem",
    },
    extend: {},
  },
  plugins: [],
};
