const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Hero = new Schema({
  id: Number,
  title: String,
  description: String,
  image: String,
  hero: { name: String, id: Number },
});

module.exports = mongoose.model("heroes", Hero);
