// Simulerar en databasförfrågan för att hämta en användare

exports.fetchUserCA = async function (id) {
  // Här skulle du annars anropa en riktig databas
  // Nu simulerar vi ett async-svar, ett "mockat" svar direkt

  return { id, name: "Anna" };
};
