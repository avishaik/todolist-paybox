import { ResponseMessage } from "../utils/responseMessages/responseMessage"
import { ITodoItem } from "./db/todo.model"

export class TodoResponseMessage extends ResponseMessage {
    todoItem?: ITodoItem
    todoList?: ITodoItem[]
}