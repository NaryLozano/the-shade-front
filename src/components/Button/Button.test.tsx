import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Button from "./Button";
import buttonData from "../../data/button/buttonData";

const { buttonPicture } = buttonData;

describe("Given a Button component", () => {
  describe("When it's rendered with a modify name", () => {
    test("Then it should show a button with a lipstick", () => {
      renderWithProviders(
        wrapWithRouter(
          <Button
            actionOnClick={() => ({})}
            buttonA11Y="modify"
            buttonImage={{
              width: buttonPicture?.modify.width,
              height: buttonPicture?.modify.height,
              img: buttonPicture?.modify.img,
            }}
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
            buttonImage={{
              width: buttonPicture?.delete.width,
              height: buttonPicture?.delete.height,
              img: buttonPicture?.delete.deleteImg,
            }}
            buttonClassName="delete"
          />
        )
      );
      const buttonDelete = screen.getByRole("button", { name: "delete" });

      expect(buttonDelete).toBeInTheDocument();
    });
  });
});
