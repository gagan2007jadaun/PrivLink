(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/privlink/src/store/useSettingsStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSettingsStore",
    ()=>useSettingsStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const useSettingsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        fontVariable: '--font-playfair',
        setFontVariable: (font)=>set({
                fontVariable: font
            }),
        silentRead: false,
        toggleSilentRead: ()=>set((state)=>({
                    silentRead: !state.silentRead
                })),
        profile: {
            displayName: "Guest User",
            username: "guest_user",
            bio: "Available",
            email: ""
        },
        updateProfile: (updates)=>set((state)=>({
                    profile: {
                        ...state.profile,
                        ...updates
                    }
                })),
        experiments: {
            neonMode: false,
            uiSounds: false,
            ghostTyping: false
        },
        toggleExperiment: (key)=>set((state)=>({
                    experiments: {
                        ...state.experiments,
                        [key]: !state.experiments[key]
                    }
                }))
    }), {
    name: 'settings-storage',
    storage: {
        getItem: (name)=>{
            const str = localStorage.getItem(name);
            return str ? JSON.parse(str) : null;
        },
        setItem: (name, value)=>{
            try {
                localStorage.setItem(name, JSON.stringify(value));
            } catch (e) {
                console.error("Settings storage failed:", e);
            // Optional: alert user if critical settings fail
            }
        },
        removeItem: (name)=>localStorage.removeItem(name)
    }
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/privlink/src/components/FontManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FontManager",
    ()=>FontManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$store$2f$useSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/store/useSettingsStore.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function FontManager() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "672fa2f2e49fa20a22b8373e6faa1dce1fda9a76fd4817067cf58ce4ab71b311") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "672fa2f2e49fa20a22b8373e6faa1dce1fda9a76fd4817067cf58ce4ab71b311";
    }
    const { fontVariable } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$store$2f$useSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    let t0;
    let t1;
    if ($[1] !== fontVariable) {
        t0 = ({
            "FontManager[useEffect()]": ()=>{
                document.body.style.setProperty("--font-sans", `var(${fontVariable})`);
            }
        })["FontManager[useEffect()]"];
        t1 = [
            fontVariable
        ];
        $[1] = fontVariable;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    return null;
}
_s(FontManager, "d6GjvpW8oyEDJ7pUpK5R6qaHZqI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$store$2f$useSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"]
    ];
});
_c = FontManager;
var _c;
__turbopack_context__.k.register(_c, "FontManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/privlink/src/components/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
'use client';
;
;
;
function Providers(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "468af6068de5325c8649e8f4a3dc1b53aedc1629959645e2b2c741921bc397d6") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "468af6068de5325c8649e8f4a3dc1b53aedc1629959645e2b2c741921bc397d6";
    }
    const { children } = t0;
    let t1;
    if ($[1] !== children) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
            attribute: "data-theme",
            defaultTheme: "system",
            enableSystem: true,
            children: children
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/providers.tsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=privlink_src_97d9fb91._.js.map