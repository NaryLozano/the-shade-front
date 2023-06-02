import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QueenStructure, QueensState } from "./types";

const InitialQueensState: QueensState = { queens: [] };

export const queensSlice = createSlice({
  name: "queen",
  initialState: InitialQueensState,

  reducers: {
    loadQueens: (
      currentQueens,
      action: PayloadAction<QueenStructure[]>
    ): QueensState => ({ ...currentQueens, queens: [...action.payload] }),
  },
});

export const { loadQueens: loadQueensActionCreator } = queensSlice.actions;

export const queenReducer = queensSlice.reducer;
