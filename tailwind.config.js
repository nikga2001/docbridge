/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-photo":
          "url('/images/photo-6.jpg')",
        "two-men": "url('/images/photo-2.jpg')",
        documentation:
          "url('./images/document.jpg')",
        operate: "./images/operation.jpg",

        lado: "./images/lado-surgery.jpg",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Roboto: ["Roboto-Mono", "monospace;"],
      },
    },
  },
  plugins: [],
};
