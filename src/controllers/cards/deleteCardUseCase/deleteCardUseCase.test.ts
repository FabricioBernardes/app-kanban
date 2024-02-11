import DeleteCardUseCase from "./deleteCardUseCase";
import { prisma } from "../../../services/prisma/client";

jest.mock("../../../services/prisma/client",() => {
    return {
        prisma: {
            list: {
                delete: jest.fn()
            }
        }
    }
});

describe("DeleteCardUseCase", () => {
    it("should delete a card", async () => {
        (prisma.list.delete as jest.Mock).mockResolvedValue({});

        const card = await DeleteCardUseCase("1");

        expect(card).toBeTruthy();
    });

    it("should return false if card not found", async () => {
        (prisma.list.delete as jest.Mock).mockRejectedValue({});

        const card = await DeleteCardUseCase("1");

        expect(card).toBeFalsy();
    });
});