const express = require("express");

const app = express();
const PORT = process.env.PORT || 3002;

app.get("/one", (req, res) => {
  res.send("This is route ONE");
});

app.get("/one/a/b", (req, res) => {
  res.send("This is route ONE/A/B");
});

app.get("/two", (req, res) => {
  res.send("This is route TWO");
});

app.get("/two/a", (req, res) => {
  res.send("This is route TWO/A");
});

app.listen(PORT, () => {
  console.log(`Q2 server running on http://localhost:${PORT}`);
});
