import CreateListUseCase from "./createCommentUseCase";
import { prisma } from "../../../services/prisma/client";

jest.mock("../../../services/prisma/client",() => ({
    prisma: {
        comment: {
            create: jest.fn()
        }
    }
}));

describe('CreateCommentUseCase', () => {
    it('should create a comment', async () => {
        const content = 'comment content';
        const cardId = 'cardId';

        const comment = {
            id: 'commentId',
            content: content,
            cardId: cardId
        };

        (prisma.comment.create as jest.Mock).mockResolvedValue(comment);

        const result = await CreateListUseCase(content, cardId);

        expect(result).toEqual(comment);
    });

    it('should return false if an error occurs', async () => {
        const content = 'comment content';
        const cardId = 'cardId';

        (prisma.comment.create as jest.Mock).mockRejectedValue(new Error());

        const result = await CreateListUseCase(content, cardId);

        expect(result).toBe(false);
    });
});