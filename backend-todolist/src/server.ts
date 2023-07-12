import { Application, json, urlencoded, Request, Response, NextFunction } from "express";
import http from "http";
import routes from "./controllers/useController";
import { DBConn } from "./db/dbConn";

const SERVER_PORT = 3009;

export class Server{
    private app: Application;

    constructor(app: Application) {
        this.app = app;
    }

    private updateConfigurations() {
        this.app.use(json());
        this.app.use(urlencoded());
    }

    public async start(): Promise<void> {
        try {
            new DBConn();
            this.updateConfigurations();
            this.app.use(routes);
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