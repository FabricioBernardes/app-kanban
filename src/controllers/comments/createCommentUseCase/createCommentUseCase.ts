import { prisma } from "../../../services/prisma/client";

async function CreateCommentUseCase(content: string, cardId: string) {

    try {
        const comment = await prisma.comment.create({
            data: {
                cardId: cardId,
                content: content
            }
        })

        return comment
    } catch (error) {
        return false
    }
}

export default CreateCommentUseCase;
