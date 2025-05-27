//  Importera Supertest – används för att skicka HTTP-förfrågningar till Express-appen
const request = require("supertest");

//  Importera Express-appen som ska testas
const appCA = require("../serverCA.js");

// Test för att säkerställa att GET /api/usersCA fungerar
test("GET /api/usersCA returnerar 200", async () => {
  // Skicka en GET-förfrågan till /api/usersCA
  const res = await request(appCA).get("/api/usersCA");

  // Kontrollera att statuskoden är 200 (OK)
  expect(res.statusCode).toBe(200);

  // Kontrollera att det returneras minst en användare i arrayen
  expect(res.body.length).toBeGreaterThan(0);
});
