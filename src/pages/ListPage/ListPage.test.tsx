import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import ListPage from "./ListPage";
import { season1QueensMock } from "../../mocks/queensMocks";
import userEvent from "@testing-library/user-event";

describe("Given a ListPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading ", () => {
      const expectedTitle = "Drag Queens";

      renderWithProviders(wrapWithRouter(<ListPage />));

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
  describe("When its rendered and the filter gets clicked with the option season 1", () => {
    test("Then it should show a list of queens from the 1st season", async () => {
      renderWithProviders(wrapWithRouter(<ListPage />), {
        queens: { queens: season1QueensMock, total: season1QueensMock.length },
      });

      const select = screen.getByRole("combobox", { name: "season" });
      await userEvent.selectOptions(select, "season 1");
    });
  });
});
