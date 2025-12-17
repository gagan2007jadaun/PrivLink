'use client';

import { useEffect } from 'react';
import { useSettingsStore } from '@/store/useSettingsStore';

export function FontManager() {
    const { fontVariable } = useSettingsStore();

    useEffect(() => {
        // Update the global CSS variable for font-sans
        // This allows tailwind utilities like font-sans to pick up the change
        document.documentElement.style.setProperty('--font-sans', `var(${fontVariable})`);
    }, [fontVariable]);

    return null;
}
