const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bot en ligne depuis Glitch !");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Votre keep_alive tourne sur le port " + listener.address().port);
});