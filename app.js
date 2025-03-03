require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 2000;

async function start() {
  app.get("/", (req, res) => {
    res.send("so ok");
  });
  app.listen(PORT, () => {
    console.log(`server run ar https://localhost:${PORT}`);
  });
}
start();
