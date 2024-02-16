import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        primary: "var(--primary)" /* #4f2816 */,
        secondary: "var(--secondary)" /* #c28840 */,
        
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        // 'desktop': '1280px',
        // => @media (max-width: 1535px) { ... }
        // 'xl-desktop': { max: '1536px' },
        "lg-desktop": { max: "1535px" },
        "md-desktop": { max: "1279px" },
        "sm-desktop": { max: "1024px" },
        "xs-desktop": { max: "992px" },
        tablet: { max: "768px" },
        "lg-mob": { max: "600px" },
        "semiLg-mob": { max: "500px" },
        "md-mob": { max: "450px" },
        "sm-mob": { max: "320px" },
      },
    },
  },
  plugins: [],
};
export default config;
