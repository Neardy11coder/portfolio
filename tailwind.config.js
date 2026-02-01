/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      /* =====================
         Colors
         ===================== */
      colors: {
        primary: "#030412",
        midnight: "#06091f",
        navy: "#161a31",
        indigo: "#1f1e39",
        storm: "#282b4b",
        royal: "#5c33cc",
        lavender: "#7a57db",
      },
    },
  },
  plugins: [],
};
