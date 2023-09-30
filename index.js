const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const User = require("./models/User");
const app = express();
connectDB();
const port = 5000;

// User.create([
//   { firstName: "ahmed", lastName: "mejri", age: 25 },
//   { firstName: "houssem", lastName: "talbi", age: 26 },
//   { firstName: "ali", lastName: "salih", age: 20 },
// ])
//   .then((res) => {
//     console.log("data", res);
//   })
//   .catch((err) => {
//     console.log("errrrr", err);
//   });

// User.find()
//   .then((res) => {
//     console.log("data finded", res);
//   })
//   .catch((err) => {
//     console.log("errrrr", err);
//   });

// const deleteUSer = async () => {
//   const user = await User.findById("65184b528bff6e2f27491d83");
//   if (user) {
//     console.log("deleted user", user);
//     user.deleteOne();
//   }
// };
// deleteUSer();

const updateUSer = async () => {
  const user = await User.findById("65184b528bff6e2f27491d82");
  if (user) {
    console.log("updated user user", user);
    const res = await user.updateOne({
      age: 300,
    });
    console.log("resss", res);
    console.log("testtttt");
    return res;
  }
};
updateUSer();
console.log("test000000000000000000000000000000");

app.listen(port, (err) => {
  err ? console.log("error") : console.log(`server run on port ${port}`);
});
