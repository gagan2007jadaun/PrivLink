import { useState, useEffect, useRef } from 'react';

export interface TypingMetrics {
    confidenceScore: number;
    isUnsentIntent: boolean;
    hesitationCount: number;
    resetMetrics: () => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleChange: (val: string) => void;
}

export function useTypingMetrics(text: string): TypingMetrics {
    const [stats, setStats] = useState({
        backspaceCount: 0,
        pauseCount: 0,
        totalKeystrokes: 0,
        maxTypedLength: 0,
    });

    // Refs for timing
    const lastKeystrokeTime = useRef<number>(Date.now());
    const typingTimer = useRef<NodeJS.Timeout | null>(null);
    const hasStartedTyping = useRef(false);

    // Calculate score dynamically
    const calculateConfidence = () => {
        if (!hasStartedTyping.current) return 100;

        // Base score starts at 100
        // -2 per backspace (rewriting)
        // -5 per long pause (hesitation)
        const penalty = (stats.backspaceCount * 2) + (stats.pauseCount * 5);
        return Math.max(0, Math.min(100, 100 - penalty));
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!hasStartedTyping.current) hasStartedTyping.current = true;

        const now = Date.now();
        const timeDiff = now - lastKeystrokeTime.current;
        lastKeystrokeTime.current = now;

        // Track pauses (threshold: 2 seconds)
        if (timeDiff > 2000 && hasStartedTyping.current) {
            setStats(prev => ({ ...prev, pauseCount: prev.pauseCount + 1 }));
        }

        // Track backspaces
        if (e.key === 'Backspace') {
            setStats(prev => ({ ...prev, backspaceCount: prev.backspaceCount + 1 }));
        }

        setStats(prev => ({ ...prev, totalKeystrokes: prev.totalKeystrokes + 1 }));

        // Reset pause timer
        if (typingTimer.current) clearTimeout(typingTimer.current);
    };

    const handleChange = (val: string) => {
        setStats(prev => ({ ...prev, maxTypedLength: Math.max(prev.maxTypedLength, val.length) }));
    };

    const resetMetrics = () => {
        setStats({
            backspaceCount: 0,
            pauseCount: 0,
            totalKeystrokes: 0,
            maxTypedLength: 0,
        });
        hasStartedTyping.current = false;
        lastKeystrokeTime.current = Date.now();
    };

    // Unsent Intent: if user typed a lot (e.g. > 15 chars) and then cleared it almost empty (< 3 chars)
    // This logic usually triggers when text is empty but maxLength was high.
    // However, in this hook we just return the flag. The consumer checks it when appropriate (e.g. on blur or clear).
    // Actually, distinct unsent intent logic: if text becomes empty AND maxTypedLength was > 10.
    const isUnsentIntent = text.length === 0 && stats.maxTypedLength > 15;

    return {
        confidenceScore: calculateConfidence(),
        isUnsentIntent: isUnsentIntent,
        hesitationCount: stats.pauseCount,
        resetMetrics,
        handleKeyDown,
        handleChange,
    };
}
