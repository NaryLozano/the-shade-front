import { vi } from "vitest";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import DetailPage from "./DetailPage";
import { store } from "../../store";
import { screen } from "@testing-library/react";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import paths from "../../routers/paths/paths";
import Layout from "../../components/Layout/Layout";
import userEvent from "@testing-library/user-event";

window.scrollTo = vi.fn().mockImplementation(() => ({}));

describe("Given a DetailsPage ", () => {
  describe("When it's rendered with a queen id", () => {
    test("Then it should show a title with the name of the queen", () => {
      renderWithProviders(wrapWithRouter(<DetailPage />));

      const titleQueen = store.getState().queens.queenById?.name;

      const titleWithName = screen.getByRole("heading", {
        name: titleQueen,
      });

      expect(titleWithName).toBeInTheDocument();
    });
  });
  describe("When it receives a click on the delete button", () => {
    test("Then it should delete the selected queen and navigate to the list page", async () => {
      const routes: RouteObject[] = [
        { path: "/queens/:idQueen", element: <DetailPage /> },
        { path: "/home", element: <Layout /> },
      ];

      const idQueen = store.getState().queens.queenById?.id;

      const detailRouter = createMemoryRouter(routes, {
        initialEntries: ["/", `/queens/${idQueen}`],
      });

      renderWithProviders(<RouterProvider router={detailRouter} />);

      const deleteButton = screen.getByRole("button", { name: "delete" });

      await userEvent.click(deleteButton);

      expect(detailRouter.state.location.pathname).toBe(paths.home);
    });
  });
});
