import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";
import Layout from "./Layout";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with a logotype of 'The Shade of it All'", () => {
      const expectedAltText =
        "The Shade of it all with drawing of Sasha Velour";
      const routes = [
        {
          path: "/",
          element: (
            <ThemeProvider theme={theme}>
              <Layout />
            </ThemeProvider>
          ),
        },
      ];

      const headerRouter = createMemoryRouter(routes);
      renderWithProviders(<RouterProvider router={headerRouter} />);

      const header = screen.getByRole("img", { name: expectedAltText });

      expect(header).toBeInTheDocument();
    });
  });
});
