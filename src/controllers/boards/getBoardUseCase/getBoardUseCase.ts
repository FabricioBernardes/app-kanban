import { prisma } from "../../../services/prisma/client";

async function GetBoardUseCase(id: string){

    try {
        const board = await prisma.board.findUnique({
            where: {
                id: id,
            },
            select: {
                title: true,
            }
        });
        
        if (!board) {
            throw new Error(`Board with title '${id}' not found`);
        }
        
        return board;
    } catch (error) {
        throw error;
    }
}

export default GetBoardUseCase;
