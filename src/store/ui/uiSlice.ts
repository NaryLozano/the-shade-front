import { createSlice } from "@reduxjs/toolkit";

export interface UiStateStruture {
  isLoading: boolean;
}
const uiState: UiStateStruture = {
  isLoading: false,
};
const uiSlice = createSlice({
  name: "ui",
  initialState: uiState,
  reducers: {
    showLoading: (currentUiState: UiStateStruture) => ({
      ...currentUiState,
      isLoading: true,
    }),
  },
});

export const { showLoading: showLoadingActionCreator } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
