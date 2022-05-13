import { Application } from "express";
import { UserController } from "../controllers/UserController";

export class UserRoutes {
    controller = new UserController();
    registerRoutes(app: Application) {
        app.post('/register', this.controller.registerUser)
    }


}