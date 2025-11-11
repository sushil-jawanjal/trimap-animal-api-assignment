import mongoose from "mongoose";

const ConnectionToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection error:", err);
  }
};

export default ConnectionToMongoDB;
