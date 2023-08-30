const mongoose = require("mongoose");

const kittySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified:{
    type: Boolean,
    default: false,
  },
},{timestamps:true});
const signupModel = mongoose.model("user", kittySchema);
module.exports = signupModel;
