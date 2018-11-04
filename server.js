const express = require("express");
const path = require("path");
const app = express();

app.use("/-", express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "app.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on http://localhost:${process.env.PORT || 3000}`);
});
