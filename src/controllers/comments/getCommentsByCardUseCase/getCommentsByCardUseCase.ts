import { prisma } from "../../../services/prisma/client";

async function GetCommentsByCardUseCase(cardId: string) {
    
    try {
        const lists = await prisma.comment.findMany({
            where: {
                cardId: cardId
            }
        })

        if (lists.length === 0) {
            return "Comments not found"
        }

        return lists
    } catch (error) {
        return false
    }
}

export default GetCommentsByCardUseCase;
