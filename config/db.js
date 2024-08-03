import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Connected to MongoDB Database : ${connection.Connection.host}`
    );
  } catch (error) {
    console.log(`Error in MongoDB connection : ${error}`);
  }
};

export default connectDB;
