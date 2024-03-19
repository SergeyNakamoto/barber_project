import { Barlow, Barlow_Condensed, Inspiration } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Barlow_Condensed: ['Barlow Condensed', 'sans-serif'],
        Inspiration: ['Inspiration', 'cursive']
      },
      backgroundImage: {
        'barber1': 'url("/hinh1.jpeg")',
        'barber2': 'url("/hinh6.jpeg")',
        'icon1': 'url("/icon1.png")',
        'icon2': 'url("/icon2.png")',
        'icon3': 'url("/icon3.png")',
        'icon4': 'url("/icon4.png")',
        'icon5': 'url("/icon5.png")',
      },
      colors: {
        'coffee': {
          50: '#E8D6D0',
          200: '#C89F94',
          400: '#A25F4B',
          600: '#744838'
        }
      },

    },
  },
  plugins: [],
};
export default config;
