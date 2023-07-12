import express, { Express } from "express";
import { Server } from "./server";

export class NotificationServer {
    public initalizeApp(): void {
        const app: Express = express();
        const server: Server = new Server(app);
        server.start();
    }
}


const server = new NotificationServer();
server.initalizeApp();
