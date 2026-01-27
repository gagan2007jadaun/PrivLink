import { Router } from 'express';
import testRoutes from './routes/testRoutes';
import chatRoutes from './routes/chatRoutes';
import messageRoutes from './routes/messageRoutes';

const router = Router();

// Mount routes
router.use('/v1', testRoutes);
router.use('/chats', chatRoutes);
router.use('/messages', messageRoutes);

export default router;
