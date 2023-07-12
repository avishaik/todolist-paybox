import { ITodoItem } from './../../backend-todolist/src/todo/db/todo.model';
import axios ,{ AxiosInstance } from "axios";

export class TodoNotification implements NotificationService {
    requestInstance: AxiosInstance = axios.create({
        baseURL: "",
        timeout: 15000,
    });
    constrcutor() {
        
    }
    sendNotification(/*userId: number, message: string*/): void {
        throw new Error("Method not implemented.");
    }
    async processNotification(): Promise<void> {
        const todoList = await this.requestInstance.get<ITodoItem[]>("");
        const todoListData = todoList.data;
        if(!todoListData) {
            console.log("no todos");
            return;
        }
        for(let todoItem of todoListData) {
            if(todoItem.due.getDate() >= Date.now()) {
                this.sendNotification();
            }
        }
    }

}