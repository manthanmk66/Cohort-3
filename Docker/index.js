const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello Rutvik");
});

app.listen(3000, () => {});
