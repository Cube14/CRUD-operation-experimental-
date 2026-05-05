const express = require("express");

const app = express();
const PORT = process.env.PORT || 3003;

app.get("/hello", (req, res) => {
  res.send("GET: Hello World");
});

app.post("/hello", (req, res) => {
  res.send("POST: Hello World");
});

app.put("/hello", (req, res) => {
  res.send("PUT: Hello World");
});

app.delete("/hello", (req, res) => {
  res.send("DELETE: Hello World");
});

app.listen(PORT, () => {
  console.log(`Q3 server running on http://localhost:${PORT}`);
});
