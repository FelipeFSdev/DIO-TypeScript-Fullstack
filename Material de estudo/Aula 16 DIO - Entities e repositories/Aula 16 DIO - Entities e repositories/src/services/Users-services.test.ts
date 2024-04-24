import { UserService } from "./Users-services"

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

describe("serviços de usuario", () => {
    //Com o repository mockado, passa-se o mock para o construtor da clase UserService.
    const userService = new UserService(mockUserRepo);

    //diferente do teste de repositório, que testa o chamado e o retorno de uma função do repository,
    //o teste do service testa se o objeto userService, nesse caso, está escrito corretamente para que 
    //possa, a partir do chamado de seus métodos no controller, registrar novos usuários no banco.
    it("Deve registrar novo usuário", async () => {
        mockUserRepo.createUser = jest.fn().mockImplementation(() => Promise.resolve({
            id_user: "123",
            name: "Joao",
            email: "pedefeijao@email.com",
            password: "galinhaDeOuro"
        })); //mock da função createUser criada no userService usando mockImplementation pra simular seu retorno 
        const response = await userService.createUser("joao", "pedefeijao@email.com", "galinhaDeOuro")
        expect(mockUserRepo.createUser).toHaveBeenCalled(); //testando se a função do service tá sendo chamada
        expect(response).toMatchObject({ //testando se o retorno do método ao ser é igual ao retorno esperado
            id_user: "123",
            name: "Joao",
            email: "pedefeijao@email.com",
            password: "galinhaDeOuro"
        })
    })
})