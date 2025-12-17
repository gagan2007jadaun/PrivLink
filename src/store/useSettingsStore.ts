import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
    fontVariable: string;
    setFontVariable: (font: string) => void;
}

export const useSettingsStore = create<SettingsState>()(
    persist(
        (set) => ({
            fontVariable: '--font-playfair', // Default font
            setFontVariable: (font) => set({ fontVariable: font }),
        }),
        {
            name: 'settings-storage',
        }
    )
);
