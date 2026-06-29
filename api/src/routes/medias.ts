import { Router } from 'express';
import { getAllMedias, getMediasByType, createMedia, deleteMedia } from '../controllers/mediasController';

const router = Router();

router.get('/', getAllMedias);
router.get('/:type', getMediasByType);
router.post('/', createMedia);
router.delete('/:id', deleteMedia);

export default router;
