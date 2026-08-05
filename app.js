const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>¡Hola Mundo desde JavaScript!</h1>");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});