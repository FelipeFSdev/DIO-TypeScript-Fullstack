import { Request, Response } from "express";
import { UserService } from "../services/Users-services";

export class UserController {
    userService: UserService //por se tratar de uma classe instanciada multiplas vezes em diferentes métodos, pode ser feita 
    // a criação de uma propriedade do tipo da classe em questão, simplificando o código e injetando dependência para testes

    constructor(userService = new UserService()) {
        this.userService = userService
    }//o atributo será definido por padrão como uma instância da classe UserService

    public listUsers = (req: Request, res: Response) => {

        return res.status(200).json(this.userService.listAllUsers())
    }
    public registUser = (req: Request, res: Response) => {
        const { name } = req.body;

        this.userService.registAnUser(name)

        return res.status(201).json({ message: "User has been registered." });
    }
}