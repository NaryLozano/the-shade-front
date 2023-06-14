import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import App from "./App";
import { tokenMock } from "../../mocks/mocks";

describe("Given an App component", () => {
  describe("When it is rendered and the user is not logged in", () => {
    test("Then in should show the logotype of the Shade of it all", () => {
      const logotypeAlt = "The Shade of it all with drawing of Sasha Velour";
      const user = {
        id: "",
        username: "",
        token: "",
        isLogged: false,
      };

      renderWithProviders(wrapWithRouter(<App />), { user });
      const logotype = screen.getByAltText(logotypeAlt);

      expect(logotype).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user is logged in", () => {
    test("Then in should show the logotype of the shade of it all", () => {
      const logotypeAlt = "The Shade of it all with drawing of Sasha Velour";

      const token = tokenMock;

      localStorage.setItem("token", token);

      renderWithProviders(wrapWithRouter(<App />));

      const logo = screen.getByAltText(logotypeAlt);

      expect(logo).toBeInTheDocument();
    });
  });
});
