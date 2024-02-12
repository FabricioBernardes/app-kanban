import { prisma } from "../../../services/prisma/client";

async function CreateCardUseCase(title: string, description: string, position: number, listId: string) {

    try {
        const card = await prisma.card.create({
            data: {
                title,
                description,
                position: position,
                list: {
                    connect: {
                        id: listId
                    }
                }
            }
        });
        return card;
    } catch (error) {
        return false
    }
}

export default CreateCardUseCase;
