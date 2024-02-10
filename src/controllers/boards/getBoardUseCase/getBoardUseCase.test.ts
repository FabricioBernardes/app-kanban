import GetBoardUseCase from "./getBoardUseCase"
import { prisma } from "../../../services/prisma/client";

jest.mock("../../../services/prisma/client", () => ({
    prisma: {
        board: {
            findUnique: jest.fn(),
        },
    },
}));

describe('GetBoardUseCase', () => {
    it('should return the board with the given id', async () => {
        const id = '1';

        (prisma.board.findUnique as jest.Mock).mockResolvedValueOnce({ title: 'Test Board' });

        const result = await GetBoardUseCase(id);

        expect(result).toEqual({ title: 'Test Board' });
    });

    it('should throw an error if the board is not found', async () => {
        const id = '1';

        (prisma.board.findUnique as jest.Mock).mockResolvedValueOnce(null);

        await expect(GetBoardUseCase(id)).rejects.toThrow(`Board with title '${id}' not found`);
    });

    it('should throw an error if an error occurs', async () => {
        const id = '1';

        (prisma.board.findUnique as jest.Mock).mockRejectedValueOnce(new Error('Simulated error'));

        await expect(GetBoardUseCase(id)).rejects.toThrow('Simulated error');
    });
});