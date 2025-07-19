import express from "express"
import userAuthMiddleware from "../../middlewares/userAuth.middleware.js"
import { createTodo } from "../../controllers/todos/todosController.js"


const todoRoutes = express.Router()

todoRoutes.post('/create-todo',userAuthMiddleware, createTodo)

export default todoRoutes
