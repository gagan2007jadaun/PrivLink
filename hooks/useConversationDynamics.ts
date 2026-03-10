import { useMemo } from 'react';
import { Message, Chat } from '@/lib/data';

interface ConversationDynamics {
    gravity: 'balanced' | 'one-sided-me' | 'one-sided-them';
    persona: 'morning' | 'night' | 'balanced';
    energyBalance: number; // -100 to 100
    conversationWeight: number; // 0 to 100
    mutualCuriosity: number; // 0 to 100
    interestTrend: 'rising' | 'falling' | 'stable';
}

export function useConversationDynamics(messages: Message[], activeChat?: Chat): ConversationDynamics {
    return useMemo(() => {
        if (!messages.length) {
            return {
                gravity: 'balanced',
                persona: 'balanced',
                energyBalance: 0,
                conversationWeight: 0,
                mutualCuriosity: 0,
                interestTrend: 'stable'
            };
        }

        // 1. Gravity (Initiation Balance)
        // Heuristic: Message Count Ratio
        const myMsgCount = messages.filter(m => m.isMe).length;
        const ratio = myMsgCount / messages.length;
        let gravity: 'balanced' | 'one-sided-me' | 'one-sided-them' = 'balanced';
        if (ratio > 0.65) gravity = 'one-sided-me';
        if (ratio < 0.35) gravity = 'one-sided-them';

        // 2. Persona (Time of Day of THEIR messages)
        const times = messages.filter(m => !m.isMe).map(m => {
            // Mock timestamp parsing "10:23 AM"
            const [time, modifier] = m.timestamp.split(' ');
            if (!time || !modifier) return null;
            let [hours] = time.split(':').map(Number);
            if (modifier === 'PM' && hours < 12) hours += 12;
            if (modifier === 'AM' && hours === 12) hours = 0;
            return hours;
        }).filter(h => h !== null) as number[];

        let persona: 'morning' | 'night' | 'balanced' = 'balanced';
        if (times.length > 0) {
            const avgHour = times.reduce((a, b) => a + b, 0) / times.length;
            if (avgHour >= 5 && avgHour < 12) persona = 'morning';
            if (avgHour >= 22 || avgHour < 4) persona = 'night';
        }

        // 3. Energy Balance (Character Volume)
        const myLength = messages.filter(m => m.isMe).reduce((acc, m) => acc + (m.content?.length || 0), 0);
        const theirLength = messages.filter(m => !m.isMe).reduce((acc, m) => acc + (m.content?.length || 0), 0);
        const totalLen = myLength + theirLength || 1;
        const energyBalance = Math.round(((myLength - theirLength) / totalLen) * 100);

        // 4. Conversation Weight (Avg Message Length)
        const avgLen = totalLen / messages.length;
        // Cap at 150 chars avg for max weight
        const conversationWeight = Math.min(100, Math.max(0, Math.round((avgLen / 150) * 100)));

        // 5. Mutual Curiosity (Question Frequency)
        const questionCount = messages.filter(m => (m.content || "").includes('?')).length;
        // Heuristic: 20% questions = 100 score
        const mutualCuriosity = Math.min(100, Math.round((questionCount / messages.length) * 500));

        // 6. Interest Trend (Simple heuristic based on recent message length vs average)
        // If last 5 messages are longer than avg -> rising
        let interestTrend: 'rising' | 'falling' | 'stable' = activeChat?.interestTrend || 'stable';
        if (messages.length > 10) {
            const recentAvg = messages.slice(-5).reduce((acc, m) => acc + (m.content?.length || 0), 0) / 5;
            if (recentAvg > avgLen * 1.2) interestTrend = 'rising';
            else if (recentAvg < avgLen * 0.8) interestTrend = 'falling';
        }

        return {
            gravity,
            persona,
            energyBalance,
            conversationWeight,
            mutualCuriosity,
            interestTrend
        };
    }, [messages, activeChat]);
}
