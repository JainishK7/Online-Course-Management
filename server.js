const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const courseRoutes = require("./routes/courseRoutes")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Test route
app.get("/", (req, res) => {
  res.send("Backend running ✅")
})

// Routes
app.use("/api/courses", courseRoutes)

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected ✅")
  app.listen(5000, () => {
    console.log("Server running on port 5000 🚀")
  })
})
.catch(err => {
  console.log("DB Error ❌", err)
})