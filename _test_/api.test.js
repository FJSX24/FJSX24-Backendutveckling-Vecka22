// Ta in(importera/require) Supertes, för vi vill använda Supertest för att testa när man skickar HTTP-förfrågningar till en express app.

// Ta in GET ROUTEN funktionen

// så vi kan testa den

// i det testet vill jag testa att statuskoden är 200(OK)

// i  samma test vill jag kontroller attt det retuneras minst en användare i arrayen.

// Skriv test/er för den/dom funktionen/erna

// Lösning från grupp 1
// const request = require("supertest");
// const app = require("../server.js"); // Importera appen
// describe("GET /api/users", () => {
//   it("should return an array of users", async () => {
//     const response = await request(app).get("/api/users");
//     expect(response.status).toBe(200);
//     expect(response.body).toEqual([
//       { id: 1, name: "Alice" },
//       { id: 2, name: "Bob" },
//       { id: 3, name: "Charlie" },
//     ]);
//   });
// });

// // 2:
// import request from "supertest";
// import app from "../server.js";
// import { getUsers } from "../src/db.js";
// test("GET /api/users responds with JSON", async () => {
//   const users = getUsers();
//   const response = await request(app).get("/api/users");
//   expect(response.status).toBe(200);
//   expect(response.body.users).toEqual(users);
// });

// // 3:
// // Ta in(importera/require) Supertes, för vi vill använda Supertest för att testa när man skickar HTTP-förfrågningar till en express app.
// import request from "supertest";
// import app from "../server.js";

// // så vi kan testa den
// describe("GET /api/users", () => {
//   it("should return 200 and at least one user", async () => {
//     const res = await request(app).get("/api/users");
//     expect(res.statusCode).toBe(200); // Kontrollera att statuskoden är 200
//     expect(res.body).toBeInstanceOf(Array); // Kontrollera att svaret är en array med minst en user
//     expect(res.body.length).toBeGreaterThan(0); // Kontrollera att arrayen innehåller minst en användare
//   });
// });

// // i det testet vill jag testa att statuskoden är 200(OK)

// // i  samma test vill jag kontroller attt det retuneras minst en användare i arrayen.

// // Skriv test/er för den/dom funktionen/erna

// // Läraren:
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
