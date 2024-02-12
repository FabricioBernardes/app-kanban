import CreateBoardUseCase from './createBoardUseCase';
import { prisma } from "../../../services/prisma/client";

jest.mock("../../../services/prisma/client", () => ({
    prisma: {
        board: {
            create: jest.fn(),
        },
    },
}));

describe('CreateBoardUseCase', () => {
    it('should create a board with the given title', async () => {
        const title = 'Test Board';

        (prisma.board.create as jest.Mock).mockResolvedValueOnce({ title });

        const result = await CreateBoardUseCase(title);

        expect(result).toBe(true);
    });

    it('should return false if an error occurs', async () => {
        const title = 'Test Board';

        (prisma.board.create as jest.Mock).mockRejectedValueOnce(new Error('Simulated error'));

        const result = await CreateBoardUseCase(title);

        expect(result).toBe(false);
    });
});
