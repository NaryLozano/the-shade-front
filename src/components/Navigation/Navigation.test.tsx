import { screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { test } from "vitest";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

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
