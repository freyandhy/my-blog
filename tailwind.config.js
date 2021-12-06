module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      "bg-green-300",
      "bg-blue-300",
      "bg-yellow-300",
      "bg-red-300",
      "hover:bg-green-600",
      "hover:bg-blue-600",
      "hover:bg-yellow-600",
      "hover:bg-red-600",
    ],
  },
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
      borderWidth: ["last"],
      fontWeight: ["hover"],
    },
  },
  plugins: [],
};
