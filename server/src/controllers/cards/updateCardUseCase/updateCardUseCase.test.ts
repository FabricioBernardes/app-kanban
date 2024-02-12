import UpdateCardUseCase from "./updateCardUseCase";
import { prisma } from "../../../services/prisma/client";

jest.mock('../../../services/prisma/client', () => {
    return {
        prisma: {
            card: {
                update: jest.fn()
            }
        }
    }
})

describe("UpdateCardUseCase", () => {
    it("should return card", async () => {
        const card = {
            id: "1",
            title: "Card 1",
            description: "Description 1",
            listId: 1
        };

        (prisma.card.update as jest.Mock).mockResolvedValue(card);

        const result = await UpdateCardUseCase("1", "Card 1", "Description 1", 1);

        expect(result).toEqual(card);
    });

    it("should return false", async () => {
        (prisma.card.update as jest.Mock).mockRejectedValue(new Error());

        const result = await UpdateCardUseCase("1", "Card 1", "Description 1", 1);

        expect(result).toEqual(false);
    });
});