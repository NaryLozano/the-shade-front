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
    };

    fonts: {
      primary: string;
    };

    fontSizes: {
      medium: string;
    };

    spacing: {
      medium: string;
    };
  }
}

export default DefaultTheme;
