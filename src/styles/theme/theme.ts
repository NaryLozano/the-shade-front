import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    light: "#fff",
    lightSecondary: "#efebe5",
    dark: "#c1121f",
    darkSecondary: "#b24195",
    darkOpacity: "#ffffffe0",
    error: "linear-gradient(180deg, #ff4040e6 0%, #ff307a97 71.88%)",
    backgroundCard: "#f5f5f5",
    mediumLight: "#dedede",
    okModal: "linear-gradient(180deg, #74d3ae 33.33%, #b4fdfda8 100%)",
    primary: "#ff5ed566",
    dissabled: "#80808029",
    darkPrimary: "#000",
    borderPicture: "0.125rem solid #ff5ed557",
    shadow: "0 0.25rem 0.25rem #00000040",
  },

  fonts: {
    primary: "Roboto Mono, monospace",
  },

  fontSizes: {
    small: "1rem",
    normal: "1.375rem",
    medium: "1.75rem",
    big: "2.18rem",
  },

  spacing: {
    medium: "2rem",
  },
};

export default theme;
