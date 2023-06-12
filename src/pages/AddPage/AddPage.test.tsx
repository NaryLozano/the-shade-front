import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import AddPage from "./AddPage";
import userEvent from "@testing-library/user-event";
import { queenMock } from "../../mocks/queensMocks";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import paths from "../../routers/paths/paths";
import Layout from "../../components/Layout/Layout";

describe("Given an AddPAge page", () => {
  describe("When its rendered", () => {
    test("Then it should show a title with 'ADD QUEEN'", () => {
      const expectedTitle = "add queen";
      renderWithProviders(wrapWithRouter(<AddPage />));
      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When its rendered and receives a queen ,", () => {
    test("Then it should redirect to home page", async () => {
      const routes: RouteObject[] = [
        { path: paths.root, element: <AddPage /> },
        { path: paths.home, element: <Layout /> },
      ];

      const routerAddPage = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={routerAddPage} />);

      const name = screen.getByRole("textbox", { name: "name" });
      const age = screen.getByRole("spinbutton", { name: "age" });
      const season = screen.getByRole("spinbutton", { name: "season" });
      const rank = screen.getByRole("textbox", { name: "rank" });
      const hometown = screen.getByRole("textbox", { name: "hometown" });
      const quote = screen.getByRole("textbox", { name: "memorable quote" });
      const image = screen.getByRole("textbox", { name: "picture url" });
      const button = screen.getByRole("button", { name: "add queen" });

      await userEvent.type(name, queenMock[0].name);
      await userEvent.type(age, queenMock[0].age.toString());
      await userEvent.type(season, queenMock[0].season.toString());
      await userEvent.type(rank, queenMock[0].rank.toString());
      await userEvent.type(hometown, queenMock[0].hometown);
      await userEvent.type(quote, queenMock[0].quote);
      await userEvent.type(image, queenMock[0].image);
      await userEvent.click(button);

      expect(routerAddPage.state.location.pathname).toBe(paths.home);
    });
  });
});
