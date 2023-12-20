import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());

app.listen(process.env.PORT || 5000, "0.0.0.0", () => {
  console.log("running on http://0.0.0.0:5000");
});
