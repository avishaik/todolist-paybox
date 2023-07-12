import { Router, Application } from "express";

export abstract class BaseController {
    protected router = Router();

    constructor() {
        this.router = Router();
        this.initalizeController();
    }

    abstract initalizeController(): void;

    public getRouter(): Router {
        return this.router;
    }

}