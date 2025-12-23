import { createRandomUser } from "./libs/faker.js";

const user = createRandomUser();

document.getElementById("name").innerText = user.name;
document.getElementById("bio").innerText = user.bio;
document.querySelector("#email .email-text").innerText = user.email;
document.querySelector("#birthdate .birthdate-text").innerText = user.birthdate;
document.getElementById("avatar").src = user.avatar;
