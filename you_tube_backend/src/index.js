// require('dotenv').config({path:'./env'})
import mongoose from "mongoose";
import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is ready at port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Mongo DB connection failed !!! ", error);
  });

// first approact
// import express from "express";
// const app = express();
// async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERRR : ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error :", error);
//     throw err;
//   }
// };
