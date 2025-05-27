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
