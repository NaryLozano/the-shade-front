import { Factory } from "fishery";
import { UserCredentials, UserStateStructure } from "../../../store/user/types";
import { faker } from "@faker-js/faker";

const userFactory = Factory.define<UserStateStructure>(() => ({
  id: faker.database.mongodbObjectId().toString(),
  token: faker.string.alphanumeric(25),
  username: faker.internet.userName(),
  isLogged: false,
}));

export const getUserMockData = (
  isLoggedUser: boolean,
  data?: UserStateStructure
) => {
  const userData = userFactory.build(data);
  if (isLoggedUser) {
    return userData;
  } else {
    delete userData.isLogged;
    return userData;
  }
};

const userCredentialsFactory = Factory.define<UserCredentials>(() => ({
  username: faker.internet.userName().toLowerCase(),
  password: faker.string.alphanumeric(10).toLowerCase(),
}));

export const getMockUserCredentials = (data?: UserCredentials) => {
  return userCredentialsFactory.build(data);
};
