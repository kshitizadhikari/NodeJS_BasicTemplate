const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");

const PORT = 3000;
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});

app.post("/", function (req, res) {
  res.send("Posted");
});

app.listen(PORT, () => {
  console.log("Server running at http://localhost:" + PORT);
});
