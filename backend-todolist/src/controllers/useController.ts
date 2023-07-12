import { Router } from "express";
import { TodoController } from "../todo/todo.controller";

const routes = Router();

routes.use("/todo", new TodoController().getRouter());

export default routes;