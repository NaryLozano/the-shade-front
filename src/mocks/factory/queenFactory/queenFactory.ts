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
  quote: faker.person.bio(),
  id: faker.database.mongodbObjectId(),
}));

export const getQueenMockData = (
  total: number,
  data?: Partial<QueenStructure>
) => queenFactory.buildList(total, data);
