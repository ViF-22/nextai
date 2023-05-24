/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-one":
          "linear-gradient(to bottom, black, rgba(0, 0, 0, 0.59), black), url('../public/bg1.png')",
        "bg-two":
          "linear-gradient(to bottom, black, rgba(0, 0, 0, 0.49), black), url('../public/bg2.png')",
        "bg-three":
          "linear-gradient(to bottom, black, rgba(0, 0, 0, 0.59), black), url('../public/bg3.png')",
        "bg-four":
          "linear-gradient(to bottom, black, rgba(0, 0, 0, 0.49), black), url('../public/bg4.png')",
      },
    },
  },
  plugins: [],
};
