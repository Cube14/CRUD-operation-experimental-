const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// EJS setup
app.set("view engine", "ejs");

// 🔹 MongoDB connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/employeeDB";

mongoose.connect(MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));
// Schema
const employeeSchema = new mongoose.Schema({
  empId: String,
  name: String,
  address: String
});

const Employee = mongoose.model("Employee", employeeSchema);

// 🔹 HOME PAGE (THIS MUST RENDER EJS)
app.get("/", async (req, res) => {
  const employees = await Employee.find();
  res.render("employee", { employees });   // ✅ NOT res.send
});

// INSERT
app.post("/insert", async (req, res) => {
  await Employee.create(req.body);
  res.redirect("/");
});

// UPDATE
app.post("/update", async (req, res) => {
  await Employee.updateOne(
    { empId: req.body.empId },
    { name: req.body.name, address: req.body.address }
  );
  res.redirect("/");
});

// DELETE
app.post("/delete", async (req, res) => {
  await Employee.deleteOne({ empId: req.body.empId });
  res.redirect("/");
});

// SELECT
app.get("/select", async (req, res) => {
  const employees = await Employee.find();
  res.render("employee", { employees });
});

// Server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});