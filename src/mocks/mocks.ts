import { UserStateStructure } from "../store/user/types";

export const userMock: UserStateStructure = {
  id: "1",
  username: "Marcs",
  isLogged: true,
  token: "thisisatoken",
};

export const InitialUserStateMock: UserStateStructure = {
  id: "",
  isLogged: false,
  token: "",
  username: "",
};

export const UserWithTokenMock: UserStateStructure = {
  ...userMock,
  isLogged: true,
};

export const userMockInvalid: UserStateStructure = {
  id: "1",
  username: "Mars",
  isLogged: true,
  token: "thisisatoken",
};
