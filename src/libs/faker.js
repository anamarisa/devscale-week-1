import { faker } from "@faker-js/faker";

export function createRandomUser() {
  const birthdate = faker.date.birthdate();

  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    bio: faker.lorem.sentence(),
    birthdate: birthdate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}
