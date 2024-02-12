import { prisma } from "../../../services/prisma/client";

async function DeleteCardUseCase(id: string) {
    
    try {
        const card = await prisma.card.delete({
            where: {
                id: id,
            },
        })

        return true;
    } catch (error) {
        return false
    }
}

export default DeleteCardUseCase;
