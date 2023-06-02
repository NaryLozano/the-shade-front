import { queensMock } from "../../mocks/queensMocks";
import { loadQueensActionCreator, queenReducer } from "./queensSlice";
import { QueenStructure, QueensState } from "./types";

describe("Given an userReducer", () => {
  describe("When it recaives an empty initial state and a loadQueens action", () => {
    test("Then it should return the new state a list with 2 queens", () => {
      const initialQueensState: QueenStructure[] = [];

      const currentState: QueensState = { queens: initialQueensState };

      const queens = loadQueensActionCreator(queensMock);

      const expectedNewQueensState: QueensState = {
        ...initialQueensState,
        queens: queensMock,
      };

      const newState: QueensState = queenReducer(currentState, queens);

      expect(expectedNewQueensState).toStrictEqual(newState);
    });
  });
});
