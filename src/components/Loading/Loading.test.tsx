import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a loader ", () => {
      renderWithProviders(wrapWithRouter(<Loading />));
      const loaderId = "loader";

      const loader = screen.getAllByTestId(loaderId);

      expect(loader).toBeTruthy();
    });
  });
});
