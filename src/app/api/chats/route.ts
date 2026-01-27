
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get('userId');

        // Basic logic: Fetch all chats for now (or public ones) since auth is loose
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

        return NextResponse.json(chats);
    } catch (error) {
        console.error('Error fetching chats:', error);
        return NextResponse.json({ error: 'Failed to fetch chats' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, isGroup, participantIds } = body;

        const chat = await prisma.chat.create({
            data: {
                name,
                isGroup: isGroup || false,
                participants: {
                    connect: (participantIds as string[] || []).map(id => ({ id }))
                }
            }
        });

        return NextResponse.json(chat);
    } catch (error) {
        console.error('Error creating chat:', error);
        return NextResponse.json({ error: 'Failed to create chat' }, { status: 500 });
    }
}
