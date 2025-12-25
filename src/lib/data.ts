export interface Message {
    id: string;
    type: 'text' | 'audio' | 'video' | 'image';
    content: string; // Text content or File URL
    timestamp: string;
    isMe: boolean;
    duration?: number; // In seconds, for audio/video
    thumbnailUrl?: string; // For video messages
    reactions?: { emoji: string; count: number }[];
    isConsecutive?: boolean;
    status?: 'sent' | 'delivered' | 'read' | 'queued' | 'sending' | 'failed';
    deliveredAt?: string;
    readAt?: string;
    heatScore?: number; // 0-100, calculated from dwell time / length
    confidenceScore?: number; // 0-100, calculated from typing metrics
    isUnsentIntent?: boolean; // If true, displayed only to sender as a draft/unsent nuance
    echoScore?: number; // 0-100, semantic similarity to previous messages
    style?: {
        bold?: boolean;
        italic?: boolean;
        underline?: boolean;
        fontSize?: string; // e.g. 'small', 'medium', 'large'
    };
    replyTo?: {
        messageId: string;
        username: string; // "You" or Sender Name
        text: string; // Snapshot or "[Media]"
        mediaType?: 'image' | 'video' | 'audio'; // Helper for icon
    };
}

export interface Chat {
    id: string;
    name: string;
    avatarUrl?: string; // Optional, initials will be used if missing
    lastMessage: string;
    time: string;
    timestamp?: string; // ISO Date String for auto-archive logic
    unreadCount?: number;
    isArchived?: boolean; // New Archive Flag
    isOnline?: boolean;
    interestScore?: number; // 0-100 (Renamed from trustScore)
    avgReadTime?: number; // ms
    isLocked?: boolean;
    isSilentRead?: boolean;
    relationshipMode?: 'work' | 'casual' | 'personal';
    driftLevel?: 'low' | 'medium' | 'high';
    selfAlias?: string; // User's private identity in this chat "Who I am to them"
    // Psychological & Analytical Features
    gravity?: 'balanced' | 'one-sided-me' | 'one-sided-them'; // Conversation balance
    boundaryMode?: boolean; // If true, hides typing indicators/read receipts strictly
    conversationWeight?: number; // 0-100, depth/seriousness of the chat
    mutualCuriosity?: number; // 0-100, based on question frequency
    trustTrend?: 'rising' | 'falling' | 'stable'; // Trust recovery indicator (Internal logic)
    interestTrend?: 'rising' | 'falling' | 'stable'; // New Display logic
    energyBalance?: number; // -100 to 100 (Negative = They talk more, Positive = I talk more)
    persona?: 'morning' | 'night' | 'balanced'; // Time-of-day personality

    // Permissions (Rules)
    permissions?: {
        allowForward?: boolean; // Default true
        allowSaveMedia?: boolean; // Default true
        allowScreenshot?: boolean; // Default true
    };

    // Hub Content Flags (Mock)
    hasSharedMedia?: boolean;
    hasSharedDocs?: boolean;
    hasSharedLinks?: boolean;
}

export const mockChats: Chat[] = [
    {
        id: "1",
        permissions: { allowForward: false, allowSaveMedia: false, allowScreenshot: false }, // Demo restricted permissions
        name: "Sarah Wilson",
        lastMessage: "That looks amazing! ✨",
        time: "5m",
        timestamp: new Date().toISOString(), // Just now
        unreadCount: 2,
        isOnline: true,
        interestScore: 95,
        avgReadTime: 2000, // 2s
        driftLevel: 'low',
        gravity: 'balanced',
        conversationWeight: 80,
        mutualCuriosity: 90,
        trustTrend: 'rising',
        interestTrend: 'rising', // New
        energyBalance: 10, // Balanced
        persona: 'morning',
        hasSharedMedia: true,
        hasSharedDocs: true,
        hasSharedLinks: true,
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
        interestTrend: 'stable',
        hasSharedDocs: true, // Work chat might have docs
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
        interestTrend: 'falling',
    },
    {
        id: "4",
        name: "Marketing Group",
        lastMessage: "You: Sent the report",
        time: "3h",
        interestScore: 70, // Added interestScore
        driftLevel: 'low', // Added driftLevel
        interestTrend: 'stable',
    },
    {
        id: "5",
        name: "David Chen",
        lastMessage: "Thanks for the help!",
        time: "Yesterday",
        interestTrend: 'rising',
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
        time: "2mo ago",
        timestamp: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(), // 60 days old
    },
];

export const mockMessages: Record<string, Message[]> = {
    "1": [
        { id: "1", type: "text", content: "Is this connection secure?", timestamp: "10:23 AM", isMe: true, confidenceScore: 60 },
        { id: "2", type: "text", content: "Yes, this is PrivLink. End-to-end encrypted.", timestamp: "10:24 AM", isMe: false, confidenceScore: 100 },
        { id: "3", type: "text", content: "Perfect. Sending the confidential specs.", timestamp: "10:25 AM", isMe: true, confidenceScore: 95 },
        { id: "4", type: "text", content: "Ready to receive.", timestamp: "10:25 AM", isMe: false, confidenceScore: 90 },
    ],
    "2": [
        { id: "1", type: "text", content: "Hey team, check out the new designs.", timestamp: "09:00 AM", isMe: false },
        { id: "2", type: "text", content: "Looking good! I'll update the components.", timestamp: "09:15 AM", isMe: true, confidenceScore: 85 },
    ],
    "3": [
        { id: "1", type: "text", content: "Can we schedule a call?", timestamp: "1:00 PM", isMe: false },
    ],
    "4": [
        { id: "1", type: "text", content: "Report sent.", timestamp: "Yesterday", isMe: true },
    ],
    "5": [
        { id: "1", type: "text", content: "Thanks for the help!", timestamp: "Yesterday", isMe: false },
    ],
    "6": [
        { id: "1", type: "text", content: "See you tomorrow 👋", timestamp: "Yesterday", isMe: false },
    ],
    "7": [
        { id: "1", type: "text", content: "Meeting confirmed for 10am", timestamp: "Monday", isMe: false },
    ],
};
