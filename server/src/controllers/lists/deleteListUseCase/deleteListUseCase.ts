import { prisma } from "../../../services/prisma/client";

async function DeleteListUseCase(id: string) {
    
    try {
        const list = await prisma.list.delete({
            where: {
                id: id
            }
        })

        return true
    } catch (error) {
        return false
    }
}

export default DeleteListUseCase;
