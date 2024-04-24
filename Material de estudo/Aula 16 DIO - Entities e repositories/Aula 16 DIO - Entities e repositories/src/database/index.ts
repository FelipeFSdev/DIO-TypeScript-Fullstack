import { DataSource } from "typeorm";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/dump.sqlite",
    entities: [
        User
    ],
    migrations: [ //convertem parâmetros de uma função em queries SQL para manipular banco de dados
        "./src/database/migrations/*.ts"
    ]
})

AppDataSource.initialize().then(() => {
    console.log("Data Source inicializado")
})
    .catch((error) => {
        console.log(error.message)
    })