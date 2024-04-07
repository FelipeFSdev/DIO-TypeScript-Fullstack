export interface IUser {
    name: string,
}

const users: Array<IUser> = [{
    name: "joão",
}];

export class UserService {
    users: IUser[]

    constructor(database = users) {
        this.users = database
    }

    public listAllUsers = (): Array<IUser> => {

        return this.users;
    };
    public registAnUser = (name: string): void => {
        const user = {
            name
        }
        this.users.push(user);
        console.log(user, this.users)
    }
}