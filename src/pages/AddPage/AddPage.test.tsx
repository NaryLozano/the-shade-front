import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import AddPage from "./AddPage";

describe("Given an AddPAge page", () => {
  describe("When its rendered", () => {
    test("Then it should show a title with 'ADD QUEEN'", () => {
      const expectedTitle = "add queen";
      renderWithProviders(wrapWithRouter(<AddPage />));
      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
