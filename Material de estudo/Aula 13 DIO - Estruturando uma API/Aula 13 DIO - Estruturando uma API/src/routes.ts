import { Router } from "express";
import { UserController } from "./controllers/Users-controllers";

const userController = new UserController();

export const route = Router();

route.get("/user", userController.listUsers);
route.post("/user", userController.registUser);