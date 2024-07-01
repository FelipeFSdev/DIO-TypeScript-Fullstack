import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const verifyAuth = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: "Unauthorized." })
    }
    const authToken = authorization.replace("Bearer", "").trim();

    try {
        const { sub } = verify(authToken, "senhaUltraSecret@123456"); //senha do token (tokenKey) deve, por questões de segurança, ser armazenado em um arquivo .env

        return next();

    } catch (error) {
        return res.status(401).json({ message: "Unauthorized." });
    }
}