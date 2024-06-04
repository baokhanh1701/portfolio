import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");
// import color from "tailwindcss/color";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    colors: {
      ...colors,
      primary: colors.blue,
      secondary: colors.green,
      tertiary: colors.indigo,
      quaternary: colors.purple,
      quinary: colors.yellow,
      senary: colors.red,
    }
    },
  },
  plugins: [],
};
export default config;
