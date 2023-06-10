import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginPage from "./LoginPage";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import paths from "../../routers/paths/paths";
import { expect } from "vitest";
import { userMockCredentials } from "../../mocks/mocks";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import Layout from "../../components/Layout/Layout";

const expectedAriaLabelText = "username";
const expectedPlaceHolderText = "password";
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

  describe("When it is rendered and receives a valid user credentials", () => {
    test("Then it should redirect to home page", async () => {
      const routes: RouteObject[] = [
        { path: paths.root, element: <LoginPage /> },
        { path: paths.home, element: <Layout /> },
      ];

      const routerLogin = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={routerLogin} />);

      const inputUsername = screen.getByRole("textbox", {
        name: expectedAriaLabelText,
      });
      const inputPassword = screen.getByPlaceholderText(
        expectedPlaceHolderText
      );
      const loginButton = screen.getByRole("button", { name: "login" });
      const username = userMockCredentials.username;
      const password = userMockCredentials.password;

      await userEvent.type(inputUsername, username);
      await userEvent.type(inputPassword, password);
      await userEvent.click(loginButton);

      expect(routerLogin.state.location.pathname).toBe(paths.home);
    });
  });

  describe("When it is rendered and receives a invalid user credentials", () => {
    test("Then it should stay in login page", async () => {
      server.resetHandlers(...errorHandlers);

      const routes: RouteObject[] = [
        { path: paths.root, element: <LoginPage /> },
        { path: paths.login, element: <Layout /> },
      ];

      const routerLogin = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={routerLogin} />);

      const inputUsername = screen.getByRole("textbox", {
        name: expectedAriaLabelText,
      });
      const inputPassword = screen.getByPlaceholderText(
        expectedPlaceHolderText
      );
      const loginButton = screen.getByRole("button", { name: "login" });
      const username = "he";
      const password = "y";

      await userEvent.type(inputUsername, username);
      await userEvent.type(inputPassword, password);
      await userEvent.click(loginButton);

      expect(routerLogin.state.location.pathname).toBe(paths.root);
    });
  });
});
