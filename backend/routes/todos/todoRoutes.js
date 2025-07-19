import express from "express"
import userAuthMiddleware from "../../middlewares/userAuth.middleware.js"
import { createTodo, getTodos,updateTodo, deleteTodo } from "../../controllers/todos/todosController.js"


const todoRoutes = express.Router()

todoRoutes.post('/create-todo',userAuthMiddleware, createTodo)
todoRoutes.get('/get-todos',userAuthMiddleware, getTodos)
todoRoutes.put('/todos/:id', userAuthMiddleware, updateTodo);
todoRoutes.delete('/todos/:id', userAuthMiddleware, deleteTodo);


export default todoRoutes
