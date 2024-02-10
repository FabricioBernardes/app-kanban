import { prisma } from "../../../services/prisma/client";

async function UpdateBoardUseCase(id: string, title: string){

    try {
        const board = await prisma.board.update({
            where: {
                id: id
            },
            data: {
                title: title
            }
        });

        return board;
    } catch (error) {
        return false;
    }
}

export default UpdateBoardUseCase;
