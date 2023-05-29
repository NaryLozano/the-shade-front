import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { test } from "vitest";
import { ThemeProvider } from "styled-components";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../../store";
import GlobalStyle from "../../styles/Globalstyle";
import theme from "../../styles/theme/theme";
import { BrowserRouter } from "react-router-dom";

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

describe("Given a Navigation component", () => {
  describe("When its rendered", () => {
    test("Then it should show 3 navigation links, 'ADD', 'HOME', 'LOGOUT'", () => {
      const expectedTextLinkAdd = "Add";
      const expectedTextLinkHome = "Home";
      const expectedTextLinkLogout = "Logout";

      render(<Navigation />, { wrapper: WrapperWithProviders });

      const linkAdd = screen.getByText(expectedTextLinkAdd);
      const linkHome = screen.getByText(expectedTextLinkHome);
      const linkLogout = screen.getByText(expectedTextLinkLogout);

      expect(linkAdd).toBeInTheDocument();
      expect(linkHome).toBeInTheDocument();
      expect(linkLogout).toBeInTheDocument();
    });
  });
});
