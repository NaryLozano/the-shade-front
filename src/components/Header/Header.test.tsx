import { screen } from "@testing-library/react";
import Header from "./Header";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then in should show a logotype of The shade of it all with its alternative text", () => {
      const altTextLogotype =
        "The Shade of it all with drawing of Sasha Velour";

      renderWithProviders(wrapWithRouter(<Header />));
      const logotype = screen.getByAltText(altTextLogotype);

      expect(logotype).toBeInTheDocument();
    });
  });
});
