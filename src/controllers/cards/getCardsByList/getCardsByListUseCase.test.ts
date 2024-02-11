import GetListsByBoardUseCase from "./getCardsByListUseCase";
import { prisma } from "../../../services/prisma/client";

jest.mock("../../../services/prisma/client", () => ({
    prisma: {
        card: {
            findMany: jest.fn()
        }
    }
}));

describe("GetCardsByListUseCase", () => {
    it("should return a list of cards", async () => {
        const listId = "1";
        const cards = [
            {
                id: "1",
                title: "Card 1",
                description: "Description 1",
                position: 1,
                listId: "1"
            },
            {
                id: "2",
                title: "Card 2",
                description: "Description 2",
                position: 2,
                listId: "1"
            }
        ];

        (prisma.card.findMany as jest.Mock).mockResolvedValue(cards);

        const response = await GetListsByBoardUseCase(listId);

        expect(response).toEqual(cards);
    });

    it("should return a message if the list is not found", async () => {
        const listId = "1";

        (prisma.card.findMany as jest.Mock).mockResolvedValue([]);

        const response = await GetListsByBoardUseCase(listId);

        expect(response).toEqual("Cards not found");
    });

    it("should return false if an error occurs", async () => {
        const listId = "1";

        (prisma.card.findMany as jest.Mock).mockRejectedValue(new Error());

        const response = await GetListsByBoardUseCase(listId);

        expect(response).toEqual(false);
    });
});