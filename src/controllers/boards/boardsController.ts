import { Request, Response } from 'express';
import CreateBoardUseCase from './createBoardUseCase/createBoardUseCase';
import GetBoardUseCase from './getBoardUseCase/getBoardUseCase';
import GetAllBoardUseCase from './getAllBoardsUseCase/getAllBoardsUseCase';
import UpdateBoardUseCase from './updateBoardUseCase/updateBoardUseCase';

const BoardController = {

    async getBoard(req: Request, res: Response) {
        const { id } = req.params;
        const board = await GetBoardUseCase(id);

        if (board === 'Board not found') {
            return res.status(404).json({ message: 'Board not found' });
        }

        if (board) {
            return res.status(200).json(board);
        }

        return res.status(400).json({ message: 'Error retrieving board' });
    },

    async getAllBoards(req: Request, res: Response) {
        const boards = await GetAllBoardUseCase();

        if (boards) {
            return res.status(200).json(boards);
        }

        return res.status(400).json({ message: 'Error retrieving boards' });
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
        const { id } = req.params;
        const { title } = req.body;
        const updateBoard = await UpdateBoardUseCase(id, title);

        if (updateBoard) {
            return res.status(200).json({ message: 'Board updated successfully' });
        }

        return res.status(400).json({ message: 'Error updating board' });
    },

    async deleteBoard(req: Request, res: Response) {
        return res.status(200).json({ message: 'Board deleted successfully' });
    },
}

export default BoardController;
