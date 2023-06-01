import { screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { test } from "vitest";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import paths from "../../routers/paths/paths";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Given a Navigation component", () => {
  describe("When its rendered", () => {
    test("Then it should show a navigation link with  'ADD'", () => {
      const expectedTextLinkAdd = "Add";

      renderWithProviders(wrapWithRouter(<Navigation />));

      const linkAdd = screen.getByRole("link", { name: expectedTextLinkAdd });

      expect(linkAdd).toBeInTheDocument();
    });

    test("Then it should show a navigation link with 'HOME'", () => {
      const expectedTextLinkHome = "Home";

      renderWithProviders(wrapWithRouter(<Navigation />));

      const linkHome = screen.getByRole("link", { name: expectedTextLinkHome });

      expect(linkHome).toBeInTheDocument();
    });

    test("Then it should show a navigation Link with 'LOGOUT'", () => {
      const expectedTextLinkLogout = "Logout";

      renderWithProviders(wrapWithRouter(<Navigation />));

      const linkLogout = screen.getByRole("button", {
        name: expectedTextLinkLogout,
      });

      expect(linkLogout).toBeInTheDocument();
    });
  });
});

describe("Given a handlingLogout function ", () => {
  describe("When its called by an user click", () => {
    test("Then it should navigate to the login page", async () => {
      const routes: RouteObject[] = [
        { path: paths.root, element: <Navigation /> },
      ];
      const routerLogin = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={routerLogin} />);

      const logoutButton = screen.getByRole("button", { name: "Logout" });

      await userEvent.click(logoutButton);

      expect(routerLogin.state.location.pathname).toBe(paths.root);
    });
  });
});
