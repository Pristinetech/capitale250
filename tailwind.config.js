/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".diagonal-tr": {
          "clip-path": "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
