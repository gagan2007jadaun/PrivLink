// Frontend-only placeholder
// Redirects to main app

document.querySelector(".primary-btn").onclick = () => {
    // In a real app, this would validate credentials
    window.location.href = '/';
};

document.querySelector(".ghost-btn").onclick = () => {
    // Anonymous entry
    window.location.href = '/';
};
