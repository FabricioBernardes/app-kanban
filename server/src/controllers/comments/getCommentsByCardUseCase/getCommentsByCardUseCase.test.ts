import GetCommentsByCardUseCase from "./getCommentsByCardUseCase";
import { prisma } from "../../../services/prisma/client";

jest.mock("../../../services/prisma/client", () => ({
    prisma: {
        comment: {
            findMany: jest.fn()
        }
    }
}));

describe("GetCommentsByCardUseCase", () => {
    it("should return comments", async () => {
        const cardId = "1";
        const comments = [
            {
                id: "1",
                content: "Comment 1",
                cardId: "1"
            },
            {
                id: "2",
                content: "Comment 2",
                cardId: "1"
            }
        ];

        (prisma.comment.findMany as jest.Mock).mockResolvedValue(comments);

        const response = await GetCommentsByCardUseCase(cardId);

        expect(response).toEqual(comments);
    });

    it("should return 'Comments not found'", async () => {
        const cardId = "1";

        (prisma.comment.findMany as jest.Mock).mockResolvedValue([]);

        const response = await GetCommentsByCardUseCase(cardId);

        expect(response).toEqual("Comments not found");
    });

    it("should return false", async () => {
        const cardId = "1";

        (prisma.comment.findMany as jest.Mock).mockRejectedValue(new Error());

        const response = await GetCommentsByCardUseCase(cardId);

        expect(response).toEqual(false);
    });
});