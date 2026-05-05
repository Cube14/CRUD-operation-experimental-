const express = require("express");
const app = express();

// Route: /one
app.get("/one", (req, res) => {
  res.send("This is route ONE");
});

// Route: /one/a/b
app.get("/one/a/b", (req, res) => {
  res.send("This is route ONE/A/B");
});

// Route: /two
app.get("/two", (req, res) => {
  res.send("This is route TWO");
});

// Route: /two/a
app.get("/two/a", (req, res) => {
  res.send("This is route TWO/A");
});

app.listen(3000, () => {
  console.log("Q2 server running on http://localhost:3000");
});
