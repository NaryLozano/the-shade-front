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

    hideLoading: (currentUiState: UiStateStruture) => ({
      ...currentUiState,
      isLoading: false,
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
