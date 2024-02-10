import { prisma } from "../../../services/prisma/client";

async function GetBoardUseCase(id: string){

    try {
        const user = await prisma.board.findUnique({
            where: {
                id: id,
            },
            select: {
                title: true,
            }
        });
        
        if (!user) {
            throw new Error(`Board with title '${id}' not found`);
        }
        
        return user;
    } catch (error) {
        console.error(`Error in GetBoardUseCase: ${Error}`);
        throw error;
    }
}

export default GetBoardUseCase;
