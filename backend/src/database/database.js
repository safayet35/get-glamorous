import mongoose from "mongoose";
import _config from "../config.js";



let isConnected = false; // Track the connection state

const connectDb = async () => {
  try {
    if (isConnected) {
      console.log("MongoDB already connected");
      return;
    }

    const db = await mongoose.connect(_config.mongodb_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    isConnected = db.connections[0].readyState;
    console.log("MongoDB connected successfully");
  } catch (e) {
    console.error("MongoDB connection error", e);
    process.exit(1);
  }
};

export default connectDb;
