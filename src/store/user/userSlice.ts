import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserStateStructure, UserTokenStructure } from "./types";

const InitialUserState: UserStateStructure = {
  id: "",
  username: "",
  isLogged: false,
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: InitialUserState,
  reducers: {
    loginUser: (
      _currentUserstate: UserStateStructure,
      action: PayloadAction<UserTokenStructure>
    ) => ({ ...action.payload, isLogged: true }),
    logoutUser: () => ({
      ...InitialUserState,
    }),
  },
});

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
