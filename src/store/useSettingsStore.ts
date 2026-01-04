import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserProfile {
    displayName: string;
    username: string;
    bio: string;
    avatarUrl?: string; // Base64 or URL
}

interface SettingsState {
    fontVariable: string;
    setFontVariable: (font: string) => void;
    silentRead: boolean;
    toggleSilentRead: () => void;
    profile: UserProfile;
    updateProfile: (profile: Partial<UserProfile>) => void;
}

export const useSettingsStore = create<SettingsState>()(
    persist(
        (set) => ({
            fontVariable: '--font-playfair', // Default font
            setFontVariable: (font) => set({ fontVariable: font }),
            silentRead: false,
            toggleSilentRead: () => set((state) => ({ silentRead: !state.silentRead })),
            profile: {
                displayName: "Guest User",
                username: "guest_user",
                bio: "Available"
            },
            updateProfile: (updates) => set((state) => ({
                profile: { ...state.profile, ...updates }
            })),
        }),
        {
            name: 'settings-storage',
        }
    )
);
