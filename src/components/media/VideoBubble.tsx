import React, { useEffect, useRef, useState } from 'react';

interface VideoBubbleProps {
    src: string;
    thumbnailUrl?: string; // Generated preview from MessageInput/MediaUtils
    duration?: number;
}

const VideoBubble: React.FC<VideoBubbleProps> = ({ src, thumbnailUrl, duration }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true); // "Auto-mute video in chat"
    const [showOverlay, setShowOverlay] = useState(true);

    // Visibility API: Pause when tab hidden
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden && videoRef.current && !videoRef.current.paused) {
                videoRef.current.pause();
                setIsPlaying(false);
                setShowOverlay(true);
            }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, []);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
            setShowOverlay(false);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
            setShowOverlay(true);
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!videoRef.current) return;
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);
        setShowOverlay(true);
    };

    return (
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black group">
            <video
                ref={videoRef}
                src={src}
                poster={thumbnailUrl}
                className="h-full w-full object-cover"
                muted={isMuted} // Default muted
                playsInline
                onEnded={handleVideoEnd}
                // We implement custom click to play, but standard controls for full scrubbing if needed.
                // User asked for "Hover Seek" and "Slick UI". 
                // Let's rely on standard controls only once playing, but overlay before?
                // Or custom everything??
                // "Click → replace with <video controls autoplay>" from generic prompt earlier, 
                // but "SMART MEDIA STATES" implies more control.
                // Let's enable controls when playing, but use overlay for initial state.
                controls={isPlaying}
            />

            {/* Play Overlay (Visible when paused or stopped) */}
            {(!isPlaying || showOverlay) && (
                <div
                    className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity hover:bg-black/40 cursor-pointer"
                    onClick={togglePlay}
                >
                    <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm transition-transform group-hover:scale-110">
                        <svg className="h-8 w-8 text-white fill-current" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>
            )}

            {/* Mute Toggle (Always visible if playing or hovering, overlayed) */}
            <button
                onClick={toggleMute}
                className={`absolute bottom-3 right-3 rounded-full bg-black/60 p-2 text-white backdrop-blur-md transition-opacity ${isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
            >
                {isMuted ? (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                ) : (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                )}
            </button>

            {/* Duration Badge (If provided and not playing) */}
            {!isPlaying && duration && (
                <div className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-md">
                    {duration}s
                </div>
            )}
        </div>
    );
};

export default VideoBubble;
