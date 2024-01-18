import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("[database]: connection established...");
  } catch (err) {
    if (err instanceof Error) console.log(`[database]: ${err.message}`)
    else console.log(err);
    process.exit(1);
  }
};

export default connectDb;
