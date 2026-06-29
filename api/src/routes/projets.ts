import { Router } from 'express';
import { getAllProjets, getProjetById, createProjet, deleteProjet } from '../controllers/projetsController';

const router = Router();

router.get('/', getAllProjets);
router.get('/:id', getProjetById);
router.post('/', createProjet);
router.delete('/:id', deleteProjet);

export default router;
