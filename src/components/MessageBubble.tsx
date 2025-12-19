import React from 'react';

interface MessageBubbleProps {
    content?: string;
    timestamp: string;
    isMe?: boolean;
    image?: string;
    mediaUrl?: string; // For audio/video
    mediaType?: 'audio' | 'video';
    reactions?: { emoji: string; count: number }[];
    isConsecutive?: boolean;
}

export default function MessageBubble({
    content,
    timestamp,
    isMe = false,
    image,
    mediaUrl,
    mediaType,
    reactions = [],
    isConsecutive = false,
}: MessageBubbleProps) {
    return (
        <div className={`flex w-full ${isMe ? 'justify-end' : 'justify-start'} ${isConsecutive ? 'mt-1' : 'mt-4'}`}>
            <div className={`relative max-w-[70%] sm:max-w-[65%] ${isMe ? 'items-end' : 'items-start'} flex flex-col gap-1`}>

                {/* Main Bubble */}
                <div
                    className={`relative px-4 py-2.5 text-sm shadow-sm
          ${isMe
                            ? 'rounded-2xl rounded-tr-md bg-indigo-600 text-white selection:bg-indigo-800 selection:text-indigo-100'
                            : 'rounded-2xl rounded-tl-md bg-white text-zinc-900 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:ring-zinc-700/50'
                        }
          ${(image || mediaUrl) ? 'p-1' : ''}
          `}
                >
                    {image && (
                        <div className="relative mb-2 aspect-video w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900">
                            <img src={image} alt="Attached" className="h-full w-full object-cover transition-transform hover:scale-105" />
                        </div>
                    )}

                    {mediaUrl && mediaType === 'video' && (
                        <div className="relative mb-2 aspect-video w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900">
                            <video src={mediaUrl} controls className="h-full w-full object-cover" />
                        </div>
                    )}

                    {mediaUrl && mediaType === 'audio' && (
                        <div className={`mb-2 w-full min-w-[200px] ${isMe ? 'text-white' : 'text-zinc-900'}`}>
                            <audio src={mediaUrl} controls className="w-full" />
                        </div>
                    )}

                    {content && (
                        <p className={`leading-relaxed ${(image || mediaUrl) ? 'px-2 pb-2' : ''}`}>{content}</p>
                    )}

                    {/* Timestamp - Positioned absolutely or inline? Inline is safer for flex */}
                    <div className={`mt-1 flex items-center justify-end gap-1.5 text-[10px] sm:text-[11px] font-medium opacity-70 ${isMe ? 'text-indigo-100' : 'text-zinc-400'}`}>
                        {timestamp}
                        {isMe && (
                            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                <path d="M21 7l-1.41-1.41L9 16.17 4.83 12l-1.42 1.41L9 19 21 7z" fillOpacity="0.5" transform="translate(4,0)" />
                            </svg>
                        )}
                    </div>
                </div>

                {/* Reactions */}
                {reactions.length > 0 && (
                    <div className={`flex items-center gap-1 ${isMe ? 'justify-end pr-1' : 'justify-start pl-1'} -mt-3 relative z-10`}>
                        {reactions.map((r, i) => (
                            <div key={i} className="flex items-center gap-1 rounded-full border border-white bg-zinc-50 px-1.5 py-0.5 text-[10px] shadow-sm dark:border-zinc-900 dark:bg-zinc-800">
                                <span>{r.emoji}</span>
                                <span className="font-semibold text-zinc-600 dark:text-zinc-400">{r.count}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
