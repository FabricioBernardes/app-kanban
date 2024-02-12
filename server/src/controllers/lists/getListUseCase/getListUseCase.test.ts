import GetListUseCase from "./getListUseCase";
import { prisma } from "../../../services/prisma/client";

jest.mock("../../../services/prisma/client",() => ({
    prisma: {
        list: {
            findUnique: jest.fn()
        }
    }
}));

describe("GetListUseCase", () => {
    it("should return a list", async () => {
        const list = {
            id: "1",
            title: "List 1",
            boardId: "1"
        };

        (prisma.list.findUnique as jest.Mock).mockResolvedValueOnce(list);

        const result = await GetListUseCase("1");

        expect(result).toEqual(list);
    });

    it("should return a message when the list is not found", async () => {
        (prisma.list.findUnique as jest.Mock).mockResolvedValueOnce(null);

        const result = await GetListUseCase("1");

        expect(result).toBe("List not found");
    });

    it("should return false when an error occurs", async () => {
        (prisma.list.findUnique as jest.Mock).mockRejectedValueOnce(new Error("Simulated error"));

        const result = await GetListUseCase("1");

        expect(result).toBe(false);
    });
});