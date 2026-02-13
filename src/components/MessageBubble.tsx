import React from 'react';
import AudioBubble from './media/AudioBubble';
import VideoBubble from './media/VideoBubble';

interface MessageBubbleProps {
    type: 'text' | 'audio' | 'video' | 'image' | 'file';
    content: string;
    fileName?: string;
    fileSize?: string;
    timestamp: string;
    isMe?: boolean;
    duration?: number;
    thumbnailUrl?: string;
    reactions?: { emoji: string; count: number }[];
    isConsecutive?: boolean;
    status?: 'sent' | 'delivered' | 'read' | 'queued' | 'sending' | 'failed';
    heatScore?: number;
    confidenceScore?: number;
    style?: {
        bold?: boolean;
        italic?: boolean;
        underline?: boolean;
        fontSize?: string;
    };
    replyTo?: {
        messageId: string;
        username: string;
        text: string;
        mediaType?: 'image' | 'video' | 'audio';
    };
    onReplyClick?: (messageId: string) => void;
    onImageClick?: (url: string) => void;
    onRetry?: () => void;
    onReaction?: (emoji: string) => void;
    expiresAt?: string | Date;
}

export default function MessageBubble({
    type,
    content,
    timestamp,
    isMe = false,
    duration,
    thumbnailUrl,
    reactions = [],
    isConsecutive = false,
    status = 'sent',
    heatScore = 0,
    confidenceScore,
    style: propsStyle,
    replyTo,
    onReplyClick,
    onImageClick,
    fileName,
    fileSize,
    onRetry,
    onReaction,
    expiresAt,
}: MessageBubbleProps) {
    const [showReactionPicker, setShowReactionPicker] = React.useState(false);
    const reactionPickerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (reactionPickerRef.current && !reactionPickerRef.current.contains(event.target as Node)) {
                setShowReactionPicker(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (
        <div className={`flex w-full ${isMe ? 'justify-start' : 'justify-end'} ${isConsecutive ? 'mt-1' : 'mt-4'}`}>
            <div className={`relative max-w-[70%] sm:max-w-[65%] ${isMe ? 'items-start' : 'items-end'} flex flex-col gap-1`}>

                {/* Main Bubble */}
                <div
                    className={`relative px-5 py-3 text-sm overflow-visible transition-all duration-300
          ${isMe
                            ? 'rounded-[26px] rounded-tl-lg bg-linear-to-tr from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 selection:bg-indigo-800 selection:text-indigo-100'
                            : 'rounded-[26px] rounded-tr-lg bg-white/90 backdrop-blur-sm text-zinc-900 shadow-md shadow-zinc-200/50 dark:bg-zinc-800/90 dark:text-zinc-100 dark:shadow-zinc-900/50'
                        }
          ${type !== 'text' ? 'p-1.5' : ''}
          ${confidenceScore !== undefined ? (confidenceScore < 70 ? 'border-b-[3px] border-dotted border-white/40' : 'border-b-[3px] border-solid border-white/20') : ''}
          `}
                >
                    {/* Reply Preview */}
                    {replyTo && (
                        <div
                            onClick={(e) => { e.stopPropagation(); onReplyClick?.(replyTo.messageId); }}
                            className={`mb-2 cursor-pointer rounded-sm border-l-[3px] px-2 py-0.5 text-xs opacity-90 transition-opacity hover:opacity-100 ${isMe ? 'border-indigo-300 bg-indigo-700/30' : 'border-indigo-500 bg-zinc-100 dark:bg-zinc-700/50'}`}
                        >
                            <span className="block font-bold mb-0.5 opacity-100">{replyTo.username}</span>
                            <span className="block truncate opacity-80">
                                {replyTo.mediaType ? (
                                    <span className="italic">
                                        {replyTo.mediaType === 'image' && '🖼 Photo'}
                                        {replyTo.mediaType === 'video' && '📹 Video'}
                                        {replyTo.mediaType === 'audio' && '🎤 Audio'}
                                    </span>
                                ) : replyTo.text}
                            </span>
                        </div>
                    )}

                    {type === 'image' && (
                        <div className="relative mb-2 aspect-video w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 group">
                            <img
                                src={content}
                                alt="Attached"
                                onClick={() => onImageClick?.(content)}
                                className="h-full w-full object-cover transition-transform hover:scale-105 cursor-zoom-in"
                            />
                        </div>
                    )}

                    {type === 'video' && (
                        <div className="w-full max-w-[320px]">
                            <VideoBubble src={content} thumbnailUrl={thumbnailUrl} duration={duration} />
                        </div>
                    )}

                    {type === 'audio' && (
                        <AudioBubble src={content} duration={duration} isMe={isMe} />
                    )}

                    {type === 'file' && (
                        <div className={`flex items-center gap-3 rounded-xl p-3 ${isMe ? 'bg-indigo-600/20' : 'bg-zinc-100 dark:bg-zinc-800'}`}>
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-200 dark:bg-zinc-700">
                                <svg className="h-6 w-6 text-zinc-500 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div className="flex flex-col overflow-hidden max-w-[150px]">
                                <span className="truncate text-sm font-medium text-zinc-800 dark:text-zinc-200" title={fileName || "Document"}>{fileName || "Document"}</span>
                                <span className="text-xs text-zinc-500">{fileSize || "Unknown Size"}</span>
                            </div>
                            <a href={content} download={fileName || "download"} className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white transition-colors hover:bg-indigo-600" onClick={(e) => e.stopPropagation()}>
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </a>
                        </div>
                    )}

                    {type === 'text' && content && (
                        <p className={`leading-relaxed ${confidenceScore !== undefined && confidenceScore < 80 ? 'opacity-90' : ''} 
                        ${propsStyle?.bold ? 'font-bold' : ''} 
                        ${propsStyle?.italic ? 'italic' : ''} 
                        ${propsStyle?.underline ? 'underline underline-offset-4' : ''}`}
                        >
                            {content}
                        </p>
                    )}

                    {/* Timestamp & Status */}
                    <div className={`mt-1 flex items-center ${isMe ? 'justify-start' : 'justify-end'} gap-1.5`}>
                        <span className={`text-[10px] opacity-45 ${isMe ? 'text-indigo-100' : 'text-zinc-400 dark:text-zinc-500'}`}>
                            {timestamp}
                        </span>

                        {/* Reaction Button (Hover only or specific action) */}
                        {!isMe && (
                            <div className="relative group">
                                <button
                                    onClick={(e) => { e.stopPropagation(); setShowReactionPicker(!showReactionPicker); }}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                                >
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </button>
                                {showReactionPicker && (
                                    <div ref={reactionPickerRef} className="absolute bottom-full left-0 mb-2 flex gap-1 rounded-full bg-white p-1 shadow-lg ring-1 ring-black/5 dark:bg-zinc-800 dark:ring-white/10 z-10">
                                        {['👍', '❤️', '😂', '😮', '😢', '🔥'].map(emoji => (
                                            <button
                                                key={emoji}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onReaction?.(emoji);
                                                    setShowReactionPicker(false);
                                                }}
                                                className="h-8 w-8 rounded-full text-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                                            >
                                                {emoji}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {isMe && (
                            <div className="flex items-center" title={status}>
                                {status === 'sending' && (
                                    <svg viewBox="0 0 24 24" width="12" height="12" className="text-[#8e8e93] opacity-60" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" strokeDasharray="4 4" strokeLinecap="round" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                                    </svg>
                                )}
                                {status === 'failed' && (
                                    <button onClick={(e) => { e.stopPropagation(); onRetry?.(); }} className="flex items-center justify-center transition-transform hover:scale-110 active:scale-95">
                                        <svg viewBox="0 0 24 24" width="14" height="14" className="text-red-500" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <circle cx="12" cy="12" r="10" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
                                        </svg>
                                    </button>
                                )}
                                {status === 'queued' && (
                                    <svg viewBox="0 0 24 24" width="14" height="14" className="text-zinc-400 dark:text-zinc-500" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )}
                                {status === 'sent' && (
                                    <svg viewBox="0 0 16 15" width="16" height="15" className="text-indigo-200/70">
                                        <path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 14.377l-3.609-3.419a.364.364 0 0 0-.513.008l-.5.509a.364.364 0 0 0 .009.513l4.316 4.088a.36.36 0 0 0 .506-.01L15.074 3.827a.365.365 0 0 0-.063-.51z" />
                                    </svg>
                                )}
                                {status === 'delivered' && (
                                    <div className="flex -space-x-1">
                                        <svg viewBox="0 0 16 15" width="16" height="15" className="text-indigo-200/70">
                                            <path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 14.377l-3.609-3.419a.364.364 0 0 0-.513.008l-.5.509a.364.364 0 0 0 .009.513l4.316 4.088a.36.36 0 0 0 .506-.01L15.074 3.827a.365.365 0 0 0-.063-.51z" />
                                        </svg>
                                        <svg viewBox="0 0 16 15" width="16" height="15" className="text-indigo-200/70 relative -left-[7px]">
                                            <path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 14.377l-3.609-3.419a.364.364 0 0 0-.513.008l-.5.509a.364.364 0 0 0 .009.513l4.316 4.088a.36.36 0 0 0 .506-.01L15.074 3.827a.365.365 0 0 0-.063-.51z" />
                                        </svg>
                                    </div>
                                )}
                                {status === 'read' && (
                                    <div className="flex -space-x-1">
                                        <svg viewBox="0 0 16 15" width="16" height="15" className="text-blue-300">
                                            <path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 14.377l-3.609-3.419a.364.364 0 0 0-.513.008l-.5.509a.364.364 0 0 0 .009.513l4.316 4.088a.36.36 0 0 0 .506-.01L15.074 3.827a.365.365 0 0 0-.063-.51z" />
                                        </svg>
                                        <svg viewBox="0 0 16 15" width="16" height="15" className="text-blue-300 relative -left-[7px]">
                                            <path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 14.377l-3.609-3.419a.364.364 0 0 0-.513.008l-.5.509a.364.364 0 0 0 .009.513l4.316 4.088a.36.36 0 0 0 .506-.01L15.074 3.827a.365.365 0 0 0-.063-.51z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Reactions */}
                {reactions.length > 0 && (
                    <div className={`flex items-center gap-1 ${isMe ? 'justify-start pl-1' : 'justify-end pr-1'} -mt-3 relative z-10`}>
                        {reactions.map((r, i) => (
                            <div key={i} className="flex items-center gap-1 rounded-full border border-white bg-zinc-50 px-1.5 py-0.5 text-[10px] shadow-sm dark:border-zinc-900 dark:bg-zinc-800">
                                <span>{r.emoji}</span>
                                <span className="text-xs text-zinc-500 dark:text-zinc-400">{r.count}</span>
                            </div>
                        ))}
                        {/* Heatmap Indicator */}
                        {heatScore > 50 && (
                            <div className="absolute -top-2 -right-2 flex items-center justify-center rounded-full bg-orange-100 p-1 shadow-sm ring-1 ring-white dark:bg-zinc-800 dark:ring-zinc-900" title="High Interest Message">
                                <span className="text-[10px] opacity-70">
                                    {timestamp}
                                </span>
                                {expiresAt && (
                                    <span title={`Expires: ${new Date(expiresAt).toLocaleTimeString()}`}>
                                        <svg className="w-3 h-3 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
