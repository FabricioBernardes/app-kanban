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

    it('should return "Board not found" if the board does not exist', async () => {
        const id = '1';

        (prisma.board.findUnique as jest.Mock).mockResolvedValueOnce(null);

        const result = await GetBoardUseCase(id);

        expect(result).toEqual('Board not found');
    });

    it('should return false if an error occurs', async () => {
        const id = '1';

        (prisma.board.findUnique as jest.Mock).mockRejectedValueOnce(new Error());

        const result = await GetBoardUseCase(id);

        expect(result).toEqual(false);
    });
});