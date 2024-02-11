import UpdateListUseCase from "./updateListUseCase";
import { prisma } from "../../../services/prisma/client";

jest.mock('../../../services/prisma/client', () => {
    return {
        prisma: {
            list: {
                update: jest.fn()
            }
        }
    }
})

describe('UpdateListUseCase', () => {
    it('should update a list', async () => {
        (prisma.list.update as jest.Mock).mockResolvedValue({ id: '1', title: 'List 1' })

        const list = await UpdateListUseCase('1', 'List 1');

        expect(list).toEqual({ id: '1', title: 'List 1' });
    });

    it('should return false if list not found', async () => {
        (prisma.list.update as jest.Mock).mockRejectedValue(false)

        const list = await UpdateListUseCase('1', 'List 1');

        expect(list).toEqual(false);
    });
});