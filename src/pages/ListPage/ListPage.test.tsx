import { act, screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import ListPage from "./ListPage";
import { queensMock20, season1QueensMock } from "../../mocks/queensMocks";
import userEvent from "@testing-library/user-event";
import { server } from "../../mocks/server";
import { paginationHandlers } from "../../mocks/handlers";

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

  describe("When the user clicks on the delete button of a queen on the list", () => {
    test("Then it should'nt show the queen selected'", async () => {
      renderWithProviders(wrapWithRouter(<ListPage />), {
        queens: {
          queens: season1QueensMock,
          total: season1QueensMock.length,
        },
      });

      const deleteQueen = screen.getAllByRole("button", { name: "delete" });
      const queen = screen.getByRole("heading", {
        level: 2,
        name: season1QueensMock[0].name,
      });

      await userEvent.click(deleteQueen[0]);

      expect(queen).not.toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user clicks on the next button", () => {
    test("Then the next button should be enabled, on the other hand, the previous button should be disabled", async () => {
      server.resetHandlers(...paginationHandlers);

      renderWithProviders(wrapWithRouter(<ListPage />), {
        queens: { queens: queensMock20 },
      });
      const nextButton = screen.getByLabelText("next-button");
      const previousButton = screen.getByLabelText("previous-button");

      await userEvent.click(nextButton);
      await userEvent.click(previousButton);

      await act(async () => {
        expect(nextButton).toBeInTheDocument();
        expect(previousButton).toBeInTheDocument();
      });
    });
  });
});
