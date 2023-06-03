import { screen } from "@testing-library/react";
import { queenMock } from "../../mocks/queensMocks";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Card from "./Card";
import { queenMock2 } from "../../mocks/queensMocks";

describe("Given a Card component", () => {
  describe("When its rendered", () => {
    test("Then it should show the Name of the DragQueen", () => {
      const queen = queenMock;
      renderWithProviders(wrapWithRouter(<Card queen={queen} />));

      const image = screen.getByRole("img", { name: queen.name });

      expect(image).toBeInTheDocument();
    });
    test("Then it should show the Name of the Drag Queen", () => {
      const queen = queenMock2;
      renderWithProviders(wrapWithRouter(<Card queen={queen} />));
      screen.debug();
      const nameDrag = screen.getByRole("heading", {
        level: 2,
        name: queen.name,
      });

      expect(nameDrag).toBeInTheDocument();
    });
  });
});
