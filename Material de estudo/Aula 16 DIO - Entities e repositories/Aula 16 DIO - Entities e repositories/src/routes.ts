import { Router } from "express";
import { UserController } from "./controllers/Users-controllers";
import { verifyAuth } from "./middleware/verifyAuth";

const userController = new UserController();

export const route = Router();

route.get("/user/:userId", verifyAuth, userController.getUserById);
route.post("/user", userController.createUser);