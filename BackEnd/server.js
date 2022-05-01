// DEPENDENCIES
// require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const PORT = 5001;

// MIDDLEWARE
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// DB CONNECTION
mongoose.connect("mongodb://localhost:27017/StyleCode");
mongoose.connection.once("open", () => {
  console.log("connected to mongomango");
});


// ROUTER/CONTROLLER
const mainController = require("./controllers/mainController");
app.use("/", mainController)

const Products = require("./models/Product.js");


// Listener
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
