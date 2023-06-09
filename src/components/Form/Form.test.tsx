import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Form from "./Form";
import { getQueenMockData } from "../../mocks/factory/queenFactory/queenFactory";
import userEvent from "@testing-library/user-event";

describe("Given a Form component", () => {
  describe("When its rendered", () => {
    test("Then it should show an input field with an accesible name 'name'", () => {
      const expectedAccesibleName = "name";

      renderWithProviders(wrapWithRouter(<Form submitForm={() => ({})} />));

      const input = screen.getByRole("textbox", {
        name: expectedAccesibleName,
      });

      expect(input).toBeInTheDocument();
    });
  });
});

describe("Given an onChange function", () => {
  describe("When it receives user input", () => {
    test("Then it should show the user input", async () => {
      const expectedAccessibleName = "hometown";

      renderWithProviders(wrapWithRouter(<Form submitForm={() => ({})} />));

      const inputArea = screen.getByRole("textbox", {
        name: expectedAccessibleName,
      });

      const queen = getQueenMockData();

      await userEvent.type(inputArea, queen.hometown);

      expect(inputArea).toHaveValue(queen.hometown);
    });
  });
});
