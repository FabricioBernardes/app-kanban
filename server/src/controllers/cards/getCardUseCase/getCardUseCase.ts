import { prisma } from "../../../services/prisma/client";

async function GetCardUseCase(id: string) {

    try {
        const card = await prisma.card.findUnique({
            where: {
                id: id
            }
        })

        if (!card) {
            return "Card not found"
        }

        return card
    } catch (error) {
        return false
    }
}

export default GetCardUseCase;
