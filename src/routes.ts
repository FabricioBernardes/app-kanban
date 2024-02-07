import { Router } from "express";

const router = Router();

router.get('/boards'); // Obter todos os quadros.
router.get('/boards/:id'); // Obter detalhes de um quadro específico.
router.post('/boards'); // Criar um novo quadro.
router.put('/boards/:id'); // Atualizar informações de um quadro existente.
router.delete('/boards/:id'); // Excluir um quadro.

router.get('/boards/:boardId/lists'); // Obter todas as listas em um quadro.
router.get('/lists/:id'); // Obter detalhes de uma lista específica.
router.post('/boards/:boardId/lists'); // Criar uma nova lista em um quadro.
router.put('/lists/:id'); // Atualizar informações de uma lista existente.
router.delete('/lists/:id'); // Excluir uma lista.

router.get('/lists/:listId/cards'); // Obter todos os cartões em uma lista.
router.get('/cards/:id'); // Obter detalhes de um cartão específico.
router.post('/lists/:listId/cards'); // Criar um novo cartão em uma lista.
router.put('/cards/:id'); // Atualizar informações de um cartão existente.
router.delete('/cards/:id'); // Excluir um cartão.

router.get('/cards/:cardId/comments'); // Obter todos os comentários em um cartão.
router.post('/cards/:cardId/comments'); // Adicionar um novo comentário a um cartão.
router.put('/comments/:id'); // Atualizar um comentário existente.
router.delete('/comments/:id'); // Excluir um comentário.



export default router;