import { UserStateStructure } from "../store/user/types";
import {
  getMockUserCredentials,
  getUserMockData,
} from "./factory/userFactory/userFactory";

export const tokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDc3N2I5NmQzMjE3YjZiM2I4YjcxNDIiLCJ1c2VyIjoiZ2luYSIsImlhdCI6MTY4NTU1MjA4MSwiZXhwIjoxNjg1NjM4NDgxfQ.As-wLvPAPLeSyh6KwYSTWO5YTr8ekk7ytWj6_BnVm0E";

export const userMock: UserStateStructure = {
  id: "64777b96d3217b6b3b8b7142",
  username: "gina",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDc3N2I5NmQzMjE3YjZiM2I4YjcxNDIiLCJ1c2VyIjoiZ2luYSIsImlhdCI6MTY4NTU1MjA4MSwiZXhwIjoxNjg1NjM4NDgxfQ.As-wLvPAPLeSyh6KwYSTWO5YTr8ekk7ytWj6_BnVm0E",
  isLogged: true,
};

export const InitialUserStateMock = getUserMockData(true, {
  id: "",
  token: "",
  username: "",
  isLogged: false,
});

export const UserWithTokenMock: UserStateStructure = {
  ...userMock,
  isLogged: false,
};

export const userMockCredentials = getMockUserCredentials();
