import { screen } from "@testing-library/react";
import { test } from "vitest";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Login from "./Login";

describe("Given a Login component", () => {
  describe("When its rendered", () => {
    test("Then it should show an input field with and accesible name'username'", () => {
      const expectedAriaLabelText = "username";

      renderWithProviders(wrapWithRouter(<Login />));

      const input = screen.getByRole("textbox", {
        name: expectedAriaLabelText,
      });

      expect(input).toBeInTheDocument();
    });

    test("Then it should show an input field with and accesible name'username'", () => {
      const expectedPlaceHolderText = "Password";

      renderWithProviders(wrapWithRouter(<Login />));

      const input = screen.getByPlaceholderText(expectedPlaceHolderText);

      expect(input).toBeInTheDocument();
    });
  });
});
