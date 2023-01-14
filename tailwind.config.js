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

    extend: {
      borderRadius: {
        large: "2.4rem",
        small: "24px",
        extraSm: "20px",
        smForContact: "6px",
      },
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
        nerko: ["nerko"],
      },
      colors: {
        "main-pink-color": "#e96f92",
        "main-border-color": "#ebebeb",
        "main-header-color": "#282f3a",
        "main-yellow-color": "#ffff00",
      },
      keyframes: {
        textAnimationRightArrow: {
          "0%": { right: "0px" },
          "100%": { right: "90px" },
        },
        textAnimationLeftArrow: {
          "0%": { left: "0px" },
          "100%": { left: "90px" },
        },
        ballonDarken: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0.2 },
        },
        navAnimation: {
          "0%": { left: "-200px" },
          "100%": { left: 0 },
        },
        shakeAnimation: {
          "0%": { left: "-8px" },
          "5%": { left: 0 },
          "10%": { left: "-8px" },
          "15%": { left: 0 },
          "100%": { left: 0 },
        },
      },
      animation: {
        textAnimationRightArrow: "textAnimationRightArrow 0.5s forwards",
        textAnimationLeftArrow: "textAnimationLeftArrow 0.5s forwards",
        ballonDarken: "ballonDarken 0.5s forwards",
        navAnimation: "navAnimation 0.5s forwards",
        shakeAnimation: "shakeAnimation 3s infinite",
      },
    },
  },
  plugins: [],
};
