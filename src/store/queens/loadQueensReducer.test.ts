import { queensMock } from "../../mocks/queensMocks";
import {
  deleteQueenActionCreator,
  loadQueensActionCreator,
  queenReducer,
} from "./queensSlice";
import { QueenStructure, QueensState } from "./types";

describe("Given an userReducer", () => {
  describe("When it receives an empty initial state and a loadQueens action", () => {
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

  describe("When it receives an id an a delete queen action", () => {
    test("Then it should return the actualized list of queens", () => {
      const queens = queensMock;
      const currentState: QueensState = {
        queens: queens,
      };

      const expectedNewState: QueensState = {
        queens: queens.slice(1),
      };

      const deleteQueen = deleteQueenActionCreator(queens[0].id);

      const newState = queenReducer(currentState, deleteQueen);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});
