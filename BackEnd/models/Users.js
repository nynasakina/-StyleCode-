const mongoose = require("mongoose");
const { Schema } = mongoose;

const UsersSchema = new Schema({
  email: { type: String, type: String, required: true, unique: true },
  password: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  address: { type: String },
  postalCode: { type: Number },
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
