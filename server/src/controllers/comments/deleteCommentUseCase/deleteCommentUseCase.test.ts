import DeleteCommentUseCase from "./deleteCommentUseCase";
import { prisma } from "../../../services/prisma/client";

jest.mock("../../../services/prisma/client",() => {
    return {
        prisma: {
            comment: {
                delete: jest.fn()
            }
        }
    }
});

describe("DeleteCommentUseCase", () => {
    it("should delete a comment", async () => {
        const id = "1";
        (prisma.comment.delete as jest.Mock).mockResolvedValue(true);

        const comment = await DeleteCommentUseCase(id);

        expect(comment).toEqual(true);
    });

    it("should return false if list not found", async () => {
        const id = "1";
        (prisma.comment.delete as jest.Mock).mockRejectedValue(false);

        const comment = await DeleteCommentUseCase(id);

        expect(comment).toBe(false);
    });
});