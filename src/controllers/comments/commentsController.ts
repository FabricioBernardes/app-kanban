import { Request, Response } from 'express';
import CreateCommentUseCase from './createCommentUseCase/createCommentUseCase';
import GetLCommentsByCardUseCase from './getCommentsByCardUseCase/getCommentsByCardUseCase';

const CommentsController = {
    async getCommentByCard(req: Request, res: Response) {
        const { cardId } = req.params;

        const comments = await GetLCommentsByCardUseCase(cardId);

        if (comments === 'Comments not found') {
            return res.status(404).json({ message: 'Comments not found' });
        }

        if (comments) {
            return res.status(200).json(comments);
        }

        return res.status(400).json({ message: 'Error to get comments' });
    },

    async createComment(req: Request, res: Response) {
        const { content } = req.body;
        const { cardId } = req.params;

        const comment = await CreateCommentUseCase(content, cardId);

        if (comment) {
            return res.status(201).json(comment);
        }
        
        return res.status(400).json({ message: 'Error to create comment' });
    },

    async updateComment(req: Request, res: Response) {

    },

    async deleteComment(req: Request, res: Response) {

    },
}

export default CommentsController;
