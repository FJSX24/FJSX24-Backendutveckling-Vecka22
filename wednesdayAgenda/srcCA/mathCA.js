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
