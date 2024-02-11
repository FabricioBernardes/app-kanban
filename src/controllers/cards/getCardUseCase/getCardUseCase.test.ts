import GetListUseCase from "./getCardUseCase";
import { prisma } from "../../../services/prisma/client";

jest.mock("../../../services/prisma/client",() => ({
    prisma: {
        card: {
            findUnique: jest.fn()
        }
    }
}));

describe("GetCardUseCase", () => {
    it("should return card", async () => {
        const card = {
            id: "1",
            title: "Card 1",
            description: "Description 1",
            listId: "1"
        };

        (prisma.card.findUnique as jest.Mock).mockResolvedValue(card);

        const result = await GetListUseCase("1");

        expect(result).toEqual(card);
    });

    it("should return 'Card not found'", async () => {
        (prisma.card.findUnique as jest.Mock).mockResolvedValue(null);

        const result = await GetListUseCase("1");

        expect(result).toEqual("Card not found");
    });

    it("should return false", async () => {
        (prisma.card.findUnique as jest.Mock).mockRejectedValue(new Error());

        const result = await GetListUseCase("1");

        expect(result).toEqual(false);
    });
});