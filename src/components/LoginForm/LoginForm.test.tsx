import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, vi } from "vitest";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import LoginForm from "./LoginForm";
import { userMockCredentials } from "../../mocks/mocks";
import { getMockUserCredentials } from "../../mocks/factory/userFactory/userFactory";
import { UserCredentials } from "../../store/user/types";

const expectedAriaLabelText = "username";
const expectedPlaceHolderText = "password";

describe("Given a LoginForm component", () => {
  describe("When its rendered", () => {
    test("Then it should show an input field with and accesible name'username'", () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm loginSubmit={() => ({})} />)
      );

      const input = screen.getByRole("textbox", {
        name: expectedAriaLabelText,
      });

      expect(input).toBeInTheDocument();
    });

    test("Then it should show an input field with the place holder 'Password'", () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm loginSubmit={() => ({})} />)
      );

      const input = screen.getByPlaceholderText(expectedPlaceHolderText);

      expect(input).toBeInTheDocument();
    });
  });
  describe("When its receives an user submit event with valid inputs", () => {
    test("Then it should have call the HandleSubmit function", async () => {
      const mockOnSubmit = vi.fn();
      renderWithProviders(
        wrapWithRouter(<LoginForm loginSubmit={mockOnSubmit} />)
      );
      const mockUserCredentials = userMockCredentials;
      const inputArea = screen.getByRole("textbox", {
        name: expectedAriaLabelText,
      });
      const input = screen.getByPlaceholderText(expectedPlaceHolderText);
      const loginButton = screen.getByRole("button", { name: "login" });

      await userEvent.type(inputArea, mockUserCredentials.username);
      await userEvent.type(input, mockUserCredentials.password);
      await userEvent.click(loginButton);

      expect(mockOnSubmit).toHaveBeenCalledWith(mockUserCredentials);
    });
  });
});

describe("Given an onChange function", () => {
  describe("When it receives user input", () => {
    test("Then it should show the user input", async () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm loginSubmit={() => ({})} />)
      );

      const inputArea = screen.getByRole("textbox", {
        name: expectedAriaLabelText,
      });

      const user: UserCredentials = getMockUserCredentials();

      await userEvent.type(inputArea, user.username);

      expect(inputArea).toHaveValue(user.username);
    });
  });
});
