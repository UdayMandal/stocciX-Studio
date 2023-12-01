module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          500: "#9c9c9c",
          900: "#033121",
          "900_02": "#121212",
          "900_01": "#262626",
        },
        teal: { A400_89: "#00ffa789", A400: "#00ffa7" },
        black: { 900: "#000000", "900_2b": "#0000002b", "900_96": "#00000096" },
        white: { A700_66: "#ffffff66", A700: "#ffffff" },
        purple: { A700: "#bc00ff" },
        cyan: { A400_f2: "#00e0fff2" },
      },
      fontFamily: {
        headlinea: "HeadLineA",
        poppins: "Poppins",
        poppinssemibold: "Poppins SemiBold",
        roboto: "Roboto",
      },
      boxShadow: {
        bs: "0px 0px  32px 0px #000000",
        bs1: "0px 4.58px  4px 0px #0000002b",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
