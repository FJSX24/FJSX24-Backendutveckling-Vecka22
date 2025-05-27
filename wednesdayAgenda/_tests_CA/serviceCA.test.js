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
