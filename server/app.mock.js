const express = require('express');

const app = express();

app.get("/lessons", (req, res) => {
  res.send("pong")
});

module.exports = app;