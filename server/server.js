const mongoose = require("mongoose");
require("dotenv").config();

const mongoDB = require("mongodb://127.0.0.1/hero");

mongoose.connect(mongoDB, { useNewUrlParser: true });

const database = mongoose.connection;

database.on("error", console.error.bind(console, "MongoDB connection error:"));
