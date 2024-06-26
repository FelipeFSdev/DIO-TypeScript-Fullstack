import { UserService } from "./Users-services";
import * as jwt from "jsonwebtoken";
//Agora que o projeto já está sendo desenvolvido usando banco de dados e orms, os
//testes precisarão ser refatorados.
//Primeiro passo: Mockar o endereço de memória da propriedade "userRepository" da 
//classe UserService utilizando a função jest.mock().

jest.mock("../repositories/UserRepository");
const mockUserRepo = require("../repositories/UserRepository")
//mock de endereço de memória para simular o método .initialize do appdatasource
//do typeORM.
jest.mock("../database", () => {
    initialize: jest.fn()
});
//mock de endereço de memória para simular o funcionamento do jsonwebtoken(jwt)
jest.mock("jsonwebtoken");

describe("serviços de usuario", () => {
    //Com o repository mockado, passa-se o mock para o construtor da clase UserService.
    const userService = new UserService(mockUserRepo);
    const mockUser = {
        id_user: "123",
        name: "Joao",
        email: "pedefeijao@email.com",
        password: "galinhaDeOuro"
    }

    //diferente do teste de repositório, que testa o chamado e o retorno de uma função do repository,
    //o teste do service testa se o objeto userService, nesse caso, está escrito corretamente para que 
    //possa, a partir do chamado de seus métodos no controller, registrar novos usuários no banco.
    it("Deve registrar novo usuário", async () => {
        mockUserRepo.createUser = jest.fn().mockImplementation(() => Promise.resolve(mockUser)); //mock da função createUser criada no userService usando mockImplementation pra simular seu retorno 
        const response = await userService.createUser("joao", "pedefeijao@email.com", "galinhaDeOuro")
        expect(mockUserRepo.createUser).toHaveBeenCalled(); //testando se a função do service tá sendo chamada
        expect(response).toMatchObject({ //testando se o retorno do método ao ser é igual ao retorno esperado
            id_user: "123",
            name: "Joao",
            email: "pedefeijao@email.com",
            password: "galinhaDeOuro"
        })
    })

    it("Deve retornar token de usuário", async () => {
        jest.spyOn(userService, "getAuthUser").mockImplementation(() => Promise.resolve(mockUser));
        jest.spyOn(jwt, "sign").mockImplementation(() => "token"); //mockimplementation verifica todas as chamas e respostas do objeto monitorado 

        const token = await userService.getToken(
            "pedefeijao@email.com", "galinhaDeOuro"
        )

        expect(token).toBe("token");
    })

    it("Deve retornar erro caso não encontre usuário.", async () => {
        jest.spyOn(userService, "getAuthUser").mockImplementation(() => Promise.resolve(null));
        await expect(userService.getToken("email@invalido.com", "senhaInvalida")).rejects.toThrow(new Error("Invalid credentials."));
    })
})