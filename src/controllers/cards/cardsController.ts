import { Request, Response } from 'express';
import CreateCardUseCase from './createCardUseCase/createCardUseCase';
import GetCardsByListUseCase from './getCardsByList/getCardsByListUseCase';
import GetCardUseCase from './getCardUseCase/getCardUseCase';
import UpdateCardUseCase from './updateCardUseCase/updateCardUseCase';

const CardsController = {

    async getCard(req: Request, res: Response) {
        const { id } = req.params;

        const card = await GetCardUseCase(id);

        if (card === 'Card not found') {
            return res.status(404).json({ message: 'Card not found' });
        }

        if (card) {
            return res.status(200).json(card);
        }

        return res.status(400).json({ message: 'Error to get card' });
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
        const { id } = req.params;
        const { title, description, position } = req.body;

        const card = await UpdateCardUseCase(id, title, description, position);

        if (card) {
            return res.status(200).json(card);
        }

        return res.status(400).json({ message: 'Error to update card' });
    },

    async deleteCard(req: Request, res: Response) {

    },
}

export default CardsController;
