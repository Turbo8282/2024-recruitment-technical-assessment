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
        "unilectives-color": "#1279f2",
        "line-color": "#9cade9",
        "term-color": "#ccebf6",
      },
    },
  },
  plugins: [],
};
export default config;
