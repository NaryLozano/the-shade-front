import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QueenStructure, QueensState } from "./types";

const InitialQueensState: QueensState = {
  queens: [],
  total: 0,
};

export const queensSlice = createSlice({
  name: "queen",
  initialState: InitialQueensState,

  reducers: {
    loadQueens: (
      currentQueens,
      action: PayloadAction<{ queens: QueenStructure[]; total: number }>
    ): QueensState => ({
      ...currentQueens,
      queens: [...action.payload.queens],
      total: action.payload.total,
    }),

    deleteQueen: (
      currentQueens: QueensState,
      action: PayloadAction<string | undefined>
    ): QueensState => ({
      ...currentQueens,
      queens: currentQueens.queens.filter(
        (queen) => queen.id !== action.payload
      ),
    }),

    addQueen: (
      currentQueens: QueensState,
      action: PayloadAction<QueenStructure>
    ): QueensState => ({
      ...currentQueens,
      queens: [...currentQueens.queens, action.payload],
    }),
  },
});

export const {
  loadQueens: loadQueensActionCreator,
  deleteQueen: deleteQueenActionCreator,
  addQueen: addQueenActionCreator,
} = queensSlice.actions;

export const queenReducer = queensSlice.reducer;
