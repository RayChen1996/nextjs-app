import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans-tc)"],
        mono: ["var(--font-noto-sans-mono)"],
        serif: ["var(--font-noto-serif-tc)"],
      },
      colors: {
        primary: {
          50: "#FFF9F0",
          100: "#FDEDD7",
          200: "#F3DDBD",
          300: "#E9C99B",
          400: "#DEB880",
          500: "#D7AC6C",
          600: "#CB9950",
          700: "#BC883B",
          800: "#A67023",
          900: "#89550B",
          dark: "#421603",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#145571",

          "primary-content": "#ffffff",
        },
      },
    ],
  },
};
export default config;
