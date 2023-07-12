import { Request, Response } from "express";
import { BaseController } from "../controllers/baseController";
import { ITodoItem } from "./db/todo.model";
import { todoService } from "./db/todo.service";
import { TodoResponseMessage } from "./todo.response";


export class TodoController extends BaseController{
  responseMessage: TodoResponseMessage;
    constructor() {
        super();
        this.responseMessage = new TodoResponseMessage();
    }

    initalizeController() {
        this.router.get("/", async (req: Request, res: Response) => {
            try {
              const todosList: ITodoItem[] = await todoService.getTodos();
              console.log(todosList[0].title);
              this.responseMessage.okRes<ITodoItem[]>(res, 200, todosList );
            } catch (e) {
              this.responseMessage.errorRes(res, e, e.message, 500);
            }
          });

           this.router.post("/", async (req: Request, res: Response) => {
            try{
              if(!req.body) {
                res.sendStatus(400);
              }
              const todoItem = req.body as ITodoItem;
              await todoService.createTodo(todoItem);
              this.responseMessage.okRes<ITodoItem>(res, 200, todoItem);
            } catch(e) {
              this.responseMessage.errorRes(res, e, e.message, 500);
            }
          });

          this.router.post("/update", async (req: Request, res: Response) => {
            try{
              if(!req.body) {
                res.sendStatus(400);
              }
              const todoItem = req.body as ITodoItem;
              await todoService.updateTodo(todoItem);
              this.responseMessage.okRes<ITodoItem>(res, 200, todoItem);
            } catch(e) {
              this.responseMessage.errorRes(res, e, e.message, 500);
            }
          });

          this.router.delete("/", async (req: Request, res: Response) => {
            try{
              if(!req.body) {
                res.sendStatus(400);
              }
              const todoItem = req.body as ITodoItem;
              await todoService.deleteTodo(todoItem);
              this.responseMessage.okRes<ITodoItem>(res, 200, todoItem);
            } catch(e) {
              this.responseMessage.errorRes(res, e, e.message, 500);
            }
          });
    }
}

export default TodoController;