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
}

export default function ChatListItem({
  name,
  lastMessage,
  time,
  isActive = false,
  unreadCount = 0,
  avatarUrl,
  isOnline = false,
  isLocked = false, // Default value for isLocked
}: ChatListItemProps) {
  return (
    <div
      className={`group flex w-full cursor-pointer items-center gap-3 rounded-lg p-3 transition-all duration-200 
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
    </div>
  );
}
