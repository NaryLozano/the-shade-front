import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { store } from "../../store";
import GlobalStyle from "../../styles/Globalstyle";
import theme from "../../styles/theme/theme";

const WrapperWithProviders = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then in should show a logotype of The shade of it all with its alternative text", () => {
      const altTextLogotype =
        "The Shade of it all with drawing of Sasha Velour";

      render(<Header />, { wrapper: WrapperWithProviders });

      const logotype = screen.getByAltText(altTextLogotype);

      expect(logotype).toBeInTheDocument();
    });
  });
});
