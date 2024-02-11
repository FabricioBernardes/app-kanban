import { prisma } from "../../../services/prisma/client";

async function GetListsByBoardUseCase(boardId: string) {
    
    try {
        const lists = await prisma.list.findMany({
            where: {
                boardId: boardId
            }
        })

        if (lists.length === 0) {
            return "Lists not found"
        }

        return lists
    } catch (error) {
        return false
    }
}

export default GetListsByBoardUseCase;
