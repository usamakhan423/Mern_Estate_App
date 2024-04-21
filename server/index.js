import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_DB_URI_KEY)
  .then(() => {
    console.log("Database has been connected successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, console.log("Server running on 3000"));
