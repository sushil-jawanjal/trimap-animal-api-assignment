import Animal from "../models/animal.model.js";

export const createAnimal = async (req, res) => {
  try {
    const { name, species, age, healthStatus, purchaseDate, farmLocation } =
      req.body;
    if (
      !name ||
      !species ||
      !age ||
      !healthStatus ||
      !purchaseDate ||
      !farmLocation
    ) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const newAnimal = new Animal({
      name,
      species,
      age,
      healthStatus,
      purchaseDate,
      farmLocation,
    });
    await newAnimal.save();
    res.status(201).json(newAnimal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const readAnimal = async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const singleAnimal = async (req, res) => {
  try {
    const animals = await Animal.findOne();
    res.json(animals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const updateAnimal = async (req, res) => {
  try {
    const updated = await Animal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const deleteAnimal = async (req, res) => {
  try {
    await Animal.findByIdAndDelete(req.params.id);
    res.json({ message: "Animal deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const healthyPurchasedAnimal = async (req, res) => {
  try {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const animals = await Animal.find({
      healthStatus: "Healthy", // ✅ match enum case
      purchaseDate: { $gte: sixMonthsAgo }, // last 6 months
    });

    res.json(animals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
