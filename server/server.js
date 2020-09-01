const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");

//server setup
const PORT = process.env.PORT || 5000;

const router = require("./router");
const database = require("./api");

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

database.on("error", console.error.bind(console, "MongoDB connection error:"));

//database routes
app.use(router);
app.use("/api", router);

//sets up image path
app.use(express.static("public"));

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
