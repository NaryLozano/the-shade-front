import { act, renderHook, screen } from "@testing-library/react";
import { queenMock, queensMock } from "../../mocks/queensMocks";
import useApi from "./useApi";
import { server } from "../../mocks/server";
import { errorHandlers, getHandlers } from "../../mocks/handlers";
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
import { vi } from "vitest";
import { store } from "../../store";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a getQueens function", () => {
  describe("When its called", () => {
    test("Then it should return a list of queens", async () => {
      const expectedQueens = { queens: queensMock, total: queensMock.length };
      const params = { limit: 0, skip: 5 };
      const {
        result: {
          current: { getQueens },
        },
      } = renderHook(() => useApi(), { wrapper: wrapper });

      const queensList = await getQueens(params);

      expect(queensList).toStrictEqual(expectedQueens);
    });
  });

  describe("When its called and rejects", () => {
    test("Then it should dispatch a showModalActionCreator", () => {
      server.resetHandlers(...errorHandlers);
      const error = new Error("bring back my queens has failed");
      const params = { limit: 0, skip: 0 };
      const {
        result: {
          current: { getQueens },
        },
      } = renderHook(() => useApi(), { wrapper: wrapper });

      const notQueens = getQueens(params);

      expect(notQueens).rejects.toThrowError(error);
    });
  });

  describe("When it receives a filter by season 1", () => {
    test("Then it should return a list of queens of the 1st season", async () => {
      server.resetHandlers(...getHandlers);
      const params = { limit: 0, skip: 5, filter: "season", filterValue: "1" };
      const {
        result: {
          current: { getQueens },
        },
      } = renderHook(() => useApi(), { wrapper: wrapper });

      const { queens } = await getQueens(params);

      expect(queens[0].season).toBe(1);
      expect(queens[5].season).toBe(1);
      expect(queens[7].season).toBe(1);
    });
  });
});

describe("Given a delete queen function ", () => {
  const queenToDelete = queenMock[0].id;
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

      const queenToDeleteFail = queenMock[0].id;
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

describe("Given a loadSelectedQueen function", () => {
  describe("When its called with a queen id", () => {
    test("Then it should return a queen that match the id", async () => {
      const {
        result: {
          current: { loadSelectedQueen },
        },
      } = renderHook(() => useApi(), { wrapper: wrapper });

      const queen = await loadSelectedQueen(queenMock[0].id as string);
      const expectedQueen = queenMock[0];

      expect(queen).toStrictEqual(expectedQueen);
    });
  });
  describe("When its called an it rejects", () => {
    test("Then it should throw an error with the message", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { loadSelectedQueen },
        },
      } = renderHook(() => useApi(), { wrapper: wrapWithProviders });

      const queenSelected = queenMock[0].id;

      const routes: RouteObject[] = [
        {
          path: "/",
          element: <Layout />,
        },
      ];
      const modalRoute = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={modalRoute} />);

      await act(async () => {
        await loadSelectedQueen(queenSelected as string);

        const modalText = screen.getByRole("heading", {
          level: 2,
          name: "oops!",
        });

        expect(modalText).toHaveTextContent("oops!");
      });
    });
  });

  describe("Given a addQueen function", () => {
    describe("When it is called with a new queen", async () => {
      test("Then it should return the new queen'", async () => {
        const expectedNewQueen = queenMock[0];
        const {
          result: {
            current: { addQueen },
          },
        } = renderHook(() => useApi(), { wrapper: wrapper });

        const newQueen = await addQueen(queenMock[0]);

        expect(newQueen).toStrictEqual(expectedNewQueen);
      });
    });
  });
  describe("When is called and  it rejects", () => {
    test("Then the error 'queen could't be created try again, please' should be in the store", async () => {
      server.resetHandlers(...errorHandlers);

      const expectedMessage = "queen could't be created try again, please";

      const {
        result: {
          current: { addQueen },
        },
      } = renderHook(() => useApi(), { wrapper: wrapper });

      await addQueen(queenMock[0]);

      const message = store.getState().ui.modalData?.modalMessage;

      expect(message).toBe(expectedMessage);
    });
  });
});
