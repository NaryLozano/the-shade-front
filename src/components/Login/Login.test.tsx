import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Login from "./Login";

const expectedAriaLabelText = "username";

describe("Given a Login component", () => {
  describe("When its rendered", () => {
    test("Then it should show an input field with and accesible name'username'", () => {
      renderWithProviders(wrapWithRouter(<Login />));

      const input = screen.getByRole("textbox", {
        name: expectedAriaLabelText,
      });

      expect(input).toBeInTheDocument();
    });

    test("Then it should show an input field with the place holder 'Password'", () => {
      const expectedPlaceHolderText = "Password";

      renderWithProviders(wrapWithRouter(<Login />));

      const input = screen.getByPlaceholderText(expectedPlaceHolderText);

      expect(input).toBeInTheDocument();
    });
  });
});

describe("Given an onChange function", () => {
  describe("When it receives user input", () => {
    test("Then it should show the user input", async () => {
      renderWithProviders(wrapWithRouter(<Login />));

      const inputArea = screen.getByRole("textbox", {
        name: expectedAriaLabelText,
      });

      const username = "Marcsias";

      await userEvent.type(inputArea, username);

      expect(inputArea).toHaveValue(username);
    });
  });
});
