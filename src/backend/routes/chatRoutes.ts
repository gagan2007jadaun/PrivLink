
import { Router } from 'express';
import { getChats, createChat } from '../controllers/chatController';

const router = Router();

router.get('/', getChats);
router.post('/', createChat);

export default router;
