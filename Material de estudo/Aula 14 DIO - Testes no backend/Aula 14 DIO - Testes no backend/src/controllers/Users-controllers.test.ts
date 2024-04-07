// No caso do teste do controlador, pode-se perceber mais claramente a
// necessidade do uso de mocks, uma vez que o controlador chama uma
// função do "service"

import { UserService } from "../services/Users-services";
import { UserController } from "./Users-controllers";
import { makeMockReq } from "../__mocks__/mockRequest.mock";
import { makeMockRes } from "../__mocks__/mockResponse.mock";
import { Request } from "express";

describe("User Controller", () => {
    //emulação (mock) da classe (métodos e atributos) UserService + utilização de atribuo "Partial" para indicar que apenas 
    //uma parte da classe será instanciada.
    const mockUserService: Partial<UserService> = {
        registAnUser: jest.fn() //jest.fn() indica a emulação de chamada de uma função
    }

    //Mock passado como parametro para o construtor de UserController indicando que o valor do parametro será "como" um 
    //UserService. Desta forma, o atributo (dependencia) "userService" do controlador é "construido" com o objeto mockado.
    const userController = new UserController(mockUserService as UserService); //objeto criado apenas com os métodos service
    //e atributos definidos pelo mock

    const userControllerSemParam = new UserController();//objeto criado com seus atributos e métodos proprios + os services

    it("Deve adicionar usuario", () => {
        const mockReq = makeMockReq({}); //Para testar parametros de query da url
        const mockReqBody = { //Para testar parametros do corpo da requisição
            body: { name: "Felipe" }
        } as Request
        const mockRes = makeMockRes();
        const response = userController.registUser(mockReqBody, mockRes)
        expect(mockRes.state.status).toBe(201) //verifica se a propriedade status da propriedade state do mock tem valor 201
        expect(mockRes.state.json).toMatchObject({ message: "User has been registered." })
    })
})