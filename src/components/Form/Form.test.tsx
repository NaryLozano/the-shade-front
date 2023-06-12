import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Form from "./Form";
import { getQueenMockData } from "../../mocks/factory/queenFactory/queenFactory";
import userEvent from "@testing-library/user-event";

describe("Given a Form component", () => {
  describe("When its rendered", () => {
    test("Then it should show an input field with an accesible name 'name'", () => {
      const expectedAccesibleName = "name";

      renderWithProviders(wrapWithRouter(<Form onSubmit={() => ({})} />));

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

      renderWithProviders(wrapWithRouter(<Form onSubmit={() => ({})} />));

      const inputArea = screen.getByRole("textbox", {
        name: expectedAccessibleName,
      });

      const queen = getQueenMockData(1);

      await userEvent.type(inputArea, queen[0].hometown as string);

      expect(inputArea).toHaveValue(queen[0].hometown);
    });
  });
});
