import {Response } from "express";
import { ITodoItem } from "../../todo/db/todo.model";

export class ResponseMessage {
    ok: boolean
    statusCode: number
    statusText?: string
    err?: Error

    public errorRes(res: Response, error: Error, errMsg: string, statuCode: number): Response {
        console.error(`Error: `, error);
        const resonse = {ok: false, statusCode: statuCode, err: error, statusText: errMsg}; 
        return res.status(statuCode).json(resonse);
    }
    
    public okRes<DataType> (res: Response, statuCode: number, data: DataType) {
        const response= {ok: true, statusCode: statuCode}; 
        return res.status(statuCode).json(response);
    }
}

