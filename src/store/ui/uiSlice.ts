import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UiStateStruture {
  isLoading?: boolean;
  isError?: boolean;
}
const uiState: UiStateStruture = {
  isLoading: false,
  isError: false,
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

    showError: (
      currentUiState: UiStateStruture,
      action: PayloadAction<UiStateStruture>
    ) => ({
      ...currentUiState,
      isError: action.payload.isError,
    }),

    hideError: (currentuiState: UiStateStruture) => ({
      ...currentuiState,
      isError: false,
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  showError: showErrorActionCreator,
  hideError: hideErrorActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
