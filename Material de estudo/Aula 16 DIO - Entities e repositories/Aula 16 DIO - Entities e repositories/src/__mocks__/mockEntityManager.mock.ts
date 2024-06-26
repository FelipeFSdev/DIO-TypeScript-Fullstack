import { EntityManager } from "typeorm";

interface IMockManagerArgs {
    saveReturn?: object | [object]
    findOneReturn?: object
}

export const mockGetManager =
    async ({
        saveReturn = undefined,
        findOneReturn = undefined
    }: IMockManagerArgs): Promise<EntityManager> => {
        const manager: Partial<EntityManager> = {};

        manager.save = jest.fn().mockImplementation(() =>
            Promise.resolve(saveReturn)
        )
        manager.findOne = jest.fn().mockImplementation(() =>
            Promise.resolve(findOneReturn)
        )

        return manager as EntityManager;
    }