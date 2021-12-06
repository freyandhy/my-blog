module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "768px",
      },
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        lato: ["Lato"],
        proza: ["Proza Libre"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
      borderWidth: ["last"],
      fontWeight: ["hover"],
    },
  },
  plugins: [],
};
