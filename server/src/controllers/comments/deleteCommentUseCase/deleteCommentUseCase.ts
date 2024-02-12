import { prisma } from "../../../services/prisma/client";

async function DeleteCommentUseCase(id: string) {
    
    try {
        const comment = await prisma.comment.delete({
            where: {
                id: id
            }
        })

        return true
    } catch (error) {
        return false
    }
}

export default DeleteCommentUseCase;
