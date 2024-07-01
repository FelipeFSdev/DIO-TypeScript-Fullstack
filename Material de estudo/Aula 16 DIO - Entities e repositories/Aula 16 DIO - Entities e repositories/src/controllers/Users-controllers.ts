import { Request, Response } from "express";
import { UserService } from "../services/Users-services";

export class UserController {
    userService: UserService

    constructor(userService = new UserService()) {
        this.userService = userService
    }

    public createUser = (req: Request, res: Response): Response => {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Bad request. Inform all text fields to create an user." })
        }
        this.userService.createUser(name, email, password)
        return res.status(201).json({ message: "User has been registered." });
    }

    public getUserById = async (req: Request, res: Response) => {
        const { userId } = req.params;

        try {
            const user = await this.userService.getUserById(userId);

            return res.status(200).json({ user });

        } catch (error) {

        }

    }
}