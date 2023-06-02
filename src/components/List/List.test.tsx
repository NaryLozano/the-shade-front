import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import ListPage from "../../pages/ListPage/ListPage";

describe("Given a List component", () => {
  describe("When it's rendered ", () => {
    test("Then it should show a heading with the name of each queen", () => {
      renderWithProviders(wrapWithRouter(<ListPage />));

      const titleNames = screen.getAllByRole("heading", { level: 2 });

      expect(titleNames).toBeTruthy();
    });
  });
});
