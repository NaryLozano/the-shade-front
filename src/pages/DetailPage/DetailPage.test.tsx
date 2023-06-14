import { vi } from "vitest";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import DetailPage from "./DetailPage";
import { store } from "../../store";
import { screen } from "@testing-library/react";

window.scrollTo = vi.fn().mockImplementation(() => ({}));

describe("Given a DetailsPage ", () => {
  describe("When it's rendered with a queen id", () => {
    test("Then it should show a title with the name of the queen", () => {
      renderWithProviders(wrapWithRouter(<DetailPage />));

      const titleQueen = store.getState().queens.queenById?.name;

      const titleWithName = screen.getByRole("heading", {
        name: titleQueen,
      });

      expect(titleWithName).toBeInTheDocument();
    });
  });
});
