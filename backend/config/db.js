import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Connect to MongoDB without deprecated options
    await mongoose.connect('mongodb+srv://singhuday2610:Uday2610@cluster0.pax4s.mongodb.net/FoodDeliveryApp');
    console.log("Uday DB connected successfully!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);  // Exit process if connection fails
  }
};
