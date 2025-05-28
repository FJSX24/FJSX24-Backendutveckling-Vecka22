// Ta in(importera/require) in math funktionen för adderingen (+), vi glömmmer att ta in och testa multiplicerings funktion.

// Skriv test för adderingsfunktionen

// Lösning från grupp 1
// const { add } = require("../src/math.js");
// // Skriv test för adderingsfunktionen
// describe("add()", () => {
//   it("Ska ge summan av ett postitivt tal och ett negativt", () => {
//     expect(add(5, -3)).toBe(2);
//   });
//   describe("add()", () => {
//     it("Ska ge summan av två postiva tal", () => {
//       expect(add(2, 3)).toBe(5);
//     });
//   });
// });
// 2:
// import * as math from "../src/math.js";
// describe("test för add funktion", () => {
//   test("2 + 3 ska bli 5", () => {
//     expect(math.add(2, 3)).toBe(5);
//   });
//   test("10 + 4 ska bli 14", () => {
//     expect(math.add(10, 4)).toBe(14);
//   });
// });
// 3:

// Läraren:
const { addCA } = require("../srcCA/mathCA");

describe("addCA", () => {
  // Testfall: ska returnera summan av två tal

  it("ska addera två tal", () => {
    expect(addCA(2, 3)).toBe(5);
  });
});
