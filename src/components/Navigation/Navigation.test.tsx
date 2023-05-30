import { screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { test } from "vitest";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

describe("Given a Navigation component", () => {
  describe("When its rendered", () => {
    test("Then it should show 3 navigation links, 'ADD'", () => {
      const expectedTextLinkAdd = "Add";

      const expectedTextLinkLogout = "Logout";

      renderWithProviders(wrapWithRouter(<Navigation />));

      const linkAdd = screen.getByText(expectedTextLinkAdd);

      const linkLogout = screen.getByText(expectedTextLinkLogout);

      expect(linkAdd).toBeInTheDocument();

      expect(linkLogout).toBeInTheDocument();
    });
    test("Then it should show a navigation link with 'HOME'", () => {
      const expectedTextLinkHome = "Home";

      renderWithProviders(wrapWithRouter(<Navigation />));

      const linkHome = screen.getByText(expectedTextLinkHome);

      expect(linkHome).toBeInTheDocument();
    });
    test("Then it should show a navigation Link with 'LOGOUT'", () => {
      const expectedTextLinkLogout = "Logout";

      renderWithProviders(wrapWithRouter(<Navigation />));

      const linkLogout = screen.getByText(expectedTextLinkLogout);

      expect(linkLogout).toBeInTheDocument();
    });
  });
});
