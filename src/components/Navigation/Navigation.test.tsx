import { screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { test } from "vitest";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import userEvent from "@testing-library/user-event";

import { userMock } from "../../mocks/mocks";
import { UserStateStructure } from "../../store/user/types";
import Layout from "../Layout/Layout";

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
      const userData: UserStateStructure = userMock;
      renderWithProviders(wrapWithRouter(<Navigation />), { user: userData });

      const linkLogout = screen.getByRole("button", {
        name: expectedTextLinkLogout,
      });

      expect(linkLogout).toBeInTheDocument();
    });
  });

  describe("When its rendered and receives a click on logout ", () => {
    test("Then it shouldn't show the logout button", async () => {
      const userData: UserStateStructure = userMock;
      renderWithProviders(wrapWithRouter(<Layout />), { user: userData });

      const logoutButton = screen.getByRole("button", { name: "Logout" });

      await userEvent.click(logoutButton);

      expect(logoutButton).not.toBeInTheDocument();
    });
  });
});
