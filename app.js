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
  const reactPlaylist = new collection({
    name: "react",
    age: 24,
    member: true,
  });
  const nodePlaylist = new collection({
    name: "node",
    age: 24,
    member: true,
  });
  const mongoPlaylist = new collection({
    name: "mongo",
    age: 24,
    member: true,
  });
  await collection.insertMany([reactPlaylist, nodePlaylist, mongoPlaylist]);
};

//Function call for creation
//newDoc();

// function to read collection
const getDocument = async () => {
  const result = await collection.find();
  console.log(result);
};

getDocument();
