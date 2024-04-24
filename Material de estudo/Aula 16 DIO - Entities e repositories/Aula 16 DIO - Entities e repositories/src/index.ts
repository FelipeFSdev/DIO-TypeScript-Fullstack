import express from "express";
import { route } from "./routes";
import { AppDataSource } from "./database/index";

const app = express();

AppDataSource.initialize().then(() => {
    console.log("Data Source inicializado")
})
    .catch((error) => {
        console.log(error.message)
    })

app.use(express.json());
app.use(route);

app.listen(3000);