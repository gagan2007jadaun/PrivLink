(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/privlink/src/app/auth/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function AuthPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(58);
    if ($[0] !== "922bb575f9d55b2f2d5b5bfdb1295752977131b4013882c73f4892cebd61233c") {
        for(let $i = 0; $i < 58; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "922bb575f9d55b2f2d5b5bfdb1295752977131b4013882c73f4892cebd61233c";
    }
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("signin");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [confirmPassword, setConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "AuthPage[useEffect()]": ()=>{
                setMounted(true);
            }
        })["AuthPage[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] !== confirmPassword || $[4] !== mode || $[5] !== password || $[6] !== router || $[7] !== username) {
        t2 = ({
            "AuthPage[handleSubmit]": async (e)=>{
                e.preventDefault();
                setError("");
                setIsLoading(true);
                if (!username.trim() || !password.trim()) {
                    setError("Please fill in all fields.");
                    setIsLoading(false);
                    return;
                }
                if (mode === "signup" && password !== confirmPassword) {
                    setError("Passwords do not match.");
                    setIsLoading(false);
                    return;
                }
                await new Promise(_temp);
                if (mode === "signup") {
                    const user = {
                        username,
                        password
                    };
                    localStorage.setItem(`user_${username}`, JSON.stringify(user));
                    sessionStorage.setItem("alias", username);
                    router.push("/chat");
                } else {
                    const storedUser = localStorage.getItem(`user_${username}`);
                    if (storedUser) {
                        const user_0 = JSON.parse(storedUser);
                        if (user_0.password === password) {
                            sessionStorage.setItem("alias", username);
                            router.push("/chat");
                        } else {
                            setError("Invalid credentials.");
                        }
                    } else {
                        setError("User not found. Please sign up.");
                    }
                }
                setIsLoading(false);
            }
        })["AuthPage[handleSubmit]"];
        $[3] = confirmPassword;
        $[4] = mode;
        $[5] = password;
        $[6] = router;
        $[7] = username;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    const handleSubmit = t2;
    let t3;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-0 pointer-events-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse-slow"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/auth/page.tsx",
                    lineNumber: 96,
                    columnNumber: 65
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen opacity-30"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/auth/page.tsx",
                    lineNumber: 96,
                    columnNumber: 227
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/auth/page.tsx",
                    lineNumber: 96,
                    columnNumber: 372
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/auth/page.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    const t4 = `relative z-10 w-full max-w-[400px] p-6 transition-all duration-1000 transform ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`;
    let t5;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/auth/page.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-flex items-center justify-center w-16 h-16 mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/logo.png",
                        alt: "PrivLink Logo",
                        width: 64,
                        height: 64,
                        className: "object-contain"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/auth/page.tsx",
                        lineNumber: 111,
                        columnNumber: 116
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/auth/page.tsx",
                    lineNumber: 111,
                    columnNumber: 44
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-xl font-semibold tracking-tight text-white",
                    children: "PrivLink ID"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/auth/page.tsx",
                    lineNumber: 111,
                    columnNumber: 217
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/auth/page.tsx",
            lineNumber: 111,
            columnNumber: 10
        }, this);
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "AuthPage[<button>.onClick]": ()=>{
                setMode("signin");
                setError("");
            }
        })["AuthPage[<button>.onClick]"];
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    const t8 = `flex-1 text-xs font-medium py-2 rounded-lg transition-all ${mode === "signin" ? "bg-white/10 text-white shadow-sm backdrop-blur-md border border-white/10" : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"}`;
    let t9;
    if ($[13] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t7,
            className: t8,
            children: "Sign In"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/auth/page.tsx",
            lineNumber: 131,
            columnNumber: 10
        }, this);
        $[13] = t8;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "AuthPage[<button>.onClick]": ()=>{
                setMode("signup");
                setError("");
            }
        })["AuthPage[<button>.onClick]"];
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    const t11 = `flex-1 text-xs font-medium py-2 rounded-lg transition-all ${mode === "signup" ? "bg-white/10 text-white shadow-sm backdrop-blur-md border border-white/10" : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"}`;
    let t12;
    if ($[16] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t10,
            className: t11,
            children: "Sign Up"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/auth/page.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[16] = t11;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== t12 || $[19] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex bg-black/20 p-1 rounded-xl mb-6 relative border border-white/5 backdrop-blur-md",
            children: [
                t9,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/auth/page.tsx",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[18] = t12;
        $[19] = t9;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-[10px] font-medium text-zinc-500 uppercase tracking-wider ml-1",
            children: "Username"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/auth/page.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    let t15;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = ({
            "AuthPage[<input>.onChange]": (e_0)=>setUsername(e_0.target.value)
        })["AuthPage[<input>.onChange]"];
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    let t16;
    if ($[23] !== username) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: username,
                    onChange: t15,
                    className: "w-full bg-black/20 border border-zinc-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder-zinc-800 text-sm hover:border-zinc-700",
                    placeholder: "Enter username"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/auth/page.tsx",
                    lineNumber: 185,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/auth/page.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[23] = username;
        $[24] = t16;
    } else {
        t16 = $[24];
    }
    let t17;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-[10px] font-medium text-zinc-500 uppercase tracking-wider ml-1",
            children: "Password"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/auth/page.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[25] = t17;
    } else {
        t17 = $[25];
    }
    let t18;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = ({
            "AuthPage[<input>.onChange]": (e_1)=>setPassword(e_1.target.value)
        })["AuthPage[<input>.onChange]"];
        $[26] = t18;
    } else {
        t18 = $[26];
    }
    let t19;
    if ($[27] !== password) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "password",
                    value: password,
                    onChange: t18,
                    className: "w-full bg-black/20 border border-zinc-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder-zinc-800 text-sm hover:border-zinc-700",
                    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/auth/page.tsx",
                    lineNumber: 209,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/auth/page.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[27] = password;
        $[28] = t19;
    } else {
        t19 = $[28];
    }
    const t20 = `space-y-1.5 overflow-hidden transition-all duration-300 ${mode === "signup" ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`;
    let t21;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-[10px] font-medium text-zinc-500 uppercase tracking-wider ml-1",
            children: "Confirm Password"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/auth/page.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[29] = t21;
    } else {
        t21 = $[29];
    }
    let t22;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = ({
            "AuthPage[<input>.onChange]": (e_2)=>setConfirmPassword(e_2.target.value)
        })["AuthPage[<input>.onChange]"];
        $[30] = t22;
    } else {
        t22 = $[30];
    }
    let t23;
    if ($[31] !== confirmPassword) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "password",
            value: confirmPassword,
            onChange: t22,
            className: "w-full bg-black/20 border border-zinc-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder-zinc-800 text-sm hover:border-zinc-700",
            placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/auth/page.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[31] = confirmPassword;
        $[32] = t23;
    } else {
        t23 = $[32];
    }
    let t24;
    if ($[33] !== t20 || $[34] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t20,
            children: [
                t21,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/auth/page.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        $[33] = t20;
        $[34] = t23;
        $[35] = t24;
    } else {
        t24 = $[35];
    }
    let t25;
    if ($[36] !== error) {
        t25 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-red-400 text-xs text-center bg-red-500/10 border border-red-500/20 rounded-lg py-2 animate-fade-in",
            children: error
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/auth/page.tsx",
            lineNumber: 251,
            columnNumber: 20
        }, this);
        $[36] = error;
        $[37] = t25;
    } else {
        t25 = $[37];
    }
    let t26;
    if ($[38] !== isLoading || $[39] !== mode) {
        t26 = isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center justify-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/auth/page.tsx",
                    lineNumber: 259,
                    columnNumber: 80
                }, this),
                "Processing..."
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/auth/page.tsx",
            lineNumber: 259,
            columnNumber: 23
        }, this) : mode === "signin" ? "Access Account" : "Create Identity";
        $[38] = isLoading;
        $[39] = mode;
        $[40] = t26;
    } else {
        t26 = $[40];
    }
    let t27;
    if ($[41] !== isLoading || $[42] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            disabled: isLoading,
            className: "w-full py-3.5 rounded-xl font-medium text-sm bg-white text-black hover:bg-zinc-200 shadow-lg shadow-white/5 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed mt-2",
            children: t26
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/auth/page.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[41] = isLoading;
        $[42] = t26;
        $[43] = t27;
    } else {
        t27 = $[43];
    }
    let t28;
    if ($[44] !== handleSubmit || $[45] !== t16 || $[46] !== t19 || $[47] !== t24 || $[48] !== t25 || $[49] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-4",
            children: [
                t16,
                t19,
                t24,
                t25,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/auth/page.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[44] = handleSubmit;
        $[45] = t16;
        $[46] = t19;
        $[47] = t24;
        $[48] = t25;
        $[49] = t27;
        $[50] = t28;
    } else {
        t28 = $[50];
    }
    let t29;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 pt-6 border-t border-white/5 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "text-xs text-zinc-600 hover:text-zinc-400 transition-colors",
                children: "Return to Home"
            }, void 0, false, {
                fileName: "[project]/privlink/src/app/auth/page.tsx",
                lineNumber: 290,
                columnNumber: 74
            }, this)
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/auth/page.tsx",
            lineNumber: 290,
            columnNumber: 11
        }, this);
        $[51] = t29;
    } else {
        t29 = $[51];
    }
    let t30;
    if ($[52] !== t13 || $[53] !== t28) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative rounded-2xl bg-zinc-950/40 backdrop-blur-xl border border-white/5 shadow-2xl shadow-black/50 overflow-hidden",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8",
                    children: [
                        t6,
                        t13,
                        t28,
                        t29
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/app/auth/page.tsx",
                    lineNumber: 297,
                    columnNumber: 150
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/auth/page.tsx",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[52] = t13;
        $[53] = t28;
        $[54] = t30;
    } else {
        t30 = $[54];
    }
    let t31;
    if ($[55] !== t30 || $[56] !== t4) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-black text-white font-sans flex items-center justify-center relative overflow-hidden selection:bg-indigo-500/30",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: t4,
                    children: t30
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/auth/page.tsx",
                    lineNumber: 306,
                    columnNumber: 160
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/auth/page.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[55] = t30;
        $[56] = t4;
        $[57] = t31;
    } else {
        t31 = $[57];
    }
    return t31;
}
_s(AuthPage, "tz/Gj/jw8+yiKRM9HAn9y1oUN9E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthPage;
function _temp(resolve) {
    return setTimeout(resolve, 800);
}
var _c;
__turbopack_context__.k.register(_c, "AuthPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=privlink_src_app_auth_page_tsx_772a2511._.js.map