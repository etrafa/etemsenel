module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "400px",
      md: "600px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1500px",
    },
    borderRadius: {
      large: "2.4rem",
      small: "24px",
      extraSm: "20px",
      smForContact: "6px",
    },
    extend: {
      lineHeight: {
        34: "34px",
      },
      width: {
        34: "120px",
      },
      fontFamily: {
        pacifico: ["Pacifico"],
        overpass: ["Overpass"],
        bungee: ["Bungee"],
        metro: ["metro"],
        permanent: ["Permanent Marker"],
      },
      colors: {
        "main-pink-color": "#e96f92",
        "main-border-color": "#ebebeb",
        "main-header-color": "#282f3a",
        "main-yellow-color": "#ffff00",
      },
    },
  },
  plugins: [],
};
