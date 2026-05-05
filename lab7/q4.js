const express = require("express");
const app = express();

app.use(express.json()); // to read JSON body

// 1️⃣ URL Params
app.get("/user/:name", (req, res) => {
  res.send("Hello " + req.params.name);
});

// 2️⃣ Query Params
app.get("/search", (req, res) => {
  res.send("Search for: " + req.query.q);
});

// 3️⃣ Receive data from body (POST)
app.post("/login", (req, res) => {
  const username = req.body.username;
  res.send("Logged in user: " + username);
});

 // Sending data as JSON Response

app.get("/data", (req, res) => {
  res.json({
    application: "Express App",
    version: "1.0",
    status: "Running"
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});