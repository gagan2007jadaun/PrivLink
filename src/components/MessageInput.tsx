import React, { useState, useRef, useEffect } from 'react';
import EmojiPicker, { Theme, EmojiStyle } from 'emoji-picker-react';
import { useTheme } from 'next-themes';
import { useTypingMetrics } from '@/hooks/useTypingMetrics';
import { generateThumbnail } from '@/lib/mediaUtils';

interface MessageInputProps {
    onSendMessage?: (
        content: string,
        type: 'text' | 'audio' | 'video' | 'image' | 'file',
        duration?: number,
        confidenceScore?: number,
        thumbnailUrl?: string,
        style?: { bold?: boolean; italic?: boolean; underline?: boolean; fontSize?: string },
        fileName?: string,
        fileSize?: string
    ) => void;
    boundaryMode?: boolean;
    recentMessages?: string[];
    selfAlias?: string;
    replyingTo?: { sender: string; text: string; mediaType?: string } | null;
    onCancelReply?: () => void;
    isIncognito?: boolean;
    onTyping?: (isTyping: boolean) => void;
}

export default function MessageInput({
    onSendMessage,
    boundaryMode = false,
    recentMessages = [],
    selfAlias,
    replyingTo,
    onCancelReply,
    isIncognito = false,
    onTyping
}: MessageInputProps) {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [message, setMessage] = useState("");
    const [isEcho, setIsEcho] = useState(false);
    const pickerRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();
    const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Premium Attachment Menu State
    const [isAttachOpen, setIsAttachOpen] = useState(false);
    const [showFontToolbar, setShowFontToolbar] = useState(false);
    const [messageStyle, setMessageStyle] = useState({ bold: false, italic: false, underline: false });

    // Recording State
    const [isRecordingAudio, setIsRecordingAudio] = useState(false);
    const [isRecordingVideo, setIsRecordingVideo] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
    const [timer, setTimer] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const chunksRef = useRef<BlobPart[]>([]);

    // Audio Visualization Refs
    const [waveBars, setWaveBars] = useState<number[]>(new Array(12).fill(4));
    const audioContextRef = useRef<AudioContext | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const animationFrameRef = useRef<number | null>(null);

    // Typing Metrics Hook
    const metrics = useTypingMetrics(message);

    // Echo Detection
    useEffect(() => {
        if (!message || message.length < 5) {
            setIsEcho(false);
            return;
        }
        const isRepetitive = recentMessages.some(prev =>
            prev.toLowerCase().trim() === message.toLowerCase().trim() ||
            (prev.length > 10 && prev.includes(message)) ||
            (message.length > 10 && message.includes(prev))
        );
        setIsEcho(isRepetitive);
    }, [message, recentMessages]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
                setShowEmojiPicker(false);
            }
            // Close attachment menu on outside click if not clicking the toggle itself
            // (Simplified logic: clicking input or elsewhere closes it)
            // For now, we rely on specific interactions closing it or explicit toggles.
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
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const isRecordingCancelled = useRef(false);

    // Auto-stop recording after 60 seconds
    useEffect(() => {
        if ((isRecordingAudio || isRecordingVideo) && timer >= 60) {
            stopRecording();
        }
    }, [timer, isRecordingAudio, isRecordingVideo]);

    const cancelRecording = () => {
        isRecordingCancelled.current = true;
        stopRecording();
    };

    const startRecording = async (type: 'audio' | 'video') => {
        try {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                alert("Media recording is not supported in this browser or environment (API not found).");
                return;
            }

            const constraints = type === 'audio' ? { audio: true } : { video: true, audio: true };
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            const recorder = new MediaRecorder(stream);

            recorder.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    chunksRef.current.push(e.data);
                }
            };

            recorder.onstop = async () => {
                // Cleanup Audio Context / Visualization
                if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
                if (audioContextRef.current) {
                    audioContextRef.current.close();
                    audioContextRef.current = null;
                }
                analyserRef.current = null;
                setWaveBars(new Array(12).fill(4));

                if (isRecordingCancelled.current) {
                    // Discard
                    stream.getTracks().forEach(track => track.stop());
                    chunksRef.current = [];
                    isRecordingCancelled.current = false;
                    return;
                }

                const blob = new Blob(chunksRef.current, { type: type === 'audio' ? 'audio/webm' : 'video/webm' });
                const url = URL.createObjectURL(blob);
                const duration = timer;

                let thumbnail = undefined;
                if (type === 'video') {
                    thumbnail = await generateThumbnail(url);
                }

                if (onSendMessage) {
                    onSendMessage(url, type, duration, undefined, thumbnail);
                }

                stream.getTracks().forEach(track => track.stop());
                chunksRef.current = [];
            };

            recorder.start();
            setMediaRecorder(recorder);
            isRecordingCancelled.current = false;

            if (type === 'audio') {
                setIsRecordingAudio(true);
                // Setup Visualization
                try {
                    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
                    if (AudioCtx) {
                        const audioCtx = new AudioCtx();
                        const analyser = audioCtx.createAnalyser();
                        analyser.fftSize = 64;
                        const source = audioCtx.createMediaStreamSource(stream);
                        source.connect(analyser);

                        audioContextRef.current = audioCtx;
                        analyserRef.current = analyser;

                        const dataArray = new Uint8Array(analyser.frequencyBinCount);
                        const animate = () => {
                            analyser.getByteFrequencyData(dataArray);
                            // Take first 12 bins
                            const bars = Array.from(dataArray.slice(0, 12)).map(v => Math.max(4, v / 6));
                            setWaveBars(bars);
                            animationFrameRef.current = requestAnimationFrame(animate);
                        };
                        animate();
                    }
                } catch (e) {
                    console.error("Audio Web API error", e);
                }
            } else {
                setIsRecordingVideo(true);
            }

            startTimer();
            setMessage("");
            setIsAttachOpen(false); // Close menu if started from there

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
            const scoreToSend = boundaryMode ? undefined : metrics.confidenceScore;
            // Filter inactive styles
            const activeStyles = {
                bold: messageStyle.bold || undefined,
                italic: messageStyle.italic || undefined,
                underline: messageStyle.underline || undefined,
            };
            onSendMessage(message, 'text', undefined, scoreToSend, undefined, activeStyles);
            setMessage("");
            metrics.resetMetrics();

            // Stop typing immediately
            if (onTyping) onTyping(false);
            if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (isRecordingAudio || isRecordingVideo) return;
        metrics.handleKeyDown(e);
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (isRecordingAudio || isRecordingVideo) return;
        const msg = e.target.value;
        setMessage(msg);
        metrics.handleChange(msg);

        // Typing Indicator Logic
        if (onTyping) {
            if (msg.trim().length > 0) {
                onTyping(true);

                // Clear existing timeout
                if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

                // Set new timeout to stop typing after inactivity
                typingTimeoutRef.current = setTimeout(() => {
                    onTyping(false);
                }, 2000);
            } else {
                onTyping(false);
            }
        }
    };

    const toggleStyle = (style: 'bold' | 'italic' | 'underline') => {
        setMessageStyle(prev => ({ ...prev, [style]: !prev[style] }));
    };

    const isRecording = isRecordingAudio || isRecordingVideo;

    return (
        <div className={`chat-input relative px-3 py-2 rounded-[24px] m-[10px] shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] transition-colors duration-300 ${isIncognito ? 'bg-zinc-800' : 'bg-white/40 backdrop-blur-xl dark:bg-black/40'}`}>
            {/* Reply Bar */}
            {replyingTo && (
                <div className="mb-2 flex items-center justify-between rounded-lg border-l-4 border-indigo-500 bg-white/40 dark:bg-zinc-800/40 backdrop-blur-md p-2 animate-fade-in-up">
                    <div className="flex flex-col overflow-hidden">
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                            Replying to {replyingTo.sender}
                        </span>
                        <span className="truncate text-xs text-zinc-600 dark:text-zinc-400">
                            {replyingTo.mediaType ? `[${replyingTo.mediaType}] ` : ''}{replyingTo.text}
                        </span>
                    </div>
                    <button
                        onClick={onCancelReply}
                        className="ml-2 rounded-full p-1 text-zinc-500 hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            )}

            {/* Font Toolbar */}
            {showFontToolbar && !isRecording && (
                <div className="absolute -top-12 left-4 z-50 flex items-center gap-1 rounded-xl bg-white/90 p-1 shadow-lg ring-1 ring-black/5 dark:bg-zinc-900/90 dark:ring-white/10 animate-fade-in-up backdrop-blur-xl">
                    <button
                        onClick={() => toggleStyle('bold')}
                        className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold transition-colors ${messageStyle.bold ? 'bg-zinc-100 text-indigo-600 dark:bg-zinc-700 dark:text-indigo-400' : 'text-zinc-500 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-white/10'}`}
                    >
                        B
                    </button>
                    <button
                        onClick={() => toggleStyle('italic')}
                        className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm italic font-serif transition-colors ${messageStyle.italic ? 'bg-zinc-100 text-indigo-600 dark:bg-zinc-700 dark:text-indigo-400' : 'text-zinc-500 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-white/10'}`}
                    >
                        I
                    </button>
                    <button
                        onClick={() => toggleStyle('underline')}
                        className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm underline transition-colors ${messageStyle.underline ? 'bg-zinc-100 text-indigo-600 dark:bg-zinc-700 dark:text-indigo-400' : 'text-zinc-500 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-white/10'}`}
                    >
                        U
                    </button>
                </div>
            )}

            {/* Attachment Menu */}
            {isAttachOpen && !isRecording && (
                <div className="absolute bottom-20 left-4 z-50 flex flex-col min-w-[240px] gap-1 rounded-2xl bg-white/80 p-2 shadow-2xl backdrop-blur-2xl ring-1 ring-black/5 dark:bg-zinc-900/80 dark:ring-white/10 animate-fade-in-up origin-bottom-left border border-white/20">

                    {/* Camera */}
                    <button
                        onClick={() => startRecording('video')}
                        className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-200 dark:hover:bg-white/10"
                    >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100/80 text-red-600 dark:bg-red-900/40 dark:text-red-400">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </span>
                        <div className="flex flex-col items-start">
                            <span className="leading-tight">Camera</span>
                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500">Photos & Videos</span>
                        </div>
                    </button>

                    {/* Gallery (Functional) */}
                    <button
                        onClick={() => document.getElementById('image-upload')?.click()}
                        className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-200 dark:hover:bg-white/10"
                    >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100/80 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </span>
                        <div className="flex flex-col items-start">
                            <span className="leading-tight">Gallery</span>
                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500">Send images</span>
                        </div>
                    </button>
                    <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file && onSendMessage) {
                                const url = URL.createObjectURL(file);
                                onSendMessage(url, 'image');
                                setIsAttachOpen(false);
                            }
                        }}
                    />

                    {/* Document (Real) */}
                    <button
                        onClick={() => document.getElementById('doc-upload')?.click()}
                        className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-200 dark:hover:bg-white/10"
                    >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100/80 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </span>
                        <div className="flex flex-col items-start">
                            <span className="leading-tight">Document</span>
                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500">Share files</span>
                        </div>
                    </button>
                    <input
                        id="doc-upload"
                        type="file"
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.zip"
                        className="hidden"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file && onSendMessage) {
                                const url = URL.createObjectURL(file);
                                const size = (file.size / (1024 * 1024)).toFixed(2) + " MB";
                                onSendMessage(url, 'file', undefined, undefined, undefined, undefined, file.name, size);
                                setIsAttachOpen(false);
                            }
                        }}
                    />

                    {/* Poll (Mock) */}
                    <button
                        onClick={() => alert("Polls coming soon!")}
                        className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-200 dark:hover:bg-white/10"
                    >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100/80 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </span>
                        <div className="flex flex-col items-start">
                            <span className="leading-tight">Poll</span>
                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500">Create a poll</span>
                        </div>
                    </button>

                    {/* Contact (Mock) */}
                    <button
                        onClick={() => alert("Contact sharing coming soon!")}
                        className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-200 dark:hover:bg-white/10"
                    >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100/80 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <div className="flex flex-col items-start">
                            <span className="leading-tight">Contact</span>
                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500">Share contact</span>
                        </div>
                    </button>

                    {/* Event (Mock) */}
                    <button
                        onClick={() => alert("Event creation coming soon!")}
                        className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-200 dark:hover:bg-white/10"
                    >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100/80 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </span>
                        <div className="flex flex-col items-start">
                            <span className="leading-tight">Event</span>
                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500">Create event</span>
                        </div>
                    </button>

                    {/* Font / Text Option */}
                    <button
                        onClick={() => {
                            setShowFontToolbar(!showFontToolbar);
                            setIsAttachOpen(false);
                        }}
                        className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-200 dark:hover:bg-white/10"
                    >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100/80 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400">
                            <span className="text-sm font-serif font-bold">Aa</span>
                        </span>
                        <div className="flex flex-col items-start">
                            <span className="leading-tight">Text Options</span>
                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500">Format text</span>
                        </div>
                    </button>
                </div>
            )}


            {/* Unsent Intent Indicator (Hidden in Boundary Mode) */}
            {metrics.isUnsentIntent && !boundaryMode && !isEcho && !isRecording && (
                <div className="absolute -top-6 left-6 text-xs italic text-zinc-400 animate-pulse bg-white/80 px-2 py-1 rounded-md shadow-sm dark:bg-zinc-800/80">
                    You almost said something here...
                </div>
            )}

            {/* Echo Detection Warning */}
            {isEcho && !boundaryMode && !isRecording && (
                <div className="absolute -top-6 left-6 text-xs font-medium text-amber-500 animate-fade-in-up bg-amber-50 px-2 py-1 rounded-md shadow-sm border border-amber-100 dark:bg-amber-900/30 dark:border-amber-800">
                    ↺ Copycat? You said this recently.
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

            <div className={`flex items-center gap-2 rounded-2xl bg-zinc-100/50 px-3 py-1.5 min-h-[38px] dark:bg-zinc-800/30 transition-all focus-within:ring-2 focus-within:ring-indigo-500/50 focus-within:bg-white/80 dark:focus-within:bg-zinc-800/80 backdrop-blur-sm ${isRecording ? 'ring-red-200 bg-red-50/50 dark:bg-red-900/20 dark:ring-red-900/50' : ''}`}>

                {/* Recording Indicator Overlay */}
                {/* Recording Indicator Overlay */}
                {isRecording && (
                    <div className="absolute inset-x-2 inset-y-2 flex items-center justify-between rounded-xl bg-red-50/90 dark:bg-red-900/40 z-10 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.2)] border border-red-100 dark:border-red-800/50 transition-all duration-300">
                        {/* Waveform Visualization */}
                        <div className="flex items-center gap-4 pl-3">
                            <div className="flex items-center gap-1 h-8 filter drop-shadow-[0_0_4px_rgba(108,92,231,0.4)]">
                                {isRecordingAudio ? waveBars.map((h, i) => (
                                    <div
                                        key={i}
                                        className="w-[3px] bg-indigo-500 rounded-full transition-[height] duration-75 ease-linear"
                                        style={{ height: `${h}px` }}
                                    />
                                )) : (
                                    <span className="flex h-3 w-3 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-col justify-center">
                                <span className={`font-mono text-sm font-bold ${isRecordingAudio ? 'text-indigo-600 dark:text-indigo-400' : 'text-red-600 dark:text-red-400'}`}>
                                    {formatTime(timer)}
                                </span>
                                <span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400">
                                    {isRecordingAudio ? 'Mic Active' : 'Recording'}
                                </span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2 pr-2">
                            <button
                                onClick={cancelRecording}
                                className="p-2 rounded-full text-zinc-500 hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 transition-colors"
                                title="Cancel"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <button
                                onClick={stopRecording}
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white hover:bg-indigo-600 shadow-lg shadow-indigo-500/30 transition-all transform hover:scale-105 active:scale-95"
                                title="Send"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
                            </button>
                        </div>
                    </div>
                )}

                {/* Attachment Menu Toggle Button (Replaces old attachment button) */}
                <div className="flex shrink-0 pl-1">
                    <button
                        onClick={() => {
                            setIsAttachOpen(!isAttachOpen);
                            // Also close font toolbar if opening menu?
                            if (!isAttachOpen) setShowFontToolbar(false);
                        }}
                        className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ease-spring ${isAttachOpen ? 'rotate-45 bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-white' : 'text-zinc-500 hover:bg-white/20 hover:text-indigo-600 dark:text-zinc-400 dark:hover:bg-white/10'}`}
                        disabled={isRecording}
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                </div>

                {/* Input */}
                <div className="flex-1">
                    <textarea
                        rows={1}
                        value={message}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        onInput={(e) => {
                            const target = e.target as HTMLTextAreaElement;
                            target.style.height = 'auto';
                            target.style.height = Math.min(target.scrollHeight, 120) + 'px';
                        }}
                        autoFocus={false}
                        disabled={isRecording}
                        placeholder={
                            isIncognito
                                ? "Message (Incognito)..."
                                : boundaryMode
                                    ? "Type privately..."
                                    : isRecording
                                        ? ""
                                        : selfAlias
                                            ? `Message as ${selfAlias}...`
                                            : "Type a message..."
                        }
                        className={`w-full bg-transparent text-sm font-medium ${isIncognito ? 'text-zinc-200 placeholder:text-zinc-400' : 'text-zinc-900 placeholder:text-zinc-500 dark:text-zinc-100'} focus:outline-none disabled:opacity-50 resize-none overflow-y-auto no-scrollbar transition-[height] duration-150 ease-out leading-[1.4] caret-indigo-500`}
                        style={{
                            fontWeight: messageStyle.bold ? 700 : 400,
                            fontStyle: messageStyle.italic ? 'italic' : 'normal',
                            textDecoration: messageStyle.underline ? 'underline' : 'none',
                        }}
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex shrink-0 items-center gap-1 pr-1">
                    {/* Voice Record Button (Kept as is) */}
                    <button
                        onClick={() => startRecording('audio')}
                        disabled={isRecording}
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-white/20 hover:text-red-500 dark:hover:bg-white/10 ${isRecording ? 'opacity-0' : ''}`}
                        title="Record Voice"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                    </button>

                    {/* Old Video Record Button REMOVED */}

                    <button
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                        disabled={isRecording}
                        className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${showEmojiPicker ? 'text-indigo-600 bg-indigo-50/50 dark:bg-indigo-500/10' : 'text-zinc-400 hover:bg-white/20 hover:text-zinc-600 dark:hover:bg-white/10'} ${isRecording ? 'opacity-0' : ''}`}
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>

                    <div className="pl-1">
                        <button
                            onClick={handleSend}
                            disabled={!message.trim() || isRecording}
                            className={`flex h-9 w-9 items-center justify-center rounded-full text-white shadow-lg transition-all hover:scale-105 active:scale-95 ${boundaryMode ? 'bg-zinc-600 shadow-zinc-500/30 hover:bg-zinc-700' : 'bg-indigo-600 shadow-indigo-500/30 hover:bg-indigo-700'} ${isRecording ? 'opacity-0' : ''}`}
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
