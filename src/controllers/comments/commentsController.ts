import { Request, Response } from 'express';
import CreateCommentUseCase from './createCommentUseCase/createCommentUseCase';

const CommentsController = {
    async getCommentByCard(req: Request, res: Response) {

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
