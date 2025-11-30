import { Router } from 'express';
import { getReportes, createReporte } from '../controllers/reportes.controller';

const router = Router();

router.get('/', getReportes);
router.post('/', createReporte);

export default router;
