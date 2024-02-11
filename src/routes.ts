import { Router } from "express";
import BoardController from "./controllers/boards/boardsController";
import ListsController from "./controllers/lists/listsController";
import CardsController from "./controllers/cards/cardsController";

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

router.get('/lists/:listId/cards', CardsController.getCardsByList); // Obter todos os cartões em uma lista.
router.get('/cards/:id'); // Obter detalhes de um cartão específico.
router.post('/lists/:listId/cards', CardsController.createCard); // Criar um novo cartão em uma lista.
router.put('/cards/:id'); // Atualizar informações de um cartão existente.
router.delete('/cards/:id'); // Excluir um cartão.

router.get('/cards/:cardId/comments'); // Obter todos os comentários em um cartão.
router.post('/cards/:cardId/comments'); // Adicionar um novo comentário a um cartão.
router.put('/comments/:id'); // Atualizar um comentário existente.
router.delete('/comments/:id'); // Excluir um comentário.



export default router;