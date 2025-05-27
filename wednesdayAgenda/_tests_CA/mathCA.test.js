// Importera funktionen vi vill testa

const { addCA } = require("../srcCA/mathCA");

describe("addCA", () => {
  // Testfall: ska returnera summan av två tal

  it("ska addera två tal", () => {
    expect(addCA(2, 3)).toBe(5);
  });
});
