import { Request, Response } from 'express';
import CreateBoardUseCase from './createBoardUseCase/createBoardUseCase';

const BoardController = {

    async createBoard(req: Request, res: Response) {
        const { title } = req.body;
        const createBoard = await CreateBoardUseCase(title);

        if (createBoard) {
            return res.status(201).json({ message: 'Board created successfully' });
        }

        return res.status(400).json({ message: 'Error creating board' });
    },
}

export default BoardController;
