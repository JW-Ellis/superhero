const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema setup
const Hero = new Schema({
  id: Number,
  title: String,
  description: String,
  image: String,
  hero: { name: String, id: Number },
});

module.exports = mongoose.model("heroes", Hero);
