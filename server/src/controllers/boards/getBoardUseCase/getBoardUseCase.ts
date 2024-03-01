import { prisma } from "../../../services/prisma/client";

async function GetBoardUseCase(id: string){

    try {
        const board = await prisma.board.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                title: true,
                lists: {
                    select: {
                        id: true,
                        title: true,
                        cards: {
                            select: {
                                id: true,
                                title: true,
                                position: true,
                            }
                        }
                    }
                }
            }
        });
        
        if (!board) {
            return "Board not found";
        }
        
        return board;
    } catch (error) {
        return false;
    }
}

export default GetBoardUseCase;
