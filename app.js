const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("HomePage");
});
app.get("/success", function (req, res) {
  res.render("success");
});
app.post("/success", function (req, res) {
  res.redirect("/");
});
app.post("/", function (req, res) {
  const name = req.body.clientName;
  res.render("success", { userName: name });
});

app.listen(3000, function (req, res) {
  console.log("port on 3000");
});
