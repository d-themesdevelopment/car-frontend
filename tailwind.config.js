/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1400px",
      "2xl": "1784px",
    },
    extend: {
      colors: {
        primary: "#000",
        secondary: "#29c5b2",
        grey: {
          100: "#666666",
          200: "#F0F0F0",
        },
      },
    },
    fontFamily: {
      openSans: ["Open Sans"],
    },
  },
  plugins: [],
};
