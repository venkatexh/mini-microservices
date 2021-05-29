const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/posts", (req, res) => {});

app.post("/events", (req, res) => {});

const PORT = 4002;

app.listen(PORT, () => {
  console.log("Listening on 4002...");
});
