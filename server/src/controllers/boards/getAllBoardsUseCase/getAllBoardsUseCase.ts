import { prisma } from "../../../services/prisma/client";

async function GetAllBoardUseCase(){

    try {
        const boards = await prisma.board.findMany({
            select: {
                id: true,
                title: true,
            }
        });

        if (boards.length === 0) {
            return "No boards found"
        }
        
        return boards;
    } catch (error) {
        return false;
    }
}

export default GetAllBoardUseCase;
