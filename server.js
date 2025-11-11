import env from "dotenv";
env.config();
import express from "express";
import morgan from "morgan";
import cors from "cors";
import ConnectionToMongoDB from "./config/db.js";
import animalRoutes from "./routes/animal.routes.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

ConnectionToMongoDB();

app.use("/api/animals", animalRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to TriMap Animal API 🐄");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is successfully running on http://localhost:${PORT}`);
});
