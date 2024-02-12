import { prisma } from "../../../services/prisma/client";

async function UpdateCardUseCase(cardId: string, newTitle: string, newDescription: string, position: number) {

    try {
        const card = await prisma.card.update({
            where: {
                id: cardId
            },
            data: {
                title: newTitle,
                description: newDescription,
                position: position
            }
        })

        return card
    } catch (error) {
        return false
    }
}

export default UpdateCardUseCase;
