import { Request, Response } from 'express';
import CreateBoardUseCase from './createBoardUseCase/createBoardUseCase';
import GetBoardUseCase from './getBoardUseCase/getBoardUseCase';

const BoardController = {

    async getBoard(req: Request, res: Response) {
        const { id } = req.params;
        const board = await GetBoardUseCase(id);

        if (board) {
            return res.status(200).json(board);
        }

        return res.status(400).json({ message: 'Error retrieving board' });
    },

    async getAllBoards(req: Request, res: Response) {
        return res.status(200).json({ message: 'All boards retrieved successfully' });
    },

    async createBoard(req: Request, res: Response) {
        const { title } = req.body;
        const createBoard = await CreateBoardUseCase(title);

        if (createBoard) {
            return res.status(201).json({ message: 'Board created successfully' });
        }

        return res.status(400).json({ message: 'Error creating board' });
    },

    async updateBoard(req: Request, res: Response) {
        return res.status(200).json({ message: 'Board updated successfully' });
    },

    async deleteBoard(req: Request, res: Response) {
        return res.status(200).json({ message: 'Board deleted successfully' });
    },
}

export default BoardController;
