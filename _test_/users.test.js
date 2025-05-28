// Ta in(importera/require) funktionen från users.js filen

// Skriv test/er för den/dom funktionen/erna

// Lösning från grupp 1
// jest.mock("../src/db.js", () => ({
//   getUsers: jest.fn(),
// }));
// const { getUsers } = require("../src/db.js");
// const { getAllUsers, getUserById } = require("../src/users.js");
// describe("User functions", () => {
//   const mockUsers = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
//   ];
//   beforeAll(() => {
//     getUsers.mockReturnValue(mockUsers);
//   });
//   it("getAllUsers should return all users", () => {
//     const users = getAllUsers();
//     expect(users).toEqual(mockUsers);
//     expect(users).toHaveLength(2);
//   });
//   it("getUserById should return the correct user", () => {
//     const user = getUserById(1);
//     expect(user).toEqual({ id: 1, name: "Alice" });
//   });
//   it("getUserById should return undefined for non-existing id", () => {
//     const user = getUserById(999);
//     expect(user).toBeUndefined();
//   });
// });

// // 2:
// // users.test.js // Ta in(importera/require) funktionen från users.js filen
// import * as users from "../src/users.js";
// test("User med id 2 ska ha name 'Anton'", () => {
//   expect(users.getUser(2)).toEqual({ id: 2, name: "Anton" });
// });
// // Skriv test/er för den/dom funktionen/ern

// // 3:

// // Läraren:
const { fetchUserCA } = require("../srcCA/usersCA.js");

describe("fetchUserCA", () => {
  // Test att rätt namn returneras

  it("returnerar en användare med rätt namn", async () => {
    const userCA = await fetchUserCA(1);
    expect(userCA).toEqual({ id: 1, name: "Anna" });
  });

  // Test att rätt id används i returen

  it("har ett id som matchar argumentet", async () => {
    const userCA = await fetchUserCA(123);
    expect(userCA.id).toBe(123);
  });
});
