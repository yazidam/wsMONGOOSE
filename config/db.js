const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("data base conected");
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = connectDB;
