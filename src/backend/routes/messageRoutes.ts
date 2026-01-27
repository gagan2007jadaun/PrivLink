
import { Router } from 'express';
import { getMessages, sendMessage } from '../controllers/messageController';

const router = Router();

router.get('/:chatId', getMessages);
router.post('/', sendMessage);

export default router;
