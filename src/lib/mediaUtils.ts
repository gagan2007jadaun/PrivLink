export function generateThumbnail(videoUrl: string): Promise<string> {
    return new Promise((resolve) => {
        const video = document.createElement("video");

        // Safety timeout (avoid hanging)
        const timeoutId = setTimeout(() => {
            console.warn("Thumbnail generation timed out");
            cleanup();
            resolve("");
        }, 3000);

        const cleanup = () => {
            clearTimeout(timeoutId);
            video.onloadedmetadata = null;
            video.onseeked = null;
            video.onerror = null;
            video.pause();
            video.removeAttribute('src'); // Better for GC
            video.load();
            video.remove();
        };

        video.onloadedmetadata = () => {
            // Handle duration logic
            let seekTime = 1;
            if (video.duration && isFinite(video.duration)) {
                seekTime = Math.min(1, video.duration > 0.1 ? video.duration / 2 : 0); // Middle or start if very short
                if (video.duration > 2) seekTime = 1; // Prefer 1s for longer vids
            } else {
                // If Infinity (stream), try 0 or 1.
                seekTime = 0.5;
            }
            video.currentTime = seekTime;
        };

        video.onseeked = () => {
            try {
                const canvas = document.createElement("canvas");
                canvas.width = video.videoWidth || 320;
                canvas.height = video.videoHeight || 240;

                const ctx = canvas.getContext("2d");
                if (ctx) {
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    const dataUrl = canvas.toDataURL("image/jpeg", 0.7);
                    resolve(dataUrl);
                } else {
                    resolve("");
                }
            } catch (e) {
                console.error("Thumbnail capture error", e);
                resolve("");
            }
            cleanup();
        };

        video.onerror = (e) => {
            console.error("Video load error for thumbnail", video.error);
            resolve("");
            cleanup();
        };

        // Setup props
        video.crossOrigin = "anonymous";
        video.muted = true;
        video.playsInline = true;
        video.src = videoUrl;

        // Trigger
        video.load();
    });
}
