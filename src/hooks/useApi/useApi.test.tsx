import { renderHook, screen } from "@testing-library/react";
import { queenMock, queensMock } from "../../mocks/queensMocks";
import useApi from "./useApi";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import {
  renderWithProviders,
  wrapWithProviders,
  wrapper,
} from "../../utils/testUtils";
import Layout from "../../components/Layout/Layout";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";

describe("Given a getQueens function", () => {
  describe("When its called", () => {
    test("Then it should return a list of queens", async () => {
      const expectedQueens = { queens: queensMock, total: queensMock.length };

      const {
        result: {
          current: { getQueens },
        },
      } = renderHook(() => useApi(), { wrapper: wrapper });

      const queensList = await getQueens(0, 5);

      expect(queensList).toStrictEqual(expectedQueens);
    });
  });

  describe("When its called and rejects", () => {
    test("Then it should dispatch a showModalActionCreator", () => {
      server.resetHandlers(...errorHandlers);
      const error = new Error("bring back my queens has failed");
      const {
        result: {
          current: { getQueens },
        },
      } = renderHook(() => useApi(), { wrapper: wrapper });

      const notQueens = getQueens(0, 0);

      expect(notQueens).rejects.toThrowError(error);
    });
  });
});

describe("Given a delete queen function ", () => {
  const queenToDelete = queenMock.id;
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
    },
  ];
  const modalRoute = createMemoryRouter(routes);

  describe("When its called with a queen id", () => {
    test("Then it should delete the queen with the id passed and show a success modal", async () => {
      const {
        result: {
          current: { deleteQueen },
        },
      } = renderHook(() => useApi(), { wrapper: wrapWithProviders });

      await deleteQueen(queenToDelete);
      renderWithProviders(<RouterProvider router={modalRoute} />);

      const modal = screen.getByRole("heading", { level: 2, name: "yaas!" });

      expect(modal).toBeInTheDocument();
    });
  });

  describe("When its called with a queen id and the id doesnt exist", () => {
    test("Then it should return a modal with the message 'queen could't be deleted try again, please'", async () => {
      server.resetHandlers(...errorHandlers);

      const queenToDeleteFail = queenMock.id;
      const {
        result: {
          current: { deleteQueen },
        },
      } = renderHook(() => useApi(), { wrapper: wrapWithProviders });
      const routes: RouteObject[] = [
        {
          path: "/",
          element: <Layout />,
        },
      ];
      const modalRoute = createMemoryRouter(routes);

      renderWithProviders(
        <RouterProvider router={modalRoute}></RouterProvider>,
        {
          ui: {
            modalData: {
              isSuccess: false,
              modalMessage: "asd",
              showFeedback: true,
            },
          },
        }
      );
      await deleteQueen(queenToDeleteFail);

      const modal = await screen.getByRole("heading", {
        level: 2,
        name: "oops!",
      });

      expect(modal).toBeInTheDocument();
    });
  });
});
