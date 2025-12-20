export interface Message {
    id: string;
    content?: string;
    timestamp: string;
    isMe: boolean;
    image?: string;
    mediaUrl?: string; // For audio/video
    mediaType?: 'audio' | 'video';
    reactions?: { emoji: string; count: number }[];
    isConsecutive?: boolean;
    status?: 'sent' | 'delivered' | 'read';
    deliveredAt?: string;
    readAt?: string;
    heatScore?: number; // 0-100, calculated from dwell time / length
    confidenceScore?: number; // 0-100, calculated from typing metrics
    isUnsentIntent?: boolean; // If true, displayed only to sender as a draft/unsent nuance
    echoScore?: number; // 0-100, semantic similarity to previous messages
}

export interface Chat {
    id: string;
    name: string;
    avatarUrl?: string; // Optional, initials will be used if missing
    lastMessage: string;
    time: string;
    unreadCount?: number;
    isOnline?: boolean;
    interestScore?: number; // 0-100 (Renamed from trustScore)
    avgReadTime?: number; // ms
    isLocked?: boolean;
    isSilentRead?: boolean;
    relationshipMode?: 'work' | 'casual' | 'personal';
    driftLevel?: 'low' | 'medium' | 'high';
    // Psychological & Analytical Features
    gravity?: 'balanced' | 'one-sided-me' | 'one-sided-them'; // Conversation balance
    boundaryMode?: boolean; // If true, hides typing indicators/read receipts strictly
    conversationWeight?: number; // 0-100, depth/seriousness of the chat
    mutualCuriosity?: number; // 0-100, based on question frequency
    trustTrend?: 'rising' | 'falling' | 'stable'; // Trust recovery indicator
    persona?: 'morning' | 'night' | 'balanced'; // Time-of-day personality
}

export const mockChats: Chat[] = [
    {
        id: "1",
        name: "Sarah Wilson",
        lastMessage: "That looks amazing! ✨",
        time: "5m",
        unreadCount: 2,
        isOnline: true,
        interestScore: 95,
        avgReadTime: 2000, // 2s
        driftLevel: 'low',
        gravity: 'balanced',
        conversationWeight: 80,
        mutualCuriosity: 90,
        trustTrend: 'rising',
        persona: 'morning',
    },
    {
        id: "2",
        name: "Design Team",
        lastMessage: "Reviewing the new mockups...",
        time: "1h",
        unreadCount: 5,
        interestScore: 88,
        avgReadTime: 5000,
        isLocked: true,
        relationshipMode: 'work',
        driftLevel: 'medium',
        gravity: 'one-sided-them', // They talk more?
        boundaryMode: true, // Professional boundary
    },
    {
        id: "3",
        name: "John Doe",
        lastMessage: "Lets catch up later!",
        time: "3h",
        isOnline: false,
        interestScore: 42,
        avgReadTime: 8000,
        driftLevel: 'high',
        gravity: 'one-sided-me',
        conversationWeight: 30,
        trustTrend: 'falling',
    },
    {
        id: "4",
        name: "Marketing Group",
        lastMessage: "You: Sent the report",
        time: "3h",
        interestScore: 70, // Added interestScore
        driftLevel: 'low', // Added driftLevel
    },
    {
        id: "5",
        name: "David Chen",
        lastMessage: "Thanks for the help!",
        time: "Yesterday",
    },
    {
        id: "6",
        name: "Emma Davis",
        lastMessage: "See you tomorrow 👋",
        time: "Yesterday",
    },
    {
        id: "7",
        name: "Project Alpha",
        lastMessage: "Meeting confirmed for 10am",
        time: "2d ago",
    },
];

export const mockMessages: Record<string, Message[]> = {
    "1": [
        { id: "1", content: "Is this connection secure?", timestamp: "10:23 AM", isMe: true, confidenceScore: 60 },
        { id: "2", content: "Yes, this is PrivLink. End-to-end encrypted.", timestamp: "10:24 AM", isMe: false, confidenceScore: 100 },
        { id: "3", content: "Perfect. Sending the confidential specs.", timestamp: "10:25 AM", isMe: true, confidenceScore: 95 },
        { id: "4", content: "Ready to receive.", timestamp: "10:25 AM", isMe: false, confidenceScore: 90 },
    ],
    "2": [
        { id: "1", content: "Hey team, check out the new designs.", timestamp: "09:00 AM", isMe: false },
        { id: "2", content: "Looking good! I'll update the components.", timestamp: "09:15 AM", isMe: true, confidenceScore: 85 },
    ],
    "3": [
        { id: "1", content: "Can we schedule a call?", timestamp: "1:00 PM", isMe: false },
    ],
    "4": [
        { id: "1", content: "Report sent.", timestamp: "Yesterday", isMe: true },
    ],
    "5": [
        { id: "1", content: "Thanks for the help!", timestamp: "Yesterday", isMe: false },
    ],
    "6": [
        { id: "1", content: "See you tomorrow 👋", timestamp: "Yesterday", isMe: false },
    ],
    "7": [
        { id: "1", content: "Meeting confirmed for 10am", timestamp: "Monday", isMe: false },
    ],
};
