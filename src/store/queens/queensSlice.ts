import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QueenStructure, QueensState } from "./types";

const InitialQueensState: QueensState = {
  queens: [],
  total: 0,
  queen: {
    age: 0,
    hometown: "",
    image: "",
    name: "",
    quote: "",
    rank: 0,
    season: 0,
  },
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

    loadSelectedQueen: (
      currentQueens: QueensState,
      action: PayloadAction<string | undefined>
    ): QueensState => ({
      ...currentQueens,
      queen: currentQueens.queens.find((queen) => queen.id === action.payload),
    }),
  },
});

export const {
  loadQueens: loadQueensActionCreator,
  deleteQueen: deleteQueenActionCreator,
  addQueen: addQueenActionCreator,
  loadSelectedQueen: loadSelectedQueenActionCreator,
} = queensSlice.actions;

export const queenReducer = queensSlice.reducer;
