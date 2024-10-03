import TodoModel from "./schema.js";
export default class TodoController{
    async getAllTodos(req,res){
        const todos= await TodoModel.find()
        res.status(200).json(todos)
    }

    async addTodo(req,res){
        const {name,content,status}= req.body
        const todo =  TodoModel({name,content})
        await todo.save()
        res.status(201).json(todo)
    }

    async getTodo(req,res){
        const {id}= req.params
        const todo = await TodoModel.find({_id:id})
        res.status(202).json(todo)
        
    }

    async updateTodo(req,res){
        const {name,content,status}= req.body;
        const id = req.params.id
        const todo = await TodoModel.findByIdAndUpdate({_id:id},{name,content,status},{ new: true })
        res.status(201).json(todo)
    }

    async deleteTodo(req,res){
        const id = req.params.id
        const result =await TodoModel.findByIdAndDelete(id)
        res.status(203).json(result)
    }
}