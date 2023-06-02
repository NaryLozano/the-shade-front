import { Factory } from "fishery";
import { QueenStructure } from "../../../store/queens/types";
import { faker } from "@faker-js/faker";

const queenFactory = Factory.define<QueenStructure>(() => ({
  name: faker.person.firstName(),
  age: faker.number.int({ min: 18, max: 55 }),
  hometown: faker.location.city(),
  image: faker.image.url(),
  rank: faker.number.int({ min: 0, max: 16 }),
  season: faker.number.int({ min: 0, max: 16 }),
  memorableQuote: faker.person.bio(),
}));

export const getQueenMockData = (data?: QueenStructure) => {
  const queenData = queenFactory.build(data);
  return queenData;
};
