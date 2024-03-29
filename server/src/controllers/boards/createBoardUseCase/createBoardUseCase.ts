import { prisma } from "../../../services/prisma/client";

async function CreateBoardUseCase(title: string) {

    try {
        const board = await prisma.board.create({
            data: {
                title: title,
            }
        });
        return true;
    } catch (error) {
        return false
    }
}

export default CreateBoardUseCase;
