import { EntityManager } from "typeorm";
import { mockGetManager } from "../__mocks__/mockEntityManager.mock";
import { User } from "../entities/User";
import { UserRepository } from "./UserRepository";

describe("UserRepository", () => {
    let userRepository: UserRepository;
    let mockManager: Partial<EntityManager>

    const mockUser: User = {
        id_user: "123",
        name: "Joao",
        email: "pedefeijao@email.com",
        password: "galinhaDeOuro"
    }

    beforeAll(async () => {
        mockManager = await mockGetManager({
            saveReturn: mockUser
        });
        userRepository = new UserRepository(mockManager as EntityManager);
    })

    it("Deve cadastrar um novo usuário", async () => {
        const response = await userRepository.createUser(mockUser);
        expect(mockManager.save).toHaveBeenCalled();
        expect(response).toMatchObject(mockUser)
    })
})