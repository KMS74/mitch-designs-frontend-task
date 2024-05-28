import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#edefeb",
          "100": "#e9ffc5",
          "200": "#d3ff92",
          "300": "#b5ff53",
          "400": "#96fc1f",
          "500": "#77e200",
          "600": "#59b500",
          "700": "#448902",
          "800": "#386c08",
          "900": "#315b0c",
          "950": "#163300",
        },

        secondary: {
          "50": "#fefbec",
          "100": "#faf4cb",
          "200": "#f5e792",
          "300": "#efd55a",
          "400": "#edc843",
          "500": "#e4a61c",
          "600": "#ca8115",
          "700": "#a85e15",
          "800": "#884918",
          "900": "#703c17",
          "950": "#401e08",
        },

        tertiary: {
          "50": "#f6f6f5",
          "100": "#e7e7e6",
          "200": "#d1d1d0",
          "300": "#b0b0b0",
          "400": "#868685",
          "500": "#6d6d6d",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#454545",
          "900": "#3d3d3c",
          "950": "#262626",
        },
      },
      borderRadius: {
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
