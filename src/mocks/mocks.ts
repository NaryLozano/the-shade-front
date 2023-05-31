import { UserCredentials, UserStateStructure } from "../store/user/types";

export const tokenMock = "meowToken";

export const userMock: UserStateStructure = {
  id: "1",
  username: "Marcs",
  token: "thisisatoken",
  isLogged: true,
};

export const InitialUserStateMock: UserStateStructure = {
  id: "",
  token: "",
  username: "",
  isLogged: false,
};

export const UserWithTokenMock: UserStateStructure = {
  ...userMock,
  isLogged: false,
};

export const userMockInvalid: UserStateStructure = {
  id: "1",
  username: "Mars",
  isLogged: true,
  token: "thisisatoken",
};

export const userMockCredentials: UserCredentials = {
  username: "Belenguer",
  password: "unpasswordnormal",
};
