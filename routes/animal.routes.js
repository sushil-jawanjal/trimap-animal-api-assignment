import express from "express";
import {
  createAnimal,
  deleteAnimal,
  healthyPurchasedAnimal,
  readAnimal,
  singleAnimal,
  updateAnimal,
} from "../controllers/animal.controller.js";
const router = express.Router();

router.post("/create", createAnimal);
router.get("/read", readAnimal);
router.get("/read/single", singleAnimal);
router.patch("/update/:id", updateAnimal);
router.delete("/delete/:id", deleteAnimal);
router.get("/healthy/species", healthyPurchasedAnimal);

export default router;
