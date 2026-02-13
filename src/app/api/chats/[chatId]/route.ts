import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PATCH(req: Request, props: { params: Promise<{ chatId: string }> }) {
    const params = await props.params;
    try {
        const { chatId } = params;
        const body = await req.json();
        const { disappearingDuration } = body;

        const chat = await prisma.chat.update({
            where: { id: chatId },
            data: {
                disappearingDuration
            }
        });

        return NextResponse.json(chat);
    } catch (error) {
        console.error('Error updating chat:', error);
        return NextResponse.json({ error: 'Failed to update chat' }, { status: 500 });
    }
}
