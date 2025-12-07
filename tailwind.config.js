// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       colors: {
        primary: "#24B2CE",    
        secondary: "#0E294A",
        hover:"#4dd1eb"
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
