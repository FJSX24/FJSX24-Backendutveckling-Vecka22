// KOM IHÅG ATT HJÄLPA LÄRAREN HUR MAN I TERMINALEN: STARTAR PROJEKTET? OCH INSTALLERA DE BEROENDEN/PAKET/BIBLIOTEK VI BEHÖVER?

// I package.json vill jag också att ni lägger in i "scripts" och förbereder att jag kan köra mina test från terminalen genom att skriva: npm run test ELLER npm run test:watch .....

// Server som är vår huvudfil, ska ta in express

// skapa en instans av en express server

// använda en middleware för att hantera json

// GET Route som retunerar en användarlist (user), url för den route är /api/users

// starta servern eller starta servern om (if) vi inte kör test

// TIPS/Varning Jest hjärta båda men för att få det att fungera så behöver man lösa det på olika import(type: module) eller require(type: commonjs)

// Exportera GET ROUTEN så vi kan testa den i api.test.js

// Lösning från grupp 1
// const app = express();
// // Middleware för att hantera JSON
// app.use(express.json());
// // GET /api/users - returnera användarlista
// app.get("/api/users", (req, res) => {
//   const users = getUsers();
//   res.json(users);
// });
// // Starta servern om vi inte är i testmiljö
// if (process.env.NODE_ENV !== "test") {
//   const PORT = process.env.PORT || 3000;
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// }
// // Exportera app för testning
// module.exports = app;

// // 2:
// import express from "express";
// import dotenv from "dotenv";
// import { getUsers } from "./src/db";
// const app = express();
// const PORT = 3000;
// dotenv.config();
// app.use(express.json());
// app.get("/api/users", (req, res) => {
//   const users = getUsers();
//   res.status(200).json({ users });
// });
// if (process.env.NODE_ENV !== "test") {
//   app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//   });
// }
// export default app;

// 3:
// import express from "express";
// import dotenv from "dotenv";
// import userRoute from "./src/users.js";

// dotenv.config();
// const app = express();
// app.use(express.json());
// const PORT = process.env.PORT || 3000;

// app.use("/api/users", userRoute);

// if (process.env.NODE_ENV !== "test") {
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// }
// export default app;

// // Läraren:
const express = require("express");

const appCA = express();
appCA.use(express.json());

// Route som returnerar en användarlista
appCA.get("/api/usersCA", (req, res) => {
  res.json([{ name: "Anna" }]);
});

// Starta bara servern om vi inte kör test
if (process.env.NODE_ENV !== "test") {
  app.listen(3000, () => console.log("Server igång"));
}

// Exporteras så att Supertest kan testa appen
module.exports = appCA;
