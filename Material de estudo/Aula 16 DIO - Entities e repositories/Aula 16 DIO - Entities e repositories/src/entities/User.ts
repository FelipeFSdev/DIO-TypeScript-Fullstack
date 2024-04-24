import { Column, Entity, PrimaryColumn } from "typeorm";
import { randomUUID } from "crypto"; //lib nativa para geração de numeros aleatorios

@Entity("users")
export class User {
    @PrimaryColumn({ nullable: false })
    id_user: string

    @Column({ nullable: false })
    name: string

    @Column({ nullable: false })
    email: string

    @Column({ nullable: false })
    password: string

    constructor(name: string, email: string, password: string) {
        this.id_user = randomUUID()
        this.name = name
        this.email = email
        this.password = password
    }
}