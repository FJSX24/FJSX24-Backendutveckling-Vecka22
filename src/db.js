// Funktion som normalt sett skulle hämta data från en db , (det som finns i db är: users , en array med user objekt, objekten innehåller id och namn keys och såklart? values?)

// exportera funktionen

// Lösning från grupp 1
// Simulerad "databas"
// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];
// // Funktion som returnerar användarna
// function getUsers() {
//   return users;
// }
// // Exportera funktionen
// module.exports = { getUsers };

// // 2:
// // Funktion som normalt sett skulle hämta data från en db , (det som finns i db är: users , en array med user objekt, objekten innehåller id och namn keys och såklart? values?)
// export const getUsers = () => {
//   const users = [
//     { id: 1, name: "Oscar" },
//     { id: 2, name: "Anton" },
//     { id: 3, name: "Jonatan" },
//   ];
//   return users;
// };
// // exportera funktionen

// // 3:
// // Funktion som normalt sett skulle hämta data från en db , (det som finns i db är: users , en array med user objekt, objekten innehåller id och namn keys och såklart? values?)
// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];
// // exportera funktionen
// export default users;

// // Läraren:
function getUsersFromDbCA() {
  return [{ id: 1, name: "Anna" }];
}

// Exporteras så vi kan mocka den i test

module.exports = { getUsersFromDbCA };
