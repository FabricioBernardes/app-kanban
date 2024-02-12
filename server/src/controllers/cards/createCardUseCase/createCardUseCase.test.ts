import CreateCardUseCase from './createCardUseCase';
import { prisma } from "../../../services/prisma/client";

jest.mock("../../../services/prisma/client", () => ({
    prisma: {
        card: {
            create: jest.fn(),
        },
    },
}));

describe('CreateCardUseCase', () => {
    it('should create a card', async () => {
        const title = 'Title';
        const description = 'Description';
        const position = 1;
        const listId = 'listId';

        const card = {
            id: 'id',
            title,
            description,
            position,
            listId,
        };

        (prisma.card.create as jest.Mock).mockResolvedValue(card);

        const result = await CreateCardUseCase(title, description, position, listId);

        expect(result).toEqual(card);
    });

    it('should return false if an error occurs', async () => {
        const title = 'Title';
        const description = 'Description';
        const position = 1;
        const listId = 'listId';

        (prisma.card.create as jest.Mock).mockRejectedValue(new Error());

        const result = await CreateCardUseCase(title, description, position, listId);

        expect(result).toBeFalsy();
    });
});