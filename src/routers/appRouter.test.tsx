import { RouterProvider } from "react-router-dom";
import appRouter from "./appRouter";
import { renderWithProviders } from "../utils/testUtils";
import { screen } from "@testing-library/react";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show The Shade of it All logotype with the alt text 'The Shade of it all with drawing of Sasha Velour'", () => {
      const altText = "The Shade of it all with drawing of Sasha Velour";

      renderWithProviders(<RouterProvider router={appRouter} />);

      const logotype = screen.getByAltText(altText);

      expect(logotype).toBeInTheDocument();
    });
  });
});
