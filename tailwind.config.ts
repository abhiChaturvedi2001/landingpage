import type { Config } from "tailwindcss";

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
      backgroundColor: {
        'custom-rgba': 'rgba(55, 133, 213, 0.4)',
      },
      boxShadow: {
        'custom-shadow': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        'custom-blur': '11.5px',
      },
      fontFamily:{
        "Oswald" : ["Oswald" , "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
