import { Request, Response } from "express";
import { UserService } from "../services/Users-services";

export class LoginController {
    protected userService: UserService

    constructor(userService = new UserService()) {
        this.userService = userService;
    }

    public login = async (req: Request, res: Response) => {
        const { email, password } = req.body;

        try {
            const token = await this.userService.getToken(email, password);

            return res.status(200).json({ token });

        } catch (error) {
            return res.status(400).json({ message: "Invalid credentials." });
        }
    }


}
/*O token é gerado a partir de um método "sign()", que
    recebe três argumentos:
        • tokenData
        • tokenKey
        • tokenOptions
    tempo de 
    expiração (exp), o emissor (issuer/iss) ou assunto(
    subject/sub).        
*/