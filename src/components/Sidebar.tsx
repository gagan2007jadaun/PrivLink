import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import ChatListItem from './ChatListItem';
import CreateGroupOrTree from './CreateGroupOrTree';
import StartNewChat from './StartNewChat';
import { Chat } from '@/lib/data';

interface SidebarProps {
    chats: Chat[];
    activeChatId: string;
    onSelectChat: (chatId: string) => void;
    onCreateChat?: (data: { type: string; name: string; description: string }) => void;
    onArchiveChat?: (chatId: string) => void;
    onDeleteChat?: (chatId: string) => void;
}

export default function Sidebar({ chats, activeChatId, onSelectChat, onCreateChat, onArchiveChat, onDeleteChat }: SidebarProps) {
    const ACTIONS = {
        CREATE: "create",   // group / family tree
        CHAT: "chat",        // new chat
    };

    // Filters
    const FILTER_ALL = 'All Chats';
    const FILTER_ARCHIVED = 'Archived';

    // Search Filters
    type SearchType = 'text' | 'media' | 'links';
    const [searchType, setSearchType] = useState<SearchType>('text');
    const [searchQuery, setSearchQuery] = useState("");

    const [activeFilter, setActiveFilter] = useState(FILTER_ALL);
    const [action, setAction] = useState<string | null>(null);

    // Filter Logic
    const getFilteredChats = () => {
        let filtered = chats.filter(chat => {
            // 1. Archive Status
            if (activeFilter === FILTER_ARCHIVED && !chat.isArchived) return false;
            if (activeFilter !== FILTER_ARCHIVED && chat.isArchived) return false;
            return true;
        });

        // 2. Search Query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(chat =>
                chat.name.toLowerCase().includes(query) ||
                chat.lastMessage.toLowerCase().includes(query)
            );
        }

        // 3. Search Type (Heuristics on Last Message)
        if (searchType === 'media') {
            const mediaKeywords = ['photo', 'video', 'image', 'audio', 'gif', 'sticker'];
            filtered = filtered.filter(chat =>
                mediaKeywords.some(keyword => chat.lastMessage.toLowerCase().includes(keyword))
            );
        } else if (searchType === 'links') {
            filtered = filtered.filter(chat =>
                chat.lastMessage.toLowerCase().includes('http') ||
                chat.lastMessage.toLowerCase().includes('www.')
            );
        }

        return filtered;
    };

    return (
        <aside className="hidden w-80 flex-col border-r border-zinc-100 bg-white/50 backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-900/50 md:flex md:m-2 md:rounded-2xl md:border md:h-[calc(100vh-16px)] overflow-hidden shadow-sm">
            {/* Header */}
            <div className="flex flex-col gap-4 p-4 pb-2">
                <div className="flex items-center justify-between px-1">
                    <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        PrivLink
                    </h1>
                    <button
                        suppressHydrationWarning
                        onClick={() => setAction(ACTIONS.CREATE)}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-indigo-600 dark:hover:bg-zinc-800"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                </div>

                {/* Search */}
                <div className="space-y-3">
                    <div className="relative">
                        <svg className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            suppressHydrationWarning
                            type="text"
                            placeholder="Search messages..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-xl border-none bg-zinc-100 py-2 pl-9 pr-4 text-sm font-medium text-zinc-900 transition-all placeholder:text-zinc-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:bg-zinc-800 md:text-sm"
                        />
                    </div>
                    {/* Search Filters */}
                    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                        {(['text', 'media', 'links'] as const).map((type) => (
                            <button
                                key={type}
                                onClick={() => setSearchType(type)}
                                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold capitalize transition-all ${searchType === type
                                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-sm'
                                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
                                    }`}
                            >
                                {type === 'text' && (
                                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                                    </svg>
                                )}
                                {type === 'media' && (
                                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                )}
                                {type === 'links' && (
                                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                    </svg>
                                )}
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2 overflow-x-auto overflow-y-hidden no-scrollbar px-2 pb-2">
                <button
                    onClick={() => setActiveFilter(FILTER_ALL)}
                    className={`whitespace-nowrap rounded-xl px-4 py-1.5 text-xs font-bold transition-all ${activeFilter === FILTER_ALL ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-md transform scale-105' : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 bg-white/50 dark:bg-zinc-800/50'}`}
                >
                    All
                </button>
                <button
                    onClick={() => setActiveFilter(FILTER_ARCHIVED)}
                    className={`whitespace-nowrap rounded-xl px-4 py-1.5 text-xs font-bold transition-all ${activeFilter === FILTER_ARCHIVED ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-md transform scale-105' : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 bg-white/50 dark:bg-zinc-800/50'}`}
                >
                    Archived
                </button>
                <button className="whitespace-nowrap rounded-xl px-4 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 bg-white/50 dark:bg-zinc-800/50">
                    Personal
                </button>
                <button className="whitespace-nowrap rounded-xl px-4 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 bg-white/50 dark:bg-zinc-800/50">
                    Work
                </button>
                <button className="whitespace-nowrap rounded-xl px-4 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 bg-white/50 dark:bg-zinc-800/50">
                    Groups
                </button>
            </div>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto px-2 no-scrollbar">
                <div className="space-y-1 py-2">
                    {getFilteredChats().map((chat) => (
                        <div key={chat.id} onClick={() => onSelectChat(chat.id)}>
                            <ChatListItem
                                name={chat.name}
                                lastMessage={chat.lastMessage}
                                time={chat.time}
                                unreadCount={chat.unreadCount}
                                isOnline={chat.isOnline}
                                isActive={chat.id === activeChatId}
                                avatarUrl={chat.avatarUrl}
                                isArchived={chat.isArchived}
                                isLocked={chat.isLocked}
                                onArchive={() => onArchiveChat?.(chat.id)}
                                onDelete={() => onDeleteChat?.(chat.id)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer CTA */}
            <div className="flex gap-2 border-t border-zinc-200 p-4 dark:border-zinc-800">
                <Link href="/settings" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-500 shadow-sm transition-all hover:bg-zinc-50 hover:text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </Link>
                <button
                    onClick={() => setAction(ACTIONS.CHAT)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-700 active:scale-[0.98]"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Start New Chat
                </button>
            </div>

            {
                action === ACTIONS.CREATE && (
                    <CreateGroupOrTree
                        onClose={() => setAction(null)}
                        onCreate={(data) => {
                            onCreateChat?.(data);
                            setAction(null);
                        }}
                    />
                )
            }

            {
                action === ACTIONS.CHAT && (
                    <StartNewChat
                        onClose={() => setAction(null)}
                    />
                )
            }
        </aside >
    );
}
