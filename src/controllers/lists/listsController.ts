import { Request, Response } from 'express';
import CreateListUseCase from './createListUseCase/createListUseCase';
import GetListUseCase from './getListUseCase/getListUseCase';
import DeleteListUseCase from './deleteListUseCase/deleteListUseCase';
import GetListsByBoardUseCase from "./getListsByCard/getListsByBoardUseCase";
import UpdateListUseCase from './updateListUseCase/updateListUseCase';

const ListsController = {

    async getList(req: Request, res: Response) {
        const { id } = req.params;

        const list = await GetListUseCase(id);

        if (list === 'List not found') {
            return res.status(404).json({ message: 'List not found' });
        }

        if (list) {
            return res.status(200).json(list);
        }

        return res.status(400).json({ message: 'Error to get list' });
    },

    async getListsByCard(req: Request, res: Response) {
        const { boardId } = req.params;

        const lists = await GetListsByBoardUseCase(boardId);

        if (lists === 'Lists not found') {
            return res.status(404).json({ message: 'Lists not found' });
        }

        if (lists) {
            return res.status(200).json(lists);
        }

        return res.status(400).json({ message: 'Error to get lists' });
    },

    async createList(req: Request, res: Response) {
        const { title } = req.body;
        const { boardId } = req.params;

        const list = await CreateListUseCase(title, boardId);

        if (!list) {
            return res.status(400).json({ message: 'Error to create list' });
        }

        return res.status(201).json(list);
    },

    async updateList(req: Request, res: Response) {
        const { id } = req.params;
        const { title } = req.body;
        const list = await UpdateListUseCase(id, title);

        if (list) {
            return res.status(200).json(list);
        }

        return res.status(400).json({ message: 'Error to update list' });
    },

    async deleteList(req: Request, res: Response) {
        const { id } = req.params;
        const list = await DeleteListUseCase(id);

        if (list) {
            return res.status(204).json("List deleted successfully");
        }

        return res.status(400).json({ message: 'Error to delete list' });
    },
}

export default ListsController;
