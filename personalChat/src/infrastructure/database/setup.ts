import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://personalchat-mongo-srv:27017");
    console.log("[Database] Connection established...");
  } catch (err) {
    console.log(`[database]: ${err}`);
    process.exit(1);
  }
};

export default connectDb;
