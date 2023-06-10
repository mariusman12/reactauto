// Database.test.js
import { Database } from "./Database";
import { User } from "./User";

let db;

beforeEach(() => {
  db = new Database();
});

test("createUser should create a new user", async () => {
  const user = new User(1, "test", "test@example.com");
  const result = await db.createUser(user);
  expect(result).toEqual(user);
});

test("getUser should return the user with the given id", async () => {
  const user = new User(1, "test", "test@example.com");
  await db.createUser(user);
  const result = await db.getUser(1);
  expect(result).toEqual(user);
});

test("updateUser should update the user with the given id", async () => {
  const user = new User(1, "test", "test@example.com");
  await db.createUser(user);
  const updatedUser = await db.updateUser(1, { username: "updated" });
  expect(updatedUser.username).toBe("updated");
});

test("deleteUser should delete the user with the given id", async () => {
  const user = new User(1, "test", "test@example.com");
  await db.createUser(user);
  const result = await db.deleteUser(1);
  expect(result).toBe(true);
  const deletedUser = await db.getUser(1);
  expect(deletedUser).toBe(null);
});
