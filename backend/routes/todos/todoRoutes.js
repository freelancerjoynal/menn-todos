import express from "express"
import userAuthMiddleware from "../../middlewares/userAuth.middleware.js"
import { createTodo, getTodos,updateTodo } from "../../controllers/todos/todosController.js"


const todoRoutes = express.Router()

todoRoutes.post('/create-todo',userAuthMiddleware, createTodo)
todoRoutes.get('/get-todos',userAuthMiddleware, getTodos)
todoRoutes.put('/todos/:id', userAuthMiddleware, updateTodo);


export default todoRoutes
