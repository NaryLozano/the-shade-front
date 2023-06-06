import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UiStateStruture {
  isLoading?: boolean;
  isSuccess?: boolean;
  feedback?: boolean;
  modalMessage?: string;
}
const uiState: UiStateStruture = {
  isLoading: false,
  isSuccess: true,
  feedback: false,
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

    showModal: (
      currentUiState: UiStateStruture,
      action: PayloadAction<UiStateStruture>
    ) => ({
      ...currentUiState,
      isSuccess: action.payload.isSuccess,
      feedback: true,
      modalMessage: action.payload.modalMessage,
    }),

    hideModal: (currentuiState: UiStateStruture) => ({
      ...currentuiState,
      isSuccess: false,
      feedback: false,
      modalMessage: "",
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  showModal: showModalActionCreator,
  hideModal: hideModalActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
