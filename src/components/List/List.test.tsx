import { queensMock } from "../../mocks/queensMocks";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import List from "./List";
import { screen } from "@testing-library/react";

describe("Given an List component", () => {
  describe("When it's rendered with a list of 2 queens", () => {
    test("Then it should show the name of the queen in a title", () => {
      const queensList = queensMock;
      const queenTitle = queensMock[0].name;
      renderWithProviders(wrapWithRouter(<List />), {
        queens: {
          queens: queensList,
        },
      });

      const heading = screen.getByRole("heading", { name: queenTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
