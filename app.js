import dotenv from "dotenv"
dotenv.config()
import express from "express"
import connectDb from "./src/config/mongoose.js"
import todoRouter from "./src/features/todo/router.js"
import userRouter from "./src/features/user/router.js"
const app = express()
app.use(express.json());

app.use("/api/todo",todoRouter)
app.use("/api/user",userRouter)

app.listen(process.env.PORT,()=>{
    console.log('server listening at : ',process.env.PORT);
    connectDb()
})