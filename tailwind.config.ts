import { color } from "framer-motion";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'textColor': '#e8f7f9',
      'bgColor': '#081b1c',
      'primary': '#8edce0',
      'secondary': '#582689',
      'accent': '#be41cb',
      'decent':'#0F2526',
     },

    extend: {
      fontFamily: {
        gtRG: ["var(--font-gtRG)"],
        gtTrial: ["var(--font-gtTrial)"],
      },
    },
  },
  plugins: [],
};
export default config;
