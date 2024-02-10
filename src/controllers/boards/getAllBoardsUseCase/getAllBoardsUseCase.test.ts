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

    it('should throw an error if no boards are found', async () => {
        (prisma.board.findMany as jest.Mock).mockResolvedValueOnce([]);

        await expect(GetAllBoardUseCase()).rejects.toThrow(`No boards found`);
    });

    it('should throw an error if an error occurs', async () => {
        (prisma.board.findMany as jest.Mock).mockRejectedValueOnce(new Error('Simulated error'));

        await expect(GetAllBoardUseCase()).rejects.toThrow(`Simulated error`);
    });
});