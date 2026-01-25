import { Router } from 'express';
import testRoutes from './routes/testRoutes';

const router = Router();

// Mount routes
router.use('/v1', testRoutes);

export default router;
