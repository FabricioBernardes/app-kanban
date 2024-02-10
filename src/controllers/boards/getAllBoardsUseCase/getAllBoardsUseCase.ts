import { prisma } from "../../../services/prisma/client";

async function GetAllBoardUseCase(){

    try {
        const boards = await prisma.board.findMany({
            select: {
                title: true,
            }
        });

        if (boards.length === 0) {
            throw new Error(`No boards found`);
        }
        
        return boards;
    } catch (error) {
        throw error;
    }
}

export default GetAllBoardUseCase;
