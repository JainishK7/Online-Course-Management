const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
  title: String,
  instructor: String,
  price: Number,
  category: String,
  image: String,
  description: String,
  rating: Number,
  students: Number
})

module.exports = mongoose.model("Course", courseSchema)