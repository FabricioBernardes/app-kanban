import { prisma } from "../../../services/prisma/client";

async function DeleteBoardUseCase(id: string){

    try {
        const board = await prisma.board.delete({
            where: {
                id: id
            }
        });

        return true;
    } catch (error) {
        return false;
    }
}

export default DeleteBoardUseCase;
