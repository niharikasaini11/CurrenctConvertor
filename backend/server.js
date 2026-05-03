import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import conversionRoute from './routes/conversionRoutes.js';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', conversionRoute);
app.use('/api', conversionRoute);
app.get("/", (req, res) => {
  res.send("API working");
});

connectDB().then(() => {
    app.listen(5000, () => {
        console.log("Server is running at port 5000");
    });
}).catch((err) => {
    console.log(err);
})