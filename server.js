import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

connectDB;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send({
    message: "Hello world",
  });
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`server running on ${port}`));
