import { sign } from "jsonwebtoken";
import { AppDataSource } from "../database";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

export class UserService {
    private userRepository: UserRepository;

    constructor(userRepository = new UserRepository(AppDataSource.manager)) {
        this.userRepository = userRepository;
    };

    public createUser = async (name: string, email: string, password: string): Promise<User> => {
        const user = new User(name, email, password)
        return this.userRepository.createUser(user)
    };

    public getUserById = async (userID: string): Promise<User | null> => {
        return this.userRepository.getUser(userID);
    };

    public getAuthUser = async (email: string, password: string): Promise<User | null> => {
        return this.userRepository.getUserByEmailAndPass(email, password);
    };

    public getToken = async (email: string, password: string): Promise<string> => {
        const user = await this.getAuthUser(email, password);

        if (!user) {
            throw new Error("Invalid credentials.");
        }

        const tokenData = {
            name: user?.name,
            email: user?.email,
        };
        const tokenKey = "senhaUltraSecret@123456";
        const tokenOptions = {
            expiration: "5h",
            subject: user?.id_user,
        }

        const token = sign(tokenData, tokenKey, tokenOptions);

        return token;
    }

} 