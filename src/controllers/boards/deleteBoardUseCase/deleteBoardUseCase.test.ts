import DeleteBoardUseCase from "./deleteBoardUseCase";
import { prisma } from "../../../services/prisma/client";

jest.mock("../../../services/prisma/client", () => {
    return {
        prisma: {
            board: {
                delete: jest.fn(),
            },
        },
    };
});

describe("DeleteBoardUseCase", () => {
    it("should delete a board", async () => {
        const id = "1";

        (prisma.board.delete as jest.Mock).mockResolvedValue(true);

        const deletedBoard = await DeleteBoardUseCase(id);
        expect(deletedBoard).toBe(true);
    });

    it("should return 'Board not found' if board does not exist", async () => {
        const id = "1";

        (prisma.board.delete as jest.Mock).mockResolvedValue(false);

        try {
            await DeleteBoardUseCase(id);
        } catch (error) {
            expect(error).toBe(false);
        }
    });
});