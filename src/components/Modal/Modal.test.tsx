import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Layout from "../Layout/Layout";

describe("Given a Modal component", () => {
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

  const modal = createMemoryRouter(routes);

  describe("When it's rendered with an error message", () => {
    test("Then it should show the title of error 'OOPS!'", () => {
      const expectedTitle = "oops!";

      renderWithProviders(<RouterProvider router={modal} />, {
        ui: { isSuccess: false, feedback: true },
      });

      const errorTitle = screen.getByRole("heading", {
        level: 2,
        name: "oops!",
      });

      expect(errorTitle).toHaveAccessibleName(expectedTitle);
    });
  });

  describe("When its rendered and receives a user click on the button", () => {
    test("Then it shouldn't show the modal", async () => {
      renderWithProviders(<RouterProvider router={modal} />, {
        ui: { isSuccess: false, feedback: true },
      });

      const backButton = screen.getByRole("button", { name: "back" });
      const title = screen.getByRole("heading", { level: 2, name: "oops!" });

      await userEvent.click(backButton);

      expect(title).not.toBeInTheDocument();
    });
  });

  describe("When its rendered with a success message", () => {
    test("Then it should show the success Yaas! title", () => {
      renderWithProviders(<RouterProvider router={modal} />, {
        ui: { isSuccess: true, feedback: true },
      });
      const successTitle = screen.getByRole("heading", {
        level: 2,
        name: "yaas!",
      });

      expect(successTitle).toBeInTheDocument();
    });
  });
});
