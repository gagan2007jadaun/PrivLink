
import { Request, Response } from 'express';
import { prisma } from '../../lib/prisma';

export const getMessages = async (req: Request, res: Response) => {
    try {
        const { chatId } = req.params;
        const messages = await prisma.message.findMany({
            where: { chatId },
            orderBy: { createdAt: 'asc' },
            include: { sender: true }
        });
        res.json(messages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
};

export const sendMessage = async (req: Request, res: Response) => {
    try {
        const { content, chatId, senderId, type, mediaUrl } = req.body;

        // Ensure user exists (Mock/Lazy Auth)
        // In a real app we'd error if senderId doesn't exist. 
        // Here we'll upsert specifically for the "Alias" feature usage.
        let user = await prisma.user.findUnique({ where: { id: senderId } });
        if (!user) {
            // Try to find by username if the senderId passed was actually a username alias
            const existingByUsername = await prisma.user.findUnique({ where: { username: senderId } });
            if (existingByUsername) {
                user = existingByUsername;
            } else {
                // Create ad-hoc user based on alias
                user = await prisma.user.create({
                    data: {
                        username: senderId,
                        displayName: senderId
                    }
                });
            }
        }

        const message = await prisma.message.create({
            data: {
                content,
                chatId,
                senderId: user.id, // Use real UUID
                type,
                mediaUrl
            },
            include: {
                sender: true
            }
        });

        // Update Chat last message
        await prisma.chat.update({
            where: { id: chatId },
            data: {
                lastMessage: content,
                lastMessageTime: new Date()
            }
        });

        res.json(message);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send message' });
    }
};
