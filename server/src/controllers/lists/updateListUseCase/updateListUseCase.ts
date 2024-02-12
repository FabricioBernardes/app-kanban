import { prisma } from "../../../services/prisma/client";

async function UpdateListUseCase(listid: string, newTitle: string) {

    try {
        const list = await prisma.list.update({
            where: {
                id: listid
            },
            data: {
                title: newTitle
            }
        })

        return list
    } catch (error) {
        return false
    }
}

export default UpdateListUseCase;
