const mongoose = require("mongoose");
require("dotenv").config();

const connection = process.env.MONGODB_URI || "mongodb://127.0.0.1/hero";

//database setup
mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .catch((e) => {
    console.log("Connection error", e.message);
  });

const database = mongoose.connection;

module.exports = database;
