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
        'barber3': 'url("/hinh7.jpeg")',
        'barber4': 'url("/hinh8.jpeg")', 
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
        },
        'combo-color' : 'rgba(180,127,65,0.4)',
        'combo-hovered' : 'rgba(180,127,65,1)',
        'services-color' : 'rgb(245,242,234)',
        'contact-color' : 'rgb(235,232,222)',
        
      },

    },
  },
  plugins: [],
};
export default config;
