import mongoose, { Schema } from "mongoose";

const animalSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  species: {
    type: String,
    required: true,
    enum: ["cow", "buffalo", "goat"],
  },
  age: {
    type: Number,
    min: 0,
    max: 100,
  },
  healthStatus: {
    type: String,
    default: "Healthy",
    enum: ["Healthy", "Sick", "Recovering"],
  },
  purchaseDate: {
    type: Date,
    required: true,
  },
  farmLocation: {
    type: String,
    required: true,
  },
});

const Animal = mongoose.model("Animal", animalSchema);
export default Animal;
