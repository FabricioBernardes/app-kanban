import GetListsByBoardUseCase from "./getListsByBoardUseCase";
import { prisma } from "../../../services/prisma/client";

jest.mock("../../../services/prisma/client", () => ({
    prisma: {
        list: {
            findMany: jest.fn()
        }
    }
}));

describe('GetListsByBoardUseCase', () => {
    it("should return 'Lists not found' if board don't exists", async () => {
        (prisma.list.findMany as jest.Mock).mockResolvedValue([]);
        const response = await GetListsByBoardUseCase('boardId');
        expect(response).toBe('Lists not found');
    });

    it('should return lists if the conditions are ready', async () => {
        (prisma.list.findMany as jest.Mock).mockResolvedValue([{ id: 'id', title: 'title', boardId: 'boardId' }]);
        const response = await GetListsByBoardUseCase('boardId');
        expect(response).toEqual([{ id: 'id', title: 'title', boardId: 'boardId' }]);
    });

    it('should return false if an error occurs', async () => {
        (prisma.list.findMany as jest.Mock).mockRejectedValue(new Error());
        const response = await GetListsByBoardUseCase('boardId');
        expect(response).toBe(false);
    });
});