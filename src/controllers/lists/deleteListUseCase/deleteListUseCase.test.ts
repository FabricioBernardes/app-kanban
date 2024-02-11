import DeleteListUseCase from "./deleteListUseCase";
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

describe("DeleteListUseCase", () => {
    it("should delete a list", async () => {
        const id = "1";
        (prisma.list.delete as jest.Mock).mockResolvedValue(true);

        const list = await DeleteListUseCase(id);

        expect(list).toEqual(true);
    });

    it("should return false if list not found", async () => {
        const id = "1";
        (prisma.list.delete as jest.Mock).mockRejectedValue(false);

        const list = await DeleteListUseCase(id);

        expect(list).toBe(false);
    });
});