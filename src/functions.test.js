// functions.test.js

import {
  generateUUID,
  toBase64,
  fromBase64,
  getUserData,
  login,
  register,
} from "./functions";

test("verifica daca UUID este generat corect", () => {
  const id = generateUUID();
  expect(id).toHaveLength(36);
});

test("verifica codarea si decodarea Base64", () => {
  const str = "test";
  expect(fromBase64(toBase64(str))).toBe(str);
});

test("verifica obtinerea datelor unui utilizator", () => {
  const user = { username: "test", password: "1234" };
  const userData = getUserData(user);
  expect(userData).toHaveProperty("id");
  expect(userData).toHaveProperty("username");
  expect(userData).toHaveProperty("password");
  expect(userData).toHaveProperty("role");
  expect(userData.role).toBe("user");
});

test("verifica functia de login", () => {
  const username = "test";
  const password = "1234";
  expect(login(username, password)).toBeTruthy();
});

test("verifica functia de register", () => {
  const username = "test";
  const password = "1234";
  const user = register(username, password);
  expect(user).not.toBeNull();
  expect(user.username).toBe(toBase64(username));
  expect(user.password).toBe(toBase64(password));
});
