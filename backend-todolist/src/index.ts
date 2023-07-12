import express, { Express } from "express";
import { Server } from "./server";

export class AppServer {
    public initalizeApp(): void {
        const app: Express = express();
        const server: Server = new Server(app);
        server.start();
    }
}


const server = new AppServer();
server.initalizeApp();
