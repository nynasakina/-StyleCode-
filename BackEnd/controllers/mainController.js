const express = require("express");

const router = express.Router();
const cors = require("cors");
const Users = require("../models/Users");
const bcrypt = require("bcrypt");
const Product = require("../models/Product");

// creating new User
router.post("/create", async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 12);
    res.json({ status: "ok", message: "user created" });
  } catch (error) {
    console.log(error);
    res.status(401).json("Error");
  }
  const newUsers = new Users({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    postalCode: req.body.postalCode,
  });
  await newUsers.save();
  res.json("user saved");
});

//user Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email });

  if (user === null) {
    return res.status(401).json("No email found");
  }

  const result = await bcrypt.compare(email, user.password);
  if (result) {
    req.session.currentUser = user.email;
    req.session.userId = user.id;
    res.json({ status: "ok", message: "user logged in" });
  } else {
    // req.session.currentUser = null;
    // req.session.userId = null;
    res.status(401).json("Error");
  }
});

//Create New Products
router.post("/newproduct", async (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    desc: req.body.desc,
    img: req.body.img,
    categories: req.body.categories,
    size: req.body.size,
    color: req.body.color,
    price: req.body.price,
  });
  await newProduct.save();
  res.json("product added");
});

// Find Products by Category
router.get("/:category", async (req, res) => {
  try {
    const products = await Product.find({ categories: req.params.category });
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(401).json(error);
  }
});

// Find All Products
router.get("/product/all", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(401).json(error.message);
  }
});

// Find Products by _id
router.get("/productdetails/:id", async (req, res) => {
  let productId = req.params.id;
  try {
    const productById = await Product.findOne({ _id: { $in: productId } });
    res.json(productById);
  } catch (error) {
    console.log(error);
    res.status(401).json(error.message);
  }
});

module.exports = router;
