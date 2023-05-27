/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/tw-elements/dist/js/**/*.js",
   ],
   theme: {
      extend: {
         colors: {
            EerieBlack: "#181918",
            Jet: "#28292A",
            DimGray: "#A4A4B5",
            Platinum: "#E9EAE9",
            JungleGreenOne: "#02AA85",
            JungleGreenTwo: "#02A07D",
         },
         boxShadow: {
            "new-md": "2px 2px 6px -1px rgb(0 0 0 / 0.1), -2px -2px 6px -1px rgb(0 0 0 / 0.1)",
         },
      },
   },
   plugins: [require("tw-elements/dist/plugin.cjs")],
};
