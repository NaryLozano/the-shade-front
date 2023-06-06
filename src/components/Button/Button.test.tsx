import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Button from "./Button";
import modify from "../../media/Lipstick.svg";
import Delete from "../../media/Delete.svg";

describe("Given a Button component", () => {
  describe("When it's rendered with a modify name", () => {
    test("Then it should show a button with a lipstick", () => {
      renderWithProviders(
        wrapWithRouter(
          <Button
            actionOnClick={() => ({})}
            buttonA11Y="modify"
            buttonImage={modify}
            buttonClassName="modify"
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
          <Button
            actionOnClick={() => ({})}
            buttonA11Y="delete"
            buttonImage={Delete}
            buttonClassName="delete"
          />
        )
      );
      const buttonDelete = screen.getByRole("button", { name: "delete" });

      expect(buttonDelete).toBeInTheDocument();
    });
  });
});
