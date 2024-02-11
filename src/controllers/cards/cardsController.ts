import { Request, Response } from 'express';
import CreateCardUseCase from './createCardUseCase/createCardUseCase';
import GetCardsByListUseCase from './getCardsByList/getCardsByListUseCase';

const CardsController = {

    async getCard(req: Request, res: Response) {

    },

    async getCardsByList(req: Request, res: Response) {
        const { listId } = req.params;

        const cards = await GetCardsByListUseCase(listId);

        if (cards === 'Cards not found') {
            return res.status(404).json({ message: 'Cards not found' });
        }

        if (cards) {
            return res.status(200).json(cards);
        }

        return res.status(400).json({ message: 'Error to get lists' });
    },

    async createCard(req: Request, res: Response) {

        const { title, description, position } = req.body;
        const { listId } = req.params;

        const card = await CreateCardUseCase(title, description, position, listId);

        if (card) {
            return res.status(201).json(card);
        }
        
        return res.status(400).json({ message: 'Error to create card' });
    },

    async updateCard(req: Request, res: Response) {

    },

    async deleteCard(req: Request, res: Response) {

    },
}

export default CardsController;
