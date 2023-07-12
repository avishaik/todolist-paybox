import { Application, json, urlencoded, Request, Response, NextFunction } from "express";
import http from "http";
import { TodoNotification } from "./todoNotification";
import { Wake } from "./wake";

const SERVER_PORT = 3020;

export class Server{
    private app: Application;

    constructor(app: Application) {
        this.app = app;
    }

    private updateConfigurations() {
        this.app.use(json());
        this.app.use(urlencoded());
    }

    private loadNotifications() {
        const a = new Wake();
        a.addToInterval(new TodoNotification());
    }

    public async start(): Promise<void> {
        try {
            this.updateConfigurations();
            this.loadNotifications();
            const httpServer: http.Server = new http.Server(this.app);
            this.startHttpServer(httpServer);
        } catch(e) {
            console.log(e);
        }
    }

    private startHttpServer(httpServer: http.Server): void {
        httpServer.listen(SERVER_PORT, () => {
            console.log(`Server running on port ${SERVER_PORT}`);
        })
    }
}