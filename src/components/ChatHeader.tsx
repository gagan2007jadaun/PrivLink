import React from 'react';

interface ChatHeaderProps {
    onToggleRightPanel: () => void;
    name: string;
    avatarUrl?: string; // Not used in design yet but good to have
    isOnline?: boolean;
}

export default function ChatHeader({ onToggleRightPanel, name, avatarUrl, isOnline }: ChatHeaderProps) {
    return (
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-zinc-200 bg-white/50 px-6 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/50">
            <div className="flex items-center gap-4">
                <div className="relative">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-tr from-purple-400 to-indigo-500 text-sm font-bold text-white shadow-md ring-2 ring-white dark:ring-zinc-900">
                        {avatarUrl ? (
                            <img src={avatarUrl} alt={name} className="h-full w-full rounded-full object-cover" />
                        ) : (
                            name.slice(0, 2).toUpperCase()
                        )}
                    </div>
                    {isOnline && (
                        <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-900" />
                    )}
                </div>
                <div className="flex flex-col">
                    <h2 className="text-sm font-bold text-zinc-900 dark:text-white">{name}</h2>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                        {isOnline ? (
                            <>
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                                </span>
                                Active now
                            </>
                        ) : (
                            <span className="text-zinc-500">Offline</span>
                        )}
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
                <button className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-zinc-100 hover:text-indigo-600 dark:hover:bg-zinc-800">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-zinc-100 hover:text-indigo-600 dark:hover:bg-zinc-800">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                </button>
                <div className="mx-2 h-4 w-px bg-zinc-200 dark:bg-zinc-700" />
                <button className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                <button
                    onClick={onToggleRightPanel}
                    className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
