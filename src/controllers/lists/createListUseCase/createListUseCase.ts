import { prisma } from "../../../services/prisma/client";

async function CreateListUseCase(title: string, boardid: string) {

    try {
        const list = await prisma.list.create({
            data: {
                boardId: boardid,
                title: title,
            }
        })

        return list
    } catch (error) {
        return false
    }
}

export default CreateListUseCase;
