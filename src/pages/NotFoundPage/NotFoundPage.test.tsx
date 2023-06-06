import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import { renderWithProviders } from "../../utils/testUtils";
import { screen } from "@testing-library/react";

describe("Given a NotFoundPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 404 image", async () => {
      const alternativeText = "error 404";

      const routes: RouteObject[] = [{ path: "/*", element: <NotFoundPage /> }];

      const notFoundPage = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={notFoundPage} />);

      const image404 = await screen.getByRole("img", { name: alternativeText });

      expect(image404).toHaveAccessibleName(alternativeText);
    });
  });
});
