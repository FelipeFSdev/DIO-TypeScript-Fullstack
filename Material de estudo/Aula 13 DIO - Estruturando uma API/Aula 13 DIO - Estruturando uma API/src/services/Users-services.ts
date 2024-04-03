const users: Array<string> = ["Joao", "Maria", "Jose", "Antonio", "Antonieta", "Pietra"];

export class UserService {
    public listAllUsers = (): Array<string> => {

        return users;
    };
    public registUser = (name: string): void => {
        users.push(name);
    }
}