import { Schema, model, Document } from "mongoose";

export interface ITodoItem extends Document {
    _id: Schema.Types.ObjectId;
    title: string;
    description: string;
    due: Date;
}

const TodoItemSchema = new Schema<ITodoItem>({
    _id: { type: Schema.Types.ObjectId},
    title: { type: String , required: true},
    description: { type: String },
    due: { type: Date }
});


export const TodoModel = model<ITodoItem>('Todo', TodoItemSchema);