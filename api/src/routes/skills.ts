import { Router } from 'express';
import { getAllSkills, createSkill, deleteSkill } from '../controllers/skillsController';

const router = Router();

router.get('/', getAllSkills);
router.post('/', createSkill);
router.delete('/:id', deleteSkill);

export default router;
