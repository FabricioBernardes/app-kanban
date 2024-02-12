import CreateListUseCase from "./createListUseCase";
import { prisma } from "../../../services/prisma/client";

jest.mock("../../../services/prisma/client",() => ({
    prisma: {
        list: {
            create: jest.fn()
        }
    }
}));

describe("CreateListUseCase", () => {
    it("should create a list", async () => {
        const list = {
            title: "List 1",
            boardId: "1"
        };

        (prisma.list.create as jest.Mock).mockResolvedValueOnce(list);

        const result = await CreateListUseCase("List 1", "1");

        expect(result).toEqual(list);
    });

    it("should return false when an error occurs", async () => {
        (prisma.list.create as jest.Mock).mockRejectedValueOnce(new Error("Simulated error"));

        const result = await CreateListUseCase("List 1", "1");

        expect(result).toBe(false);
    });
});