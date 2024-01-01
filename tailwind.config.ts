import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xl': {'min': '1536px'},
      'xl': {'min': '1280px'},
      'lg': {'min': '1024x'},
      'md': {'min': '768px'},
      'sm': {'min': '640px'},

      '2xl-max': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl-max': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg-max': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md-max': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm-max': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        iranSans: "var(--font-iranSans)",
        iranSansBold: "var(--font-iranSansBold)",
        roboto: "var(--font-roboto)",
      },
      boxShadow: {
        yellow: "0px 12px 10px 0px rgba(255, 204, 104, 0.10)",
        green: " 0px 6px 16px rgba(12, 172, 103, 0.10)",
        modalShadow: "0px 0px 5px rgba(0, 0, 0, 0.10)",
        whiteCustom: '0px 32px 52px 0px rgba(0, 0, 0, 0.02)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
