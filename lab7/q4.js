const express = require("express");

const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.json());

// URL params
app.get("/user/:name", (req, res) => {
  res.send("Hello " + req.params.name);
});

// Query params
app.get("/search", (req, res) => {
  res.send("Search for: " + req.query.q);
});

// JSON request body
app.post("/login", (req, res) => {
  const username = req.body.username;
  res.send("Logged in user: " + username);
});

// JSON response
app.get("/data", (req, res) => {
  res.json({
    application: "Express App",
    version: "1.0",
    status: "Running"
  });
});

app.listen(PORT, () => {
  console.log(`Q4 server running on http://localhost:${PORT}`);
});
