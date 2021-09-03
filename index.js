const express = require("express");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  return res.send("Helloasd world");
});

app.listen(port);
