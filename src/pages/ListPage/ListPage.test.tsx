import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import ListPage from "./ListPage";

describe("Given a ListPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading ", () => {
      const expectedTitle = "Drag Queens";

      renderWithProviders(wrapWithRouter(<ListPage />));

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
