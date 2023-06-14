import { queenMock, queensMock } from "../../mocks/queensMocks";
import {
  addQueenActionCreator,
  deleteQueenActionCreator,
  loadQueensActionCreator,
  loadSelectedQueenActionCreator,
  queenReducer,
} from "./queensSlice";
import { QueenStructure, QueensState } from "./types";

describe("Given an userReducer", () => {
  describe("When it receives an empty initial state and a loadQueens action", () => {
    test("Then it should return the new state a list with 2 queens", () => {
      const initialQueensState: QueenStructure[] = [];

      const currentState: QueensState = {
        queens: initialQueensState,
        total: initialQueensState.length,
      };

      const queens = loadQueensActionCreator({
        queens: queensMock,
        total: queensMock.length,
      });

      const expectedNewQueensState: QueensState = {
        ...initialQueensState,
        queens: queensMock,
        total: queensMock.length,
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

  describe("When it receives a queen and an Add queen action", () => {
    test("Then it should return the new state of the list with 4 queens", () => {
      const queens = queensMock;

      const currentState: QueensState = {
        queens: queens,
      };

      const expectedNewState: QueensState = {
        ...currentState,
        queens: [...currentState.queens, queenMock[0]],
      };

      const addQueen = addQueenActionCreator(queenMock[0]);

      const newState = queenReducer(currentState, addQueen);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });

  describe("When it receives a queen id and an loadSelectedQueen action", () => {
    test("Then it should return the new state of with the queen selected", () => {
      const queens = queensMock;
      const queenById = queens.slice(1);
      const currentState: QueensState = {
        queens: queensMock,
      };

      const expectedNewQueensState: QueensState = {
        queens: queensMock,
        queenById: queenById[0],
      };

      const selectedQueen = loadSelectedQueenActionCreator(queenById[0]);

      const newState = queenReducer(currentState, selectedQueen);

      expect(newState).toStrictEqual(expectedNewQueensState);
    });
  });
});
