import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
    fontVariable: string;
    setFontVariable: (font: string) => void;
    silentRead: boolean;
    toggleSilentRead: () => void;
}

export const useSettingsStore = create<SettingsState>()(
    persist(
        (set) => ({
            fontVariable: '--font-playfair', // Default font
            setFontVariable: (font) => set({ fontVariable: font }),
            silentRead: false,
            toggleSilentRead: () => set((state) => ({ silentRead: !state.silentRead })),
        }),
        {
            name: 'settings-storage',
        }
    )
);
