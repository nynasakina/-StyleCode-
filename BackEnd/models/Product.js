const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, required: true, unique: true },
  desc: { type: String, required: true },
  img: { type: String, required: true },
  categories: { type: Array },
  size: { type: Array },
  color: { type: Array },
  price: { type: Number, required: true },
});

const Products = mongoose.model("Products", ProductSchema);

module.exports = Products;