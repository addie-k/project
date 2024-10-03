import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to Mongoose")
    } catch (error) {
        console.log("connection to db failed", error)
    }
}
export default connectDb

