import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Modal from "./Modal";
import modalData from "../../data/modalData";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import ListPage from "../../pages/ListPage/ListPage";

describe("Given a Modal component", () => {
  describe("When it's rendered with an error message", () => {
    test("Then it should show the title of error 'OOPS!'", () => {
      const expectedTitle = "oops!";

      renderWithProviders(
        wrapWithRouter(
          <Modal
            className={modalData.className.error}
            modaltype={modalData.modaltype.error}
            text={modalData.messages.failed}
          />
        )
      );

      const errorTitle = screen.getByRole("heading", {
        level: 2,
        name: "oops!",
      });

      expect(errorTitle).toHaveAccessibleName(expectedTitle);
    });
  });

  describe("When its rendered and receives a user click on the button", () => {
    test("Then it shouldn't show the modal", async () => {
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

      const modal = createMemoryRouter(routes);
      renderWithProviders(<RouterProvider router={modal} />, {
        ui: { isSuccess: true },
      });

      const backButton = screen.getByRole("button", { name: "back" });
      const title = screen.getByRole("heading", { level: 2, name: "oops!" });

      await userEvent.click(backButton);

      expect(title).not.toBeInTheDocument();
    });
  });
});
