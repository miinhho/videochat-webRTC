const express = require("express");
const http = require("http");
const path = require("path");
const { v4: uuid } = require("uuid");

function createApp() {
  const app = express();

  app.set("view engine", "ejs");
  app.use(express.static(path.join(__dirname, "public")));

  app.get("/", (req, res) => {
    res.redirect(`/${uuid()}`);
  });

  app.get("/:room", (req, res) => {
    res.render("room", { roomId: req.params.room });
  });

  return http.createServer(app);
}

module.exports = {
  createApp,
};
