import { Request, Response } from 'express';
import CreateCardUseCase from './createCardUseCase/createCardUseCase';


const CardsController = {

    async getCard(req: Request, res: Response) {

    },

    async getCardsByCard(req: Request, res: Response) {

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
