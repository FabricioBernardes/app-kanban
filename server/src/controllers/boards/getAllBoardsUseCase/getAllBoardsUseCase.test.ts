import GetAllBoardUseCase from "./getAllBoardsUseCase";
import { prisma } from "../../../services/prisma/client";

jest.mock("../../../services/prisma/client", () =>({
    prisma: {
        board: {
            findMany: jest.fn(),
        },
    },
}));

describe('GetAllBoardUseCase', () => {
    it('should return all boards', async () => {
        const boards = [
            { title: 'Test Board 1' },
            { title: 'Test Board 2' },
        ];

        (prisma.board.findMany as jest.Mock).mockResolvedValueOnce(boards);

        const result = await GetAllBoardUseCase();

        expect(result).toBe(boards);
    });

    it('should return "No boards found" if no boards exist', async () => {
        (prisma.board.findMany as jest.Mock).mockResolvedValueOnce([]);

        const result = await GetAllBoardUseCase();

        expect(result).toEqual('No boards found');
    });

    it('should return false if an error occurs', async () => {
        (prisma.board.findMany as jest.Mock).mockRejectedValueOnce(new Error());

        const result = await GetAllBoardUseCase();

        expect(result).toEqual(false);
    });
});