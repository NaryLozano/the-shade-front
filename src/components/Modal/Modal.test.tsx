import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Modal from "./Modal";
import modalData from "./modalData";

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
        level: 1,
        name: "oops!",
      });

      expect(errorTitle).toHaveAccessibleName(expectedTitle);
    });
  });
});
