import React, { useState, useRef, useEffect } from 'react';
import EmojiPicker, { Theme, EmojiStyle } from 'emoji-picker-react';
import { useTheme } from 'next-themes';

interface MessageInputProps {
    onSendMessage?: (content: string) => void;
}

export default function MessageInput({ onSendMessage }: MessageInputProps) {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [message, setMessage] = useState("");
    const pickerRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
                setShowEmojiPicker(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const onEmojiClick = (emojiData: any) => {
        setMessage((prev) => prev + emojiData.emoji);
    };

    const handleSend = () => {
        if (message.trim() && onSendMessage) {
            onSendMessage(message);
            setMessage("");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="relative p-4 bg-white/50 backdrop-blur-xl dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800">
            {showEmojiPicker && (
                <div className="absolute bottom-full left-4 mb-2 z-50 shadow-2xl rounded-2xl" ref={pickerRef}>
                    <EmojiPicker
                        theme={theme === 'dark' ? Theme.DARK : Theme.LIGHT}
                        emojiStyle={EmojiStyle.APPLE}
                        onEmojiClick={onEmojiClick}
                        width={350}
                        height={450}
                        searchDisabled={false}
                        skinTonesDisabled={false}
                    />
                </div>
            )}

            <div className="flex items-end gap-2 rounded-2xl bg-zinc-100 p-2 ring-1 ring-zinc-200 dark:bg-zinc-800/50 dark:ring-zinc-800 transition-all focus-within:ring-2 focus-within:ring-indigo-500/50 focus-within:bg-white dark:focus-within:bg-zinc-800">

                {/* Attachment Button */}
                <div className="flex shrink-0 pb-1 pl-1">
                    <button className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-200 hover:text-indigo-600 dark:text-zinc-400 dark:hover:bg-zinc-700">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                </div>

                {/* Input */}
                <div className="min-h-[44px] flex-1 py-2.5">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type a message..."
                        className="w-full bg-transparent text-sm font-medium text-zinc-900 placeholder:text-zinc-500 focus:outline-none dark:text-zinc-100"
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex shrink-0 items-center gap-1 pb-1 pr-1">
                    <button
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                        className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${showEmojiPicker ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10' : 'text-zinc-400 hover:bg-zinc-200 hover:text-zinc-600 dark:hover:bg-zinc-700'}`}
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <button className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-200 hover:text-zinc-600 dark:hover:bg-zinc-700">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </button>
                    <div className="pl-1">
                        <button
                            onClick={handleSend}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 transition-all hover:scale-105 hover:bg-indigo-700 active:scale-95"
                        >
                            <svg className="h-5 w-5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
