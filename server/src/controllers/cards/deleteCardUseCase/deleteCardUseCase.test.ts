import DeleteCardUseCase from "./deleteCardUseCase";
import { prisma } from "../../../services/prisma/client";

jest.mock("../../../services/prisma/client",() => {
    return {
        prisma: {
            card: {
                delete: jest.fn()
            }
        }
    }
});

describe("DeleteCardUseCase", () => {
    it("should delete a card", async () => {
        (prisma.card.delete as jest.Mock).mockResolvedValue(true);

        const card = await DeleteCardUseCase("1");

        expect(card).toBeTruthy();
    });

    it("should return false if card not found", async () => {
        (prisma.card.delete as jest.Mock).mockRejectedValue(false);

        const card = await DeleteCardUseCase("1");

        expect(card).toBeFalsy();
    });
});