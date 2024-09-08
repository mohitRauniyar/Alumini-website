const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        primary: "#F3B552",
        secondary: "#F3B552"
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

