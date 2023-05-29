import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store";
import GlobalStyle from "../../styles/Globalstyle";
import theme from "../../styles/theme/theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";

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
describe("Given a LoginPage page", () => {
  describe("When it's rendered ", () => {
    test("Then it should show the logotype of The shade of it All", () => {
      render(<LoginPage />, { wrapper: WrapperWithProviders });

      const logotype = screen.getByRole("img", {
        name: "Logotype of The Shade of it All",
      });

      expect(logotype).toBeInTheDocument();
    });
  });
});
