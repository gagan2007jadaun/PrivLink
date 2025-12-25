import React from 'react';

interface ChatListItemProps {
  name: string;
  lastMessage: string;
  time: string;
  isActive?: boolean;
  unreadCount?: number;
  avatarUrl?: string; // Optional for now, can use placeholders or initials
  isOnline?: boolean;
  isLocked?: boolean;
  onArchive?: () => void;
  isArchived?: boolean;
}

export default function ChatListItem({
  name,
  lastMessage,
  time,
  isActive = false,
  unreadCount = 0,
  avatarUrl,
  isOnline = false,
  isLocked = false,
  onArchive,
  isArchived = false,
}: ChatListItemProps) {
  return (
    <div
      className={`group relative flex w-full cursor-pointer items-center gap-3 rounded-lg p-3 transition-all duration-200 
      ${isActive ? 'bg-indigo-50 dark:bg-zinc-800/50' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}
    >
      {/* Avatar */}
      <div className="relative h-12 w-12 flex-shrink-0">
        <div className={`h-full w-full rounded-full p-0.5 ${isActive ? 'bg-indigo-500' : 'bg-transparent'}`}>
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} className="h-full w-full rounded-full object-cover bg-white" />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 font-bold text-lg text-indigo-500">
              {name.substring(0, 2).toUpperCase()}
            </div>
          )}
        </div>
        {isLocked && (
          <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 border-2 border-white dark:border-zinc-950 text-[10px]" title="Locked">
            🔐
          </div>
        )}
        {isOnline && !isLocked && (
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-950" />
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between">
          <h3 className={`truncate text-sm font-semibold ${isActive ? 'text-indigo-900 dark:text-indigo-100' : 'text-zinc-900 dark:text-zinc-100'}`}>
            {name}
          </h3>
          <span className="text-xs text-zinc-400 group-hover:text-zinc-500 dark:text-zinc-500">{time}</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <p className={`truncate text-sm ${isActive ? 'text-indigo-700/80 dark:text-indigo-300/70' : 'text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400'}`}>
            {lastMessage}
          </p>
          {unreadCount > 0 && (
            <span className="flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-indigo-600 px-1 text-[10px] font-bold text-white shadow-md shadow-indigo-500/20">
              {unreadCount}
            </span>
          )}
        </div>
      </div>

      {/* Archive Action (Visible on Group Hover) */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onArchive?.();
          }}
          className="rounded-lg bg-zinc-200 p-2 text-zinc-600 hover:bg-zinc-300 hover:text-zinc-900 dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-600 dark:hover:text-white shadow-sm"
          title={isArchived ? "Unarchive" : "Archive"}
        >
          {isArchived ? (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          ) : (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
