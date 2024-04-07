import { IUser, UserService } from "./Users-services"

describe("serviços de usuario", () => {
    const userService = new UserService; //instancia da classe a ser testada
    const mockUsers: IUser[] = [];

    it("registrar usuarios e mostrar no console", () => {
        const mockConsole = jest.spyOn(global.console, "log") //mock/simulação de comportamento/saida do console

        userService.registAnUser("Felipe");//a função de registro, ao ser chamada, deve enviar uma mensagem pelo console

        expect(mockConsole).toHaveBeenCalled(); //espera-se uma chamada ao console
    })
})