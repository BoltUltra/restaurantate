/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        garamond: ["Cormorant Garamond", "sans-serif"],
      },
      colors: {
        primary: "#E1B168",
        background: "#292E36",
        accent: "#FFF8F5",
        paragraph: "#555555",
        turquoise: "#0ecfe5",
      },
    },
  },
  plugins: [],
};
