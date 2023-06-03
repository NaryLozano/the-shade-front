import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import ButtonCircle from "./ButtonCircle";
import modify from "../../media/Lipstick.svg";
import Delete from "../../media/Delete.svg";

describe("Given a ButtonCircle component", () => {
  describe("When it's rendered with a modify name", () => {
    test("Then it should show a button with a lipstick", () => {
      renderWithProviders(
        wrapWithRouter(
          <ButtonCircle
            buttonName="modify"
            buttonType={modify}
            className="modify"
          />
        )
      );
      const buttonModify = screen.getByRole("button", { name: "modify" });

      expect(buttonModify).toBeInTheDocument();
    });
  });
  describe("When its rendered with a delete name", () => {
    test("Then it should show a button with a pink 'X'", () => {
      renderWithProviders(
        wrapWithRouter(
          <ButtonCircle
            buttonName="delete"
            buttonType={Delete}
            className="delete"
          />
        )
      );
      const buttonDelete = screen.getByRole("button", { name: "delete" });

      expect(buttonDelete).toBeInTheDocument();
    });
  });
});
