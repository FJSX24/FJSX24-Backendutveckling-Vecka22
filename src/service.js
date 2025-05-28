// importera/require en annan module (för att kunna mocka i ett test)

// Funktion som extraherar bara namn från en användare(user)

// Exportera funktionen

// Lösning från grupp 1
// importera/require en annan module (för att kunna mocka i ett test)
// const { getUserById } = require("../src/users.js");
// function getUsersNameById(id) {
//   const users = getUserById(id);
//   return users.name;
// }
// module.exports = { getUsersNameById };

// // 2:
// // importera/require en annan module (för att kunna mocka i ett test)
// import { getUsers } from "./db";
// // Funktion som extraherar bara namn från en användare(user)
// export const getName = (id) => {
//   const users = getUsers();
//   const name = users.find((u) => u.id === id).name;
//   return name;
// };
// // Exportera funktionen

// 3:
// importera/require en annan module (för att kunna mocka i ett test)
// const { add, multiply } = require("../src/math.js");

// // Funktion som extraherar bara namn från en användare(user)

// exports.getUserNames = function (users) {
//   return users.map((user) => user.name);
// };

// Exportera funktionen

// Läraren:
const dbModuleCA = require("./dbCA.js");

// Funktion som extraherar bara namn från användare

function getUserNamesCA() {
  const usersCA = dbModuleCA.getUsersFromDbCA();
  return usersCA.map((userCA) => userCA.name);
}

module.exports = { getUserNamesCA };
