import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import ListPage from "./ListPage";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";

describe("Given a ListPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading ", () => {
      const expectedTitle = "Drag Queens";

      renderWithProviders(wrapWithRouter(<ListPage />));

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
  describe("When its rendered and cant get the queens", () => {
    test("Then it should Show a feedback error", async () => {
      const expectedText = "oops!";
      const routes = [
        {
          path: "/",
          element: (
            <ThemeProvider theme={theme}>
              <ListPage />
            </ThemeProvider>
          ),
        },
      ];

      const routerList = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={routerList} />, {
        ui: { isError: true },
      });

      const modalError = await waitFor(() =>
        screen.getByRole("heading", { level: 2, name: expectedText })
      );

      expect(modalError).toBeInTheDocument();
    });
  });
});
