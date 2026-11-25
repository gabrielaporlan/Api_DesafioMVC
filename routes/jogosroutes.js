import { Router } from 'express';
import {
    getJogos,
    getJogosPorFabricante,
    getJogoPorId,
    getJogoPorAno,
    postJogo,
    putJogo,
    deleteJogo
} from '../controllers/jogosController.js';

const router = Router();

// O prefixo '/jogos' será definido no app.js
router.get('/', getJogos);
router.get('/fabricante/:fabricante', getJogosPorFabricante);
router.get('/:id', getJogoPorId);
router.post('/', postJogo);
router.put('/:id', putJogo);
router.delete('/:id', deleteJogo);
router.get('/anolanc/:anolanc', getJogoPorAno);

export default router;