// No caso do teste do controlador, pode-se perceber mais claramente a
// necessidade do uso de mocks, uma vez que o controlador chama uma
// função do "service"

import { UserService } from "../services/Users-services";
import { UserController } from "./Users-controllers";
import { makeMockReq } from "../__mocks__/mockRequest.mock";
import { makeMockRes } from "../__mocks__/mockResponse.mock";
import { Request } from "express";

const mockUserService = {
    createUser: jest.fn(),
    getUserById: jest.fn(),
};

jest.mock("../services/Users-services", () => {//Este mock de endereço de memória é realizado para mockar 
    return {                                  //um método específico da classe service (UserService), assim,
        UserService: jest.fn().mockImplementation(() => { //quando o objeto controller for criado, o construtor
            return mockUserService                                  //irá implementar a propriedade userService com este mock
        })
    }
});

describe("User Controller", () => {
    const userController = new UserController();
    const mockRes = makeMockRes();

    it("Deve adicionar usuario", () => {
        const mockReq = makeMockReq({});
        const mockReqBody = {
            body: {
                name: "joao",
                email: "pedefeijao@email.com",
                password: "galinhaDeOuro",
            }
        } as Request
        userController.createUser(mockReqBody, mockRes)
        expect(mockRes.state.status).toBe(201)
        expect(mockRes.state.json).toMatchObject({ message: "User has been registered." })
    });
    it("Deve retornar erro caso usuario não informe email", () => {
        const mockReq = {
            body: {
                name: "joao",
                email: "",
                password: "galinhaDeOuro"
            }
        } as Request;
        userController.createUser(mockReq, mockRes)
        expect(mockRes.state.status).toBe(400)
        expect(mockRes.state.json).toMatchObject({ message: "Bad request. Inform all text fields to create an user." })
    });
    it("Deve retornar erro caso usuario não informe name", () => {
        const mockReq = {
            body: {
                name: "",
                email: "pedefeijao@email.com",
                password: "galinhaDeOuro"
            }
        } as Request;
        userController.createUser(mockReq, mockRes)
        expect(mockRes.state.status).toBe(400)
        expect(mockRes.state.json).toMatchObject({ message: "Bad request. Inform all text fields to create an user." })
    });
    it("Deve retornar erro caso usuario não informe password", () => {
        const mockReq = {
            body: {
                name: "joao",
                email: "pedefeijao@email.com",
                password: ""
            }
        } as Request;
        userController.createUser(mockReq, mockRes)
        expect(mockRes.state.status).toBe(400)
        expect(mockRes.state.json).toMatchObject({ message: "Bad request. Inform all text fields to create an user." })
    });
    it("Deve retornar registro de usuario com o userId informado", () => {
        const mockReq = makeMockReq({
            params: {
                userId: "123",
            },
        });
        userController.getUserById(mockReq, mockRes);

        expect(mockUserService.getUserById).toHaveBeenCalledWith("123");
        expect(mockRes.state.status).toBe(200);
    });
})