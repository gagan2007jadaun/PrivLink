
import { Request, Response } from 'express';
import { prisma } from '../../lib/prisma';

export const getChats = async (req: Request, res: Response) => {
    try {
        const { userId } = req.query;

        // For now, if no userId, we can return all public chats or just handle basic logic
        // But since schema requires participants, we need a user context.
        // For simplicity of this "Chats save in DB" step without full auth middleware:
        // If a userId is provided, return their chats. Else return recent chats.

        const chats = await prisma.chat.findMany({
            include: {
                messages: {
                    take: 1,
                    orderBy: { createdAt: 'desc' }
                },
                participants: true
            },
            orderBy: { updatedAt: 'desc' }
        });

        res.json(chats);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch chats' });
    }
};

export const createChat = async (req: Request, res: Response) => {
    try {
        const { name, isGroup, participantIds } = req.body;

        const chat = await prisma.chat.create({
            data: {
                name,
                isGroup,
                participants: {
                    connect: (participantIds as string[] || []).map(id => ({ id }))
                }
            }
        });

        res.json(chat);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create chat' });
    }
};
