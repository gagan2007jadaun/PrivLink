import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserProfile {
    displayName: string;
    username: string;
    bio: string;
    avatarUrl?: string; // Base64 or URL
    email?: string;
}

interface SettingsState {
    fontVariable: string;
    setFontVariable: (font: string) => void;
    silentRead: boolean;
    toggleSilentRead: () => void;
    profile: UserProfile;
    updateProfile: (profile: Partial<UserProfile>) => void;
    experiments: {
        neonMode: boolean;
        uiSounds: boolean;
        ghostTyping: boolean;
    };
    toggleExperiment: (key: 'neonMode' | 'uiSounds' | 'ghostTyping') => void;
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
                bio: "Available",
                email: ""
            },
            updateProfile: (updates) => set((state) => ({
                profile: { ...state.profile, ...updates }
            })),
            experiments: {
                neonMode: false,
                uiSounds: false,
                ghostTyping: false
            },
            toggleExperiment: (key) => set((state) => ({
                experiments: {
                    ...state.experiments,
                    [key]: !state.experiments[key]
                }
            })),
        }),
        {
            name: 'settings-storage',
        }
    )
);
