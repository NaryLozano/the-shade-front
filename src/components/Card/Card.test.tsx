import { screen } from "@testing-library/react";
import { queenMock } from "../../mocks/queensMocks";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Card from "./Card";

describe("Given a Card component", () => {
  describe("When its rendered", () => {
    test("Then it should show the Name of the DragQueen", () => {
      const queen = queenMock;
      renderWithProviders(wrapWithRouter(<Card queen={queen[0]} />));

      const image = screen.getByRole("img", { name: queen[0].name });

      expect(image).toBeInTheDocument();
    });
    test("Then it should show the Name of the Drag Queen", () => {
      const queen = queenMock;
      renderWithProviders(wrapWithRouter(<Card queen={queen[0]} />));

      const nameDrag = screen.getByRole("heading", {
        level: 2,
        name: queen[0].name,
      });

      expect(nameDrag).toBeInTheDocument();
    });
  });
});
