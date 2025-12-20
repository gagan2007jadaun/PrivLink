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
}

export interface Chat {
    id: string;
    name: string;
    avatarUrl?: string; // Optional, initials will be used if missing
    lastMessage: string;
    time: string;
    unreadCount?: number;
    isOnline?: boolean;
    trustScore?: number; // 0-100
}

export const mockChats: Chat[] = [
    {
        id: "1",
        name: "Sarah Wilson",
        lastMessage: "That looks amazing! ✨",
        time: "2m",
        unreadCount: 2,
        isOnline: true,
        trustScore: 95,
    },
    {
        id: "2",
        name: "Design Team",
        lastMessage: "Alex: Updated the figma file",
        time: "12m",
        unreadCount: 5,
        trustScore: 88,
    },
    {
        id: "3",
        name: "John Cooper",
        lastMessage: "Can we schedule a call?",
        time: "1h",
        isOnline: true,
        trustScore: 42,
    },
    {
        id: "4",
        name: "Marketing Group",
        lastMessage: "You: Sent the report",
        time: "3h",
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
        { id: "1", content: "Is this connection secure?", timestamp: "10:23 AM", isMe: true },
        { id: "2", content: "Yes, this is PrivLink. End-to-end encrypted.", timestamp: "10:24 AM", isMe: false },
        { id: "3", content: "Perfect. Sending the confidential specs.", timestamp: "10:25 AM", isMe: true },
        { id: "4", content: "Ready to receive.", timestamp: "10:25 AM", isMe: false },
    ],
    "2": [
        { id: "1", content: "Hey team, check out the new designs.", timestamp: "09:00 AM", isMe: false },
        { id: "2", content: "Looking good! I'll update the components.", timestamp: "09:15 AM", isMe: true },
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
