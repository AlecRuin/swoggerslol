import "dotenv/config"
import mongoose from "mongoose";
const CONNECTION = mongoose.connect(process.env.MONGODB_URI)
export default CONNECTION