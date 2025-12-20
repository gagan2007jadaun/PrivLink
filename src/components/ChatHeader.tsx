import React, { useEffect, useState } from 'react';

interface ChatHeaderProps {
    onToggleRightPanel: () => void;
    name: string;
    avatarUrl?: string; // Not used in design yet but good to have
    isOnline?: boolean;
    driftLevel?: 'low' | 'medium' | 'high';
    interestScore?: number;
    interestTrend?: 'rising' | 'falling' | 'stable';
    gravity?: 'balanced' | 'one-sided-me' | 'one-sided-them';
    persona?: 'morning' | 'night' | 'balanced';
    energyBalance?: number; // -100 to 100
    isScrolled?: boolean;
}

export default function ChatHeader({
    onToggleRightPanel,
    name,
    avatarUrl,
    isOnline,
    driftLevel = 'low',
    interestScore = 50,
    interestTrend = 'stable',
    gravity = 'balanced',
    persona,
    energyBalance = 0,
    isScrolled = false
}: ChatHeaderProps) {
    const [isActive, setIsActive] = useState(false);
    const [showTrend, setShowTrend] = useState(false);
    const [showBookmarkToast, setShowBookmarkToast] = useState(false);

    // Micro-Motion: Trigger active bounce on chat change key (name used as proxy)
    useEffect(() => {
        setIsActive(true);
        const timer = setTimeout(() => setIsActive(false), 220);
        return () => clearTimeout(timer);
    }, [name]);

    const handleInterestClick = () => {
        setShowTrend(true);
        setTimeout(() => setShowTrend(false), 2000); // Revert after 2s
    };

    const handleBookmark = () => {
        setShowBookmarkToast(true);
        setTimeout(() => setShowBookmarkToast(false), 2500);
    };

    // Mood Line Text (Drift Logic)
    let moodText = "conversation stays steady";
    if (driftLevel === 'medium') moodText = "conversation slowing down";
    if (driftLevel === 'high') moodText = "conversation feels distant";

    // Mood Line Color (Interest Logic)
    const getMoodColor = (score: number) => {
        if (score >= 80) return '#9AA57A'; // Warm
        if (score >= 50) return '#9A9A9A'; // Neutral
        return '#8A7F7F'; // Cold
    };

    const moodColor = getMoodColor(interestScore);

    // Convert hex to rgba for gradient if needed, or just use hex with opacity if browser supports (modern browsers do #RRGGBBAA).
    // User logic: linear-gradient(90deg, color-0.6, color-0).
    // moodColor is like '#9AA57A'. Appending '99' for ~60% opacity, '00' for 0%.
    const accentGradient = `linear-gradient(90deg, ${moodColor}99, ${moodColor}00)`;

    // Scroll Awareness & Micro-Motion Styles
    const containerStyle = {
        backgroundColor: 'var(--header-bg)',
        borderBottom: `1px solid var(--header-border)`,
        boxShadow: isScrolled ? '0 1px 2px rgba(0,0,0,0.02)' : 'var(--header-shadow)', // Calm down shadow on scroll
        opacity: isScrolled ? 0.96 : 1, // Calm down opacity
    };

    return (
        <div
            className={`relative flex h-16 shrink-0 items-center justify-between px-6 transition-all duration-200 ease-out`}
            style={{
                ...containerStyle,
                transform: isActive ? 'translateY(0)' : 'translateY(-2px)',
            }}
        >
            {/* Bookmark Toast */}
            {showBookmarkToast && (
                <div className="absolute top-1 right-20 z-50 rounded-full bg-zinc-800 px-3 py-1 text-xs text-white shadow-lg animate-fade-in-up">
                    ✨ Bookmark saved. This moment matters.
                </div>
            )}

            {/* Interest-based subtle accent */}
            <div
                className="header-accent absolute bottom-0 left-0 h-[2px] w-full transition-all duration-1000"
                style={{ background: accentGradient }}
            />

            <div className="relative z-10 flex items-center gap-4">
                <div className="relative cursor-pointer" onClick={handleInterestClick}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-tr from-purple-400 to-indigo-500 text-sm font-bold text-white shadow-md ring-2 ring-white dark:ring-zinc-900 transition-transform hover:scale-105">
                        {showTrend ? (
                            <span className="text-lg">
                                {interestTrend === 'rising' ? '↑' : interestTrend === 'falling' ? '↓' : '→'}
                            </span>
                        ) : (
                            avatarUrl ? (
                                <img src={avatarUrl} alt={name} className="h-full w-full rounded-full object-cover" />
                            ) : (
                                name.slice(0, 2).toUpperCase()
                            )
                        )}
                    </div>
                    {/* Ambient Trust Pulse: Pulse if high interest */}
                    {isOnline && (
                        <span className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-900 ${interestScore > 80 ? 'animate-pulse' : ''}`} />
                    )}
                </div>
                <div className="flex flex-col justify-center">
                    <h2
                        className="header-name text-sm font-bold leading-tight mb-[2px] dark:text-white"
                        style={{ color: 'var(--title-text)' }}
                    >
                        {name}
                    </h2>

                    {/* Mood Line (Drift UI) + Pace Indicator + Gravity/Persona */}
                    <div className="flex items-center gap-2">
                        <span
                            className="header-title transition-colors duration-1000"
                            style={{
                                color: 'var(--subtitle-text)',
                                fontSize: '11.5px',
                                fontWeight: 400,
                                letterSpacing: '0.4px',
                            }}
                        >
                            {moodText}
                        </span>

                        {/* Pace Indicator: Dot Wave */}
                        <div className="flex space-x-[1px] h-2 items-end pb-[2px]" title="Conversation Pace">
                            <div className="w-[2px] h-[2px] bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                            <div className="w-[2px] h-[2px] bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        </div>

                        {/* Gravity Arrow */}
                        <span
                            className="ml-1 text-xs text-zinc-400 opacity-60 hover:opacity-100 transition-opacity cursor-help"
                            title={`Initiation Balance: ${gravity.replace(/-/g, ' ')}`}
                        >
                            {gravity === 'balanced' ? '→' : gravity === 'one-sided-me' ? '↗' : '↙'}
                        </span>

                        {/* Persona Icon (Morning/Night) */}
                        {persona && persona !== 'balanced' && (
                            <span
                                className="ml-0.5 text-xs opacity-60 hover:opacity-100 transition-opacity cursor-help"
                                title={`${name} is a ${persona} person`}
                            >
                                {persona === 'morning' ? '☀️' : '🌙'}
                            </span>
                        )}

                        {/* Energy Balance Mini-Bar */}
                        <div
                            className="ml-1 flex h-1.5 w-6 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700 opacity-60 hover:opacity-100 transition-opacity cursor-help"
                            title={`Message Energy: ${energyBalance > 0 ? `You +${energyBalance}%` : `Them +${Math.abs(energyBalance)}%`}`}
                        >
                            {/* My Energy (Indigo) */}
                            <div
                                className="h-full bg-indigo-400"
                                style={{ width: `${50 + (energyBalance / 2)}%` }} // Map -100..100 to 0..100%
                            />
                            {/* Their Energy (Gray/Base) - Automatically fills the rest if we just set width of first div? No, flex. */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
                {/* Search Button */}
                <button className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-zinc-100 hover:text-indigo-600 dark:hover:bg-zinc-800">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>

                {/* Bookmark Button */}
                <button
                    onClick={handleBookmark}
                    className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-zinc-100 hover:text-yellow-500 dark:hover:bg-zinc-800"
                    title="Bookmark this moment"
                >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                </button>

                <div className="mx-2 h-4 w-px bg-zinc-200 dark:bg-zinc-700" />

                <button className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
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
