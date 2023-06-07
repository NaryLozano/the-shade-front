import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QueenStructure, QueensState } from "./types";

const InitialQueensState: QueensState = {
  queens: [],
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
      currentQueens: QueensState,
      action: PayloadAction<string | undefined>
    ): QueensState => ({
      ...currentQueens,
      queens: currentQueens.queens.filter(
        (queen) => queen.id !== action.payload
      ),
    }),
  },
});

export const {
  loadQueens: loadQueensActionCreator,
  deleteQueen: deleteQueenActionCreator,
} = queensSlice.actions;

export const queenReducer = queensSlice.reducer;
