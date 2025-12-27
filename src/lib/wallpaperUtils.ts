import { ChatBackground } from './data';

const STORAGE_KEY_PREFIX = 'chat-wallpaper-';

export function saveChatWallpaper(chatId: string, bg: ChatBackground) {
    try {
        localStorage.setItem(
            `${STORAGE_KEY_PREFIX}${chatId}`,
            JSON.stringify(bg)
        );
    } catch (e) {
        console.error('Failed to save chat wallpaper:', e);
    }
}

export function loadChatWallpaper(chatId: string): ChatBackground | null {
    if (typeof window === 'undefined') return null;

    try {
        const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}${chatId}`);
        return saved ? JSON.parse(saved) : null;
    } catch (e) {
        console.error('Failed to load chat wallpaper:', e);
        return null;
    }
}

export function removeChatWallpaper(chatId: string) {
    try {
        localStorage.removeItem(`${STORAGE_KEY_PREFIX}${chatId}`);
    } catch (e) {
        console.error('Failed to remove chat wallpaper:', e);
    }
}

/**
 * Compresses an image file to a base64 string with reduced dimensions and quality.
 * Target: Max 1280px width/height, 0.6 quality JPEG.
 */
export const compressImage = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target?.result as string;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const MAX_WIDTH = 1280;
                const MAX_HEIGHT = 1280;
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx?.drawImage(img, 0, 0, width, height);

                // Compress to JPEG with 0.6 quality
                const dataUrl = canvas.toDataURL('image/jpeg', 0.6);
                resolve(dataUrl);
            };
            img.onerror = (error) => reject(error);
        };
        reader.onerror = (error) => reject(error);
    });
};
