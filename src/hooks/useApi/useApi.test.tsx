import { renderHook } from "@testing-library/react";
import { queensMock } from "../../mocks/queensMocks";
import useApi from "./useApi";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { wrapper } from "../../utils/testUtils";

describe("Given a getQueens function", () => {
  describe("When its called", () => {
    test("Then it should return a list of queens", async () => {
      const expectedQueens = queensMock;

      const {
        result: {
          current: { getQueens },
        },
      } = renderHook(() => useApi(), { wrapper: wrapper });

      const queensList = await getQueens();

      expect(queensList).toStrictEqual(expectedQueens);
    });
  });
  describe("When its called and rejects", () => {
    test("Then it should return a 'Can't get Queens' error", () => {
      server.resetHandlers(...errorHandlers);
      const {
        result: {
          current: { getQueens },
        },
      } = renderHook(() => useApi(), { wrapper: wrapper });

      const errorGetQueens = async () => await getQueens();

      expect(errorGetQueens).rejects.toThrowError();
    });
  });
});
