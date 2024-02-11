import { prisma } from "../../../services/prisma/client";

async function GetListUseCase(id: string) {

    try {
        const list = await prisma.list.findUnique({
            where: {
                id: id
            }
        })

        if (!list) {
            return "List not found"
        }

        return list
    } catch (error) {
        return false
    }
}

export default GetListUseCase;
