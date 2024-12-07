/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      medium: "23.5rem",
      large: "90rem",
    },
    fontFamily: {
      josefin: ["Josefin Sans", "sans-serif"],
    },
    extend: {
      colors: {
        lTveryLightGray: "hsl(0, 0%, 98%)",
        lTVeryLightGrayishBlue: "hsl(236, 33%, 92%)",
        lTLightGrayishBlue: "hsl(233, 11%, 84%)",
        lTDarkGrayishBlue: "hsl(236, 9%, 61%)",
        lTVeryDarkGrayishBlue: "hsl(235, 19%, 35%)",
        brightBlue: "#3A7CFD",
        bgGradientBlue: "hsl(192, 100%, 67%)",
        bgGradientPink: "hsl(280, 87%, 65%)",
        dm171823: "#171823",
        dm25273D: "#25273D",
        dm393A4B: "#393A4B",
        dm767992: "#767992",
        dmC8CBE7: "#C8CBE7",
        dm979797: "#979797",
        dm5B5E7E: "#5B5E7E",
      },
    },
  },
  darkMode: "class",
};
