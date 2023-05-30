import { screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

describe("Given a LoginPage page", () => {
  describe("When it's rendered ", () => {
    test("Then it should show the logotype of The shade of it All", () => {
      renderWithProviders(wrapWithRouter(<LoginPage />));
      const logotype = screen.getByRole("img", {
        name: "Logotype of The Shade of it All",
      });

      expect(logotype).toBeInTheDocument();
    });
  });
});
