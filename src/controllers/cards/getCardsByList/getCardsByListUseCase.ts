import { prisma } from "../../../services/prisma/client";

async function GetCardsByListUseCase(listId: string) {
    
    try {
        const card = await prisma.card.findMany({
            where: {
                listId: listId
            }
        })

        if (card.length === 0) {
            return "Cards not found"
        }

        return card
    } catch (error) {
        return false
    }
}

export default GetCardsByListUseCase;
