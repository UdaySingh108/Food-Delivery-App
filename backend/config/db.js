import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    // Connect to MongoDB without deprecated options
    await mongoose.connect('mongodb+srv://singhuday2610:db_pass@cluster0.pax4s.mongodb.net/FoodDeliveryApp');
    console.log("Uday DB connected successfully!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);  // Exit process if connection fails
  }
};
