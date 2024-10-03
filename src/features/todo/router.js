import express from "express"
import TodoController from "./controller.js"
import auth from "../../middlewares/jwt.js"
const todoRouter = express.Router()
const todoController = new TodoController()

todoRouter.get('/all',(req,res,next)=>todoController.getAllTodos(req,res,next));

todoRouter.post('/post',auth,(req,res,next)=>{
    todoController.addTodo(req,res,next)
})

todoRouter.get('/getone/:id',auth,(req,res,next)=>{
    todoController.getTodo(req,res,next)
})

todoRouter.post('/update/:id',auth,(req,res,next)=>{
    todoController.updateTodo(req,res,next)
})

todoRouter.post('/delete/:id',auth,(req,res,next)=>{
    todoController.deleteTodo(req,res,next)
})

export default todoRouter