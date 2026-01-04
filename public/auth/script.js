const goToIdentity = () => {
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "/identity/index.html";
    }, 350);
};

const enterBtn = document.getElementById("enterBtn");
const anonBtn = document.getElementById("anonBtn");

if (enterBtn) enterBtn.onclick = goToIdentity;
if (anonBtn) anonBtn.onclick = goToIdentity;
