import React, { useState, useRef, useEffect } from 'react';
import EmojiPicker, { Theme, EmojiStyle } from 'emoji-picker-react';
import { useTheme } from 'next-themes';
import { useTypingMetrics } from '@/hooks/useTypingMetrics';

interface MessageInputProps {
    onSendMessage?: (content: string, media?: { type: 'audio' | 'video', url: string }, confidenceScore?: number) => void;
}

export default function MessageInput({ onSendMessage }: MessageInputProps) {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [message, setMessage] = useState("");
    const pickerRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();

    // Recording State
    const [isRecordingAudio, setIsRecordingAudio] = useState(false);
    const [isRecordingVideo, setIsRecordingVideo] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
    const [timer, setTimer] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const chunksRef = useRef<BlobPart[]>([]);

    // Typing Metrics Hook
    const metrics = useTypingMetrics(message);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
                setShowEmojiPicker(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const startTimer = () => {
        setTimer(0);
        timerRef.current = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000);
    };

    const stopTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
        setTimer(0);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const startRecording = async (type: 'audio' | 'video') => {
        try {
            const constraints = type === 'audio' ? { audio: true } : { video: true, audio: true };
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            const recorder = new MediaRecorder(stream);

            recorder.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    chunksRef.current.push(e.data);
                }
            };

            recorder.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: type === 'audio' ? 'audio/webm' : 'video/webm' });
                const url = URL.createObjectURL(blob);

                if (onSendMessage) {
                    onSendMessage(type === 'audio' ? 'Voice Message' : 'Video Message', { type, url });
                }

                // Cleanup
                stream.getTracks().forEach(track => track.stop());
                chunksRef.current = [];
            };

            recorder.start();
            setMediaRecorder(recorder);
            if (type === 'audio') setIsRecordingAudio(true);
            else setIsRecordingVideo(true);
            startTimer();

        } catch (err) {
            console.error("Error accessing media devices:", err);
            alert("Could not access microphone or camera.");
        }
    };

    const stopRecording = () => {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
            setIsRecordingAudio(false);
            setIsRecordingVideo(false);
            setMediaRecorder(null);
            stopTimer();
        }
    };

    const onEmojiClick = (emojiData: any) => {
        setMessage((prev) => prev + emojiData.emoji);
    };

    const handleSend = () => {
        if (message.trim() && onSendMessage) {
            onSendMessage(message, undefined, metrics.confidenceScore);
            setMessage("");
            metrics.resetMetrics();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        metrics.handleKeyDown(e);
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
        metrics.handleChange(e.target.value);
    };

    return (
        <div className="relative p-4 bg-white/50 backdrop-blur-xl dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800">
            {/* Unsent Intent Indicator */}
            {metrics.isUnsentIntent && (
                <div className="absolute -top-6 left-6 text-xs italic text-zinc-400 animate-pulse bg-white/80 px-2 py-1 rounded-md shadow-sm dark:bg-zinc-800/80">
                    You almost said something here...
                </div>
            )}
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

                {/* Recording Indicator Overlay */}
                {(isRecordingAudio || isRecordingVideo) && (
                    <div className="absolute inset-x-2 inset-y-2 flex items-center justify-between rounded-xl bg-red-50 px-4 dark:bg-red-900/20 z-10 backdrop-blur-sm">
                        <div className="flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                            <span className="font-mono font-medium text-red-600 dark:text-red-400">
                                {isRecordingAudio ? 'Recording Audio...' : 'Recording Video...'}  {formatTime(timer)}
                            </span>
                        </div>
                        <button
                            onClick={stopRecording}
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900/50 dark:text-red-400"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2" /></svg>
                        </button>
                    </div>
                )}

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
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        placeholder="Type a message..."
                        className="w-full bg-transparent text-sm font-medium text-zinc-900 placeholder:text-zinc-500 focus:outline-none dark:text-zinc-100"
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex shrink-0 items-center gap-1 pb-1 pr-1">
                    {/* Voice Record Button */}
                    <button
                        onClick={() => startRecording('audio')}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-200 hover:text-red-500 dark:hover:bg-zinc-700"
                        title="Record Voice"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                    </button>

                    {/* Video Record Button */}
                    <button
                        onClick={() => startRecording('video')}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-200 hover:text-red-500 dark:hover:bg-zinc-700"
                        title="Record Video"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    </button>

                    <button
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                        className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${showEmojiPicker ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10' : 'text-zinc-400 hover:bg-zinc-200 hover:text-zinc-600 dark:hover:bg-zinc-700'}`}
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
