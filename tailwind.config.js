/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#1a56db",
        secondary: "#ff5757",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      boxShadow: {
        box: "0 20px 48px 0 hsla(212,9%,63%,.25)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
