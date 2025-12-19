'use client';

import { useEffect } from 'react';
import { useSettingsStore } from '@/store/useSettingsStore';

export function FontManager() {
    const { fontVariable } = useSettingsStore();

    useEffect(() => {
        // Update the global CSS variable for font-sans on the body
        // Since font variables are injected into body classList, we must define the alias there too
        document.body.style.setProperty('--font-sans', `var(${fontVariable})`);
    }, [fontVariable]);

    return null;
}
