// Enkel function som adderar(+) 2 tal.

// Enkel function som multiplicerar(*) 2 tal.

// Exportera bägge funktioner.

// Lösning/försök till lösning från grupp 1
// function add(a, b) {
//   return a + b;
// }
// module.exports = { add };
// // 2:
// // Enkel function som adderar(+) 2 tal.
// export const add = (a, b) => a + b;
// // Enkel function som multiplicerar(*) 2 tal.
// export const multiply = (a, b) => a * b;
// // Exportera bägge funktioner.

// // 3:
// export function multiply(a, b) {
//   return a * b;
// }

// export function multiply(a, b) {
//   return a * b;
// }

// Läraren:
// Enkel funktion som adderar två tal
function addCA(a, b) {
  return a + b;
}

// Enkel funktion som multiplicerar två tal
function multiplyCA(a, b) {
  return a * b;
}
// Exportera båda funktionerna så de kan testas i math.test.js

module.exports = { addCA, multiplyCA };
