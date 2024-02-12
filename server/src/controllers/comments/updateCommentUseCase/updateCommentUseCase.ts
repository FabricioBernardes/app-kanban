import { prisma } from "../../../services/prisma/client";

async function UpdateCommentUseCase(commentId: string, newContent: string) {

    try {
        const comment = await prisma.comment.update({
            where: {
                id: commentId
            },
            data: {
                content: newContent
            }
        })

        return comment
    } catch (error) {
        console.log(error)
        return false
    }
}

export default UpdateCommentUseCase;
