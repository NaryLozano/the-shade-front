import { renderHook } from "@testing-library/react";
import { queenMock, queensMock } from "../../mocks/queensMocks";
import useApi from "./useApi";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { wrapper } from "../../utils/testUtils";

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
});

describe("Given a delete queen function ", () => {
  const queenToDelete = queenMock.id;
  describe("When its called with a queen id", () => {
    test("Then it should delete the queen with the id passed", async () => {
      const statusCode = 200;

      const {
        result: {
          current: { deleteQueen },
        },
      } = renderHook(() => useApi(), { wrapper: wrapper });

      const result = await deleteQueen(queenToDelete);

      expect(result).toBe(statusCode);
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
      } = renderHook(() => useApi(), { wrapper: wrapper });

      const notResult = await deleteQueen(queenToDeleteFail);

      expect(notResult).toBeUndefined();
    });
  });
});
