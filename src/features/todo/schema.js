import mongoose from "mongoose"
const todoSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['completed','pending'],
        default:'pending'
    }
})
const TodoModel = mongoose.model("todo", todoSchema)
export default TodoModel