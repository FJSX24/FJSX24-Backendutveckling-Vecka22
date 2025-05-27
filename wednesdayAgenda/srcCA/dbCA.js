// Funktion som normalt skulle hämta data från en databas

function getUsersFromDbCA() {
  return [{ id: 1, name: "Anna" }];
}

// Exporteras så vi kan mocka den i test

module.exports = { getUsersFromDbCA };
