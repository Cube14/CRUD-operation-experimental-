const express = require("express");
const app = express();

// GET
app.get("/hello", (req, res) => {
  res.send("GET: Hello World");
});

// POST
app.post("/hello", (req, res) => {
  res.send("POST: Hello World");
});

// PUT
app.put("/hello", (req, res) => {
  res.send("PUT: Hello World");
});

// DELETE
app.delete("/hello", (req, res) => {
  res.send("DELETE: Hello World");
});

app.listen(3000, () => {
  console.log("Q3 server running on http://localhost:3000");
});
