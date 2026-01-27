
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { content, chatId, senderId, type, mediaUrl } = body;

        // Ensure user exists (Mock/Lazy Auth)
        let user = await prisma.user.findUnique({ where: { id: senderId } });
        if (!user) {
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
                senderId: user.id,
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

        return NextResponse.json(message);
    } catch (error) {
        console.error('Error sending message:', error);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}
