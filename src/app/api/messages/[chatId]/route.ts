
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request, props: { params: Promise<{ chatId: string }> }) {
    const params = await props.params;
    try {
        const { chatId } = params;
        const messages = await prisma.message.findMany({
            where: {
                chatId,
                OR: [
                    { expiresAt: null },
                    { expiresAt: { gt: new Date() } }
                ]
            },
            orderBy: { createdAt: 'asc' },
            include: { sender: true }
        });
        return NextResponse.json(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
    }
}
