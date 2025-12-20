import React, { useEffect, useState } from 'react';

interface ChatHeaderProps {
    onToggleRightPanel: () => void;
    name: string;
    avatarUrl?: string; // Not used in design yet but good to have
    isOnline?: boolean;
    driftLevel?: 'low' | 'medium' | 'high';
    interestScore?: number;
    isScrolled?: boolean;
}

export default function ChatHeader({ onToggleRightPanel, name, avatarUrl, isOnline, driftLevel = 'low', interestScore = 50, isScrolled = false }: ChatHeaderProps) {
    const [isActive, setIsActive] = useState(false);

    // Micro-Motion: Trigger active bounce on chat change key (name used as proxy)
    useEffect(() => {
        setIsActive(true);
        const timer = setTimeout(() => setIsActive(false), 220);
        return () => clearTimeout(timer);
    }, [name]);

    // Mood Line Text (Drift Logic)
    let moodText = "conversation feels steady";
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
        // Just placeholder for now, user asked "active { transform: translateY(0) }". Maybe default is -2px?
        // Let's interpret "active { transform: translateY(0) }" implies it moves.
        // I will add a slight Y shift default and animate to 0.
        // Actually user code: `.chat-header { ... } .chat-header.active { transform: translateY(0); }`
        // This implies it might be slightly off-axis initially? Or maybe it just pops?
        // Let's try a subtle generic pop: scale(1) vs scale(0.99)? Or Y axis?
        // Let's assume start state is translateY(-2px) for that "drop in" feel.
    };

    return (
        <div
            className={`relative flex h-16 shrink-0 items-center justify-between px-6 transition-all duration-200 ease-out`}
            style={{
                ...containerStyle,
                transform: isActive ? 'translateY(0)' : 'translateY(-2px)',
            }}
        >

            {/* Interest-based subtle accent */}
            <div
                className="header-accent absolute bottom-0 left-0 h-[2px] w-full transition-all duration-1000"
                style={{ background: accentGradient }}
            />

            <div className="relative z-10 flex items-center gap-4">
                <div className="relative">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-tr from-purple-400 to-indigo-500 text-sm font-bold text-white shadow-md ring-2 ring-white dark:ring-zinc-900">
                        {avatarUrl ? (
                            <img src={avatarUrl} alt={name} className="h-full w-full rounded-full object-cover" />
                        ) : (
                            name.slice(0, 2).toUpperCase()
                        )}
                    </div>
                    {isOnline && (
                        <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-900" />
                    )}
                </div>
                <div className="flex flex-col justify-center">
                    <h2
                        className="header-name text-sm font-bold leading-tight mb-[2px] dark:text-white"
                        style={{ color: 'var(--title-text)' }}
                    >
                        {name}
                    </h2>

                    {/* Mood Line (Drift UI) */}
                    <span
                        className="header-title transition-colors duration-1000"
                        style={{
                            color: 'var(--subtitle-text)',
                            fontSize: '11.5px',
                            fontWeight: 400,
                            letterSpacing: '0.4px',
                            position: 'relative',
                            zIndex: 3,
                            marginTop: 0
                        }}
                    >
                        {moodText}
                    </span>
                </div>
            </div>

            <div className="relative z-10 flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
                <button className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-zinc-100 hover:text-indigo-600 dark:hover:bg-zinc-800">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-zinc-100 hover:text-indigo-600 dark:hover:bg-zinc-800">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                </button>
                <div className="mx-2 h-4 w-px bg-zinc-200 dark:bg-zinc-700" />
                <button className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
