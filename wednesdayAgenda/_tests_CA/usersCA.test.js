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
