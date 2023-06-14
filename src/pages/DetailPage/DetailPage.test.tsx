import { vi } from "vitest";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import DetailPage from "./DetailPage";
import { store } from "../../store";
import { screen, waitFor } from "@testing-library/react";
import { server } from "../../mocks/server";
import { getHandlers } from "../../mocks/handlers";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { LazyDetail } from "../../routers/lazyComponents/lazyComponents";

window.scrollTo = vi.fn().mockImplementation(() => ({}));

describe("Given a DetailsPage ", () => {
  describe("When it's rendered with a queen id", () => {
    test("Then it should show a title with the name of the queen", () => {
      server.resetHandlers(...getHandlers);
      renderWithProviders(wrapWithRouter(<DetailPage />));

      const titleQueen = store.getState().queens.queenById?.name;

      const titleWithName = screen.getByRole("heading", {
        name: titleQueen,
      });

      expect(titleWithName).toBeInTheDocument();
    });
  });

  describe("When it's rendered with queen id", () => {
    test("Then it should show a title with the name of the queen", async () => {
      const routes: RouteObject[] = [
        {
          path: "/queens/:idQueen",
          element: <LazyDetail />,
        },
      ];

      const idQueen = store.getState().queens.queenById?.id;

      const router = createMemoryRouter(routes, {
        initialEntries: ["/queens", `/${idQueen}`],
      });

      renderWithProviders(<RouterProvider router={router} />);

      const titleQueen = store.getState().queens.queenById?.name;

      const titleWithName = await waitFor(() =>
        screen.getByRole("heading", { level: 2, name: titleQueen })
      );

      expect(titleWithName).toBeInTheDocument();
    });
  });
});
