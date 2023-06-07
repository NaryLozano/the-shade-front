import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QueenStructure, QueensState } from "./types";

const InitialQueensState: QueensState = {
  queens: [],
  queen: undefined,
};

export const queensSlice = createSlice({
  name: "queen",
  initialState: InitialQueensState,

  reducers: {
    loadQueens: (
      currentQueens,
      action: PayloadAction<QueenStructure[]>
    ): QueensState => ({ ...currentQueens, queens: [...action.payload] }),

    deleteQueen: (
      currentQueens,
      action: PayloadAction<string>
    ): QueensState => ({
      ...currentQueens,
      queen: currentQueens.queens.find((queen) => queen.id === action.payload),
    }),
  },
});

export const {
  loadQueens: loadQueensActionCreator,
  deleteQueen: deleteQueenActionCreator,
} = queensSlice.actions;

export const queenReducer = queensSlice.reducer;
