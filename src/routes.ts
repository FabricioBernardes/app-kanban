import { Router } from "express";
import BoardController from "./controllers/boards/boardsController";
import ListsController from "./controllers/lists/listsController";
import CardsController from "./controllers/cards/cardsController";
import CommentsController from "./controllers/comments/commentsController";

const router = Router();

router.get('/boards', BoardController.getAllBoards);
router.get('/boards/:id', BoardController.getBoard);
router.post('/boards', BoardController.createBoard);
router.put('/boards/:id', BoardController.updateBoard);
router.delete('/boards/:id', BoardController.deleteBoard);

router.get('/boards/:boardId/lists', ListsController.getListsByCard);
router.get('/lists/:id', ListsController.getList);
router.post('/boards/:boardId/lists', ListsController.createList);
router.put('/lists/:id', ListsController.updateList);
router.delete('/lists/:id', ListsController.deleteList);

router.get('/lists/:listId/cards', CardsController.getCardsByList);
router.get('/cards/:id', CardsController.getCard);
router.post('/lists/:listId/cards', CardsController.createCard);
router.put('/cards/:id', CardsController.updateCard);
router.delete('/cards/:id', CardsController.deleteCard);

router.get('/cards/:cardId/comments', CommentsController.getCommentByCard);
router.post('/cards/:cardId/comments', CommentsController.createComment);
router.put('/comments/:id', CommentsController.updateComment);
router.delete('/comments/:id'); // Excluir um comentário.



export default router;