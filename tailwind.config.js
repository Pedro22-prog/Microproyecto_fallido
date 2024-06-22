/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {margin: {
      320: "320px",
    },
    width: {
      150: "150px",
      190: "190px",
      225: "225px",
      275: "275px",
      300: "300px",
      340: "340px",
      350: "350px",
      375: "375px",
      460: "460px",
      656: "656px",
      880: "880px",
      508: "508px",
    },
    height: {
      80: "80px",
      150: "150px",
      225: "225px",
      300: "300px",
      340: "340px",
      370: "370px",
      420: "420px",
      510: "510px",
      600: "600px",
      650: "650px",
      685: "685px",
      800: "800px",
      "90vh": "90vh",
    },
    minWidth: {
      210: "210px",
      350: "350px",
      620: "620px",
    },
    colors: {
      textColor: "#101010",
      // activeText: "#D6230A",
      gradientBg: "rgba(116, 249, 105,0.4)",
      whiteAlpha: "rgba(255,255,255,0.2)",
      cardColor: "#E6F6FF",
      cartBg: "#282a2c",
      cartItem: "#2e3033",
      cartTotal: "#343739",
      cartNumBg: "#075794",
      cardOverlay:'rgba(256,256,256,0.4)',
      lighttextGray:"#9ca0ab",
      rowBg:"#EEF6FA",
      card:" #F9F9F9"
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },},
  plugins: [require("tailwind-scrollbar")],
}

