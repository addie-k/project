import express from "express"
import TodoController from "./controller.js"
const todoRouter = express.Router()
const todoController = new TodoController()

todoRouter.get('/all',(req,res,next)=>todoController.getAllTodos(req,res,next));

todoRouter.post('/post',(req,res,next)=>{
    todoController.addTodo(req,res,next)
})

todoRouter.get('/getone/:id',(req,res,next)=>{
    todoController.getTodo(req,res,next)
})

todoRouter.post('/update/:id',(req,res,next)=>{
    todoController.updateTodo(req,res,next)
})

export default todoRouter