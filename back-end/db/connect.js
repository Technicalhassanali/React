const mongoose = require("mongoose");
uri = process.env.MONGODB_URI;

const db = (req, res) => {
  return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  // mongoose.connection.on("connected", () => {
  //   console.log("Mongoose is connected!!!!");
  // });
};

module.exports = db;