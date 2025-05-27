// Importerar hela db-modulen (för att kunna mocka i test)

const dbModuleCA = require("./dbCA.js");

// Funktion som extraherar bara namn från användare

function getUserNamesCA() {
  const usersCA = dbModuleCA.getUsersFromDbCA();
  return usersCA.map((userCA) => userCA.name);
}

module.exports = { getUserNamesCA };
