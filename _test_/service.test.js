// ta både funktionen från db.js

// ta både funktionen från service.js

// Ett test för att db funktionen retunerar bara ett namn från en "mockad db"

// i samma test behöver vi anropa den funktion som använder mocken...

// i samma, behöver testa att den retunerar korrekt namn-array

// i samma, kontroller att vår mockade funktion faktist anropades

// Lösning från grupp 1
// jest.mock("../src/users.js", () => ({
//   getUserById: jest.fn(),
// }));
// const { getUserById } = require("../src/users.js");
// const { getUsersNameById } = require("../src/service.js");
// describe("getUsersNameById", () => {
//   it("should return only the name from a mocked user and call the mock", () => {
//     // Arrange – mocka returvärdet
//     const fakeUser = { id: 5, name: "Charlie" };
//     getUserById.mockReturnValue(fakeUser);
//     // Act – anropa vår service-funktion
//     const name = getUsersNameById(5);
//     // Assert – kontrollera returvärde, typ och att mocken anropats
//     expect(name).toBe("Charlie"); // Returvärde
//     expect(typeof name).toBe("string"); // Typkontroll
//     expect(getUserById).toHaveBeenCalled(); // Har anropats?
//     expect(getUserById).toHaveBeenCalledWith(5); // Med rätt id?
//   });
// });

// // 2:
// // service.js
// service.getName = jest.fn(() => ({ name: "Oscar" }));
// describe("Test service and db", () => {
//   test("Return Oscar", () => {
//     const result = service.getName(1); // Call the mocked function
//     expect(result.name).toBe("Oscar"); // Check if it returns "Oscar"
//   });
//   // service.getName(1).name = "Oscar"
//   // const arr = ["Oscar"];
//   test("Function using getName returns correct name array", () => {
//     const nameArray = [service.getName(1).name];
//     expect(nameArray).toEqual(["Oscar"]);
//   });
//   test("Check that our mocked function was called", () => {
//     service.getName(1); // Call the function
//     expect(service.getName).toHaveBeenCalled(); // Ensure it was called
//   });
// });
// // 3:

// // Läraren:
const dbModuleCA = require("../srcCA/dbCA.js");
const { getUserNamesCA } = require("../srcCA/serviceCA.js");

test("returnerar bara namn från mockad db", () => {
  // 🔁 Mockar databasfunktionen
  jest.spyOn(dbModuleCA, "getUsersFromDbCA").mockReturnValue([
    { id: 1, name: "Mandus" },
    { id: 2, name: "Helena" },
  ]);

  // Anropar den funktion som använder mocken
  const result = getUserNamesCA();

  // Testar att den returnerar korrekt namn-array
  expect(result).toEqual(["Mandus", "Helena"]);

  // Kontrollera att vår mockade funktion faktiskt anropades
  expect(dbModuleCA.getUsersFromDbCA).toHaveBeenCalled();
});
