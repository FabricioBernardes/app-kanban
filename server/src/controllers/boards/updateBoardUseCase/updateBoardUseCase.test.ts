import UpdateBoardUseCase from "./updateBoardUseCase";
import { prisma } from "../../../services/prisma/client";

jest.mock("../../../services/prisma/client", () => {
    return {
        prisma: {
            board: {
                update: jest.fn(),
            },
        },
    };
});

describe("UpdateBoardUseCase", () => {
    it("should update a board", async () => {
        const id = "1";
        const title = "New title";

        (prisma.board.update as jest.Mock).mockResolvedValue({ id, title });

        const board = await UpdateBoardUseCase(id, title);

        expect(board).toEqual({ id, title });
    });

    it("should throw an error when an exception occurs", async () => {
        const id = "1";
        const title = "New title";

        (prisma.board.update as jest.Mock).mockRejectedValue(new Error("Failed to update board"));

        try {
            await UpdateBoardUseCase(id, title);
        } catch (error) {
            expect(false)
        }
    });
});