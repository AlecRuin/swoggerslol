import "dotenv/config"
import mongoose from "mongoose";
const connection = mongoose.connect(process.env.MONGODB_URI)
export default connection