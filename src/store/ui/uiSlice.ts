import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UiStateStruture {
  isLoading?: boolean;
  modalData?: {
    isSuccess?: boolean;
    showFeedback?: boolean;
    modalMessage?: string;
  };
}
const uiState: UiStateStruture = {
  isLoading: false,
  modalData: {
    isSuccess: true,
    showFeedback: false,
  },
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
      modalData: {
        isSuccess: action.payload.modalData?.isSuccess,
        modalMessage: action.payload.modalData?.modalMessage,
        showFeedback: true,
      },
    }),

    hideModal: (currentuiState: UiStateStruture) => ({
      ...currentuiState,
      modalData: {
        isSuccess: false,
        showFeedback: false,
        modalMessage: "",
      },
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
