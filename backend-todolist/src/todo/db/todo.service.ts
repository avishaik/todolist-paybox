import { TodoModel, ITodoItem } from "./todo.model";

export class TodoService {
    public async getTodos(): Promise<ITodoItem[]> {
        try {
            const todos: ITodoItem[] = await TodoModel.find();
            return todos;
        } catch(e) {
            console.log(`failed to retrieve due to: ${e.message}`)
        }
    }

    public async createTodo(todoItem: ITodoItem): Promise<void> {
        try {
            await TodoModel.create(todoItem);
        } catch(e) {
            console.log(`failed to save todo due to: ${e.message}`)
        }
    }

    public async updateTodo(todoItem: ITodoItem): Promise<void> {
        try {
            await TodoModel.findByIdAndUpdate({ _id: todoItem._id }, todoItem, { new: true });
        } catch(e) {
            console.log(`failed to save todo due to: ${e.message}`)
        }
    }

    public async deleteTodo(todoItem: ITodoItem): Promise<void> {
        try {
            await TodoModel.deleteOne({ _id: todoItem._id });
        } catch(e) {
            console.log(`failed to save todo due to: ${e.message}`)
        }
    }

}

export const todoService = new TodoService();