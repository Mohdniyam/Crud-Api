// Import required modules
import mongoose from "mongoose";
// const mongoose = require("mongoose");

// Define schema for User collection
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
});



// Create User model from schema and export it
// module.exports = { userSchema };
export default mongoose.model("User", userSchema);
