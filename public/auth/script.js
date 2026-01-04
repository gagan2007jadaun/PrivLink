const goToApp = () => {
    document.body.classList.add("fade-out");

    setTimeout(() => {
        // Redirect to main app root
        window.location.href = "/";
    }, 350); // animation duration
};

const enterBtn = document.getElementById("enterBtn");
const anonBtn = document.getElementById("anonBtn");

if (enterBtn) enterBtn.onclick = goToApp;
if (anonBtn) anonBtn.onclick = goToApp;
