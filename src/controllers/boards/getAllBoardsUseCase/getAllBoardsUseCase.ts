import { prisma } from "../../../services/prisma/client";

async function GetAllBoardUseCase(){

    try {
        const board = await prisma.board.findMany({
            select: {
                title: true,
            }
        });

        if (!board) {
            throw new Error(`No boards found`);
        }
        
        return board;
    } catch (error) {
        throw error;
    }
}

export default GetAllBoardUseCase;
