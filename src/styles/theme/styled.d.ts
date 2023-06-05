import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    colors: {
      light: string;
      lightSecondary: string;
      dark: string;
      error: string;
      okModal: string;
      backgroundCard: string;
      primary: string;
      dissabled: string;
      darkPrimary: string;
      borderPicture: string;
      shadow: string;
      mediumLight: string;
      darkOpacity: string;
      darkSecondary: string;
    };

    fonts: {
      primary: string;
    };

    fontSizes: {
      small: string;
      normal: string;
      medium: string;
      big: string;
    };

    spacing: {
      medium: string;
    };
  }
}

export default DefaultTheme;
