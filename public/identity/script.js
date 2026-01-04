const input = document.getElementById("aliasInput");
const regenBtn = document.getElementById("regenBtn");
const continueBtn = document.getElementById("continueBtn");

// simple alias generator (frontend only)
const generateAlias = () => {
    const words = ["silent", "echo", "shadow", "nova", "pulse", "orbit"];
    const pick = words[Math.floor(Math.random() * words.length)];
    const num = Math.floor(100 + Math.random() * 900);
    return `${pick}${num}`;
};

// initial alias
input.value = generateAlias();

// regenerate
regenBtn.onclick = () => {
    input.value = generateAlias();
};

// continue to app
continueBtn.onclick = () => {
    // optional: session-only store
    sessionStorage.setItem("alias", input.value);

    // Redirect to root (main app)
    window.location.href = "/";
};
