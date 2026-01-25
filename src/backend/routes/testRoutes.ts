import { Router } from 'express';
import { getTestMessage } from '../controllers/testController';

const router = Router();

// GET /api/v1/test
router.get('/test', getTestMessage);

export default router;
