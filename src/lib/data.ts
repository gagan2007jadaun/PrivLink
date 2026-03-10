export interface Message {
    id: string;
    type: 'text' | 'audio' | 'video' | 'image' | 'file';
    content: string; // Text content or File URL
    fileName?: string; // For file messages
    fileSize?: string; // e.g. "2.4 MB"
    timestamp: string;
    isMe: boolean;
    senderId?: string; // ID of the sender
    duration?: number; // In seconds, for audio/video
    thumbnailUrl?: string; // For video messages
    reactions?: { emoji: string; count: number }[];
    isConsecutive?: boolean;
    status?: 'sent' | 'delivered' | 'read' | 'queued' | 'sending' | 'failed';
    deliveredAt?: string;
    readAt?: string;
    expiresAt?: string | Date; // ISO String or Date
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
    disappearingDuration?: number; // Duration in seconds (0 = off)
    conversationWeight?: number; // 0-100, depth/seriousness of the chat
    mutualCuriosity?: number; // 0-100, based on question frequency
    trustTrend?: 'rising' | 'falling' | 'stable'; // Trust recovery indicator (Internal logic)
    interestTrend?: 'rising' | 'falling' | 'stable'; // New Display logic
    energyBalance?: number; // -100 to 100 (Negative = They talk more, Positive = I talk more)
    persona?: 'morning' | 'night' | 'balanced'; // Time-of-day personality
    isGroup?: boolean; // Mock-only field for demo
    type?: string;     // Mock-only field for demo

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

    // Customization
    chatBackground?: {
        type: "image" | "texture" | "gradient" | "color";
        value: string; // image url / gradient css / hex / texture path
        blur?: number;  // px
        intensity?: number; // 0.05 - 0.35
    };
}

export const mockChats: Chat[] = [
    {
        id: "1",
        name: "General",
        lastMessage: "Welcome to PrivLink!",
        time: "10:23 AM",
        timestamp: new Date().toISOString(),
        unreadCount: 0,
        isOnline: true,
        interestScore: 85,
        isGroup: true as any, // Temporary mock extension
    },
    {
        id: "2",
        name: "Alice",
        lastMessage: "Hey, did you see the new design?",
        time: "昨天",
        timestamp: new Date(Date.now() - 86400000).toISOString(),
        unreadCount: 2,
        isOnline: false,
        interestScore: 92,
    }
];

export const mockMessages: Record<string, Message[]> = {
    "1": [
        {
            id: "m1",
            type: 'text',
            content: "Welcome to PrivLink!",
            timestamp: "10:23 AM",
            isMe: false,
            status: 'read'
        }
    ],
    "2": [
        {
            id: "m2",
            type: 'text',
            content: "Hey, did you see the new design?",
            timestamp: "昨天",
            isMe: false,
            status: 'delivered'
        }
    ]
};
