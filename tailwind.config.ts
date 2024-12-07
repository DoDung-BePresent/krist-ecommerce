import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary500: "#131118",
      primary400: "#575360",
      primary300: "#77757C",
      primary200: "#8D8A94",
      primary100: "#A29FA9",
      primary20: "#D0CFD1",
      primary10: "#E7E7E8",
      primary50: "#F3F3F3",
      activeShadow: "0 0 0 2px rgb(162, 159, 169)",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
