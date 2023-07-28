import express from 'express';
import { addDeckController, deleteDeckController, getAllDeckController } from '../controllers/deckController';

const router = express.Router();

router.post('/decks',addDeckController)
router.get('/decks',getAllDeckController)
router.delete('/decks/:id',deleteDeckController)
export default router