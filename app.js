import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
let app = express();
mongoose
  .connect(process.env.MONGO_URI)
  .then(console.log("connects"))
  .catch((err) => {
    console.log(err);
  });

// create Schema object
const newSchema = new mongoose.Schema([
  {
    name: String,
    age: Number,
    member: {
      type: Boolean,
      default: false,
    },
  },
]);

// create Collection object
const collection = mongoose.model("collection", newSchema);

// create document object

const newDoc = async () => {
  const mydoc = new collection({
    name: "shubham",
    age: 24,
    member: true,
  });
  await mydoc.save();
};

newDoc();
