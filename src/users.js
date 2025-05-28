// simlera en databasförfrågan för att hämta en användare(user) usern ska innehålla keys: id och name

// Exportera den funktionen

// Lösning från grupp 1
// const { getUsers } = require("../src/db.js");
// // Returnerar alla användare
// function getAllUsers() {
//   const users = getUsers();
//   return users;
// }
// // Returnerar en specifik användare via id
// function getUserById(id) {
//   const users = getUsers();
//   return users.find((user) => user.id === id);
// }
// module.exports = {
//   getAllUsers,
//   getUserById,
// };

// // 2:
// // simlera en databasförfrågan för att hämta EN användare(user) usern ska innehålla keys: id och name
// import { getUsers } from "./db";
// export const getUser = (id) => {
//   const users = getUsers();
//   return users.find((u) => u.id === id);
// };
// // Exportera den funktionen

// 3:
// const users = require("./db.js");
// const express = require("express");

// const router = express.Router();

// // simlera en databasförfrågan för att hämta en användare(user) usern ska innehålla keys: id och name

// router.get("/", (req, res) => {
//   res.json(users);
// });

// // Exportera den funktionen

// export default router;

// Läraren:
// Simulerar en databasförfrågan för att hämta en användare

exports.fetchUserCA = async function (id) {
  // Här skulle du annars anropa en riktig databas
  // Nu simulerar vi ett async-svar, ett "mockat" svar direkt

  return { id, name: "Anna" };
};
