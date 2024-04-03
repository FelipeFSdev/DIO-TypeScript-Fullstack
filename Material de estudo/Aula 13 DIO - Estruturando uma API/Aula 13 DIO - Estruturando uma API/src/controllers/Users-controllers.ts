import { Request, Response } from "express";
import { UserService } from "../services/Users-services";

export class UserController {
    public listUsers = (req: Request, res: Response) => {
        const userService = new UserService();

        return res.status(200).json(userService.listAllUsers())
    }
    public registUser = (req: Request, res: Response) => {
        const userService = new UserService();
        const { name } = req.body;

        userService.registUser(name)

        return res.status(201).json({ message: "User has been registered." });
    }
}