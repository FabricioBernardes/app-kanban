import UpdateCommentUseCase from "./updateCommentUseCase";
import { prisma } from "../../../services/prisma/client";

jest.mock('../../../services/prisma/client', () => {
    return {
        prisma: {
            comment: {
                update: jest.fn()
            }
        }
    }
})

describe("UpdateCommentUseCase", () => {
    it("should return updated comment", async () => {
        const commentId = "1";
        const newContent = "New content";
        const comment = {
            id: "1",
            content: "New content",
            cardId: "1"
        };

        (prisma.comment.update as jest.Mock).mockResolvedValue(comment);

        const response = await UpdateCommentUseCase(commentId, newContent);

        expect(response).toEqual(comment);
    });

    it("should return false", async () => {
        const commentId = "1";
        const newContent = "New content";

        (prisma.comment.update as jest.Mock).mockRejectedValue(new Error());

        const response = await UpdateCommentUseCase(commentId, newContent);

        expect(response).toEqual(false);
    });
});