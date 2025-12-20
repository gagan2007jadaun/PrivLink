import React, { useEffect, useRef, useState, useMemo } from 'react';

interface AudioBubbleProps {
    src: string;
    duration?: number;
    isMe?: boolean;
}

const AudioBubble: React.FC<AudioBubbleProps> = ({ src, duration, isMe }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [waveformData, setWaveformData] = useState<Float32Array | null>(null);

    // Audio Context for caching/decoding
    // Note: In a real app, use a store or global context to limit Active AudioContexts

    useEffect(() => {
        // "Smart Media State": Pause when tab hidden
        const handleVisibilityChange = () => {
            if (document.hidden && audioRef.current && !audioRef.current.paused) {
                audioRef.current.pause();
                setIsPlaying(false);
            }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, []);

    useEffect(() => {
        // Decode Audio for Waveform
        // Ideally cache this. For now, decode on load (or on fetch).
        let isActive = true;

        const fetchAndDecode = async () => {
            try {
                // If it's a blob URL from local recording, fetching is fast.
                const response = await fetch(src);
                const arrayBuffer = await response.arrayBuffer();

                // We need a new context to decode
                const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
                const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

                if (isActive) {
                    // Extract channel data
                    const rawData = audioBuffer.getChannelData(0);
                    // Optimization: Downsample here if needed, but drawing logic can handle stride
                    setWaveformData(rawData);
                }

                // Cleanup context if not used for playing (we use <audio> element for playing usually interaction is smoother for simple playback)
                audioCtx.close();
            } catch (err) {
                console.error("Error decoding audio data", err);
            }
        };

        if (src) fetchAndDecode();

        return () => { isActive = false; };
    }, [src]);

    useEffect(() => {
        // Draw Waveform
        if (!canvasRef.current || !waveformData) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        // Set actual size in memory (scaled to account for extra pixel density)
        // We assume CSS sets the visual width/height
        const width = canvas.clientWidth * dpr;
        const height = canvas.clientHeight * dpr;

        if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;
        }

        ctx.scale(dpr, dpr);

        const drawWidth = canvas.clientWidth;
        const drawHeight = canvas.clientHeight;
        const amp = drawHeight / 2;

        ctx.clearRect(0, 0, drawWidth, drawHeight);

        // Style
        const barGap = 2;
        const barWidth = 2; // px
        const totalBars = Math.floor(drawWidth / (barWidth + barGap));

        const step = Math.ceil(waveformData.length / totalBars);

        // Progress Color
        const progressPct = (duration && duration > 0) ? currentTime / duration : 0;
        // Actually, better use audioRef duration if available
        const safeDuration = audioRef.current?.duration || duration || 1;
        const currentProgress = currentTime / safeDuration;

        for (let i = 0; i < totalBars; i++) {
            let min = 1.0;
            let max = -1.0;
            // subsample
            for (let j = 0; j < step; j++) {
                const idx = (i * step) + j;
                if (idx < waveformData.length) {
                    const datum = waveformData[idx];
                    if (datum < min) min = datum;
                    if (datum > max) max = datum;
                }
            }

            // Draw bar
            const x = i * (barWidth + barGap);
            // Normalize height
            let barHeight = Math.max(2, (max - min) * amp); // Min 2px
            // Soften/Round

            // Color logic: Played vs Unplayed
            // If this bar is "before" current progress -> Active Color
            // else -> Inactive Color
            const barProgress = i / totalBars;

            if (barProgress < currentProgress) {
                ctx.fillStyle = isMe ? 'rgba(255, 255, 255, 0.9)' : '#4F46E5'; // Indigo-600
            } else {
                ctx.fillStyle = isMe ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.1)';
                if (document.documentElement.classList.contains('dark') && !isMe) {
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
                }
            }

            // Rounded rect
            roundRect(ctx, x, (drawHeight - barHeight) / 2, barWidth, barHeight, 1);
        }

    }, [waveformData, currentTime, isMe, duration]);

    // Helper for rounded rect since fillRect is square
    const roundRect = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) => {
        if (w < 2 * r) r = w / 2;
        if (h < 2 * r) r = h / 2;
        ctx.beginPath();
        ctx.roundRect ? ctx.roundRect(x, y, w, h, r) : ctx.rect(x, y, w, h); // Fallback
        ctx.fill();
    };

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleEnded = () => {
        setIsPlaying(false);
        setCurrentTime(0);
        if (audioRef.current) audioRef.current.currentTime = 0;
    };

    const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!audioRef.current || !duration) return;
        const rect = canvasRef.current!.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const pct = Math.min(1, Math.max(0, x / width));

        audioRef.current.currentTime = pct * (audioRef.current.duration || duration);
        setCurrentTime(audioRef.current.currentTime);
    };

    const toggleSpeed = (e: React.MouseEvent) => {
        e.stopPropagation();
        const speeds = [1, 1.5, 2];
        const nextIdx = (speeds.indexOf(playbackRate) + 1) % speeds.length;
        const nextRate = speeds[nextIdx];
        setPlaybackRate(nextRate);
        if (audioRef.current) {
            audioRef.current.playbackRate = nextRate;
        }
    };

    return (
        <div className={`flex flex-col w-full min-w-[240px] gap-2 p-1`}>
            {/* Audio Element (Hidden) */}
            <audio
                ref={audioRef}
                src={src}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleEnded}
                className="hidden"
            />

            <div className="flex items-center gap-3">
                {/* Play Button */}
                <button
                    onClick={togglePlay}
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all active:scale-95 ${isMe
                            ? 'bg-white/20 hover:bg-white/30 text-white'
                            : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-200 dark:shadow-none'
                        }`}
                >
                    {isPlaying ? (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" /></svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z" /></svg>
                    )}
                </button>

                {/* Waveform Canvas */}
                <div className="flex-1 h-8 relative group cursor-pointer" onClick={handleCanvasClick}>
                    <canvas
                        ref={canvasRef}
                        className="w-full h-full block"
                    />
                    {/* Hover Line (CSS-only or JS managed, CSS easier for simple implementation) */}
                    <div className="absolute top-0 bottom-0 w-[1px] bg-red-400 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" style={{ left: '0%' /* Would need mouse tracking for precise line helper */ }} />
                </div>

                {/* Speed & Duration */}
                <div className="flex flex-col items-end justify-center min-w-[32px]">
                    <button
                        onClick={toggleSpeed}
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md transition-colors ${isMe
                                ? 'bg-white/20 hover:bg-white/30 text-white/90'
                                : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300'
                            }`}
                        title="Playback Speed"
                    >
                        {playbackRate}x
                    </button>
                    <span className={`text-[10px] mt-0.5 ${isMe ? 'text-white/70' : 'text-zinc-500'}`}>
                        {duration ? `${Math.floor(currentTime)}:${Math.floor(duration % 60).toString().padStart(2, '0')}` : '0:00'}
                        {/* Or just duration if not playing? User usually likes seeing countdown or progress. Progress is good. */}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AudioBubble;
