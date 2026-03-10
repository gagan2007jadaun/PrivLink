(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/privlink/src/components/ChatListItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatListItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function ChatListItem(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(56);
    if ($[0] !== "eb4d86b836270a0f9e46262789fba4b6ffb3880afbbd968d0ffd41e308983bd6") {
        for(let $i = 0; $i < 56; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "eb4d86b836270a0f9e46262789fba4b6ffb3880afbbd968d0ffd41e308983bd6";
    }
    const { name, lastMessage, time, isActive: t1, unreadCount: t2, avatarUrl, isOnline: t3, isLocked: t4, onArchive, onDelete, isArchived: t5 } = t0;
    const isActive = t1 === undefined ? false : t1;
    const unreadCount = t2 === undefined ? 0 : t2;
    const isOnline = t3 === undefined ? false : t3;
    const isLocked = t4 === undefined ? false : t4;
    const isArchived = t5 === undefined ? false : t5;
    const t6 = `group relative flex w-full cursor-pointer items-center gap-3 rounded-lg p-3 transition-all duration-200 
      ${isActive ? "bg-indigo-500/10 dark:bg-indigo-500/20 backdrop-blur-sm" : "hover:bg-black/5 dark:hover:bg-white/5"}`;
    const t7 = `h-full w-full rounded-full p-0.5 ${isActive ? "bg-indigo-500" : "bg-transparent"}`;
    let t8;
    if ($[1] !== avatarUrl || $[2] !== name) {
        t8 = avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: avatarUrl,
            alt: name,
            className: "h-full w-full rounded-full object-cover bg-white"
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
            lineNumber: 47,
            columnNumber: 22
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full w-full items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 font-bold text-lg text-indigo-500",
            children: name.substring(0, 2).toUpperCase()
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
            lineNumber: 47,
            columnNumber: 120
        }, this);
        $[1] = avatarUrl;
        $[2] = name;
        $[3] = t8;
    } else {
        t8 = $[3];
    }
    let t9;
    if ($[4] !== t7 || $[5] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: t8
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[4] = t7;
        $[5] = t8;
        $[6] = t9;
    } else {
        t9 = $[6];
    }
    let t10;
    if ($[7] !== isLocked) {
        t10 = isLocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 border-2 border-white dark:border-zinc-950 text-[10px]",
            title: "Locked",
            children: "🔐"
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
            lineNumber: 65,
            columnNumber: 23
        }, this);
        $[7] = isLocked;
        $[8] = t10;
    } else {
        t10 = $[8];
    }
    let t11;
    if ($[9] !== isLocked || $[10] !== isOnline) {
        t11 = isOnline && !isLocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-950"
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
            lineNumber: 73,
            columnNumber: 36
        }, this);
        $[9] = isLocked;
        $[10] = isOnline;
        $[11] = t11;
    } else {
        t11 = $[11];
    }
    let t12;
    if ($[12] !== t10 || $[13] !== t11 || $[14] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-12 w-12 flex-shrink-0",
            children: [
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
            lineNumber: 82,
            columnNumber: 11
        }, this);
        $[12] = t10;
        $[13] = t11;
        $[14] = t9;
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    const t13 = `truncate text-sm font-semibold ${isActive ? "text-indigo-900 dark:text-indigo-100" : "text-zinc-900 dark:text-zinc-100"}`;
    let t14;
    if ($[16] !== name || $[17] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: t13,
            children: name
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
            lineNumber: 93,
            columnNumber: 11
        }, this);
        $[16] = name;
        $[17] = t13;
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    let t15;
    if ($[19] !== time) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-zinc-400 group-hover:text-zinc-500 dark:text-zinc-500",
            children: time
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
            lineNumber: 102,
            columnNumber: 11
        }, this);
        $[19] = time;
        $[20] = t15;
    } else {
        t15 = $[20];
    }
    let t16;
    if ($[21] !== t14 || $[22] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
            lineNumber: 110,
            columnNumber: 11
        }, this);
        $[21] = t14;
        $[22] = t15;
        $[23] = t16;
    } else {
        t16 = $[23];
    }
    const t17 = `truncate text-sm ${isActive ? "text-indigo-700/80 dark:text-indigo-300/70" : "text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400"} ${isLocked ? "blur-[3px] select-none opacity-50" : ""}`;
    const t18 = isLocked ? "Locked Message Content" : lastMessage;
    let t19;
    if ($[24] !== t17 || $[25] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t17,
            children: t18
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
            lineNumber: 121,
            columnNumber: 11
        }, this);
        $[24] = t17;
        $[25] = t18;
        $[26] = t19;
    } else {
        t19 = $[26];
    }
    let t20;
    if ($[27] !== unreadCount) {
        t20 = unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-indigo-600 px-1 text-[10px] font-bold text-white shadow-md shadow-indigo-500/20",
            children: unreadCount
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
            lineNumber: 130,
            columnNumber: 30
        }, this);
        $[27] = unreadCount;
        $[28] = t20;
    } else {
        t20 = $[28];
    }
    let t21;
    if ($[29] !== t19 || $[30] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-2",
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[29] = t19;
        $[30] = t20;
        $[31] = t21;
    } else {
        t21 = $[31];
    }
    let t22;
    if ($[32] !== t16 || $[33] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-w-0 flex-1 flex-col",
            children: [
                t16,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[32] = t16;
        $[33] = t21;
        $[34] = t22;
    } else {
        t22 = $[34];
    }
    let t23;
    if ($[35] !== onArchive) {
        t23 = ({
            "ChatListItem[<button>.onClick]": (e)=>{
                e.stopPropagation();
                onArchive?.();
            }
        })["ChatListItem[<button>.onClick]"];
        $[35] = onArchive;
        $[36] = t23;
    } else {
        t23 = $[36];
    }
    const t24 = isArchived ? "Unarchive" : "Archive";
    let t25;
    if ($[37] !== isArchived) {
        t25 = isArchived ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-4 w-4",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                lineNumber: 170,
                columnNumber: 103
            }, this)
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
            lineNumber: 170,
            columnNumber: 24
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-4 w-4",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                lineNumber: 170,
                columnNumber: 351
            }, this)
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
            lineNumber: 170,
            columnNumber: 272
        }, this);
        $[37] = isArchived;
        $[38] = t25;
    } else {
        t25 = $[38];
    }
    let t26;
    if ($[39] !== t23 || $[40] !== t24 || $[41] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t23,
            className: "rounded-lg bg-zinc-200 p-2 text-zinc-600 hover:bg-zinc-300 hover:text-zinc-900 dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-600 dark:hover:text-white shadow-sm",
            title: t24,
            children: t25
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[39] = t23;
        $[40] = t24;
        $[41] = t25;
        $[42] = t26;
    } else {
        t26 = $[42];
    }
    let t27;
    if ($[43] !== onDelete) {
        t27 = ({
            "ChatListItem[<button>.onClick]": (e_0)=>{
                e_0.stopPropagation();
                onDelete?.();
            }
        })["ChatListItem[<button>.onClick]"];
        $[43] = onDelete;
        $[44] = t27;
    } else {
        t27 = $[44];
    }
    let t28;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-4 w-4",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                lineNumber: 201,
                columnNumber: 90
            }, this)
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[45] = t28;
    } else {
        t28 = $[45];
    }
    let t29;
    if ($[46] !== t27) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t27,
            className: "rounded-lg bg-zinc-200 p-2 text-zinc-600 hover:bg-red-100 hover:text-red-600 dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-red-900/30 dark:hover:text-red-400 shadow-sm",
            title: "Delete",
            children: t28
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[46] = t27;
        $[47] = t29;
    } else {
        t29 = $[47];
    }
    let t30;
    if ($[48] !== t26 || $[49] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2",
            children: [
                t26,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[48] = t26;
        $[49] = t29;
        $[50] = t30;
    } else {
        t30 = $[50];
    }
    let t31;
    if ($[51] !== t12 || $[52] !== t22 || $[53] !== t30 || $[54] !== t6) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t12,
                t22,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[51] = t12;
        $[52] = t22;
        $[53] = t30;
        $[54] = t6;
        $[55] = t31;
    } else {
        t31 = $[55];
    }
    return t31;
}
_c = ChatListItem;
var _c;
__turbopack_context__.k.register(_c, "ChatListItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/privlink/src/components/CreateGroupOrTree.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateGroupOrTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function CreateGroupOrTree(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(44);
    if ($[0] !== "10f12360eb43b71509f68362321d8df567c2a08eecf7972c05f8cb4356d05288") {
        for(let $i = 0; $i < 44; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "10f12360eb43b71509f68362321d8df567c2a08eecf7972c05f8cb4356d05288";
    }
    const { onClose, onCreate } = t0;
    const [selectedType, setSelectedType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("group");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[1] !== description || $[2] !== name || $[3] !== onClose || $[4] !== onCreate || $[5] !== selectedType) {
        t1 = ({
            "CreateGroupOrTree[handleSubmit]": (e)=>{
                e.preventDefault();
                onCreate?.({
                    type: selectedType,
                    name,
                    description
                });
                onClose();
                setName("");
                setDescription("");
                setSelectedType("group");
            }
        })["CreateGroupOrTree[handleSubmit]"];
        $[1] = description;
        $[2] = name;
        $[3] = onClose;
        $[4] = onCreate;
        $[5] = selectedType;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    const handleSubmit = t1;
    let t2;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            id: "group",
            label: "Create Group",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6 text-white",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                    lineNumber: 59,
                    columnNumber: 103
                }, this)
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            description: "Private chat with selected people"
        };
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            id: "community",
            label: "Create Community",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6 text-white",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                    lineNumber: 71,
                    columnNumber: 103
                }, this)
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                lineNumber: 71,
                columnNumber: 13
            }, this),
            description: "Topic-based space for many members"
        };
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            id: "family",
            label: "Create Family Tree",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6 text-white",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h-3v-4h3v4zm3-10h-3V5h3v4z"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                    lineNumber: 83,
                    columnNumber: 89
                }, this)
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                lineNumber: 83,
                columnNumber: 13
            }, this),
            description: "Connect and chat with family members"
        };
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = [
            t2,
            t3,
            t4,
            {
                id: "friends",
                label: "Create Friends Tree",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-6 h-6 text-white",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.22-3.22-7.51-7.51 3.22 3.22 7.51z"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                        lineNumber: 95,
                        columnNumber: 89
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                    lineNumber: 95,
                    columnNumber: 13
                }, this),
                description: "Friends connected through mutuals"
            }
        ];
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const options = t5;
    const getCtaText = _CreateGroupOrTreeGetCtaText;
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold text-white",
            children: "Create New"
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-6 h-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M6 18L18 6M6 6l12 12"
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                lineNumber: 113,
                columnNumber: 89
            }, this)
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== onClose) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-2",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "text-zinc-400 hover:text-white",
                    children: t7
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                    lineNumber: 120,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[13] = onClose;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-zinc-400 mb-4",
            children: "What do you want to create?"
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
            lineNumber: 128,
            columnNumber: 10
        }, this);
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== selectedType) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3 mb-6",
            children: options.map({
                "CreateGroupOrTree[options.map()]": (option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "CreateGroupOrTree[options.map() > <button>.onClick]": ()=>setSelectedType(option.id)
                        }["CreateGroupOrTree[options.map() > <button>.onClick]"],
                        className: `relative flex items-center w-full p-4 rounded-xl border transition-all text-left group ${selectedType === option.id ? "border-indigo-500/50 bg-zinc-800 ring-1 ring-indigo-500/20" : "border-zinc-800 bg-zinc-800/30 hover:bg-zinc-800/50 hover:border-zinc-700"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-zinc-800",
                                children: option.icon
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                lineNumber: 138,
                                columnNumber: 339
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-4 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `text-sm font-semibold ${selectedType === option.id ? "text-white" : "text-zinc-200"}`,
                                        children: option.label
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                        lineNumber: 138,
                                        columnNumber: 479
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-zinc-400 mt-0.5",
                                        children: option.description
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                        lineNumber: 138,
                                        columnNumber: 601
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                lineNumber: 138,
                                columnNumber: 450
                            }, this),
                            selectedType === option.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-4 h-5 w-5 rounded-full bg-indigo-500 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-3 h-3 text-white",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 3,
                                        d: "M5 13l4 4L19 7"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                        lineNumber: 138,
                                        columnNumber: 886
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                    lineNumber: 138,
                                    columnNumber: 796
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                lineNumber: 138,
                                columnNumber: 706
                            }, this)
                        ]
                    }, option.id, true, {
                        fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                        lineNumber: 136,
                        columnNumber: 55
                    }, this)
            }["CreateGroupOrTree[options.map()]"])
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[16] = selectedType;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-zinc-400 mb-1",
            children: "Name"
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "CreateGroupOrTree[<input>.onChange]": (e_0)=>setName(e_0.target.value)
        })["CreateGroupOrTree[<input>.onChange]"];
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    const t13 = `Enter ${selectedType} name...`;
    let t14;
    if ($[20] !== name || $[21] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    required: true,
                    value: name,
                    onChange: t12,
                    placeholder: t13,
                    className: "w-full rounded-[10px] bg-zinc-800/50 border border-zinc-700 px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                    lineNumber: 164,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[20] = name;
        $[21] = t13;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-zinc-400 mb-1",
            children: "Description (Optional)"
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = ({
            "CreateGroupOrTree[<textarea>.onChange]": (e_1)=>setDescription(e_1.target.value)
        })["CreateGroupOrTree[<textarea>.onChange]"];
        $[24] = t16;
    } else {
        t16 = $[24];
    }
    let t17;
    if ($[25] !== description) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    value: description,
                    onChange: t16,
                    placeholder: "Add a short description...",
                    rows: 3,
                    className: "w-full rounded-[10px] bg-zinc-800/50 border border-zinc-700 px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all resize-none"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                    lineNumber: 189,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
            lineNumber: 189,
            columnNumber: 11
        }, this);
        $[25] = description;
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] !== onClose) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onClose,
            className: "px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors",
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[27] = onClose;
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    const t19 = !name;
    const t20 = getCtaText(selectedType);
    let t21;
    if ($[29] !== t19 || $[30] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            disabled: t19,
            className: "px-6 py-2 rounded-lg bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
            children: t20
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[29] = t19;
        $[30] = t20;
        $[31] = t21;
    } else {
        t21 = $[31];
    }
    let t22;
    if ($[32] !== t18 || $[33] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-2 flex justify-end gap-3",
            children: [
                t18,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[32] = t18;
        $[33] = t21;
        $[34] = t22;
    } else {
        t22 = $[34];
    }
    let t23;
    if ($[35] !== handleSubmit || $[36] !== t14 || $[37] !== t17 || $[38] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-4",
            children: [
                t14,
                t17,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[35] = handleSubmit;
        $[36] = t14;
        $[37] = t17;
        $[38] = t22;
        $[39] = t23;
    } else {
        t23 = $[39];
    }
    let t24;
    if ($[40] !== t10 || $[41] !== t23 || $[42] !== t8) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-2xl overflow-hidden rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        t8,
                        t9,
                        t10,
                        t23
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                    lineNumber: 236,
                    columnNumber: 273
                }, this)
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                lineNumber: 236,
                columnNumber: 129
            }, this)
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[40] = t10;
        $[41] = t23;
        $[42] = t8;
        $[43] = t24;
    } else {
        t24 = $[43];
    }
    return t24;
}
_s(CreateGroupOrTree, "vaMkuXzyFWt4fLNFU777c+qGFqQ=");
_c = CreateGroupOrTree;
function _CreateGroupOrTreeGetCtaText(type) {
    switch(type){
        case "group":
            {
                return "Create Group";
            }
        case "community":
            {
                return "Create Community";
            }
        case "family":
            {
                return "Create Tree";
            }
        case "friends":
            {
                return "Create Tree";
            }
        default:
            {
                return "Create";
            }
    }
}
var _c;
__turbopack_context__.k.register(_c, "CreateGroupOrTree");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/privlink/src/components/StartNewChat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StartNewChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function StartNewChat(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "990e44c54732ff745dc91bec09ffa96bf6460484fb88279e63406c97d4e1cfe4") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "990e44c54732ff745dc91bec09ffa96bf6460484fb88279e63406c97d4e1cfe4";
    }
    const { onClose } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold text-white",
            children: "Start New Chat"
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/StartNewChat.tsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-6 h-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M6 18L18 6M6 6l12 12"
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/StartNewChat.tsx",
                lineNumber: 25,
                columnNumber: 89
            }, this)
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/StartNewChat.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== onClose) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-4",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "text-zinc-400 hover:text-white",
                    children: t2
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/StartNewChat.tsx",
                    lineNumber: 32,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/StartNewChat.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[3] = onClose;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 rounded-xl bg-zinc-800/50 border border-zinc-700 text-center text-zinc-400 text-sm mb-6",
            children: "To start a new chat, search for a friend in your contacts list."
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/StartNewChat.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== onClose) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors",
                children: "Close"
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/StartNewChat.tsx",
                lineNumber: 47,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/StartNewChat.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[6] = onClose;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t3 || $[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-lg overflow-hidden rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        t3,
                        t4,
                        t5
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/components/StartNewChat.tsx",
                    lineNumber: 55,
                    columnNumber: 271
                }, this)
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/StartNewChat.tsx",
                lineNumber: 55,
                columnNumber: 128
            }, this)
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/StartNewChat.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    return t6;
}
_c = StartNewChat;
var _c;
__turbopack_context__.k.register(_c, "StartNewChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/privlink/src/components/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$ChatListItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/components/ChatListItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$CreateGroupOrTree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/components/CreateGroupOrTree.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$StartNewChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/components/StartNewChat.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function Sidebar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(52);
    if ($[0] !== "f9cdaf5788520e2a1e555d878d6ae0f851e207a22ba69421564d5fd033f06a00") {
        for(let $i = 0; $i < 52; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f9cdaf5788520e2a1e555d878d6ae0f851e207a22ba69421564d5fd033f06a00";
    }
    const { chats, activeChatId, onSelectChat, onCreateChat, onArchiveChat, onDeleteChat } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            CREATE: "create",
            CHAT: "chat"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const ACTIONS = t1;
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All Chats");
    const [action, setAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t2;
    if ($[2] !== activeFilter || $[3] !== chats || $[4] !== searchQuery) {
        t2 = ({
            "Sidebar[getFilteredChats]": ()=>{
                let filtered = chats.filter({
                    "Sidebar[getFilteredChats > chats.filter()]": (chat)=>{
                        if (activeFilter === "Archived" && !chat.isArchived) {
                            return false;
                        }
                        if (activeFilter !== "Archived" && chat.isArchived) {
                            return false;
                        }
                        return true;
                    }
                }["Sidebar[getFilteredChats > chats.filter()]"]);
                if (searchQuery.trim()) {
                    const query = searchQuery.toLowerCase();
                    filtered = filtered.filter({
                        "Sidebar[getFilteredChats > filtered.filter()]": (chat_0)=>chat_0.name.toLowerCase().includes(query) || chat_0.lastMessage.toLowerCase().includes(query)
                    }["Sidebar[getFilteredChats > filtered.filter()]"]);
                }
                return filtered;
            }
        })["Sidebar[getFilteredChats]"];
        $[2] = activeFilter;
        $[3] = chats;
        $[4] = searchQuery;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const getFilteredChats = t2;
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold tracking-tight text-zinc-900 dark:text-white",
            children: "PrivLink"
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/Sidebar.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "Sidebar[<button>.onClick]": ()=>setAction(ACTIONS.CREATE)
        })["Sidebar[<button>.onClick]"];
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between px-1",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    suppressHydrationWarning: true,
                    onClick: t4,
                    className: "flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-white/20 hover:text-indigo-600 dark:hover:bg-white/10 backdrop-blur-md border border-white/5 active:scale-95",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 4v16m8-8H4"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/Sidebar.tsx",
                            lineNumber: 101,
                            columnNumber: 418
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/Sidebar.tsx",
                        lineNumber: 101,
                        columnNumber: 339
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/Sidebar.tsx",
                    lineNumber: 101,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/Sidebar.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "absolute left-3 top-2.5 h-4 w-4 text-zinc-400",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/Sidebar.tsx",
                lineNumber: 108,
                columnNumber: 127
            }, this)
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/Sidebar.tsx",
            lineNumber: 108,
            columnNumber: 10
        }, this);
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "Sidebar[<input>.onChange]": (e)=>setSearchQuery(e.target.value)
        })["Sidebar[<input>.onChange]"];
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== searchQuery) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4 p-4 pb-2",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            t6,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                suppressHydrationWarning: true,
                                type: "text",
                                placeholder: "Search messages...",
                                value: searchQuery,
                                onChange: t7,
                                className: "w-full rounded-xl border-none bg-black/5 py-2 pl-9 pr-4 text-sm font-medium text-zinc-900 transition-all placeholder:text-zinc-500 focus:bg-white/50 focus:ring-2 focus:ring-indigo-500/20 dark:bg-white/10 dark:text-zinc-100 dark:focus:bg-black/40 md:text-sm"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/Sidebar.tsx",
                                lineNumber: 124,
                                columnNumber: 117
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/Sidebar.tsx",
                        lineNumber: 124,
                        columnNumber: 87
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/Sidebar.tsx",
                    lineNumber: 124,
                    columnNumber: 60
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/Sidebar.tsx",
            lineNumber: 124,
            columnNumber: 10
        }, this);
        $[11] = searchQuery;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "Sidebar[<button>.onClick]": ()=>setActiveFilter("All Chats")
        })["Sidebar[<button>.onClick]"];
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    const t10 = `whitespace-nowrap rounded-xl px-4 py-1.5 text-xs font-bold transition-all border border-white/10 backdrop-blur-md ${activeFilter === "All Chats" ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-lg transform scale-105" : "text-zinc-600 dark:text-zinc-300 bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/30"}`;
    let t11;
    if ($[14] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t9,
            className: t10,
            children: "All"
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/Sidebar.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[14] = t10;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "Sidebar[<button>.onClick]": ()=>setActiveFilter("Archived")
        })["Sidebar[<button>.onClick]"];
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    const t13 = `whitespace-nowrap rounded-xl px-4 py-1.5 text-xs font-bold transition-all border border-white/10 backdrop-blur-md ${activeFilter === "Archived" ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-lg transform scale-105" : "text-zinc-600 dark:text-zinc-300 bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/30"}`;
    let t14;
    if ($[17] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t12,
            className: t13,
            children: "Archived"
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/Sidebar.tsx",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[17] = t13;
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    let t15;
    let t16;
    let t17;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "whitespace-nowrap rounded-xl px-4 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/30 backdrop-blur-md border border-white/10 transition-colors",
            children: "Personal"
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/Sidebar.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "whitespace-nowrap rounded-xl px-4 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/30 backdrop-blur-md border border-white/10 transition-colors",
            children: "Work"
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/Sidebar.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "whitespace-nowrap rounded-xl px-4 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/30 backdrop-blur-md border border-white/10 transition-colors",
            children: "Groups"
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/Sidebar.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[19] = t15;
        $[20] = t16;
        $[21] = t17;
    } else {
        t15 = $[19];
        t16 = $[20];
        t17 = $[21];
    }
    let t18;
    if ($[22] !== t11 || $[23] !== t14) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 overflow-x-auto overflow-y-hidden no-scrollbar px-2 pb-2",
            children: [
                t11,
                t14,
                t15,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/Sidebar.tsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[22] = t11;
        $[23] = t14;
        $[24] = t18;
    } else {
        t18 = $[24];
    }
    let t19;
    if ($[25] !== activeChatId || $[26] !== getFilteredChats || $[27] !== onArchiveChat || $[28] !== onDeleteChat || $[29] !== onSelectChat) {
        let t20;
        if ($[31] !== activeChatId || $[32] !== onArchiveChat || $[33] !== onDeleteChat || $[34] !== onSelectChat) {
            t20 = ({
                "Sidebar[(anonymous)()]": (chat_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: {
                            "Sidebar[(anonymous)() > <div>.onClick]": ()=>onSelectChat(chat_1.id)
                        }["Sidebar[(anonymous)() > <div>.onClick]"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$ChatListItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            name: chat_1.name,
                            lastMessage: chat_1.lastMessage,
                            time: chat_1.time,
                            unreadCount: chat_1.unreadCount,
                            isOnline: chat_1.isOnline,
                            isActive: chat_1.id === activeChatId,
                            avatarUrl: chat_1.avatarUrl,
                            isArchived: chat_1.isArchived,
                            isLocked: chat_1.isLocked,
                            onArchive: {
                                "Sidebar[(anonymous)() > <ChatListItem>.onArchive]": ()=>onArchiveChat?.(chat_1.id)
                            }["Sidebar[(anonymous)() > <ChatListItem>.onArchive]"],
                            onDelete: {
                                "Sidebar[(anonymous)() > <ChatListItem>.onDelete]": ()=>onDeleteChat?.(chat_1.id)
                            }["Sidebar[(anonymous)() > <ChatListItem>.onDelete]"]
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/Sidebar.tsx",
                            lineNumber: 197,
                            columnNumber: 54
                        }, this)
                    }, chat_1.id, false, {
                        fileName: "[project]/privlink/src/components/Sidebar.tsx",
                        lineNumber: 195,
                        columnNumber: 45
                    }, this)
            })["Sidebar[(anonymous)()]"];
            $[31] = activeChatId;
            $[32] = onArchiveChat;
            $[33] = onDeleteChat;
            $[34] = onSelectChat;
            $[35] = t20;
        } else {
            t20 = $[35];
        }
        t19 = getFilteredChats().map(t20);
        $[25] = activeChatId;
        $[26] = getFilteredChats;
        $[27] = onArchiveChat;
        $[28] = onDeleteChat;
        $[29] = onSelectChat;
        $[30] = t19;
    } else {
        t19 = $[30];
    }
    let t20;
    if ($[36] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto px-2 no-scrollbar",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1 py-2",
                children: t19
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/Sidebar.tsx",
                lineNumber: 223,
                columnNumber: 69
            }, this)
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/Sidebar.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[36] = t19;
        $[37] = t20;
    } else {
        t20 = $[37];
    }
    let t21;
    let t22;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/settings",
            className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/50 text-zinc-500 shadow-sm transition-all hover:bg-white hover:text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:bg-white/10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "h-5 w-5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/Sidebar.tsx",
                        lineNumber: 232,
                        columnNumber: 376
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/Sidebar.tsx",
                        lineNumber: 232,
                        columnNumber: 933
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/components/Sidebar.tsx",
                lineNumber: 232,
                columnNumber: 297
            }, this)
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/Sidebar.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        t22 = ({
            "Sidebar[<button>.onClick]": ()=>setAction(ACTIONS.CHAT)
        })["Sidebar[<button>.onClick]"];
        $[38] = t21;
        $[39] = t22;
    } else {
        t21 = $[38];
        t22 = $[39];
    }
    let t23;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2 border-t border-white/10 p-4 dark:border-white/5",
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: t22,
                    className: "flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600/90 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-600 hover:scale-[1.02] active:scale-[0.98] backdrop-blur-md border border-white/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 4v16m8-8H4"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/Sidebar.tsx",
                                lineNumber: 244,
                                columnNumber: 465
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/Sidebar.tsx",
                            lineNumber: 244,
                            columnNumber: 386
                        }, this),
                        "Start New Chat"
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/components/Sidebar.tsx",
                    lineNumber: 244,
                    columnNumber: 93
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/Sidebar.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[40] = t23;
    } else {
        t23 = $[40];
    }
    let t24;
    if ($[41] !== action || $[42] !== onCreateChat) {
        t24 = action === ACTIONS.CREATE && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$CreateGroupOrTree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onClose: {
                "Sidebar[<CreateGroupOrTree>.onClose]": ()=>setAction(null)
            }["Sidebar[<CreateGroupOrTree>.onClose]"],
            onCreate: {
                "Sidebar[<CreateGroupOrTree>.onCreate]": (data)=>{
                    onCreateChat?.(data);
                    setAction(null);
                }
            }["Sidebar[<CreateGroupOrTree>.onCreate]"]
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/Sidebar.tsx",
            lineNumber: 251,
            columnNumber: 40
        }, this);
        $[41] = action;
        $[42] = onCreateChat;
        $[43] = t24;
    } else {
        t24 = $[43];
    }
    let t25;
    if ($[44] !== action) {
        t25 = action === ACTIONS.CHAT && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$StartNewChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onClose: {
                "Sidebar[<StartNewChat>.onClose]": ()=>setAction(null)
            }["Sidebar[<StartNewChat>.onClose]"]
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/Sidebar.tsx",
            lineNumber: 267,
            columnNumber: 38
        }, this);
        $[44] = action;
        $[45] = t25;
    } else {
        t25 = $[45];
    }
    let t26;
    if ($[46] !== t18 || $[47] !== t20 || $[48] !== t24 || $[49] !== t25 || $[50] !== t8) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "hidden w-80 flex-col border-r border-white/20 bg-sidebar backdrop-blur-xl dark:border-white/10 md:flex md:m-3 md:rounded-3xl md:border md:h-[calc(100vh-24px)] overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]",
            children: [
                t8,
                t18,
                t20,
                t23,
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/Sidebar.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[46] = t18;
        $[47] = t20;
        $[48] = t24;
        $[49] = t25;
        $[50] = t8;
        $[51] = t26;
    } else {
        t26 = $[51];
    }
    return t26;
}
_s(Sidebar, "Z7F2Z4l+sSPkgngOjiweLuIqzRg=");
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/privlink/src/components/ChatHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function ChatHeader(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(99);
    if ($[0] !== "a77e63f5522843e20c276503e8a47fd5b25c455d414df415fe602636a5bca085") {
        for(let $i = 0; $i < 99; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a77e63f5522843e20c276503e8a47fd5b25c455d414df415fe602636a5bca085";
    }
    const { onToggleRightPanel, name, avatarUrl, isOnline, driftLevel: t1, interestScore: t2, interestTrend: t3, gravity: t4, persona, energyBalance: t5, isScrolled: t6, isIncognito: t7, onToggleIncognito, isTyping: t8, disappearingDuration: t9, onSetDisappearingDuration } = t0;
    const driftLevel = t1 === undefined ? "low" : t1;
    const interestScore = t2 === undefined ? 50 : t2;
    const interestTrend = t3 === undefined ? "stable" : t3;
    const gravity = t4 === undefined ? "balanced" : t4;
    const energyBalance = t5 === undefined ? 0 : t5;
    const isScrolled = t6 === undefined ? false : t6;
    const isIncognito = t7 === undefined ? false : t7;
    const isTyping = t8 === undefined ? false : t8;
    const disappearingDuration = t9 === undefined ? 0 : t9;
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTrend, setShowTrend] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showBookmarkToast, setShowBookmarkToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDisappearingMenu, setShowDisappearingMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const disappearingMenuRef = __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    let t10;
    let t11;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "ChatHeader[useEffect()]": ()=>{
                const handleClickOutside = function handleClickOutside(event) {
                    if (disappearingMenuRef.current && !disappearingMenuRef.current.contains(event.target)) {
                        setShowDisappearingMenu(false);
                    }
                };
                document.addEventListener("mousedown", handleClickOutside);
                return ()=>document.removeEventListener("mousedown", handleClickOutside);
            }
        })["ChatHeader[useEffect()]"];
        t11 = [];
        $[1] = t10;
        $[2] = t11;
    } else {
        t10 = $[1];
        t11 = $[2];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect(t10, t11);
    let t12;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "ChatHeader[useEffect()]": ()=>{
                setIsActive(true);
                const timer = setTimeout({
                    "ChatHeader[useEffect() > setTimeout()]": ()=>setIsActive(false)
                }["ChatHeader[useEffect() > setTimeout()]"], 220);
                return ()=>clearTimeout(timer);
            }
        })["ChatHeader[useEffect()]"];
        $[3] = t12;
    } else {
        t12 = $[3];
    }
    let t13;
    if ($[4] !== name) {
        t13 = [
            name
        ];
        $[4] = name;
        $[5] = t13;
    } else {
        t13 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t12, t13);
    let t14;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "ChatHeader[handleInterestClick]": ()=>{
                setShowTrend(true);
                setTimeout({
                    "ChatHeader[handleInterestClick > setTimeout()]": ()=>setShowTrend(false)
                }["ChatHeader[handleInterestClick > setTimeout()]"], 2000);
            }
        })["ChatHeader[handleInterestClick]"];
        $[6] = t14;
    } else {
        t14 = $[6];
    }
    const handleInterestClick = t14;
    let t15;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = ({
            "ChatHeader[handleBookmark]": ()=>{
                setShowBookmarkToast(true);
                setTimeout({
                    "ChatHeader[handleBookmark > setTimeout()]": ()=>setShowBookmarkToast(false)
                }["ChatHeader[handleBookmark > setTimeout()]"], 2500);
            }
        })["ChatHeader[handleBookmark]"];
        $[7] = t15;
    } else {
        t15 = $[7];
    }
    const handleBookmark = t15;
    let moodText = "conversation stays steady";
    if (driftLevel === "medium") {
        moodText = "conversation slowing down";
    }
    if (driftLevel === "high") {
        moodText = "conversation feels distant";
    }
    if (isTyping) {
        moodText = "Ghost is typing...";
    }
    const getMoodColor = _ChatHeaderGetMoodColor;
    const moodColor = getMoodColor(interestScore);
    const accentGradient = `linear-gradient(90deg, ${moodColor}99, ${moodColor}00)`;
    const t16 = isScrolled ? "0 1px 2px rgba(0,0,0,0.02)" : "var(--header-shadow)";
    let t17;
    if ($[8] !== t16) {
        t17 = {
            backgroundColor: "var(--header-bg)",
            backdropFilter: "var(--glass-blur)",
            WebkitBackdropFilter: "var(--glass-blur)",
            borderBottom: "1px solid var(--header-border)",
            boxShadow: t16,
            zIndex: 40
        };
        $[8] = t16;
        $[9] = t17;
    } else {
        t17 = $[9];
    }
    const containerStyle = t17;
    const t18 = isActive ? "translateY(0)" : "translateY(-2px)";
    let t19;
    if ($[10] !== containerStyle || $[11] !== t18) {
        t19 = {
            ...containerStyle,
            transform: t18
        };
        $[10] = containerStyle;
        $[11] = t18;
        $[12] = t19;
    } else {
        t19 = $[12];
    }
    let t20;
    if ($[13] !== showBookmarkToast) {
        t20 = showBookmarkToast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-1 right-20 z-50 rounded-full bg-zinc-800 px-3 py-1 text-xs text-white shadow-lg animate-fade-in-up",
            children: "✨ Bookmark saved. This moment matters."
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 182,
            columnNumber: 32
        }, this);
        $[13] = showBookmarkToast;
        $[14] = t20;
    } else {
        t20 = $[14];
    }
    let t21;
    if ($[15] !== accentGradient) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "header-accent absolute bottom-0 left-0 h-[2px] w-full transition-all duration-1000",
            style: {
                background: accentGradient
            }
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[15] = accentGradient;
        $[16] = t21;
    } else {
        t21 = $[16];
    }
    let t22;
    if ($[17] !== isIncognito) {
        t22 = isIncognito && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 z-0 bg-zinc-900/90 backdrop-blur-md pointer-events-none transition-opacity duration-500"
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 200,
            columnNumber: 26
        }, this);
        $[17] = isIncognito;
        $[18] = t22;
    } else {
        t22 = $[18];
    }
    const t23 = `flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white shadow-md ring-2 ring-white dark:ring-zinc-900 transition-transform hover:scale-105 ${isIncognito ? "bg-zinc-800" : "bg-linear-to-tr from-purple-400 to-indigo-500"}`;
    let t24;
    if ($[19] !== avatarUrl || $[20] !== interestTrend || $[21] !== isIncognito || $[22] !== name || $[23] !== showTrend) {
        t24 = isIncognito ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-6 h-6 text-white",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2a9 9 0 00-9 9v11h18V11a9 9 0 00-9-9zm0 2.25c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5zm0 13.5c-3.728 0-6.75-2.25-6.75-5.25h13.5c0 3-3.022 5.25-6.75 5.25z"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                    lineNumber: 209,
                    columnNumber: 101
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 11c-2.485 0-4.5-1.12-4.5-2.5S9.515 6 12 6s4.5 1.12 4.5 2.5-2.015 2.5-4.5 2.5z",
                    opacity: "0.4"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                    lineNumber: 209,
                    columnNumber: 311
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 209,
            columnNumber: 25
        }, this) : showTrend ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-lg",
            children: interestTrend === "rising" ? "\u2191" : interestTrend === "falling" ? "\u2193" : "\u2192"
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 209,
            columnNumber: 440
        }, this) : avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: avatarUrl,
            alt: name,
            className: "h-full w-full rounded-full object-cover"
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 209,
            columnNumber: 579
        }, this) : name.slice(0, 2).toUpperCase();
        $[19] = avatarUrl;
        $[20] = interestTrend;
        $[21] = isIncognito;
        $[22] = name;
        $[23] = showTrend;
        $[24] = t24;
    } else {
        t24 = $[24];
    }
    let t25;
    if ($[25] !== t23 || $[26] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t23,
            children: t24
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[25] = t23;
        $[26] = t24;
        $[27] = t25;
    } else {
        t25 = $[27];
    }
    let t26;
    if ($[28] !== interestScore || $[29] !== isOnline) {
        t26 = isOnline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-900 ${interestScore > 80 ? "animate-pulse" : ""}`
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 230,
            columnNumber: 23
        }, this);
        $[28] = interestScore;
        $[29] = isOnline;
        $[30] = t26;
    } else {
        t26 = $[30];
    }
    let t27;
    if ($[31] !== t25 || $[32] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative cursor-pointer",
            onClick: handleInterestClick,
            children: [
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[31] = t25;
        $[32] = t26;
        $[33] = t27;
    } else {
        t27 = $[33];
    }
    let t28;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = {
            color: "var(--title-text)"
        };
        $[34] = t28;
    } else {
        t28 = $[34];
    }
    let t29;
    if ($[35] !== name) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "header-name text-sm font-bold leading-tight mb-[2px] dark:text-white",
            style: t28,
            children: name
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 257,
            columnNumber: 11
        }, this);
        $[35] = name;
        $[36] = t29;
    } else {
        t29 = $[36];
    }
    const t30 = isTyping ? "#6366f1" : "var(--subtitle-text)";
    const t31 = isTyping ? 600 : 400;
    let t32;
    if ($[37] !== t30 || $[38] !== t31) {
        t32 = {
            color: t30,
            fontSize: "11.5px",
            fontWeight: t31,
            letterSpacing: "0.4px"
        };
        $[37] = t30;
        $[38] = t31;
        $[39] = t32;
    } else {
        t32 = $[39];
    }
    let t33;
    if ($[40] !== moodText || $[41] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "header-title transition-colors duration-1000",
            style: t32,
            children: moodText
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[40] = moodText;
        $[41] = t32;
        $[42] = t33;
    } else {
        t33 = $[42];
    }
    let t34;
    if ($[43] !== isTyping) {
        t34 = isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex space-x-[1px] h-2 items-end pb-[2px] ml-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "typing-dot",
                    style: {
                        width: "3px",
                        height: "3px",
                        backgroundColor: "#6366f1"
                    }
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                    lineNumber: 290,
                    columnNumber: 87
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "typing-dot",
                    style: {
                        width: "3px",
                        height: "3px",
                        backgroundColor: "#6366f1"
                    }
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                    lineNumber: 294,
                    columnNumber: 12
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "typing-dot",
                    style: {
                        width: "3px",
                        height: "3px",
                        backgroundColor: "#6366f1"
                    }
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                    lineNumber: 298,
                    columnNumber: 12
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 290,
            columnNumber: 23
        }, this);
        $[43] = isTyping;
        $[44] = t34;
    } else {
        t34 = $[44];
    }
    let t35;
    if ($[45] !== energyBalance || $[46] !== gravity || $[47] !== isTyping || $[48] !== name || $[49] !== persona) {
        t35 = !isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex space-x-[1px] h-2 items-end pb-[2px]",
                    title: "Conversation Pace",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[2px] h-[2px] bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                            lineNumber: 310,
                            columnNumber: 111
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[2px] h-[2px] bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                            lineNumber: 310,
                            columnNumber: 210
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                    lineNumber: 310,
                    columnNumber: 26
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "ml-1 text-xs text-zinc-400 opacity-60 hover:opacity-100 transition-opacity cursor-help",
                    title: `Initiation Balance: ${gravity.replace(/-/g, " ")}`,
                    children: gravity === "balanced" ? "\u2192" : gravity === "one-sided-me" ? "\u2197" : "\u2199"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                    lineNumber: 310,
                    columnNumber: 316
                }, this),
                persona && persona !== "balanced" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "ml-0.5 text-xs opacity-60 hover:opacity-100 transition-opacity cursor-help",
                    title: `${name} is a ${persona} person`,
                    children: persona === "morning" ? "\u2600\uFE0F" : "\uD83C\uDF19"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                    lineNumber: 310,
                    columnNumber: 612
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ml-1 flex h-1.5 w-6 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700 opacity-60 hover:opacity-100 transition-opacity cursor-help",
                    title: `Message Energy: ${energyBalance > 0 ? `You +${energyBalance}%` : `Them +${Math.abs(energyBalance)}%`}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full bg-indigo-400",
                        style: {
                            width: `${50 + energyBalance / 2}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                        lineNumber: 310,
                        columnNumber: 1078
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                    lineNumber: 310,
                    columnNumber: 811
                }, this)
            ]
        }, void 0, true);
        $[45] = energyBalance;
        $[46] = gravity;
        $[47] = isTyping;
        $[48] = name;
        $[49] = persona;
        $[50] = t35;
    } else {
        t35 = $[50];
    }
    let t36;
    if ($[51] !== t33 || $[52] !== t34 || $[53] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t33,
                t34,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 324,
            columnNumber: 11
        }, this);
        $[51] = t33;
        $[52] = t34;
        $[53] = t35;
        $[54] = t36;
    } else {
        t36 = $[54];
    }
    let t37;
    if ($[55] !== t29 || $[56] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-center",
            children: [
                t29,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 334,
            columnNumber: 11
        }, this);
        $[55] = t29;
        $[56] = t36;
        $[57] = t37;
    } else {
        t37 = $[57];
    }
    let t38;
    if ($[58] !== t27 || $[59] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 flex items-center gap-4",
            children: [
                t27,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 343,
            columnNumber: 11
        }, this);
        $[58] = t27;
        $[59] = t37;
        $[60] = t38;
    } else {
        t38 = $[60];
    }
    const t39 = `flex h-9 w-9 items-center justify-center rounded-lg transition-colors border border-white/5 backdrop-blur-sm ${isIncognito ? "bg-zinc-800 text-white shadow-inner ring-1 ring-white/10" : "bg-white/5 hover:bg-white/15 dark:bg-black/10 dark:hover:bg-black/20"}`;
    const t40 = isIncognito ? "Disable Incognito Mode" : "Enable Incognito Mode";
    const t41 = `h-5 w-5 ${isIncognito ? "text-white" : "text-zinc-500 dark:text-zinc-400"}`;
    let t42;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2C7.03 2 3 6.03 3 11v11h18V11c0-4.97-4.03-9-9-9zm0 2.25c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5zM5.25 17.75c0-3 3.022-5.25 6.75-5.25s6.75 2.25 6.75 5.25H5.25z"
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 355,
            columnNumber: 11
        }, this);
        $[61] = t42;
    } else {
        t42 = $[61];
    }
    let t43;
    if ($[62] !== t41) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: t41,
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: t42
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 362,
            columnNumber: 11
        }, this);
        $[62] = t41;
        $[63] = t43;
    } else {
        t43 = $[63];
    }
    let t44;
    if ($[64] !== onToggleIncognito || $[65] !== t39 || $[66] !== t40 || $[67] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onToggleIncognito,
            className: t39,
            title: t40,
            children: t43
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 370,
            columnNumber: 11
        }, this);
        $[64] = onToggleIncognito;
        $[65] = t39;
        $[66] = t40;
        $[67] = t43;
        $[68] = t44;
    } else {
        t44 = $[68];
    }
    let t45;
    if ($[69] !== showDisappearingMenu) {
        t45 = ({
            "ChatHeader[<button>.onClick]": ()=>setShowDisappearingMenu(!showDisappearingMenu)
        })["ChatHeader[<button>.onClick]"];
        $[69] = showDisappearingMenu;
        $[70] = t45;
    } else {
        t45 = $[70];
    }
    const t46 = `flex h-9 w-9 items-center justify-center rounded-lg transition-colors border border-white/5 backdrop-blur-sm ${disappearingDuration > 0 ? "bg-indigo-500/20 text-indigo-400 ring-1 ring-indigo-500/50" : "bg-white/5 hover:bg-white/15 dark:bg-black/10 dark:hover:bg-black/20 text-zinc-500 dark:text-zinc-400"}`;
    let t47;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-5 w-5",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                lineNumber: 392,
                columnNumber: 90
            }, this)
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 392,
            columnNumber: 11
        }, this);
        $[71] = t47;
    } else {
        t47 = $[71];
    }
    let t48;
    if ($[72] !== t45 || $[73] !== t46) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t45,
            className: t46,
            title: "Disappearing Messages",
            children: t47
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 399,
            columnNumber: 11
        }, this);
        $[72] = t45;
        $[73] = t46;
        $[74] = t48;
    } else {
        t48 = $[74];
    }
    let t49;
    if ($[75] !== disappearingDuration || $[76] !== onSetDisappearingDuration || $[77] !== showDisappearingMenu) {
        t49 = showDisappearingMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-full right-0 mt-2 w-48 rounded-xl bg-white p-2 shadow-xl ring-1 ring-black/5 dark:bg-zinc-900 dark:ring-white/10 z-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500",
                    children: "Disappearing Timer"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                    lineNumber: 408,
                    columnNumber: 183
                }, this),
                [
                    {
                        label: "Off",
                        value: 0
                    },
                    {
                        label: "1 Minute",
                        value: 60
                    },
                    {
                        label: "1 Hour",
                        value: 3600
                    },
                    {
                        label: "24 Hours",
                        value: 86400
                    }
                ].map({
                    "ChatHeader[(anonymous)()]": (option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "ChatHeader[(anonymous)() > <button>.onClick]": ()=>{
                                    onSetDisappearingDuration?.(option.value);
                                    setShowDisappearingMenu(false);
                                }
                            }["ChatHeader[(anonymous)() > <button>.onClick]"],
                            className: `flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm transition-colors ${disappearingDuration === option.value ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300" : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"}`,
                            children: [
                                option.label,
                                disappearingDuration === option.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-4 w-4",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M5 13l4 4L19 7"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                        lineNumber: 426,
                                        columnNumber: 492
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                    lineNumber: 426,
                                    columnNumber: 413
                                }, this)
                            ]
                        }, option.value, true, {
                            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                            lineNumber: 421,
                            columnNumber: 48
                        }, this)
                }["ChatHeader[(anonymous)()]"])
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 408,
            columnNumber: 35
        }, this);
        $[75] = disappearingDuration;
        $[76] = onSetDisappearingDuration;
        $[77] = showDisappearingMenu;
        $[78] = t49;
    } else {
        t49 = $[78];
    }
    let t50;
    if ($[79] !== t48 || $[80] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            ref: disappearingMenuRef,
            children: [
                t48,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 437,
            columnNumber: 11
        }, this);
        $[79] = t48;
        $[80] = t49;
        $[81] = t50;
    } else {
        t50 = $[81];
    }
    let t51;
    if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "flex h-9 w-9 items-center justify-center rounded-lg transition-colors bg-white/5 hover:bg-white/15 dark:bg-black/10 dark:hover:bg-black/20 border border-white/5 backdrop-blur-sm hover:text-indigo-600",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "h-5 w-5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                    lineNumber: 446,
                    columnNumber: 310
                }, this)
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                lineNumber: 446,
                columnNumber: 231
            }, this)
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 446,
            columnNumber: 11
        }, this);
        $[82] = t51;
    } else {
        t51 = $[82];
    }
    let t52;
    let t53;
    if ($[83] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleBookmark,
            className: "flex h-9 w-9 items-center justify-center rounded-lg transition-colors bg-white/5 hover:bg-white/15 dark:bg-black/10 dark:hover:bg-black/20 border border-white/5 backdrop-blur-sm hover:text-yellow-500",
            title: "Bookmark this moment",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "h-5 w-5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                    lineNumber: 454,
                    columnNumber: 364
                }, this)
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                lineNumber: 454,
                columnNumber: 285
            }, this)
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 454,
            columnNumber: 11
        }, this);
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-2 h-4 w-px bg-zinc-200 dark:bg-zinc-700"
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 455,
            columnNumber: 11
        }, this);
        $[83] = t52;
        $[84] = t53;
    } else {
        t52 = $[83];
        t53 = $[84];
    }
    let t54;
    if ($[85] === Symbol.for("react.memo_cache_sentinel")) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-5 w-5",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                lineNumber: 464,
                columnNumber: 90
            }, this)
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 464,
            columnNumber: 11
        }, this);
        $[85] = t54;
    } else {
        t54 = $[85];
    }
    let t55;
    if ($[86] !== onToggleRightPanel) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onToggleRightPanel,
            className: "flex h-9 w-9 items-center justify-center rounded-lg transition-colors bg-white/5 hover:bg-white/15 dark:bg-black/10 dark:hover:bg-black/20 border border-white/5 backdrop-blur-sm",
            children: t54
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 471,
            columnNumber: 11
        }, this);
        $[86] = onToggleRightPanel;
        $[87] = t55;
    } else {
        t55 = $[87];
    }
    let t56;
    if ($[88] !== t44 || $[89] !== t50 || $[90] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 flex items-center gap-1 text-zinc-500 dark:text-zinc-400",
            children: [
                t44,
                t50,
                t51,
                t52,
                t53,
                t55
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 479,
            columnNumber: 11
        }, this);
        $[88] = t44;
        $[89] = t50;
        $[90] = t55;
        $[91] = t56;
    } else {
        t56 = $[91];
    }
    let t57;
    if ($[92] !== t19 || $[93] !== t20 || $[94] !== t21 || $[95] !== t22 || $[96] !== t38 || $[97] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex h-16 shrink-0 items-center justify-between px-6 transition-all duration-200 ease-out",
            style: t19,
            children: [
                t20,
                t21,
                t22,
                t38,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
            lineNumber: 489,
            columnNumber: 11
        }, this);
        $[92] = t19;
        $[93] = t20;
        $[94] = t21;
        $[95] = t22;
        $[96] = t38;
        $[97] = t56;
        $[98] = t57;
    } else {
        t57 = $[98];
    }
    return t57;
}
_s(ChatHeader, "oDaV1hWtkg9XPPuNQRX16dyPIgg=");
_c = ChatHeader;
function _ChatHeaderGetMoodColor(score) {
    if (score >= 80) {
        return "#9AA57A";
    }
    if (score >= 50) {
        return "#9A9A9A";
    }
    return "#8A7F7F";
}
var _c;
__turbopack_context__.k.register(_c, "ChatHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/privlink/src/components/media/AudioBubble.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const AudioBubble = ({ src, duration, isMe })=>{
    _s();
    if (!src) return null;
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [playbackRate, setPlaybackRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [waveformData, setWaveformData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Audio Context for caching/decoding
    // Note: In a real app, use a store or global context to limit Active AudioContexts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudioBubble.useEffect": ()=>{
            // "Smart Media State": Pause when tab hidden
            const handleVisibilityChange = {
                "AudioBubble.useEffect.handleVisibilityChange": ()=>{
                    if (document.hidden && audioRef.current && !audioRef.current.paused) {
                        audioRef.current.pause();
                        setIsPlaying(false);
                    }
                }
            }["AudioBubble.useEffect.handleVisibilityChange"];
            document.addEventListener("visibilitychange", handleVisibilityChange);
            return ({
                "AudioBubble.useEffect": ()=>document.removeEventListener("visibilitychange", handleVisibilityChange)
            })["AudioBubble.useEffect"];
        }
    }["AudioBubble.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudioBubble.useEffect": ()=>{
            // Decode Audio for Waveform
            // Ideally cache this. For now, decode on load (or on fetch).
            let isActive = true;
            const fetchAndDecode = {
                "AudioBubble.useEffect.fetchAndDecode": async ()=>{
                    try {
                        // If it's a blob URL from local recording, fetching is fast.
                        const response = await fetch(src);
                        const arrayBuffer = await response.arrayBuffer();
                        // We need a new context to decode
                        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                        const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
                        if (isActive) {
                            // Extract channel data
                            const rawData = audioBuffer.getChannelData(0);
                            // Optimization: Downsample here if needed, but drawing logic can handle stride
                            setWaveformData(rawData);
                        }
                        // Cleanup context if not used for playing (we use <audio> element for playing usually interaction is smoother for simple playback)
                        audioCtx.close();
                    } catch (err) {
                        console.error("Error decoding audio data", err);
                    }
                }
            }["AudioBubble.useEffect.fetchAndDecode"];
            if (src) fetchAndDecode();
            return ({
                "AudioBubble.useEffect": ()=>{
                    isActive = false;
                }
            })["AudioBubble.useEffect"];
        }
    }["AudioBubble.useEffect"], [
        src
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudioBubble.useEffect": ()=>{
            // Draw Waveform
            if (!canvasRef.current || !waveformData) return;
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            const dpr = window.devicePixelRatio || 1;
            // Set actual size in memory (scaled to account for extra pixel density)
            // We assume CSS sets the visual width/height
            const width = canvas.clientWidth * dpr;
            const height = canvas.clientHeight * dpr;
            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width;
                canvas.height = height;
            }
            ctx.scale(dpr, dpr);
            const drawWidth = canvas.clientWidth;
            const drawHeight = canvas.clientHeight;
            const amp = drawHeight / 2;
            ctx.clearRect(0, 0, drawWidth, drawHeight);
            // Style
            const barGap = 2;
            const barWidth = 2; // px
            const totalBars = Math.floor(drawWidth / (barWidth + barGap));
            const step = Math.ceil(waveformData.length / totalBars);
            // Progress Color
            const progressPct = duration && duration > 0 ? currentTime / duration : 0;
            // Actually, better use audioRef duration if available
            const safeDuration = audioRef.current?.duration || duration || 1;
            const currentProgress = currentTime / safeDuration;
            for(let i = 0; i < totalBars; i++){
                let min = 1.0;
                let max = -1.0;
                // subsample
                for(let j = 0; j < step; j++){
                    const idx = i * step + j;
                    if (idx < waveformData.length) {
                        const datum = waveformData[idx];
                        if (datum < min) min = datum;
                        if (datum > max) max = datum;
                    }
                }
                // Draw bar
                const x = i * (barWidth + barGap);
                // Normalize height
                let barHeight = Math.max(2, (max - min) * amp); // Min 2px
                // Soften/Round
                // Color logic: Played vs Unplayed
                // If this bar is "before" current progress -> Active Color
                // else -> Inactive Color
                const barProgress = i / totalBars;
                if (barProgress < currentProgress) {
                    ctx.fillStyle = isMe ? 'rgba(255, 255, 255, 0.9)' : '#4F46E5'; // Indigo-600
                } else {
                    ctx.fillStyle = isMe ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.1)';
                    if (document.documentElement.classList.contains('dark') && !isMe) {
                        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
                    }
                }
                // Rounded rect
                roundRect(ctx, x, (drawHeight - barHeight) / 2, barWidth, barHeight, 1);
            }
        }
    }["AudioBubble.useEffect"], [
        waveformData,
        currentTime,
        isMe,
        duration
    ]);
    // Helper for rounded rect since fillRect is square
    const roundRect = (ctx_0, x_0, y, w, h, r)=>{
        if (w < 2 * r) r = w / 2;
        if (h < 2 * r) r = h / 2;
        ctx_0.beginPath();
        ctx_0.roundRect ? ctx_0.roundRect(x_0, y, w, h, r) : ctx_0.rect(x_0, y, w, h); // Fallback
        ctx_0.fill();
    };
    const togglePlay = ()=>{
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
    };
    const handleTimeUpdate = ()=>{
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };
    const handleEnded = ()=>{
        setIsPlaying(false);
        setCurrentTime(0);
        if (audioRef.current) audioRef.current.currentTime = 0;
    };
    const handleCanvasClick = (e)=>{
        if (!audioRef.current || !duration) return;
        const rect = canvasRef.current.getBoundingClientRect();
        const x_1 = e.clientX - rect.left;
        const width_0 = rect.width;
        const pct = Math.min(1, Math.max(0, x_1 / width_0));
        audioRef.current.currentTime = pct * (audioRef.current.duration || duration);
        setCurrentTime(audioRef.current.currentTime);
    };
    const toggleSpeed = (e_0)=>{
        e_0.stopPropagation();
        const speeds = [
            1,
            1.5,
            2
        ];
        const nextIdx = (speeds.indexOf(playbackRate) + 1) % speeds.length;
        const nextRate = speeds[nextIdx];
        setPlaybackRate(nextRate);
        if (audioRef.current) {
            audioRef.current.playbackRate = nextRate;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col w-full min-w-[240px] gap-2 p-1`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: audioRef,
                src: src,
                onPlay: ()=>setIsPlaying(true),
                onPause: ()=>setIsPlaying(false),
                onTimeUpdate: handleTimeUpdate,
                onEnded: handleEnded,
                className: "hidden"
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                lineNumber: 181,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: togglePlay,
                        className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all active:scale-95 ${isMe ? 'bg-white/20 hover:bg-white/30 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-200 dark:shadow-none'}`,
                        children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            className: "w-5 h-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "6",
                                    y: "4",
                                    width: "4",
                                    height: "16",
                                    rx: "1"
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                                    lineNumber: 186,
                                    columnNumber: 99
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "14",
                                    y: "4",
                                    width: "4",
                                    height: "16",
                                    rx: "1"
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                                    lineNumber: 186,
                                    columnNumber: 148
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                            lineNumber: 186,
                            columnNumber: 34
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            className: "w-5 h-5 ml-0.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                                lineNumber: 186,
                                columnNumber: 279
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                            lineNumber: 186,
                            columnNumber: 207
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                        lineNumber: 185,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 h-8 relative group cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                ref: canvasRef,
                                className: "w-full h-full block",
                                onClick: handleCanvasClick
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                                lineNumber: 191,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 bottom-0 w-[1px] bg-red-400 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity",
                                style: {
                                    left: '0%' /* Would need mouse tracking for precise line helper */ 
                                }
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                                lineNumber: 193,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                        lineNumber: 190,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-end justify-center min-w-[32px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleSpeed,
                                className: `text-[10px] font-bold px-1.5 py-0.5 rounded-md transition-colors ${isMe ? 'bg-white/20 hover:bg-white/30 text-white/90' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300'}`,
                                title: "Playback Speed",
                                children: [
                                    playbackRate,
                                    "x"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                                lineNumber: 200,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-[10px] mt-0.5 ${isMe ? 'text-white/70' : 'text-zinc-500'}`,
                                children: duration ? `${Math.floor(currentTime)}:${Math.floor(duration % 60).toString().padStart(2, '0')}` : '0:00'
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                                lineNumber: 203,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                        lineNumber: 199,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                lineNumber: 183,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
        lineNumber: 179,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AudioBubble, "TYLpyt2Pdhe1xAvslnJfqLqiMVM=");
_c = AudioBubble;
const __TURBOPACK__default__export__ = AudioBubble;
var _c;
__turbopack_context__.k.register(_c, "AudioBubble");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/privlink/src/components/media/VideoBubble.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const VideoBubble = ({ src, thumbnailUrl, duration })=>{
    _s();
    // Safety check: if no src is provided, don't render the video element to avoid runtime error
    if (!src) return null;
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // "Auto-mute video in chat"
    const [showOverlay, setShowOverlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Visibility API: Pause when tab hidden
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoBubble.useEffect": ()=>{
            const handleVisibilityChange = {
                "VideoBubble.useEffect.handleVisibilityChange": ()=>{
                    if (document.hidden && videoRef.current && !videoRef.current.paused) {
                        videoRef.current.pause();
                        setIsPlaying(false);
                        setShowOverlay(true);
                    }
                }
            }["VideoBubble.useEffect.handleVisibilityChange"];
            document.addEventListener("visibilitychange", handleVisibilityChange);
            return ({
                "VideoBubble.useEffect": ()=>document.removeEventListener("visibilitychange", handleVisibilityChange)
            })["VideoBubble.useEffect"];
        }
    }["VideoBubble.useEffect"], []);
    const togglePlay = (e)=>{
        e.stopPropagation();
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
            setShowOverlay(false);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
            setShowOverlay(true);
        }
    };
    const toggleMute = (e_0)=>{
        e_0.stopPropagation();
        if (!videoRef.current) return;
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };
    const handleVideoEnd = ()=>{
        setIsPlaying(false);
        setShowOverlay(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative aspect-video w-full overflow-hidden rounded-2xl bg-black group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: videoRef,
                src: src,
                poster: thumbnailUrl,
                className: "h-full w-full object-cover",
                muted: isMuted,
                playsInline: true,
                onEnded: handleVideoEnd,
                // We implement custom click to play, but standard controls for full scrubbing if needed.
                // User asked for "Hover Seek" and "Slick UI". 
                // Let's rely on standard controls only once playing, but overlay before?
                // Or custom everything??
                // "Click → replace with <video controls autoplay>" from generic prompt earlier, 
                // but "SMART MEDIA STATES" implies more control.
                // Let's enable controls when playing, but use overlay for initial state.
                controls: isPlaying
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            (!isPlaying || showOverlay) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity hover:bg-black/40 cursor-pointer",
                onClick: togglePlay,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-full bg-white/20 p-4 backdrop-blur-sm transition-transform group-hover:scale-110",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "h-8 w-8 text-white fill-current",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M8 5v14l11-7z"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
                            lineNumber: 70,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
                        lineNumber: 69,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
                    lineNumber: 68,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
                lineNumber: 67,
                columnNumber: 45
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleMute,
                className: `absolute bottom-3 right-3 rounded-full bg-black/60 p-2 text-white backdrop-blur-md transition-opacity ${isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`,
                children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "h-4 w-4",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
                            lineNumber: 78,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
                            lineNumber: 79,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
                    lineNumber: 77,
                    columnNumber: 28
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "h-4 w-4",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
                        lineNumber: 81,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
                    lineNumber: 80,
                    columnNumber: 30
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            !isPlaying && duration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-3 left-3 rounded-md bg-black/60 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-md",
                children: [
                    duration,
                    "s"
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
                lineNumber: 86,
                columnNumber: 40
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
        lineNumber: 54,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(VideoBubble, "3wiRQ1qKP7ryuAIEgQleql4DyOw=");
_c = VideoBubble;
const __TURBOPACK__default__export__ = VideoBubble;
var _c;
__turbopack_context__.k.register(_c, "VideoBubble");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/privlink/src/components/MessageBubble.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessageBubble
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$media$2f$AudioBubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/components/media/AudioBubble.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$media$2f$VideoBubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/components/media/VideoBubble.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function MessageBubble(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(74);
    if ($[0] !== "c99f3069b4d82d79cde81a9174e238c3d0345576db78b58de156203259be65a8") {
        for(let $i = 0; $i < 74; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c99f3069b4d82d79cde81a9174e238c3d0345576db78b58de156203259be65a8";
    }
    const { type, content, timestamp, isMe: t1, duration, thumbnailUrl, reactions: t2, isConsecutive: t3, status: t4, heatScore: t5, confidenceScore, style: propsStyle, replyTo, onReplyClick, onImageClick, fileName, fileSize, onRetry, onReaction, expiresAt } = t0;
    const isMe = t1 === undefined ? false : t1;
    let t6;
    if ($[1] !== t2) {
        t6 = t2 === undefined ? [] : t2;
        $[1] = t2;
        $[2] = t6;
    } else {
        t6 = $[2];
    }
    const reactions = t6;
    const isConsecutive = t3 === undefined ? false : t3;
    const status = t4 === undefined ? "sent" : t4;
    const heatScore = t5 === undefined ? 0 : t5;
    const [showReactionPicker, setShowReactionPicker] = __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const reactionPickerRef = __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    let t7;
    let t8;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "MessageBubble[useEffect()]": ()=>{
                const handleClickOutside = function handleClickOutside(event) {
                    if (reactionPickerRef.current && !reactionPickerRef.current.contains(event.target)) {
                        setShowReactionPicker(false);
                    }
                };
                document.addEventListener("mousedown", handleClickOutside);
                return ()=>document.removeEventListener("mousedown", handleClickOutside);
            }
        })["MessageBubble[useEffect()]"];
        t8 = [];
        $[3] = t7;
        $[4] = t8;
    } else {
        t7 = $[3];
        t8 = $[4];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect(t7, t8);
    const t9 = `flex w-full ${isMe ? "justify-start" : "justify-end"} ${isConsecutive ? "mt-1" : "mt-4"}`;
    const t10 = `relative max-w-[70%] sm:max-w-[65%] ${isMe ? "items-start" : "items-end"} flex flex-col gap-1`;
    const t11 = `relative px-5 py-3 text-sm overflow-visible transition-all duration-300
          ${isMe ? "rounded-[26px] rounded-tl-lg bg-linear-to-tr from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 selection:bg-indigo-800 selection:text-indigo-100" : "rounded-[26px] rounded-tr-lg bg-white/90 backdrop-blur-sm text-zinc-900 shadow-md shadow-zinc-200/50 dark:bg-zinc-800/90 dark:text-zinc-100 dark:shadow-zinc-900/50"}
          ${type !== "text" ? "p-1.5" : ""}
          ${confidenceScore !== undefined ? confidenceScore < 70 ? "border-b-[3px] border-dotted border-white/40" : "border-b-[3px] border-solid border-white/20" : ""}
          `;
    let t12;
    if ($[5] !== isMe || $[6] !== onReplyClick || $[7] !== replyTo) {
        t12 = replyTo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: {
                "MessageBubble[<div>.onClick]": (e)=>{
                    e.stopPropagation();
                    onReplyClick?.(replyTo.messageId);
                }
            }["MessageBubble[<div>.onClick]"],
            className: `mb-2 cursor-pointer rounded-sm border-l-[3px] px-2 py-0.5 text-xs opacity-90 transition-opacity hover:opacity-100 ${isMe ? "border-indigo-300 bg-indigo-700/30" : "border-indigo-500 bg-zinc-100 dark:bg-zinc-700/50"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block font-bold mb-0.5 opacity-100",
                    children: replyTo.username
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                    lineNumber: 121,
                    columnNumber: 269
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block truncate opacity-80",
                    children: replyTo.mediaType ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "italic",
                        children: [
                            replyTo.mediaType === "image" && "\uD83D\uDDBC Photo",
                            replyTo.mediaType === "video" && "\uD83D\uDCF9 Video",
                            replyTo.mediaType === "audio" && "\uD83C\uDFA4 Audio"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                        lineNumber: 121,
                        columnNumber: 412
                    }, this) : replyTo.text
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                    lineNumber: 121,
                    columnNumber: 347
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
            lineNumber: 116,
            columnNumber: 22
        }, this);
        $[5] = isMe;
        $[6] = onReplyClick;
        $[7] = replyTo;
        $[8] = t12;
    } else {
        t12 = $[8];
    }
    let t13;
    if ($[9] !== content || $[10] !== onImageClick || $[11] !== type) {
        t13 = type === "image" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mb-2 aspect-video w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 group",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: content,
                alt: "Attached",
                onClick: {
                    "MessageBubble[<img>.onClick]": ()=>onImageClick?.(content)
                }["MessageBubble[<img>.onClick]"],
                className: "h-full w-full object-cover transition-transform hover:scale-105 cursor-zoom-in"
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                lineNumber: 131,
                columnNumber: 145
            }, this)
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
            lineNumber: 131,
            columnNumber: 31
        }, this);
        $[9] = content;
        $[10] = onImageClick;
        $[11] = type;
        $[12] = t13;
    } else {
        t13 = $[12];
    }
    let t14;
    if ($[13] !== content || $[14] !== duration || $[15] !== thumbnailUrl || $[16] !== type) {
        t14 = type === "video" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[320px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$media$2f$VideoBubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: content,
                thumbnailUrl: thumbnailUrl,
                duration: duration
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                lineNumber: 143,
                columnNumber: 69
            }, this)
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
            lineNumber: 143,
            columnNumber: 31
        }, this);
        $[13] = content;
        $[14] = duration;
        $[15] = thumbnailUrl;
        $[16] = type;
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    let t15;
    if ($[18] !== content || $[19] !== duration || $[20] !== isMe || $[21] !== type) {
        t15 = type === "audio" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$media$2f$AudioBubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: content,
            duration: duration,
            isMe: isMe
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
            lineNumber: 154,
            columnNumber: 31
        }, this);
        $[18] = content;
        $[19] = duration;
        $[20] = isMe;
        $[21] = type;
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    let t16;
    if ($[23] !== content || $[24] !== fileName || $[25] !== fileSize || $[26] !== isMe || $[27] !== type) {
        t16 = type === "file" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex items-center gap-3 rounded-xl p-3 ${isMe ? "bg-indigo-600/20" : "bg-zinc-100 dark:bg-zinc-800"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-200 dark:bg-zinc-700",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "h-6 w-6 text-zinc-500 dark:text-zinc-400",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                            lineNumber: 165,
                            columnNumber: 371
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                        lineNumber: 165,
                        columnNumber: 259
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                    lineNumber: 165,
                    columnNumber: 150
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col overflow-hidden max-w-[150px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "truncate text-sm font-medium text-zinc-800 dark:text-zinc-200",
                            title: fileName || "Document",
                            children: fileName || "Document"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                            lineNumber: 165,
                            columnNumber: 634
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-zinc-500",
                            children: fileSize || "Unknown Size"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                            lineNumber: 165,
                            columnNumber: 776
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                    lineNumber: 165,
                    columnNumber: 573
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: content,
                    download: fileName || "download",
                    className: "ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white transition-colors hover:bg-indigo-600",
                    onClick: _MessageBubbleAOnClick,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "h-4 w-4",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                            lineNumber: 165,
                            columnNumber: 1164
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                        lineNumber: 165,
                        columnNumber: 1085
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                    lineNumber: 165,
                    columnNumber: 857
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
            lineNumber: 165,
            columnNumber: 30
        }, this);
        $[23] = content;
        $[24] = fileName;
        $[25] = fileSize;
        $[26] = isMe;
        $[27] = type;
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    let t17;
    if ($[29] !== confidenceScore || $[30] !== content || $[31] !== propsStyle?.bold || $[32] !== propsStyle?.italic || $[33] !== propsStyle?.underline || $[34] !== type) {
        t17 = type === "text" && content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: `leading-relaxed ${confidenceScore !== undefined && confidenceScore < 80 ? "opacity-90" : ""} 
                        ${propsStyle?.bold ? "font-bold" : ""} 
                        ${propsStyle?.italic ? "italic" : ""} 
                        ${propsStyle?.underline ? "underline underline-offset-4" : ""}`,
            children: content
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
            lineNumber: 177,
            columnNumber: 41
        }, this);
        $[29] = confidenceScore;
        $[30] = content;
        $[31] = propsStyle?.bold;
        $[32] = propsStyle?.italic;
        $[33] = propsStyle?.underline;
        $[34] = type;
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    const t18 = `mt-1 flex items-center ${isMe ? "justify-start" : "justify-end"} gap-1.5`;
    const t19 = `text-[10px] opacity-45 ${isMe ? "text-indigo-100" : "text-zinc-400 dark:text-zinc-500"}`;
    let t20;
    if ($[36] !== t19 || $[37] !== timestamp) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t19,
            children: timestamp
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[36] = t19;
        $[37] = timestamp;
        $[38] = t20;
    } else {
        t20 = $[38];
    }
    let t21;
    if ($[39] !== isMe || $[40] !== onReaction || $[41] !== showReactionPicker) {
        t21 = !isMe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "MessageBubble[<button>.onClick]": (e_1)=>{
                            e_1.stopPropagation();
                            setShowReactionPicker(!showReactionPicker);
                        }
                    }["MessageBubble[<button>.onClick]"],
                    className: "opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "h-4 w-4",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                            lineNumber: 209,
                            columnNumber: 248
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                        lineNumber: 209,
                        columnNumber: 169
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                    lineNumber: 204,
                    columnNumber: 52
                }, this),
                showReactionPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: reactionPickerRef,
                    className: "absolute bottom-full left-0 mb-2 flex gap-1 rounded-full bg-white p-1 shadow-lg ring-1 ring-black/5 dark:bg-zinc-800 dark:ring-white/10 z-10",
                    children: [
                        "\uD83D\uDC4D",
                        "\u2764\uFE0F",
                        "\uD83D\uDE02",
                        "\uD83D\uDE2E",
                        "\uD83D\uDE22",
                        "\uD83D\uDD25"
                    ].map({
                        "MessageBubble[(anonymous)()]": (emoji)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "MessageBubble[(anonymous)() > <button>.onClick]": (e_2)=>{
                                        e_2.stopPropagation();
                                        onReaction?.(emoji);
                                        setShowReactionPicker(false);
                                    }
                                }["MessageBubble[(anonymous)() > <button>.onClick]"],
                                className: "h-8 w-8 rounded-full text-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors",
                                children: emoji
                            }, emoji, false, {
                                fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                lineNumber: 210,
                                columnNumber: 52
                            }, this)
                    }["MessageBubble[(anonymous)()]"])
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                    lineNumber: 209,
                    columnNumber: 444
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
            lineNumber: 204,
            columnNumber: 20
        }, this);
        $[39] = isMe;
        $[40] = onReaction;
        $[41] = showReactionPicker;
        $[42] = t21;
    } else {
        t21 = $[42];
    }
    let t22;
    if ($[43] !== isMe || $[44] !== onRetry || $[45] !== status) {
        t22 = isMe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center",
            title: status,
            children: [
                status === "sending" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    width: "12",
                    height: "12",
                    className: "text-[#8e8e93] opacity-60",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "12",
                            r: "10",
                            strokeDasharray: "4 4",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                            lineNumber: 227,
                            columnNumber: 230
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M12 6v6l4 2"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                            lineNumber: 227,
                            columnNumber: 307
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                    lineNumber: 227,
                    columnNumber: 94
                }, this),
                status === "failed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "MessageBubble[<button>.onClick]": (e_3)=>{
                            e_3.stopPropagation();
                            onRetry?.();
                        }
                    }["MessageBubble[<button>.onClick]"],
                    className: "flex items-center justify-center transition-transform hover:scale-110 active:scale-95",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 24 24",
                        width: "14",
                        height: "14",
                        className: "text-red-500",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "12",
                                cy: "12",
                                r: "10"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                lineNumber: 232,
                                columnNumber: 268
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M12 8v4m0 4h.01"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                lineNumber: 232,
                                columnNumber: 301
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                        lineNumber: 232,
                        columnNumber: 143
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                    lineNumber: 227,
                    columnNumber: 407
                }, this),
                status === "queued" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    width: "14",
                    height: "14",
                    className: "text-zinc-400 dark:text-zinc-500",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                        lineNumber: 232,
                        columnNumber: 557
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                    lineNumber: 232,
                    columnNumber: 414
                }, this),
                status === "sent" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 16 15",
                    width: "16",
                    height: "15",
                    className: "text-indigo-200/70",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fill: "currentColor",
                        d: "M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 14.377l-3.609-3.419a.364.364 0 0 0-.513.008l-.5.509a.364.364 0 0 0 .009.513l4.316 4.088a.36.36 0 0 0 .506-.01L15.074 3.827a.365.365 0 0 0-.063-.51z"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                        lineNumber: 232,
                        columnNumber: 766
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                    lineNumber: 232,
                    columnNumber: 687
                }, this),
                status === "delivered" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex -space-x-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 16 15",
                            width: "16",
                            height: "15",
                            className: "text-indigo-200/70",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fill: "currentColor",
                                d: "M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 14.377l-3.609-3.419a.364.364 0 0 0-.513.008l-.5.509a.364.364 0 0 0 .009.513l4.316 4.088a.36.36 0 0 0 .506-.01L15.074 3.827a.365.365 0 0 0-.063-.51z"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                lineNumber: 232,
                                columnNumber: 1145
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                            lineNumber: 232,
                            columnNumber: 1066
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 16 15",
                            width: "16",
                            height: "15",
                            className: "text-indigo-200/70 relative -left-[7px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fill: "currentColor",
                                d: "M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 14.377l-3.609-3.419a.364.364 0 0 0-.513.008l-.5.509a.364.364 0 0 0 .009.513l4.316 4.088a.36.36 0 0 0 .506-.01L15.074 3.827a.365.365 0 0 0-.063-.51z"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                lineNumber: 232,
                                columnNumber: 1484
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                            lineNumber: 232,
                            columnNumber: 1384
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                    lineNumber: 232,
                    columnNumber: 1033
                }, this),
                status === "read" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex -space-x-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 16 15",
                            width: "16",
                            height: "15",
                            className: "text-blue-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fill: "currentColor",
                                d: "M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 14.377l-3.609-3.419a.364.364 0 0 0-.513.008l-.5.509a.364.364 0 0 0 .009.513l4.316 4.088a.36.36 0 0 0 .506-.01L15.074 3.827a.365.365 0 0 0-.063-.51z"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                lineNumber: 232,
                                columnNumber: 1859
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                            lineNumber: 232,
                            columnNumber: 1785
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 16 15",
                            width: "16",
                            height: "15",
                            className: "text-blue-300 relative -left-[7px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fill: "currentColor",
                                d: "M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 14.377l-3.609-3.419a.364.364 0 0 0-.513.008l-.5.509a.364.364 0 0 0 .009.513l4.316 4.088a.36.36 0 0 0 .506-.01L15.074 3.827a.365.365 0 0 0-.063-.51z"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                lineNumber: 232,
                                columnNumber: 2193
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                            lineNumber: 232,
                            columnNumber: 2098
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                    lineNumber: 232,
                    columnNumber: 1752
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
            lineNumber: 227,
            columnNumber: 19
        }, this);
        $[43] = isMe;
        $[44] = onRetry;
        $[45] = status;
        $[46] = t22;
    } else {
        t22 = $[46];
    }
    let t23;
    if ($[47] !== t18 || $[48] !== t20 || $[49] !== t21 || $[50] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t18,
            children: [
                t20,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        $[47] = t18;
        $[48] = t20;
        $[49] = t21;
        $[50] = t22;
        $[51] = t23;
    } else {
        t23 = $[51];
    }
    let t24;
    if ($[52] !== t11 || $[53] !== t12 || $[54] !== t13 || $[55] !== t14 || $[56] !== t15 || $[57] !== t16 || $[58] !== t17 || $[59] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t11,
            children: [
                t12,
                t13,
                t14,
                t15,
                t16,
                t17,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, this);
        $[52] = t11;
        $[53] = t12;
        $[54] = t13;
        $[55] = t14;
        $[56] = t15;
        $[57] = t16;
        $[58] = t17;
        $[59] = t23;
        $[60] = t24;
    } else {
        t24 = $[60];
    }
    let t25;
    if ($[61] !== expiresAt || $[62] !== heatScore || $[63] !== isMe || $[64] !== reactions || $[65] !== timestamp) {
        t25 = reactions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex items-center gap-1 ${isMe ? "justify-start pl-1" : "justify-end pr-1"} -mt-3 relative z-10`,
            children: [
                reactions.map(_MessageBubbleReactionsMap),
                heatScore > 50 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -top-2 -right-2 flex items-center justify-center rounded-full bg-orange-100 p-1 shadow-sm ring-1 ring-white dark:bg-zinc-800 dark:ring-zinc-900",
                    title: "High Interest Message",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] opacity-70",
                            children: timestamp
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                            lineNumber: 268,
                            columnNumber: 412
                        }, this),
                        expiresAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            title: `Expires: ${new Date(expiresAt).toLocaleTimeString()}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-3 h-3 text-zinc-400",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                    lineNumber: 268,
                                    columnNumber: 647
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                lineNumber: 268,
                                columnNumber: 554
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                            lineNumber: 268,
                            columnNumber: 485
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                    lineNumber: 268,
                    columnNumber: 212
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
            lineNumber: 268,
            columnNumber: 35
        }, this);
        $[61] = expiresAt;
        $[62] = heatScore;
        $[63] = isMe;
        $[64] = reactions;
        $[65] = timestamp;
        $[66] = t25;
    } else {
        t25 = $[66];
    }
    let t26;
    if ($[67] !== t10 || $[68] !== t24 || $[69] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[67] = t10;
        $[68] = t24;
        $[69] = t25;
        $[70] = t26;
    } else {
        t26 = $[70];
    }
    let t27;
    if ($[71] !== t26 || $[72] !== t9) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: t26
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
            lineNumber: 290,
            columnNumber: 11
        }, this);
        $[71] = t26;
        $[72] = t9;
        $[73] = t27;
    } else {
        t27 = $[73];
    }
    return t27;
}
_s(MessageBubble, "UQvSlEIFoS++kGjlZQYNOGBri2o=");
_c = MessageBubble;
function _MessageBubbleReactionsMap(r, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1 rounded-full border border-white bg-zinc-50 px-1.5 py-0.5 text-[10px] shadow-sm dark:border-zinc-900 dark:bg-zinc-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: r.emoji
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                lineNumber: 300,
                columnNumber: 177
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-zinc-500 dark:text-zinc-400",
                children: r.count
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                lineNumber: 300,
                columnNumber: 199
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/privlink/src/components/MessageBubble.tsx",
        lineNumber: 300,
        columnNumber: 10
    }, this);
}
function _MessageBubbleAOnClick(e_0) {
    return e_0.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "MessageBubble");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/privlink/src/hooks/useTypingMetrics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTypingMetrics",
    ()=>useTypingMetrics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useTypingMetrics(text) {
    _s();
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        backspaceCount: 0,
        pauseCount: 0,
        totalKeystrokes: 0,
        maxTypedLength: 0
    });
    // Refs for timing
    const lastKeystrokeTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Date.now());
    const typingTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasStartedTyping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Calculate score dynamically
    const calculateConfidence = ()=>{
        if (!hasStartedTyping.current) return 100;
        // Base score starts at 100
        // -2 per backspace (rewriting)
        // -5 per long pause (hesitation)
        const penalty = stats.backspaceCount * 2 + stats.pauseCount * 5;
        return Math.max(0, Math.min(100, 100 - penalty));
    };
    const handleKeyDown = (e)=>{
        if (!hasStartedTyping.current) hasStartedTyping.current = true;
        const now = Date.now();
        const timeDiff = now - lastKeystrokeTime.current;
        lastKeystrokeTime.current = now;
        // Track pauses (threshold: 2 seconds)
        if (timeDiff > 2000 && hasStartedTyping.current) {
            setStats((prev)=>({
                    ...prev,
                    pauseCount: prev.pauseCount + 1
                }));
        }
        // Track backspaces
        if (e.key === 'Backspace') {
            setStats((prev_0)=>({
                    ...prev_0,
                    backspaceCount: prev_0.backspaceCount + 1
                }));
        }
        setStats((prev_1)=>({
                ...prev_1,
                totalKeystrokes: prev_1.totalKeystrokes + 1
            }));
        // Reset pause timer
        if (typingTimer.current) clearTimeout(typingTimer.current);
    };
    const handleChange = (val)=>{
        setStats((prev_2)=>({
                ...prev_2,
                maxTypedLength: Math.max(prev_2.maxTypedLength, val.length)
            }));
    };
    const resetMetrics = ()=>{
        setStats({
            backspaceCount: 0,
            pauseCount: 0,
            totalKeystrokes: 0,
            maxTypedLength: 0
        });
        hasStartedTyping.current = false;
        lastKeystrokeTime.current = Date.now();
    };
    // Unsent Intent: if user typed a lot (e.g. > 15 chars) and then cleared it almost empty (< 3 chars)
    // This logic usually triggers when text is empty but maxLength was high.
    // However, in this hook we just return the flag. The consumer checks it when appropriate (e.g. on blur or clear).
    // Actually, distinct unsent intent logic: if text becomes empty AND maxTypedLength was > 10.
    const isUnsentIntent = text.length === 0 && stats.maxTypedLength > 15;
    return {
        confidenceScore: calculateConfidence(),
        isUnsentIntent: isUnsentIntent,
        hesitationCount: stats.pauseCount,
        resetMetrics,
        handleKeyDown,
        handleChange
    };
}
_s(useTypingMetrics, "wTJzkGkwXeo6adFcO7OzF9MRR8E=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/privlink/src/lib/mediaUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateThumbnail",
    ()=>generateThumbnail
]);
function generateThumbnail(videoUrl) {
    return new Promise((resolve)=>{
        const video = document.createElement("video");
        // Safety timeout (avoid hanging)
        const timeoutId = setTimeout(()=>{
            console.warn("Thumbnail generation timed out");
            cleanup();
            resolve("");
        }, 3000);
        const cleanup = ()=>{
            clearTimeout(timeoutId);
            video.onloadedmetadata = null;
            video.onseeked = null;
            video.onerror = null;
            video.pause();
            video.removeAttribute('src'); // Better for GC
            video.load();
            video.remove();
        };
        video.onloadedmetadata = ()=>{
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
        video.onseeked = ()=>{
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
        video.onerror = (e)=>{
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/privlink/src/components/MessageInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessageInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$hooks$2f$useTypingMetrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/hooks/useTypingMetrics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$lib$2f$mediaUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/lib/mediaUtils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function MessageInput({ onSendMessage, boundaryMode = false, recentMessages = [], selfAlias, replyingTo, onCancelReply, isIncognito = false, onTyping }) {
    _s();
    const [showEmojiPicker, setShowEmojiPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isEcho, setIsEcho] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pickerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const typingTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Premium Attachment Menu State
    const [isAttachOpen, setIsAttachOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFontToolbar, setShowFontToolbar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messageStyle, setMessageStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        bold: false,
        italic: false,
        underline: false
    });
    // Recording State
    const [isRecordingAudio, setIsRecordingAudio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRecordingVideo, setIsRecordingVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mediaRecorder, setMediaRecorder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [timer, setTimer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Audio Visualization Refs
    const [waveBars, setWaveBars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Array(12).fill(4));
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const analyserRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Typing Metrics Hook
    const metrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$hooks$2f$useTypingMetrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTypingMetrics"])(message);
    // Echo Detection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessageInput.useEffect": ()=>{
            if (!message || message.length < 5) {
                setIsEcho(false);
                return;
            }
            const isRepetitive = recentMessages.some({
                "MessageInput.useEffect.isRepetitive": (prev)=>prev.toLowerCase().trim() === message.toLowerCase().trim() || prev.length > 10 && prev.includes(message) || message.length > 10 && message.includes(prev)
            }["MessageInput.useEffect.isRepetitive"]);
            setIsEcho(isRepetitive);
        }
    }["MessageInput.useEffect"], [
        message,
        recentMessages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessageInput.useEffect": ()=>{
            function handleClickOutside(event) {
                if (pickerRef.current && !pickerRef.current.contains(event.target)) {
                    setShowEmojiPicker(false);
                }
            // Close attachment menu on outside click if not clicking the toggle itself
            // (Simplified logic: clicking input or elsewhere closes it)
            // For now, we rely on specific interactions closing it or explicit toggles.
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "MessageInput.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["MessageInput.useEffect"];
        }
    }["MessageInput.useEffect"], []);
    const startTimer = ()=>{
        setTimer(0);
        timerRef.current = setInterval(()=>{
            setTimer((prev_0)=>prev_0 + 1);
        }, 1000);
    };
    const stopTimer = ()=>{
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };
    const formatTime = (seconds)=>{
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };
    const isRecordingCancelled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Auto-stop recording after 60 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessageInput.useEffect": ()=>{
            if ((isRecordingAudio || isRecordingVideo) && timer >= 60) {
                stopRecording();
            }
        }
    }["MessageInput.useEffect"], [
        timer,
        isRecordingAudio,
        isRecordingVideo
    ]);
    const cancelRecording = ()=>{
        isRecordingCancelled.current = true;
        stopRecording();
    };
    const startRecording = async (type)=>{
        try {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                alert("Media recording is not supported in this browser or environment (API not found).");
                return;
            }
            const constraints = type === 'audio' ? {
                audio: true
            } : {
                video: true,
                audio: true
            };
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            const recorder = new MediaRecorder(stream);
            recorder.ondataavailable = (e)=>{
                if (e.data.size > 0) {
                    chunksRef.current.push(e.data);
                }
            };
            recorder.onstop = async ()=>{
                // Cleanup Audio Context / Visualization
                if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
                if (audioContextRef.current) {
                    audioContextRef.current.close();
                    audioContextRef.current = null;
                }
                analyserRef.current = null;
                setWaveBars(new Array(12).fill(4));
                if (isRecordingCancelled.current) {
                    // Discard
                    stream.getTracks().forEach((track)=>track.stop());
                    chunksRef.current = [];
                    isRecordingCancelled.current = false;
                    return;
                }
                const blob = new Blob(chunksRef.current, {
                    type: type === 'audio' ? 'audio/webm' : 'video/webm'
                });
                const url = URL.createObjectURL(blob);
                const duration = timer;
                let thumbnail = undefined;
                if (type === 'video') {
                    thumbnail = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$lib$2f$mediaUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateThumbnail"])(url);
                }
                if (onSendMessage) {
                    onSendMessage(url, type, duration, undefined, thumbnail);
                }
                stream.getTracks().forEach((track_0)=>track_0.stop());
                chunksRef.current = [];
            };
            recorder.start();
            setMediaRecorder(recorder);
            isRecordingCancelled.current = false;
            if (type === 'audio') {
                setIsRecordingAudio(true);
                // Setup Visualization
                try {
                    const AudioCtx = window.AudioContext || window.webkitAudioContext;
                    if (AudioCtx) {
                        const audioCtx = new AudioCtx();
                        const analyser = audioCtx.createAnalyser();
                        analyser.fftSize = 64;
                        const source = audioCtx.createMediaStreamSource(stream);
                        source.connect(analyser);
                        audioContextRef.current = audioCtx;
                        analyserRef.current = analyser;
                        const dataArray = new Uint8Array(analyser.frequencyBinCount);
                        const animate = ()=>{
                            analyser.getByteFrequencyData(dataArray);
                            // Take first 12 bins
                            const bars = Array.from(dataArray.slice(0, 12)).map((v)=>Math.max(4, v / 6));
                            setWaveBars(bars);
                            animationFrameRef.current = requestAnimationFrame(animate);
                        };
                        animate();
                    }
                } catch (e_0) {
                    console.error("Audio Web API error", e_0);
                }
            } else {
                setIsRecordingVideo(true);
            }
            startTimer();
            setMessage("");
            setIsAttachOpen(false); // Close menu if started from there
        } catch (err) {
            console.error("Error accessing media devices:", err);
            alert("Could not access microphone or camera.");
        }
    };
    const stopRecording = ()=>{
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
            setIsRecordingAudio(false);
            setIsRecordingVideo(false);
            setMediaRecorder(null);
            stopTimer();
        }
    };
    const onEmojiClick = (emojiData)=>{
        setMessage((prev_1)=>prev_1 + emojiData.emoji);
    };
    const handleSend = ()=>{
        if (message.trim() && onSendMessage) {
            const scoreToSend = boundaryMode ? undefined : metrics.confidenceScore;
            // Filter inactive styles
            const activeStyles = {
                bold: messageStyle.bold || undefined,
                italic: messageStyle.italic || undefined,
                underline: messageStyle.underline || undefined
            };
            onSendMessage(message, 'text', undefined, scoreToSend, undefined, activeStyles);
            setMessage("");
            metrics.resetMetrics();
            // Stop typing immediately
            if (onTyping) onTyping(false);
            if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
        }
    };
    const handleKeyDown = (e_1)=>{
        if (isRecordingAudio || isRecordingVideo) return;
        metrics.handleKeyDown(e_1);
        if (e_1.key === 'Enter' && !e_1.shiftKey) {
            e_1.preventDefault();
            handleSend();
        }
    };
    const handleChange = (e_2)=>{
        if (isRecordingAudio || isRecordingVideo) return;
        const msg = e_2.target.value;
        setMessage(msg);
        metrics.handleChange(msg);
        // Typing Indicator Logic
        if (onTyping) {
            if (msg.trim().length > 0) {
                onTyping(true);
                // Clear existing timeout
                if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
                // Set new timeout to stop typing after inactivity
                typingTimeoutRef.current = setTimeout(()=>{
                    onTyping(false);
                }, 2000);
            } else {
                onTyping(false);
            }
        }
    };
    const toggleStyle = (style)=>{
        setMessageStyle((prev_2)=>({
                ...prev_2,
                [style]: !prev_2[style]
            }));
    };
    const isRecording = isRecordingAudio || isRecordingVideo;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `chat-input relative px-3 py-2 rounded-[24px] m-[10px] shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] transition-colors duration-300 ${isIncognito ? 'bg-zinc-800' : 'bg-white/40 backdrop-blur-xl dark:bg-black/40'}`,
        children: [
            replyingTo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex items-center justify-between rounded-lg border-l-4 border-indigo-500 bg-white/40 dark:bg-zinc-800/40 backdrop-blur-md p-2 animate-fade-in-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold text-indigo-600 dark:text-indigo-400",
                                children: [
                                    "Replying to ",
                                    replyingTo.sender
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 282,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate text-xs text-zinc-600 dark:text-zinc-400",
                                children: [
                                    replyingTo.mediaType ? `[${replyingTo.mediaType}] ` : '',
                                    replyingTo.text
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 285,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 281,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCancelReply,
                        className: "ml-2 rounded-full p-1 text-zinc-500 hover:bg-white/20 dark:hover:bg-white/10 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "h-4 w-4",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M6 18L18 6M6 6l12 12"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 291,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/MessageInput.tsx",
                            lineNumber: 290,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 289,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                lineNumber: 280,
                columnNumber: 28
            }, this),
            showFontToolbar && !isRecording && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-12 left-4 z-50 flex items-center gap-1 rounded-xl bg-white/90 p-1 shadow-lg ring-1 ring-black/5 dark:bg-zinc-900/90 dark:ring-white/10 animate-fade-in-up backdrop-blur-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>toggleStyle('bold'),
                        className: `flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold transition-colors ${messageStyle.bold ? 'bg-zinc-100 text-indigo-600 dark:bg-zinc-700 dark:text-indigo-400' : 'text-zinc-500 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-white/10'}`,
                        children: "B"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 298,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>toggleStyle('italic'),
                        className: `flex h-8 w-8 items-center justify-center rounded-lg text-sm italic font-serif transition-colors ${messageStyle.italic ? 'bg-zinc-100 text-indigo-600 dark:bg-zinc-700 dark:text-indigo-400' : 'text-zinc-500 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-white/10'}`,
                        children: "I"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 301,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>toggleStyle('underline'),
                        className: `flex h-8 w-8 items-center justify-center rounded-lg text-sm underline transition-colors ${messageStyle.underline ? 'bg-zinc-100 text-indigo-600 dark:bg-zinc-700 dark:text-indigo-400' : 'text-zinc-500 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-white/10'}`,
                        children: "U"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 304,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                lineNumber: 297,
                columnNumber: 49
            }, this),
            isAttachOpen && !isRecording && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-20 left-4 z-50 flex flex-col min-w-[240px] gap-1 rounded-2xl bg-white/80 p-2 shadow-2xl backdrop-blur-2xl ring-1 ring-black/5 dark:bg-zinc-900/80 dark:ring-white/10 animate-fade-in-up origin-bottom-left border border-white/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>startRecording('video'),
                        className: "flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-200 dark:hover:bg-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-10 w-10 items-center justify-center rounded-full bg-red-100/80 text-red-600 dark:bg-red-900/40 dark:text-red-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 316,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                    lineNumber: 315,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 314,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "leading-tight",
                                        children: "Camera"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 320,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-zinc-400 dark:text-zinc-500",
                                        children: "Photos & Videos"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 321,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 319,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 313,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>document.getElementById('image-upload')?.click(),
                        className: "flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-200 dark:hover:bg-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-10 w-10 items-center justify-center rounded-full bg-purple-100/80 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 329,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                    lineNumber: 328,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 327,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "leading-tight",
                                        children: "Gallery"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 333,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-zinc-400 dark:text-zinc-500",
                                        children: "Send images"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 334,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 332,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 326,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "image-upload",
                        type: "file",
                        accept: "image/*",
                        className: "hidden",
                        onChange: (e_3)=>{
                            const file = e_3.target.files?.[0];
                            if (file && onSendMessage) {
                                const url_0 = URL.createObjectURL(file);
                                onSendMessage(url_0, 'image');
                                setIsAttachOpen(false);
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 337,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>document.getElementById('doc-upload')?.click(),
                        className: "flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-200 dark:hover:bg-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-10 w-10 items-center justify-center rounded-full bg-blue-100/80 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 350,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                    lineNumber: 349,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 348,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "leading-tight",
                                        children: "Document"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 354,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-zinc-400 dark:text-zinc-500",
                                        children: "Share files"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 355,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 353,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 347,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "doc-upload",
                        type: "file",
                        accept: ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.zip",
                        className: "hidden",
                        onChange: (e_4)=>{
                            const file_0 = e_4.target.files?.[0];
                            if (file_0 && onSendMessage) {
                                const url_1 = URL.createObjectURL(file_0);
                                const size = (file_0.size / (1024 * 1024)).toFixed(2) + " MB";
                                onSendMessage(url_1, 'file', undefined, undefined, undefined, undefined, file_0.name, size);
                                setIsAttachOpen(false);
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 358,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>alert("Polls coming soon!"),
                        className: "flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-200 dark:hover:bg-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-10 w-10 items-center justify-center rounded-full bg-amber-100/80 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 372,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                    lineNumber: 371,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 370,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "leading-tight",
                                        children: "Poll"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 376,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-zinc-400 dark:text-zinc-500",
                                        children: "Create a poll"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 377,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 375,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 369,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>alert("Contact sharing coming soon!"),
                        className: "flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-200 dark:hover:bg-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100/80 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 385,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                    lineNumber: 384,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 383,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "leading-tight",
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 389,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-zinc-400 dark:text-zinc-500",
                                        children: "Share contact"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 390,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 388,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 382,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>alert("Event creation coming soon!"),
                        className: "flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-200 dark:hover:bg-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-10 w-10 items-center justify-center rounded-full bg-orange-100/80 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 398,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                    lineNumber: 397,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 396,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "leading-tight",
                                        children: "Event"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 402,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-zinc-400 dark:text-zinc-500",
                                        children: "Create event"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 403,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 401,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 395,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setShowFontToolbar(!showFontToolbar);
                            setIsAttachOpen(false);
                        },
                        className: "flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-200 dark:hover:bg-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100/80 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-serif font-bold",
                                    children: "Aa"
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                    lineNumber: 413,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 412,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "leading-tight",
                                        children: "Text Options"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 416,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-zinc-400 dark:text-zinc-500",
                                        children: "Format text"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 417,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 415,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 408,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                lineNumber: 310,
                columnNumber: 46
            }, this),
            metrics.isUnsentIntent && !boundaryMode && !isEcho && !isRecording && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-6 left-6 text-xs italic text-zinc-400 animate-pulse bg-white/80 px-2 py-1 rounded-md shadow-sm dark:bg-zinc-800/80",
                children: "You almost said something here..."
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                lineNumber: 424,
                columnNumber: 84
            }, this),
            isEcho && !boundaryMode && !isRecording && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-6 left-6 text-xs font-medium text-amber-500 animate-fade-in-up bg-amber-50 px-2 py-1 rounded-md shadow-sm border border-amber-100 dark:bg-amber-900/30 dark:border-amber-800",
                children: "↺ Copycat? You said this recently."
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                lineNumber: 429,
                columnNumber: 57
            }, this),
            showEmojiPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-full left-4 mb-2 z-50 shadow-2xl rounded-2xl",
                ref: pickerRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    theme: theme === 'dark' ? __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Theme"].DARK : __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Theme"].LIGHT,
                    emojiStyle: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmojiStyle"].APPLE,
                    onEmojiClick: onEmojiClick,
                    width: 350,
                    height: 450,
                    searchDisabled: false,
                    skinTonesDisabled: false
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                    lineNumber: 434,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                lineNumber: 433,
                columnNumber: 33
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex items-center gap-2 rounded-2xl bg-zinc-100/50 px-3 py-1.5 min-h-[38px] dark:bg-zinc-800/30 transition-all focus-within:ring-2 focus-within:ring-indigo-500/50 focus-within:bg-white/80 dark:focus-within:bg-zinc-800/80 backdrop-blur-sm ${isRecording ? 'ring-red-200 bg-red-50/50 dark:bg-red-900/20 dark:ring-red-900/50' : ''}`,
                children: [
                    isRecording && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-2 inset-y-2 flex items-center justify-between rounded-xl bg-red-50/90 dark:bg-red-900/40 z-10 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.2)] border border-red-100 dark:border-red-800/50 transition-all duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 pl-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 h-8 filter drop-shadow-[0_0_4px_rgba(108,92,231,0.4)]",
                                        children: isRecordingAudio ? waveBars.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-[3px] bg-indigo-500 rounded-full transition-[height] duration-75 ease-linear",
                                                style: {
                                                    height: `${h}px`
                                                }
                                            }, i, false, {
                                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                                lineNumber: 445,
                                                columnNumber: 76
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex h-3 w-3 relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative inline-flex rounded-full h-3 w-3 bg-red-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                            lineNumber: 447,
                                            columnNumber: 22
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 444,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `font-mono text-sm font-bold ${isRecordingAudio ? 'text-indigo-600 dark:text-indigo-400' : 'text-red-600 dark:text-red-400'}`,
                                                children: formatTime(timer)
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                                lineNumber: 454,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400",
                                                children: isRecordingAudio ? 'Mic Active' : 'Recording'
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                                lineNumber: 457,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 453,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 443,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 pr-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: cancelRecording,
                                        className: "p-2 rounded-full text-zinc-500 hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 transition-colors",
                                        title: "Cancel",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M6 18L18 6M6 6l12 12"
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                                lineNumber: 467,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                            lineNumber: 466,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 465,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: stopRecording,
                                        className: "flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white hover:bg-indigo-600 shadow-lg shadow-indigo-500/30 transition-all transform hover:scale-105 active:scale-95",
                                        title: "Send",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                                lineNumber: 471,
                                                columnNumber: 98
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                            lineNumber: 471,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 470,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 464,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 441,
                        columnNumber: 33
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 pl-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setIsAttachOpen(!isAttachOpen);
                                // Also close font toolbar if opening menu?
                                if (!isAttachOpen) setShowFontToolbar(false);
                            },
                            className: `flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ease-spring ${isAttachOpen ? 'rotate-45 bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-white' : 'text-zinc-500 hover:bg-white/20 hover:text-indigo-600 dark:text-zinc-400 dark:hover:bg-white/10'}`,
                            disabled: isRecording,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-5 w-5",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 4v16m8-8H4"
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                    lineNumber: 484,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 483,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/MessageInput.tsx",
                            lineNumber: 478,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 477,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            rows: 1,
                            value: message,
                            onChange: handleChange,
                            onKeyDown: handleKeyDown,
                            onInput: (e_5)=>{
                                const target = e_5.target;
                                target.style.height = 'auto';
                                target.style.height = Math.min(target.scrollHeight, 120) + 'px';
                            },
                            autoFocus: false,
                            disabled: isRecording,
                            placeholder: isIncognito ? "Message (Incognito)..." : boundaryMode ? "Type privately..." : isRecording ? "" : selfAlias ? `Message as ${selfAlias}...` : "Type a message...",
                            className: `w-full bg-transparent text-sm font-medium ${isIncognito ? 'text-zinc-200 placeholder:text-zinc-400' : 'text-zinc-900 placeholder:text-zinc-500 dark:text-zinc-100'} focus:outline-none disabled:opacity-50 resize-none overflow-y-auto no-scrollbar transition-[height] duration-150 ease-out leading-[1.4] caret-indigo-500`,
                            style: {
                                fontWeight: messageStyle.bold ? 700 : 400,
                                fontStyle: messageStyle.italic ? 'italic' : 'normal',
                                textDecoration: messageStyle.underline ? 'underline' : 'none'
                            }
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/MessageInput.tsx",
                            lineNumber: 491,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 490,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 items-center gap-1 pr-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>startRecording('audio'),
                                disabled: isRecording,
                                className: `flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-white/20 hover:text-red-500 dark:hover:bg-white/10 ${isRecording ? 'opacity-0' : ''}`,
                                title: "Record Voice",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 507,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                    lineNumber: 506,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 505,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowEmojiPicker(!showEmojiPicker),
                                disabled: isRecording,
                                className: `flex h-8 w-8 items-center justify-center rounded-full transition-colors ${showEmojiPicker ? 'text-indigo-600 bg-indigo-50/50 dark:bg-indigo-500/10' : 'text-zinc-400 hover:bg-white/20 hover:text-zinc-600 dark:hover:bg-white/10'} ${isRecording ? 'opacity-0' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 515,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                    lineNumber: 514,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 513,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pl-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSend,
                                    disabled: !message.trim() || isRecording,
                                    className: `flex h-9 w-9 items-center justify-center rounded-full text-white shadow-lg transition-all hover:scale-105 active:scale-95 ${boundaryMode ? 'bg-zinc-600 shadow-zinc-500/30 hover:bg-zinc-700' : 'bg-indigo-600 shadow-indigo-500/30 hover:bg-indigo-700'} ${isRecording ? 'opacity-0' : ''}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-5 w-5 ml-0.5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2.5,
                                            d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                            lineNumber: 522,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 521,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                    lineNumber: 520,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 519,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 503,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                lineNumber: 437,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/privlink/src/components/MessageInput.tsx",
        lineNumber: 278,
        columnNumber: 10
    }, this);
}
_s(MessageInput, "crpeH/d4VNJMBNxPEzfD0lDUQRI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$hooks$2f$useTypingMetrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTypingMetrics"]
    ];
});
_c = MessageInput;
var _c;
__turbopack_context__.k.register(_c, "MessageInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/privlink/src/components/RightPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RightPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function RightPanel({ chat, messages = [], onUpdateChat, onImageClick }) {
    _s();
    const [isPulsing, setIsPulsing] = __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [activeTab, setActiveTab] = __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('media');
    if (!chat) return null;
    const score = chat.interestScore || 100;
    // Derived Data
    const sharedImages = __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "RightPanel.useMemo[sharedImages]": ()=>messages.filter({
                "RightPanel.useMemo[sharedImages]": (m)=>m.type === 'image' && m.content
            }["RightPanel.useMemo[sharedImages]"]).reverse()
    }["RightPanel.useMemo[sharedImages]"], [
        messages
    ]);
    // Pulse animation on score change
    __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "RightPanel.useEffect": ()=>{
            setIsPulsing(true);
            const timer = setTimeout({
                "RightPanel.useEffect.timer": ()=>setIsPulsing(false)
            }["RightPanel.useEffect.timer"], 300);
            return ({
                "RightPanel.useEffect": ()=>clearTimeout(timer)
            })["RightPanel.useEffect"];
        }
    }["RightPanel.useEffect"], [
        score
    ]);
    // ... (lines 24-160 are mostly same, skipping to render logic)
    const getScoreColorStyle = (score_0)=>{
        if (score_0 >= 80) return 'var(--interest-high)';
        if (score_0 >= 50) return 'var(--interest-mid)';
        return 'var(--interest-low)';
    };
    const scoreColorStyle = getScoreColorStyle(score);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "hidden w-72 flex-col border-l border-white/20 bg-white/40 backdrop-blur-xl dark:border-white/10 dark:bg-black/40 xl:flex xl:m-3 xl:rounded-3xl xl:border xl:h-[calc(100vh-24px)] overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto px-6 py-6 scrollbar-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-24 w-24 rounded-full bg-linear-to-tr from-purple-400 to-indigo-500 p-0.5 ring-4 ring-white dark:ring-zinc-900",
                                    children: chat.avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: chat.avatarUrl,
                                        alt: chat.name,
                                        className: "h-full w-full rounded-full object-cover bg-white"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                        lineNumber: 47,
                                        columnNumber: 47
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-full w-full items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 font-bold text-2xl text-indigo-500",
                                        children: chat.name.substring(0, 2).toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                        lineNumber: 47,
                                        columnNumber: 155
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                    lineNumber: 46,
                                    columnNumber: 25
                                }, this),
                                chat.isOnline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute bottom-1 right-1 h-5 w-5 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-zinc-900"
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                    lineNumber: 51,
                                    columnNumber: 43
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-bold text-zinc-900 dark:text-white text-center",
                            children: chat.name
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                            lineNumber: 53,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium text-zinc-500 dark:text-zinc-400",
                            children: "@username"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                            lineNumber: 54,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex flex-col items-center justify-center relative group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-32 w-32 flex items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-full w-full rotate-[-90deg]",
                                        viewBox: "0 0 100 100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                        id: "scoreGradientHigh",
                                                        x1: "0%",
                                                        y1: "0%",
                                                        x2: "100%",
                                                        y2: "0%",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "0%",
                                                                stopColor: "#10B981"
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                lineNumber: 64,
                                                                columnNumber: 41
                                                            }, this),
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "100%",
                                                                stopColor: "#34D399"
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                lineNumber: 65,
                                                                columnNumber: 41
                                                            }, this),
                                                            " "
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                        id: "scoreGradientMid",
                                                        x1: "0%",
                                                        y1: "0%",
                                                        x2: "100%",
                                                        y2: "0%",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "0%",
                                                                stopColor: "#6366F1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                lineNumber: 68,
                                                                columnNumber: 41
                                                            }, this),
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "100%",
                                                                stopColor: "#818CF8"
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                lineNumber: 69,
                                                                columnNumber: 41
                                                            }, this),
                                                            " "
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                        id: "scoreGradientLow",
                                                        x1: "0%",
                                                        y1: "0%",
                                                        x2: "100%",
                                                        y2: "0%",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "0%",
                                                                stopColor: "#F59E0B"
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                lineNumber: 72,
                                                                columnNumber: 41
                                                            }, this),
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "100%",
                                                                stopColor: "#FBBF24"
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                lineNumber: 73,
                                                                columnNumber: 41
                                                            }, this),
                                                            " "
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                lineNumber: 62,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "50",
                                                cy: "50",
                                                r: "45",
                                                fill: "none",
                                                stroke: "currentColor",
                                                className: "text-zinc-100 dark:text-zinc-800",
                                                strokeWidth: "8",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                lineNumber: 78,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "50",
                                                cy: "50",
                                                r: "45",
                                                fill: "none",
                                                stroke: `url(#${score >= 80 ? 'scoreGradientHigh' : score >= 50 ? 'scoreGradientMid' : 'scoreGradientLow'})`,
                                                strokeWidth: "8",
                                                strokeLinecap: "round",
                                                strokeDasharray: "283",
                                                strokeDashoffset: 283 - 283 * score / 100,
                                                className: "transition-all duration-1000 ease-out",
                                                style: {
                                                    filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.1))'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                lineNumber: 81,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                        lineNumber: 60,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex flex-col items-center justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-[-2px]",
                                                children: "Score"
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                lineNumber: 89,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-baseline gap-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-3xl font-bold transition-all duration-300 ease-out`,
                                                        style: {
                                                            color: score >= 80 ? '#10B981' : score >= 50 ? '#6366F1' : '#F59E0B',
                                                            transform: isPulsing ? 'scale(1.1)' : 'scale(1)'
                                                        },
                                                        children: score
                                                    }, void 0, false, {
                                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-medium text-zinc-300 dark:text-zinc-600",
                                                        children: "/100"
                                                    }, void 0, false, {
                                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                lineNumber: 90,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                        lineNumber: 88,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                lineNumber: 58,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                            lineNumber: 57,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex w-full gap-1 rounded-xl bg-zinc-100/50 p-1 dark:bg-zinc-800/50 backdrop-blur-sm",
                            children: [
                                'media',
                                'docs',
                                'links',
                                'settings'
                            ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab(tab),
                                    className: `flex-1 rounded-lg py-1.5 text-xs font-semibold capitalize transition-all border border-white/5 backdrop-blur-md ${activeTab === tab ? 'bg-white text-zinc-900 shadow-sm dark:bg-white dark:text-zinc-900' : 'text-zinc-500 hover:text-white bg-white/5 hover:bg-white/20 dark:text-zinc-400 dark:hover:bg-black/30'}`,
                                    children: tab
                                }, tab, false, {
                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                    lineNumber: 107,
                                    columnNumber: 87
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                            lineNumber: 106,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                    lineNumber: 44,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex-1 min-h-0 flex flex-col",
                    children: [
                        activeTab === 'media' && (sharedImages.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-2 animate-fade-in-up",
                            children: sharedImages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-square relative group overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: msg.content,
                                            alt: "Shared media",
                                            className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                            lineNumber: 119,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                            lineNumber: 120,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, msg.id, true, {
                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                    lineNumber: 118,
                                    columnNumber: 58
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                            lineNumber: 117,
                            columnNumber: 74
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileEmptyState, {
                            type: "media"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                            lineNumber: 122,
                            columnNumber: 38
                        }, this)),
                        activeTab === 'docs' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileEmptyState, {
                            type: "docs"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                            lineNumber: 125,
                            columnNumber: 46
                        }, this),
                        activeTab === 'links' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileEmptyState, {
                            type: "links"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                            lineNumber: 128,
                            columnNumber: 47
                        }, this),
                        activeTab === 'settings' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 pt-2 animate-fade-in-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-bold uppercase tracking-wider text-zinc-400",
                                    children: "Relationship Settings"
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                    lineNumber: 132,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-semibold text-zinc-500 dark:text-zinc-400",
                                            children: "Relationship Mode"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                            lineNumber: 136,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex rounded-xl bg-white/20 p-1 dark:bg-black/20 border border-white/10 backdrop-blur-sm",
                                            children: [
                                                'work',
                                                'personal',
                                                'casual'
                                            ].map((mode)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>alert(`Set mode to ${mode} (Mock)`),
                                                    className: `flex-1 rounded-lg py-1.5 text-xs font-medium capitalize transition-all border border-white/5 backdrop-blur-md ${(chat.relationshipMode || 'personal') === mode ? 'bg-white text-zinc-900 shadow-sm dark:bg-white dark:text-zinc-900' : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white bg-white/5 hover:bg-white/20'}`,
                                                    children: mode
                                                }, mode, false, {
                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 81
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                            lineNumber: 137,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                    lineNumber: 135,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-4 border-t border-zinc-100 dark:border-zinc-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "mb-3 text-xs font-bold uppercase tracking-wider text-zinc-400",
                                            children: "Identity Layer"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                            lineNumber: 146,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-semibold text-zinc-500 dark:text-zinc-400",
                                                    children: "Your Alias in this Chat"
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Public Name (Default)",
                                                    value: chat.selfAlias || '',
                                                    onChange: (e)=>onUpdateChat?.({
                                                            ...chat,
                                                            selfAlias: e.target.value
                                                        }),
                                                    className: "w-full rounded-xl bg-white/20 px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-500/70 dark:bg-black/20 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 border border-white/10 backdrop-blur-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-zinc-400",
                                                    children: "This is how you appear in this specific conversation."
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                            lineNumber: 147,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                    lineNumber: 145,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-4 border-t border-zinc-100 dark:border-zinc-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xs font-bold uppercase tracking-wider text-zinc-400",
                                                    children: "Wallpaper"
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 37
                                                }, this),
                                                chat.chatBackground && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        localStorage.removeItem(`chat-bg-${chat.id}`);
                                                        onUpdateChat?.({
                                                            ...chat,
                                                            chatBackground: undefined
                                                        });
                                                    },
                                                    className: "text-[10px] font-medium text-red-500 hover:text-red-700 transition-colors",
                                                    children: "Reset to Default"
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 61
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                            lineNumber: 159,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-3 w-full cursor-pointer group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-10 w-10 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-500 group-hover:bg-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-400 transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-5 h-5",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                    lineNumber: 177,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block text-sm font-medium text-zinc-700 dark:text-zinc-200",
                                                                children: "Choose from Gallery"
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            accept: "image/*",
                                                            className: "hidden",
                                                            onChange: (e_0)=>{
                                                                const file = e_0.target.files?.[0];
                                                                if (!file) return;
                                                                const compressImage = (file_0)=>{
                                                                    return new Promise((resolve, reject)=>{
                                                                        const reader = new FileReader();
                                                                        reader.readAsDataURL(file_0);
                                                                        reader.onload = (event)=>{
                                                                            const img = new Image();
                                                                            img.src = event.target?.result;
                                                                            img.onload = ()=>{
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
                                                                                // Compress to JPEG with 0.7 quality
                                                                                resolve(canvas.toDataURL('image/jpeg', 0.7));
                                                                            };
                                                                            img.onerror = (err)=>reject(err);
                                                                        };
                                                                        reader.onerror = (err_0)=>reject(err_0);
                                                                    });
                                                                };
                                                                compressImage(file).then((compressedBase64)=>{
                                                                    const bg = {
                                                                        type: "image",
                                                                        value: compressedBase64,
                                                                        blur: 10,
                                                                        intensity: 0.45
                                                                    };
                                                                    try {
                                                                        localStorage.setItem(`chat-bg-${chat.id}`, JSON.stringify(bg));
                                                                        onUpdateChat?.({
                                                                            ...chat,
                                                                            chatBackground: bg
                                                                        });
                                                                    } catch (error) {
                                                                        if (error instanceof DOMException && error.name === 'QuotaExceededError') {
                                                                            alert('Image is too large to save. Please choose a smaller image.');
                                                                        } else {
                                                                            console.error("Failed to save wallpaper:", error);
                                                                            alert('Failed to save wallpaper.');
                                                                        }
                                                                    }
                                                                }).catch((err_1)=>{
                                                                    console.error("Compression failed:", err_1);
                                                                    alert('Failed to process image.');
                                                                });
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2 block",
                                                            children: "Textures"
                                                        }, void 0, false, {
                                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-5 gap-2 text-[8px] font-bold text-white uppercase text-center overflow-hidden",
                                                            children: [
                                                                {
                                                                    id: "paper",
                                                                    value: "/textures/paper.png"
                                                                },
                                                                {
                                                                    id: "noise",
                                                                    value: "/textures/noise.png"
                                                                },
                                                                {
                                                                    id: "fabric",
                                                                    value: "/textures/fabric.png"
                                                                },
                                                                {
                                                                    id: "grid",
                                                                    value: "/textures/grid.png"
                                                                },
                                                                {
                                                                    id: "carbon",
                                                                    value: "/textures/carbon.png"
                                                                }
                                                            ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        const bg_0 = {
                                                                            type: "texture",
                                                                            value: t.value,
                                                                            blur: 0,
                                                                            intensity: 0.15
                                                                        };
                                                                        try {
                                                                            localStorage.setItem(`chat-bg-${chat.id}`, JSON.stringify(bg_0));
                                                                            onUpdateChat?.({
                                                                                ...chat,
                                                                                chatBackground: bg_0
                                                                            });
                                                                        } catch (e_1) {
                                                                            console.error("Failed to save texture:", e_1);
                                                                            if (e_1.name === 'QuotaExceededError') alert("Storage full. Texture not saved.");
                                                                        }
                                                                    },
                                                                    className: `h-10 w-full rounded-xl border-2 bg-center bg-no-repeat transition-all hover:border-indigo-500 overflow-hidden relative flex items-center justify-center ${chat.chatBackground?.value === t.value ? 'border-indigo-500 shadow-lg scale-105' : 'border-zinc-100 dark:border-zinc-800 opacity-80 hover:opacity-100'}`,
                                                                    style: {
                                                                        backgroundImage: `url(${t.value})`,
                                                                        backgroundSize: '64px'
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "relative z-10 bg-black/20 backdrop-blur-[1px] px-1 rounded",
                                                                        children: t.id
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                        lineNumber: 291,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, t.id, false, {
                                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                    lineNumber: 270,
                                                                    columnNumber: 31
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                            lineNumber: 254,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 37
                                                }, this),
                                                chat.chatBackground && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4 pt-2 border-t border-zinc-100 dark:border-zinc-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-[10px] font-bold uppercase text-zinc-400",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Intensity"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                            lineNumber: 300,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                Math.round((chat.chatBackground.intensity ?? 0.15) * 100),
                                                                                "%"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                            lineNumber: 301,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                    lineNumber: 299,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "range",
                                                                    min: "0.05",
                                                                    max: "0.8",
                                                                    step: "0.01",
                                                                    value: chat.chatBackground.intensity ?? 0.15,
                                                                    onChange: (e_2)=>{
                                                                        const val = parseFloat(e_2.target.value);
                                                                        const newBg = {
                                                                            ...chat.chatBackground,
                                                                            intensity: val
                                                                        };
                                                                        try {
                                                                            localStorage.setItem(`chat-bg-${chat.id}`, JSON.stringify(newBg));
                                                                            onUpdateChat?.({
                                                                                ...chat,
                                                                                chatBackground: newBg
                                                                            });
                                                                        } catch (e_3) {
                                                                            // Silent fail for slider to avoid spamming alerts
                                                                            console.error("Failed to save intensity:", e_3);
                                                                        }
                                                                    },
                                                                    className: "w-full h-1.5 bg-zinc-100 rounded-lg appearance-none cursor-pointer dark:bg-zinc-800 accent-indigo-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                    lineNumber: 303,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                            lineNumber: 298,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-[10px] font-bold uppercase text-zinc-400",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Blur"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                            lineNumber: 324,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                chat.chatBackground.blur ?? 10,
                                                                                "px"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                            lineNumber: 325,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                    lineNumber: 323,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "range",
                                                                    min: "0",
                                                                    max: "40",
                                                                    step: "1",
                                                                    value: chat.chatBackground.blur ?? 10,
                                                                    onChange: (e_4)=>{
                                                                        const val_0 = parseInt(e_4.target.value);
                                                                        const newBg_0 = {
                                                                            ...chat.chatBackground,
                                                                            blur: val_0
                                                                        };
                                                                        try {
                                                                            localStorage.setItem(`chat-bg-${chat.id}`, JSON.stringify(newBg_0));
                                                                            onUpdateChat?.({
                                                                                ...chat,
                                                                                chatBackground: newBg_0
                                                                            });
                                                                        } catch (e_5) {
                                                                            // Silent fail for slider
                                                                            console.error("Failed to save blur:", e_5);
                                                                        }
                                                                    },
                                                                    className: "w-full h-1.5 bg-zinc-100 rounded-lg appearance-none cursor-pointer dark:bg-zinc-800 accent-indigo-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                    lineNumber: 327,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                            lineNumber: 322,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 61
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                            lineNumber: 172,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                    lineNumber: 158,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-4 border-t border-zinc-100 dark:border-zinc-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "mb-3 text-xs font-bold uppercase tracking-wider text-zinc-400",
                                            children: "Chat Rules"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                            lineNumber: 350,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between rounded-xl bg-white/50 p-3 border border-white/10 dark:bg-zinc-900/30 backdrop-blur-sm shadow-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-zinc-900 dark:text-white text-sm",
                                                        children: "Allow Forwarding"
                                                    }, void 0, false, {
                                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${chat.permissions?.allowForward ? 'bg-indigo-600' : 'bg-red-500'}`,
                                                        onClick: ()=>onUpdateChat?.({
                                                                ...chat,
                                                                permissions: {
                                                                    ...chat.permissions,
                                                                    allowForward: !chat.permissions?.allowForward
                                                                }
                                                            }),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${chat.permissions?.allowForward ? 'translate-x-4.5' : 'translate-x-0.5'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                            lineNumber: 361,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                lineNumber: 352,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                            lineNumber: 351,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                    lineNumber: 349,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-4 border-t border-zinc-100 dark:border-zinc-800",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full flex items-center justify-center gap-2 rounded-xl border border-red-200/50 bg-red-50/50 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-100/80 dark:border-red-900/30 dark:bg-red-950/20 dark:text-red-400 dark:hover:bg-red-950/40 transition-colors backdrop-blur-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                lineNumber: 369,
                                                columnNumber: 37
                                            }, this),
                                            "End-to-End Encrypted"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                        lineNumber: 368,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                    lineNumber: 367,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                            lineNumber: 131,
                            columnNumber: 50
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                    lineNumber: 114,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/RightPanel.tsx",
            lineNumber: 41,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/privlink/src/components/RightPanel.tsx",
        lineNumber: 38,
        columnNumber: 10
    }, this);
}
_s(RightPanel, "Wu7khE+Vvg/tRgMl+pkWHCEhpdM=");
_c = RightPanel;
function ProfileEmptyState(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "629e68807a09661a2910d4551475c02ad103fd25468d6657a68c8ff9c6d698a0") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "629e68807a09661a2910d4551475c02ad103fd25468d6657a68c8ff9c6d698a0";
    }
    const { type } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            title: "No media shared yet",
            subtitle: "Photos and videos will appear here",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "h-8 w-8 text-zinc-300 dark:text-zinc-600",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.5,
                    d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                    lineNumber: 399,
                    columnNumber: 125
                }, this)
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                lineNumber: 399,
                columnNumber: 13
            }, this)
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            title: "No documents",
            subtitle: "Files shared in chat will appear here",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "h-8 w-8 text-zinc-300 dark:text-zinc-600",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.5,
                    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                    lineNumber: 410,
                    columnNumber: 125
                }, this)
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                lineNumber: 410,
                columnNumber: 13
            }, this)
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            media: t1,
            docs: t2,
            links: {
                title: "No links shared",
                subtitle: "URLs shared in chat will appear here",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "h-8 w-8 text-zinc-300 dark:text-zinc-600",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                        lineNumber: 424,
                        columnNumber: 127
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                    lineNumber: 424,
                    columnNumber: 15
                }, this)
            }
        };
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const config = t3;
    const { title, subtitle, icon } = config[type];
    let t4;
    if ($[4] !== icon) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-50 dark:bg-zinc-800/50",
            children: icon
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/RightPanel.tsx",
            lineNumber: 439,
            columnNumber: 10
        }, this);
        $[4] = icon;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== title) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-medium text-zinc-900 dark:text-white",
            children: title
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/RightPanel.tsx",
            lineNumber: 447,
            columnNumber: 10
        }, this);
        $[6] = title;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== subtitle) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 max-w-[180px] text-xs text-zinc-500 dark:text-zinc-400",
            children: subtitle
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/RightPanel.tsx",
            lineNumber: 455,
            columnNumber: 10
        }, this);
        $[8] = subtitle;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t4 || $[11] !== t5 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center text-center opacity-60 py-8 px-4 transition-opacity duration-200 ease-in-out h-full animate-fade-in-up",
            children: [
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/RightPanel.tsx",
            lineNumber: 463,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    return t7;
}
_c1 = ProfileEmptyState;
var _c, _c1;
__turbopack_context__.k.register(_c, "RightPanel");
__turbopack_context__.k.register(_c1, "ProfileEmptyState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/privlink/src/components/AppNavigation.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "AppNavigation-module__l8Ui1G__active",
  "header": "AppNavigation-module__l8Ui1G__header",
  "inner": "AppNavigation-module__l8Ui1G__inner",
  "logoIcon": "AppNavigation-module__l8Ui1G__logoIcon",
  "menu": "AppNavigation-module__l8Ui1G__menu",
  "menuButton": "AppNavigation-module__l8Ui1G__menuButton",
  "menuButtonIcon": "AppNavigation-module__l8Ui1G__menuButtonIcon",
  "menuIndicator": "AppNavigation-module__l8Ui1G__menuIndicator",
  "open": "AppNavigation-module__l8Ui1G__open",
  "search": "AppNavigation-module__l8Ui1G__search",
  "searchIcon": "AppNavigation-module__l8Ui1G__searchIcon",
  "searchInput": "AppNavigation-module__l8Ui1G__searchInput",
  "sidebar": "AppNavigation-module__l8Ui1G__sidebar",
  "toggle": "AppNavigation-module__l8Ui1G__toggle",
});
}),
"[project]/privlink/src/components/AppNavigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/privlink/src/components/AppNavigation.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AppNavigation() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "5eaaca34938ffc0745f9fdd39182339e1c296115c4eab0bf7c70795b82831bd8") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5eaaca34938ffc0745f9fdd39182339e1c296115c4eab0bf7c70795b82831bd8";
    }
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] !== isOpen) {
        t0 = ({
            "AppNavigation[toggleOpen]": ()=>setIsOpen(!isOpen)
        })["AppNavigation[toggleOpen]"];
        $[1] = isOpen;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const toggleOpen = t0;
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                name: "Dashboard",
                id: "dashboard",
                iconPath: "M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z"
            },
            {
                name: "Messages",
                id: "messages",
                iconPath: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
            },
            {
                name: "Users",
                id: "users",
                iconPath: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
            },
            {
                name: "Projects",
                id: "projects",
                iconPath: "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"
            },
            {
                name: "Settings",
                id: "settings",
                iconPath: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"
            }
        ];
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const menuItems = t1;
    const t2 = `${__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar} ${isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].open : ""}`;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            fill: "currentColor",
            viewBox: "0 0 24 24",
            className: "w-5 h-5 ml-[2px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                lineNumber: 60,
                columnNumber: 84
            }, this)
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/AppNavigation.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== toggleOpen) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toggle} z-50`,
            type: "button",
            onClick: toggleOpen,
            children: t3
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/AppNavigation.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[5] = toggleOpen;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoIcon,
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M13 2L3 14H12L11 22L21 10H12L13 2Z",
                        fill: "#656aff",
                        stroke: "#656aff",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                        lineNumber: 75,
                        columnNumber: 164
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                    lineNumber: 75,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "BOLT UI"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                    lineNumber: 75,
                    columnNumber: 310
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/AppNavigation.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].search,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    className: `w-5 h-5 ${__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchIcon}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                        lineNumber: 82,
                        columnNumber: 129
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                    lineNumber: 82,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Search",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchInput
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                    lineNumber: 82,
                    columnNumber: 382
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/AppNavigation.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const t7 = `${activeIndex === 0 ? 0 : activeIndex * 56}px`;
    let t8;
    if ($[9] !== t7) {
        t8 = {
            "--top": t7
        };
        $[9] = t7;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    const t9 = t8;
    let t10;
    if ($[11] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuIndicator,
            style: t9
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/AppNavigation.tsx",
            lineNumber: 101,
            columnNumber: 11
        }, this);
        $[11] = t9;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] !== activeIndex || $[14] !== router) {
        t11 = menuItems.map({
            "AppNavigation[menuItems.map()]": (item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuButton} ${activeIndex === index ? __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`,
                    onClick: {
                        "AppNavigation[menuItems.map() > <button>.onClick]": ()=>{
                            setActiveIndex(index);
                            if (item.id === "settings") {
                                router.push("/settings");
                            }
                        }
                    }["AppNavigation[menuItems.map() > <button>.onClick]"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            className: `w-6 h-6 ${__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuButtonIcon}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: item.iconPath
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                                lineNumber: 117,
                                columnNumber: 155
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                            lineNumber: 117,
                            columnNumber: 63
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: item.name
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                            lineNumber: 117,
                            columnNumber: 187
                        }, this)
                    ]
                }, item.id, true, {
                    fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                    lineNumber: 110,
                    columnNumber: 58
                }, this)
        }["AppNavigation[menuItems.map()]"]);
        $[13] = activeIndex;
        $[14] = router;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== t10 || $[17] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inner,
            children: [
                t5,
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menu,
                    children: [
                        t10,
                        t11
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                    lineNumber: 127,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/AppNavigation.tsx",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[16] = t10;
        $[17] = t11;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] !== t12 || $[20] !== t2 || $[21] !== t4) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: t2,
            children: [
                t4,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/AppNavigation.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[19] = t12;
        $[20] = t2;
        $[21] = t4;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    return t13;
}
_s(AppNavigation, "nikDgYAhQPK6QPRWHCh/0kHnUqA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AppNavigation;
var _c;
__turbopack_context__.k.register(_c, "AppNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/privlink/src/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockChats",
    ()=>mockChats,
    "mockMessages",
    ()=>mockMessages
]);
const mockChats = [
    {
        id: "1",
        name: "General",
        lastMessage: "Welcome to PrivLink!",
        time: "10:23 AM",
        timestamp: new Date().toISOString(),
        unreadCount: 0,
        isOnline: true,
        interestScore: 85,
        isGroup: true
    },
    {
        id: "2",
        name: "Alice",
        lastMessage: "Hey, did you see the new design?",
        time: "昨天",
        timestamp: new Date(Date.now() - 86400000).toISOString(),
        unreadCount: 2,
        isOnline: false,
        interestScore: 92
    }
];
const mockMessages = {
    "1": [
        {
            id: "m1",
            type: 'text',
            content: "Welcome to PrivLink!",
            timestamp: "10:23 AM",
            isMe: false,
            status: 'read'
        }
    ],
    "2": [
        {
            id: "m2",
            type: 'text',
            content: "Hey, did you see the new design?",
            timestamp: "昨天",
            isMe: false,
            status: 'delivered'
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/privlink/src/hooks/useSocket.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSocket",
    ()=>useSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useSocket = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "5a0404c7d5979f343971f8aef1eefbc9a80b91f98a5a0d48abdf1ec3a87962e5") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5a0404c7d5979f343971f8aef1eefbc9a80b91f98a5a0d48abdf1ec3a87962e5";
    }
    const [socket, setSocket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ()=>{
            console.log("Initializing mock socket");
            const mockSocket = {
                on: _temp,
                off: _temp2,
                emit: _temp3,
                disconnect: _temp4
            };
            setSocket(mockSocket);
            setIsConnected(true);
            return _temp5;
        };
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] !== isConnected || $[4] !== socket) {
        t2 = {
            socket,
            isConnected
        };
        $[3] = isConnected;
        $[4] = socket;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
};
_s(useSocket, "QMiDLkz4HTcH977k6GWSjZyAdcs=");
function _temp(event, callback) {
    return console.log(`Mock socket listening for: ${event}`);
}
function _temp2(event_0) {
    return console.log(`Mock socket stopped listening for: ${event_0}`);
}
function _temp3(event_1, data) {
    return console.log(`Mock socket emitted: ${event_1}`, data);
}
function _temp4() {
    return console.log("Mock socket disconnected");
}
function _temp5() {
    console.log("Cleaning up mock socket");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/privlink/src/app/chat/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$ChatHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/components/ChatHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$MessageBubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/components/MessageBubble.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$MessageInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/components/MessageInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$RightPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/components/RightPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/components/AppNavigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$store$2f$useSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/store/useSettingsStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$hooks$2f$useSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/hooks/useSocket.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
// Hook: Track User Attention
function useAttention() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "0e1d3440474cb91c416f811b350dbb27e00a151b8434fe0cf282b65072bec490") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0e1d3440474cb91c416f811b350dbb27e00a151b8434fe0cf282b65072bec490";
    }
    const [isAttentionActive, setIsAttentionActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = Date.now();
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const lastActivityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t0);
    const attentionTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[2] !== isAttentionActive) {
        t1 = ({
            "useAttention[useEffect()]": ()=>{
                const handleActivity = {
                    "useAttention[useEffect() > handleActivity]": ()=>{
                        lastActivityRef.current = Date.now();
                        if (!isAttentionActive && document.hasFocus()) {
                            setIsAttentionActive(true);
                        }
                        if (attentionTimeoutRef.current) {
                            clearTimeout(attentionTimeoutRef.current);
                        }
                        attentionTimeoutRef.current = setTimeout({
                            "useAttention[useEffect() > handleActivity > setTimeout()]": ()=>{
                                setIsAttentionActive(false);
                            }
                        }["useAttention[useEffect() > handleActivity > setTimeout()]"], 2000);
                    }
                }["useAttention[useEffect() > handleActivity]"];
                const handleFocus = {
                    "useAttention[useEffect() > handleFocus]": ()=>handleActivity()
                }["useAttention[useEffect() > handleFocus]"];
                const handleBlur = {
                    "useAttention[useEffect() > handleBlur]": ()=>setIsAttentionActive(false)
                }["useAttention[useEffect() > handleBlur]"];
                window.addEventListener("mousemove", handleActivity);
                window.addEventListener("scroll", handleActivity);
                window.addEventListener("keydown", handleActivity);
                window.addEventListener("focus", handleFocus);
                window.addEventListener("blur", handleBlur);
                return ()=>{
                    window.removeEventListener("mousemove", handleActivity);
                    window.removeEventListener("scroll", handleActivity);
                    window.removeEventListener("keydown", handleActivity);
                    window.removeEventListener("focus", handleFocus);
                    window.removeEventListener("blur", handleBlur);
                };
            }
        })["useAttention[useEffect()]"];
        t2 = [
            isAttentionActive
        ];
        $[2] = isAttentionActive;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    return isAttentionActive;
}
_s(useAttention, "EdFVndi0B6fISlv927ZLL5rlQXc=");
;
function Home() {
    _s1();
    const [showRightPanel, setShowRightPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isIncognito, setIsIncognito] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGhostTyping, setIsGhostTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { updateProfile, silentRead, experiments } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$store$2f$useSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    // 🧪 Experiment: Neon Mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (experiments.neonMode) {
                document.body.classList.add('neon-mode');
            } else {
                document.body.classList.remove('neon-mode');
            }
        }
    }["Home.useEffect"], [
        experiments.neonMode
    ]);
    // 🧪 Experiment: Ghost Typing Simulation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!experiments.ghostTyping) {
                setIsGhostTyping(false);
                return;
            }
            // Randomly show typing every 10-25 seconds
            const loop = {
                "Home.useEffect.loop": ()=>{
                    const delay = Math.random() * 15000 + 10000;
                    setTimeout({
                        "Home.useEffect.loop": ()=>{
                            if (experiments.ghostTyping) {
                                setIsGhostTyping(true);
                                // Stop typing after 3-5 seconds
                                setTimeout({
                                    "Home.useEffect.loop": ()=>{
                                        setIsGhostTyping(false);
                                        loop(); // Schedule next
                                    }
                                }["Home.useEffect.loop"], Math.random() * 2000 + 3000);
                            }
                        }
                    }["Home.useEffect.loop"], delay);
                }
            }["Home.useEffect.loop"];
            loop();
            return ({
                "Home.useEffect": ()=>setIsGhostTyping(false)
            })["Home.useEffect"]; // Cleanup isn't perfect here but good enough for experiment
        }
    }["Home.useEffect"], [
        experiments.ghostTyping
    ]);
    // 🧪 Experiment: UI Sounds Helper
    const playInteractionSound = ()=>{
        if (!experiments.uiSounds) return;
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            // Subtle "pop"
            osc.frequency.setValueAtTime(600, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.05, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
            osc.start();
            osc.stop(ctx.currentTime + 0.1);
        } catch (e) {
            console.error("Audio play failed", e);
        }
    };
    // FIX: Blur input on zoom to prevent jump (Refined)
    // FIX: Blur input on zoom to prevent jump (Refined with VisualViewport)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            let zoomTimeout;
            const handleWheel = {
                "Home.useEffect.handleWheel": (e_0)=>{
                    if (e_0.ctrlKey) {
                        const active = document.activeElement;
                        if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) {
                            active.blur();
                        }
                    }
                }
            }["Home.useEffect.handleWheel"];
            const handleResize = {
                "Home.useEffect.handleResize": ()=>{
                    // If visual viewport scale > 1, it means we are zoomed in
                    if (window.visualViewport && window.visualViewport.scale > 1) {
                        const active_0 = document.activeElement;
                        if (active_0 && (active_0.tagName === 'INPUT' || active_0.tagName === 'TEXTAREA')) {
                            active_0.blur();
                        }
                    }
                }
            }["Home.useEffect.handleResize"];
            window.addEventListener("wheel", handleWheel, {
                passive: true
            });
            if (window.visualViewport) {
                window.visualViewport.addEventListener("resize", handleResize);
            }
            return ({
                "Home.useEffect": ()=>{
                    window.removeEventListener("wheel", handleWheel);
                    if (window.visualViewport) {
                        window.visualViewport.removeEventListener("resize", handleResize);
                    }
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            // Check for alias from Identity Page
            const alias = sessionStorage.getItem("alias");
            if (alias) {
                updateProfile({
                    displayName: alias,
                    username: alias.toLowerCase().replace(/\s+/g, '_')
                });
            // Clear it so it doesn't overwrite if the user later changes it manually and refreshes
            // sessionStorage.removeItem("alias"); // KEEP ALIAS for persistence logic (isMe checks, api calls)
            }
        }
    }["Home.useEffect"], [
        updateProfile
    ]);
    const [chats, setChats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeChatId, setActiveChatId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userPrefs, setUserPrefs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Persist Active Chat
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (activeChatId) {
                localStorage.setItem("privlink_last_chat_id", activeChatId);
            }
        }
    }["Home.useEffect"], [
        activeChatId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const stored = localStorage.getItem("userPrefs");
            if (stored) {
                try {
                    setUserPrefs(JSON.parse(stored));
                } catch (e_1) {
                    console.error("Failed to parse userPrefs", e_1);
                }
            }
        }
    }["Home.useEffect"], []);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Offline / Queue State
    const [isOnline, setIsOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [messageQueue, setMessageQueue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Reply State
    const [replyingTo, setReplyingTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleReply = (msg)=>{
        let text = msg.content;
        let mediaType;
        if (msg.type === 'image') {
            text = "Photo";
            mediaType = 'image';
        }
        if (msg.type === 'video') {
            text = "Video";
            mediaType = 'video';
        }
        if (msg.type === 'audio') {
            text = "Audio Message";
            mediaType = 'audio';
        }
        setReplyingTo({
            id: msg.id,
            sender: msg.isMe ? 'You' : activeChatId ? chats.find((c)=>c.id === activeChatId)?.name || 'Sender' : 'Sender',
            text,
            mediaType
        });
    };
    const cancelReply = ()=>setReplyingTo(null);
    const scrollToMessage = (messageId)=>{
        const el = document.querySelector(`[data-message-id="${messageId}"]`);
        if (el) {
            el.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            el.classList.add('bg-indigo-50/50', 'dark:bg-indigo-900/20', 'transition-colors', 'duration-500');
            setTimeout(()=>{
                el.classList.remove('bg-indigo-50/50', 'dark:bg-indigo-900/20');
            }, 1000);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            setIsMounted(true);
        }
    }["Home.useEffect"], []);
    // Socket Integration
    const { socket, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$hooks$2f$useSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSocket"])();
    // Join Chat Room
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (socket && activeChatId) {
                socket.emit('join_chat', activeChatId);
            }
        }
    }["Home.useEffect"], [
        socket,
        activeChatId
    ]);
    // Listen for Messages
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!socket) return;
            socket.on('receive_message', {
                "Home.useEffect": (data)=>{
                    // Only append if it's the current chat to avoid pollution
                    setMessages({
                        "Home.useEffect": (prev)=>{
                            if (prev.some({
                                "Home.useEffect": (m)=>m.id === data.id
                            }["Home.useEffect"])) return prev;
                            return [
                                ...prev,
                                data
                            ];
                        }
                    }["Home.useEffect"]);
                    // Clear typing indicator for sender
                    setTypingUsers({
                        "Home.useEffect": (prev_0)=>{
                            const next = new Set(prev_0);
                            next.delete(data.senderId || 'Unknown'); // Use ID or Name
                            return next;
                        }
                    }["Home.useEffect"]);
                }
            }["Home.useEffect"]);
            socket.on('user_typing', {
                "Home.useEffect": (data_0)=>{
                    setTypingUsers({
                        "Home.useEffect": (prev_1)=>{
                            const next_0 = new Set(prev_1);
                            next_0.add(data_0.username);
                            return next_0;
                        }
                    }["Home.useEffect"]);
                }
            }["Home.useEffect"]);
            socket.on('user_stop_typing', {
                "Home.useEffect": (data_1)=>{
                    setTypingUsers({
                        "Home.useEffect": (prev_2)=>{
                            const next_1 = new Set(prev_2);
                            next_1.delete(data_1.username);
                            return next_1;
                        }
                    }["Home.useEffect"]);
                }
            }["Home.useEffect"]);
            socket.on('reaction_added', {
                "Home.useEffect": (data_2)=>{
                    setMessages({
                        "Home.useEffect": (prev_3)=>prev_3.map({
                                "Home.useEffect": (msg_0)=>{
                                    if (msg_0.id === data_2.messageId) {
                                        const existingReaction = msg_0.reactions?.find({
                                            "Home.useEffect": (r)=>r.emoji === data_2.emoji
                                        }["Home.useEffect"]);
                                        const newReactions = existingReaction ? msg_0.reactions?.map({
                                            "Home.useEffect": (r_0)=>r_0.emoji === data_2.emoji ? {
                                                    ...r_0,
                                                    count: r_0.count + 1
                                                } : r_0
                                        }["Home.useEffect"]) : [
                                            ...msg_0.reactions || [],
                                            {
                                                emoji: data_2.emoji,
                                                count: 1
                                            }
                                        ];
                                        return {
                                            ...msg_0,
                                            reactions: newReactions
                                        };
                                    }
                                    return msg_0;
                                }
                            }["Home.useEffect"])
                    }["Home.useEffect"]);
                }
            }["Home.useEffect"]);
            return ({
                "Home.useEffect": ()=>{
                    socket.off('receive_message');
                    socket.off('user_typing');
                    socket.off('user_stop_typing');
                    socket.off('reaction_added');
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        socket,
        activeChatId
    ]);
    // Typing Logic
    const [typingUsers, setTypingUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const handleTyping = (isTyping)=>{
        if (!socket || !activeChatId) return;
        const username = sessionStorage.getItem("alias") || "Anonymous";
        if (isTyping) {
            socket.emit('typing_start', {
                chatId: activeChatId,
                username
            });
        } else {
            socket.emit('typing_stop', {
                chatId: activeChatId,
                username
            });
        }
    };
    // Load Chats from Mock Data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const loadChats = {
                "Home.useEffect.loadChats": ()=>{
                    try {
                        const data_3 = __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockChats"];
                        if (data_3 && data_3.length > 0) {
                            // Hydrate with local backgrounds
                            const hydratedChats = data_3.map({
                                "Home.useEffect.loadChats.hydratedChats": (chat)=>{
                                    const storedBg = localStorage.getItem(`chat-bg-${chat.id}`);
                                    if (storedBg) {
                                        try {
                                            return {
                                                ...chat,
                                                chatBackground: JSON.parse(storedBg)
                                            };
                                        } catch (e_3) {
                                            console.error("Failed to parse bg", e_3);
                                            return chat;
                                        }
                                    }
                                    return chat;
                                }
                            }["Home.useEffect.loadChats.hydratedChats"]);
                            setChats(hydratedChats);
                            const savedActiveId = localStorage.getItem("privlink_last_chat_id");
                            if (savedActiveId && data_3.some({
                                "Home.useEffect.loadChats": (c_0)=>c_0.id === savedActiveId
                            }["Home.useEffect.loadChats"])) {
                                setActiveChatId(savedActiveId);
                            } else {
                                setActiveChatId(data_3[0].id);
                            }
                        }
                    } catch (e_2) {
                        console.error("Mock Data Error (Chats):", e_2);
                        setChats([]);
                        setActiveChatId("");
                    }
                }
            }["Home.useEffect.loadChats"];
            loadChats();
        }
    }["Home.useEffect"], []);
    // Network Status & Queue Processing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            // 1. Initial State
            setIsOnline(navigator.onLine);
            // 2. Listeners
            const handleOnline = {
                "Home.useEffect.handleOnline": ()=>{
                    setIsOnline(true);
                // Queue processing removed for ephemeral mode
                }
            }["Home.useEffect.handleOnline"];
            const handleOffline = {
                "Home.useEffect.handleOffline": ()=>setIsOnline(false)
            }["Home.useEffect.handleOffline"];
            window.addEventListener('online', handleOnline);
            window.addEventListener('offline', handleOffline);
            return ({
                "Home.useEffect": ()=>{
                    window.removeEventListener('online', handleOnline);
                    window.removeEventListener('offline', handleOffline);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    const saveChats = (updatedChats)=>{
        setChats(updatedChats);
    // Persistence removed
    };
    const [isScrolledBottom, setIsScrolledBottom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isScrolledHeader, setIsScrolledHeader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Header calm-down state
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Attention Tracking
    const hasAttention = useAttention();
    // Screenshot heuristic state
    const lastBlurTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const chatsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(chats);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            chatsRef.current = chats;
        }
    }["Home.useEffect"], [
        chats
    ]);
    // Selective Read Logic
    const readUpto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[readUpto]": (messageId_0)=>{
            // Requirements for "Read":
            // 1. App must be focused & user active (hasAttention)
            // 2. Global "Silent Read" must be OFF
            // 3. One-way "Ghost Mode" must be OFF
            // Auto-Archive Logic (Run once on mount or when chats change significantly)
            const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;
            const now = Date.now();
            // Check if any visible chat is old enough to be archived
            // We do this check and update state if needed.
            // To prevent infinite loops, we should be careful. 
            // Best to do this check in a separate effect or initial load.
            // For now, let's put it in a separate effect that runs once on mount or when chat list is re-initialized.
            // Find current chat to check per-chat settings
            const currentChat = chatsRef.current.find({
                "Home.useCallback[readUpto].currentChat": (c_1)=>c_1.id === activeChatId
            }["Home.useCallback[readUpto].currentChat"]);
            if (!hasAttention || silentRead || currentChat?.isSilentRead || currentChat?.boundaryMode) return;
            setChats({
                "Home.useCallback[readUpto]": (prev_4)=>prev_4.map({
                        "Home.useCallback[readUpto]": (c_2)=>{
                            if (c_2.id === activeChatId && (c_2.unreadCount || 0) > 0) {
                                // Simple Mock: If we see the *last* message, clear unread count.
                                // In real app, we'd check index > readIndex.
                                const isLastMessage = messages.length > 0 && messages[messages.length - 1].id === messageId_0;
                                if (isLastMessage) {
                                    return {
                                        ...c_2,
                                        unreadCount: 0
                                    };
                                }
                            }
                            return c_2;
                        }
                    }["Home.useCallback[readUpto]"])
            }["Home.useCallback[readUpto]"]);
        }
    }["Home.useCallback[readUpto]"], [
        activeChatId,
        hasAttention,
        messages,
        silentRead
    ]);
    // Use IntersectionObserver to call readUpto for *visible* messages AND track Heatmap
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!scrollContainerRef.current) return;
            const entryTimes = new Map();
            const observer = new IntersectionObserver({
                "Home.useEffect": (entries)=>{
                    const now_0 = Date.now();
                    entries.forEach({
                        "Home.useEffect": (entry)=>{
                            const messageId_1 = entry.target.getAttribute("data-message-id");
                            if (!messageId_1) return;
                            if (entry.isIntersecting) {
                                // READ LOGIC
                                if (hasAttention) readUpto(messageId_1);
                                // HEATMAP START
                                if (!entryTimes.has(messageId_1)) {
                                    entryTimes.set(messageId_1, now_0);
                                }
                            } else {
                                // HEATMAP END
                                const startTime = entryTimes.get(messageId_1);
                                if (startTime) {
                                    const duration = now_0 - startTime;
                                    entryTimes.delete(messageId_1);
                                    // Calculate Heat Score
                                    setMessages({
                                        "Home.useEffect": (prev_5)=>prev_5.map({
                                                "Home.useEffect": (msg_1)=>{
                                                    if (msg_1.id === messageId_1) {
                                                        // Formula: Heat = Duration (ms) / Length (chars) * Factor
                                                        // Example: 2000ms / 20 chars = 100 heat. 
                                                        // Threshold ~ 50.
                                                        const length = msg_1.content?.length || 10;
                                                        const score = Math.min(100, Math.floor(duration / length * 0.5)); // Arbitrary factor
                                                        // Only update if significantly hotter or new
                                                        if (score > (msg_1.heatScore || 0)) {
                                                            return {
                                                                ...msg_1,
                                                                heatScore: score
                                                            };
                                                        }
                                                    }
                                                    return msg_1;
                                                }
                                            }["Home.useEffect"])
                                    }["Home.useEffect"]);
                                }
                            }
                        }
                    }["Home.useEffect"]);
                }
            }["Home.useEffect"], {
                root: scrollContainerRef.current,
                threshold: 0.8
            });
            // Note: We need to actually observe elements. Since we render messages in a map, 
            // we'll need to make sure we query them. 
            // For this iteration, we assume the MessageBubble container has data-message-id
            // We will add this observation logic in a separate effect or after render in a real app,
            // but for this file structure, we might need to select them manually:
            const userMessages = document.querySelectorAll("[data-message-id]");
            userMessages.forEach({
                "Home.useEffect": (el_0)=>observer.observe(el_0)
            }["Home.useEffect"]);
            return ({
                "Home.useEffect": ()=>observer.disconnect()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        readUpto,
        hasAttention,
        messages
    ]); // Re-run when messages change to observe new ones
    // Auto-scroll logic also triggers read if attention is present
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (isScrolledBottom) {
                scrollToBottom();
                if (messages.length > 0) {
                    readUpto(messages[messages.length - 1].id);
                }
            }
        }
    }["Home.useEffect"], [
        messages,
        isScrolledBottom,
        readUpto
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            // Screenshot Detection Heuristics
            const handleVisibilityChange = {
                "Home.useEffect.handleVisibilityChange": ()=>{
                    if (document.hidden) {
                        // Heuristic: If hidden shortly after blur, possible screenshot/recording setup or switching
                        console.warn("Visibility hidden - Possible capture event");
                    }
                }
            }["Home.useEffect.handleVisibilityChange"];
            const handleBlur = {
                "Home.useEffect.handleBlur": ()=>{
                    lastBlurTime.current = Date.now();
                    console.log("Window blurred");
                }
            }["Home.useEffect.handleBlur"];
            // Combined Heuristic (Example: Blur + Hidden within small window)
            const checkHeuristics = {
                "Home.useEffect.checkHeuristics": ()=>{
                    if (document.hidden && Date.now() - lastBlurTime.current < 500) {
                        console.warn("High Probability Screenshot/Capture detected");
                    }
                }
            }["Home.useEffect.checkHeuristics"];
            document.addEventListener("visibilitychange", handleVisibilityChange);
            window.addEventListener("blur", handleBlur);
            document.addEventListener("visibilitychange", checkHeuristics);
            return ({
                "Home.useEffect": ()=>{
                    document.removeEventListener("visibilitychange", handleVisibilityChange);
                    window.removeEventListener("blur", handleBlur);
                    document.removeEventListener("visibilitychange", checkHeuristics);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    // Auto-Archive Effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const THIRTY_DAYS_MS_0 = 30 * 24 * 60 * 60 * 1000;
            const now_1 = Date.now();
            setChats({
                "Home.useEffect": (prev_6)=>{
                    let hasChanges = false;
                    const updated = prev_6.map({
                        "Home.useEffect.updated": (chat_0)=>{
                            const chatTime = new Date(chat_0.timestamp || Date.now()).getTime();
                            // If older than 30 days and NOT already archived
                            if (now_1 - chatTime > THIRTY_DAYS_MS_0 && !chat_0.isArchived) {
                                hasChanges = true;
                                return {
                                    ...chat_0,
                                    isArchived: true
                                };
                            }
                            return chat_0;
                        }
                    }["Home.useEffect.updated"]);
                    return hasChanges ? updated : prev_6;
                }
            }["Home.useEffect"]);
        }
    }["Home.useEffect"], []); // Run once on mount
    // Get current chat details
    const activeChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[activeChat]": ()=>{
            // Safety check: chats might be empty initially before loading from local storage
            if (chats.length === 0) return null;
            const chat_1 = chats.find({
                "Home.useMemo[activeChat]": (c_3)=>c_3.id === activeChatId
            }["Home.useMemo[activeChat]"]) || chats[0];
            if (!chat_1) return null;
            // Dynamic Analysis: Calculate Psychometrics from real messages
            if (messages.length > 0) {
                // 1. Gravity (Initiation Balance)
                let myStarts = 0;
                let theirStarts = 0;
                let lastTime = 0;
                messages.forEach({
                    "Home.useMemo[activeChat]": (msg_2)=>{
                        const msgTime = new Date(msg_2.timestamp).getTime(); // Note: Mock timestamps are strings like "10:23 AM", so parsing might fail without date. 
                    // Mock timestamps are "10:23 AM". We need robust parsing or just assume basic flow for now.
                    // Let's rely on simple `isConsecutive` logic: A "Start" is a message that is NOT consecutive and follows a long gap.
                    // Since we don't have exact Dates in mock, we'll simpler heuristic:
                    // Who sent the *first* message of the day/session?
                    // Or ratio of total messages?
                    // Let's use Message Count Ratio for Gravity for now as it's robust.
                    // Gravity = Initiation. Let's approximation: Who sent more messages that started a block?
                    }
                }["Home.useMemo[activeChat]"]);
                // Simpler Gravity: Message Count Ratio (Who drives the volume?)
                const myMsgCount = messages.filter({
                    "Home.useMemo[activeChat]": (m_0)=>m_0.isMe
                }["Home.useMemo[activeChat]"]).length;
                const theirMsgCount = messages.length - myMsgCount;
                const ratio = myMsgCount / (messages.length || 1);
                let computedGravity = 'balanced';
                if (ratio > 0.65) computedGravity = 'one-sided-me';
                if (ratio < 0.35) computedGravity = 'one-sided-them';
                // 2. Persona (Time of Day - Last few messages)
                // Parse time string "10:23 AM"
                const times = messages.filter({
                    "Home.useMemo[activeChat].times": (m_1)=>!m_1.isMe
                }["Home.useMemo[activeChat].times"]).map({
                    "Home.useMemo[activeChat].times": (m_2)=>{
                        if (!m_2.timestamp || typeof m_2.timestamp !== 'string') return null;
                        const parts = m_2.timestamp.split(' ');
                        // If format is not "HH:MM AM/PM", try standard date parsing
                        if (parts.length < 2) {
                            const date = new Date(m_2.timestamp);
                            if (!isNaN(date.getTime())) {
                                return date.getHours();
                            }
                            return null;
                        }
                        const [time, modifier] = parts;
                        let [hours, mins] = time.split(':').map(Number);
                        if (modifier === 'PM' && hours < 12) hours += 12;
                        if (modifier === 'AM' && hours === 12) hours = 0;
                        return hours;
                    }
                }["Home.useMemo[activeChat].times"]).filter({
                    "Home.useMemo[activeChat].times": (h)=>h !== null
                }["Home.useMemo[activeChat].times"]);
                let computedPersona = 'balanced';
                if (times.length > 0) {
                    const avgHour = times.reduce({
                        "Home.useMemo[activeChat]": (a, b)=>a + b
                    }["Home.useMemo[activeChat]"], 0) / times.length;
                    if (avgHour >= 5 && avgHour < 12) computedPersona = 'morning';
                    if (avgHour >= 22 || avgHour < 4) computedPersona = 'night';
                }
                // 3. Energy Balance (Length of messages)
                const myLength = messages.filter({
                    "Home.useMemo[activeChat].myLength": (m_3)=>m_3.isMe
                }["Home.useMemo[activeChat].myLength"]).reduce({
                    "Home.useMemo[activeChat].myLength": (acc, m_4)=>acc + (m_4.content?.length || 0)
                }["Home.useMemo[activeChat].myLength"], 0);
                const theirLength = messages.filter({
                    "Home.useMemo[activeChat].theirLength": (m_5)=>!m_5.isMe
                }["Home.useMemo[activeChat].theirLength"]).reduce({
                    "Home.useMemo[activeChat].theirLength": (acc_0, m_6)=>acc_0 + (m_6.content?.length || 0)
                }["Home.useMemo[activeChat].theirLength"], 0);
                // Normalized score: -100 (They talk only) to +100 (I talk only)
                // 0 = Balanced
                const totalLen = myLength + theirLength || 1;
                const computedEnergy = Math.round((myLength - theirLength) / totalLen * 100);
                // 4. Conversation Weight (Depth/Seriousness)
                // Heuristic: Average message length. 
                // Short texts = Light (Weight ~20). Long paragraphs = Heavy (Weight ~80+).
                const avgLen = totalLen / messages.length;
                // Map 10 chars -> 10 weight, 200 chars -> 100 weight
                const computedWeight = Math.min(100, Math.max(10, Math.round(avgLen / 150 * 100)));
                return {
                    ...chat_1,
                    gravity: computedGravity,
                    persona: computedPersona,
                    energyBalance: computedEnergy,
                    conversationWeight: computedWeight
                };
            }
            return chat_1;
        }
    }["Home.useMemo[activeChat]"], [
        activeChatId,
        chats,
        messages
    ]);
    // Mark chat as seen with delay
    const markAsSeen = (chatId)=>{
        // Respect "Seen Silently" mode AND "Boundary Mode"
        const currentChat_0 = chats.find((c_4)=>c_4.id === chatId);
        if (silentRead || currentChat_0?.boundaryMode) return;
        // Human-like delay logic
        const delay_0 = Math.floor(Math.random() * 2500) + 1500;
        setTimeout(()=>{
            setChats((prev_7)=>prev_7.map((chat_2)=>chat_2.id === chatId && (chat_2.unreadCount || 0) > 0 ? {
                        ...chat_2,
                        unreadCount: 0
                    } : chat_2));
        }, delay_0);
    };
    const handleScroll = ()=>{
        const container = scrollContainerRef.current;
        if (container) {
            const { scrollTop, scrollHeight, clientHeight } = container;
            // Check if scrolled based on threshold for Header Micro-Motion
            setIsScrolledHeader(scrollTop > 40);
            // Check if scrolled to bottom with a small tolerance (e.g. 20px)
            const isBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 20;
            setIsScrolledBottom(isBottom);
        }
    };
    // Check if we should mark as seen when scroll position or active chat changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (activeChatId && isScrolledBottom) {
                markAsSeen(activeChatId);
            }
        }
    }["Home.useEffect"], [
        activeChatId,
        isScrolledBottom
    ]);
    // Load messages from Mock Data when active chat changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!activeChatId) return;
            const loadMessages = {
                "Home.useEffect.loadMessages": ()=>{
                    try {
                        const data_4 = __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockMessages"][activeChatId] || [];
                        const currentUser = sessionStorage.getItem("alias");
                        const processed = data_4.map({
                            "Home.useEffect.loadMessages.processed": (m_7)=>({
                                    ...m_7,
                                    isMe: m_7.isMe || m_7.senderId === currentUser,
                                    status: m_7.status || 'read'
                                })
                        }["Home.useEffect.loadMessages.processed"]);
                        setMessages(processed);
                    } catch (e_4) {
                        console.error("Mock Data Error (Messages):", e_4);
                        setMessages([]);
                    }
                }
            }["Home.useEffect.loadMessages"];
            loadMessages();
        }
    }["Home.useEffect"], [
        activeChatId
    ]);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    // Smarter Auto-Scroll Logic
    const prevMessagesLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(messages.length);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            // Only handle auto-scroll if new messages are added
            if (messages.length > prevMessagesLength.current) {
                const lastMessage = messages[messages.length - 1];
                // If I sent it, or if I was already at the bottom, scroll down
                if (lastMessage.isMe || isScrolledBottom) {
                    scrollToBottom();
                }
            }
            prevMessagesLength.current = messages.length;
        }
    }["Home.useEffect"], [
        messages,
        isScrolledBottom
    ]);
    // Handle chat selection with "Biometric Lock"
    const handleChatSelect = (chatId_0)=>{
        const chat_3 = chats.find((c_5)=>c_5.id === chatId_0);
        if (chat_3?.isLocked) {
            // Mock Biometric Auth
            const isAuthenticated = window.confirm(`🔐 "Biometric Scan" Required\n\nClick OK to simulate successful FaceID/TouchID.`);
            if (!isAuthenticated) return;
        }
        setActiveChatId(chatId_0);
        setShowRightPanel(true); // Ensure panel opens on mobile/tablet logic if applicable
    };
    const handleRetry = (id)=>{
        const msg_3 = messages.find((m_8)=>m_8.id === id);
        if (!msg_3) return;
        // Remove failed message
        setMessages((prev_8)=>prev_8.filter((m_9)=>m_9.id !== id));
        // Resend
        handleSendMessage(msg_3.content, msg_3.type, msg_3.duration, msg_3.confidenceScore, msg_3.thumbnailUrl, msg_3.style);
    };
    const handleReaction = (messageId_2, emoji)=>{
        if (!socket || !activeChatId) return;
        // Optimistic Update
        setMessages((prev_9)=>prev_9.map((msg_4)=>{
                if (msg_4.id === messageId_2) {
                    const existingReaction_0 = msg_4.reactions?.find((r_1)=>r_1.emoji === emoji);
                    const newReactions_0 = existingReaction_0 ? msg_4.reactions?.map((r_2)=>r_2.emoji === emoji ? {
                            ...r_2,
                            count: r_2.count + 1
                        } : r_2) : [
                        ...msg_4.reactions || [],
                        {
                            emoji,
                            count: 1
                        }
                    ];
                    return {
                        ...msg_4,
                        reactions: newReactions_0
                    };
                }
                return msg_4;
            }));
        socket.emit('add_reaction', {
            chatId: activeChatId,
            messageId: messageId_2,
            emoji
        });
    };
    const handleSetDisappearingDuration = (duration_0)=>{
        if (!activeChatId) return;
        // Local Update Only
        setChats((prev_10)=>prev_10.map((c_6)=>c_6.id === activeChatId ? {
                    ...c_6,
                    disappearingDuration: duration_0
                } : c_6));
    };
    const handleSendMessage = (content, type, duration_1, confidenceScore, thumbnailUrl, style, fileName, fileSize)=>{
        if (!activeChat) return;
        // 🧪 Experiment: Play Sound
        playInteractionSound();
        const newMessage = {
            id: Date.now().toString(),
            type: type,
            content: content,
            timestamp: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            }),
            isMe: true,
            duration: duration_1,
            thumbnailUrl: thumbnailUrl,
            isConsecutive: messages.length > 0 && messages[messages.length - 1].isMe,
            status: isOnline ? 'sent' : 'queued',
            confidenceScore: confidenceScore,
            fileName: fileName,
            fileSize: fileSize,
            style: style,
            replyTo: replyingTo ? {
                messageId: replyingTo.id,
                username: replyingTo.sender,
                text: replyingTo.text,
                mediaType: replyingTo.mediaType
            } : undefined
        };
        const updatedMessages = [
            ...messages,
            newMessage
        ];
        setMessages(updatedMessages);
        // Mock Persistence (Local state only)
        console.log("Message sent (Mock):", newMessage);
        setReplyingTo(null); // Clear reply state
        // UPDATE SIDEBAR ("You: ...")
        const updatedChats_0 = chats.map((c_7)=>{
            if (c_7.id === activeChatId) {
                let preview = content;
                if (isIncognito) preview = '🔒 Incognito Message';
                else if (type === 'image') preview = '📷 Photo';
                else if (type === 'video') preview = '📹 Video';
                else if (type === 'audio') preview = '🎤 Audio';
                return {
                    ...c_7,
                    lastMessage: `You: ${preview}`,
                    time: 'Just now',
                    unreadCount: 0
                };
            }
            return c_7;
        });
        // Sort active chat to top
        updatedChats_0.sort((a_0, b_0)=>a_0.id === activeChatId ? -1 : b_0.id === activeChatId ? 1 : 0);
        setChats(updatedChats_0);
        // Chat persistence removed
        if (!isOnline) {
            const updatedQueue = [
                ...messageQueue,
                newMessage
            ];
            setMessageQueue(updatedQueue);
            if (!isIncognito) {
                try {
                    localStorage.setItem('privlink_message_queue', JSON.stringify(updatedQueue));
                } catch (e_5) {
                    console.error("Failed to save queue:", e_5);
                }
            }
            return; // Stop here, don't simulate network events
        }
        // Simulate "Drift" reduction on interaction
        if (activeChat.driftLevel === 'high') {
            const updatedChats_1 = chats.map((c_8)=>c_8.id === activeChatId ? {
                    ...c_8,
                    driftLevel: 'medium'
                } : c_8);
        // In a real app, we'd update the store/state properly
        // setChats(updatedChats);
        }
        // Simulate backend "Delivered" event (Receiver Socket Connected)
        setTimeout(()=>{
            setMessages((prev_11)=>prev_11.map((m_10)=>m_10.id === newMessage.id ? {
                        ...m_10,
                        status: 'delivered',
                        deliveredAt: new Date().toISOString()
                    } : m_10));
            // Simulate "Read" event (Chat Open + Bottom Scroll + Delay)
            let baseDelay = activeChat.avgReadTime || 2000;
            if (activeChat.relationshipMode === 'work') baseDelay = 500; // Instant
            if (activeChat.relationshipMode === 'casual') baseDelay = 20000; // Slow
            // Add variance: +/- 20%
            const variance = baseDelay * 0.2;
            const adaptiveDelay = baseDelay + (Math.random() * variance * 2 - variance);
            setTimeout(()=>{
                setMessages((prev_12)=>prev_12.map((m_11)=>m_11.id === newMessage.id ? {
                            ...m_11,
                            status: 'read',
                            readAt: new Date().toISOString()
                        } : m_11));
            }, adaptiveDelay);
        }, 1500);
    };
    const handleCreateChat = (data_5)=>{
        const newChat = {
            id: Date.now().toString(),
            name: data_5.name,
            lastMessage: `Welcome to ${data_5.name}!`,
            time: 'Just now',
            unreadCount: 0,
            isOnline: true,
            avatarUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(data_5.name)}&background=random`,
            // @ts-ignore - straightforward for mock purposes
            type: data_5.type,
            isArchived: false
        };
        saveChats([
            newChat,
            ...chats
        ]);
        setActiveChatId(newChat.id);
        // Initialize empty messages for the new chat
        __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockMessages"][newChat.id] = [
            {
                id: 'welcome',
                type: 'text',
                content: `This is the start of your new ${data_5.type}: ${data_5.name}. ${data_5.description ? `\n\n${data_5.description}` : ''}`,
                timestamp: new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                }),
                isMe: false
            }
        ];
        setMessages(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockMessages"][newChat.id]);
    };
    const handleArchiveChat = (chatId_1)=>{
        const updated_0 = chats.map((chat_4)=>chat_4.id === chatId_1 ? {
                ...chat_4,
                isArchived: !chat_4.isArchived
            } : chat_4);
        saveChats(updated_0);
    };
    const handleDeleteChat = (chatId_2)=>{
        if (confirm("Are you sure you want to delete this chat?")) {
            const updated_1 = chats.filter((c_9)=>c_9.id !== chatId_2);
            saveChats(updated_1);
            if (activeChatId === chatId_2 && updated_1.length > 0) {
                setActiveChatId(updated_1[0].id);
            } else if (updated_1.length === 0) {
                setActiveChatId("");
            }
        }
    };
    if (!isMounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen w-full overflow-hidden bg-transparent text-zinc-900 dark:text-zinc-100 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex md:my-3 md:ml-3 md:h-[calc(100vh-24px)] rounded-[24px] overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/20 dark:border-white/10 z-20 shrink-0 bg-[#1c1b2a]/90 backdrop-blur-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/privlink/src/app/chat/page.tsx",
                        lineNumber: 986,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        chats: chats,
                        activeChatId: activeChatId,
                        onSelectChat: handleChatSelect,
                        onCreateChat: handleCreateChat,
                        onArchiveChat: handleArchiveChat,
                        onDeleteChat: handleDeleteChat
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/chat/page.tsx",
                        lineNumber: 987,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/app/chat/page.tsx",
                lineNumber: 985,
                columnNumber: 7
            }, this),
            !activeChat ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 items-center justify-center bg-background text-zinc-400",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Select a conversation to start chatting."
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/chat/page.tsx",
                    lineNumber: 992,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/privlink/src/app/chat/page.tsx",
                lineNumber: 991,
                columnNumber: 22
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: `flex flex-1 flex-col min-w-0 relative transition-colors duration-[120000ms] ease-linear
            ${activeChat.permissions?.allowScreenshot === false ? 'select-none decoration-clone' : ''}
            md:rounded-[18px] md:m-2 md:overflow-hidden shadow-sm
          `,
                onContextMenu: (e_6)=>{
                    if (activeChat.permissions?.allowSaveMedia === false) {
                        e_6.preventDefault();
                    }
                },
                style: {
                    backgroundColor: 'transparent' // Let the wallpaper/global background handle it
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 overflow-hidden pointer-events-none select-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute inset-0 transition-all duration-700 chat-background-pan ${activeChat.chatBackground?.type === 'texture' || !activeChat.chatBackground && userPrefs.chatBackground?.type === 'texture' ? 'bg-repeat' : 'bg-cover bg-center'}`,
                                style: {
                                    backgroundImage: activeChat.chatBackground?.type === 'image' || !activeChat.chatBackground && userPrefs.chatBackground?.type === 'image' ? `url("${activeChat.chatBackground?.value || userPrefs.chatBackground?.value}")` : activeChat.chatBackground?.type === 'texture' || !activeChat.chatBackground && userPrefs.chatBackground?.type === 'texture' ? `url("${activeChat.chatBackground?.value || userPrefs.chatBackground?.value}")` : activeChat.chatBackground?.type === 'gradient' || !activeChat.chatBackground && userPrefs.chatBackground?.type === 'gradient' ? activeChat.chatBackground?.value || userPrefs.chatBackground?.value : 'none',
                                    backgroundColor: activeChat.chatBackground?.type === 'color' || !activeChat.chatBackground && userPrefs.chatBackground?.type === 'color' ? activeChat.chatBackground?.value || userPrefs.chatBackground?.value : 'transparent',
                                    backgroundSize: activeChat.chatBackground?.type === 'texture' || !activeChat.chatBackground && userPrefs.chatBackground?.type === 'texture' ? 'auto' : undefined,
                                    filter: `blur(${activeChat.chatBackground?.blur ?? userPrefs.chatBackground?.blur ?? 0}px) saturate(1.1)`,
                                    opacity: activeChat.chatBackground?.intensity ?? userPrefs.chatBackground?.intensity ?? (activeChat.chatBackground?.type === 'texture' || userPrefs.chatBackground?.type === 'texture' ? 0.15 : 0.45)
                                }
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/app/chat/page.tsx",
                                lineNumber: 1005,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-white/20 dark:bg-black/30 mix-blend-overlay"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/app/chat/page.tsx",
                                lineNumber: 1012,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/app/chat/page.tsx",
                        lineNumber: 1004,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 z-0 transition-opacity duration-1000",
                        style: {
                            background: `radial-gradient(circle at center, transparent 50%, rgba(0,0,0, ${Math.max(0.02, (activeChat.conversationWeight || 0) * 0.004)}) 100%)`,
                            boxShadow: `inset 0 0 ${(activeChat.conversationWeight || 0) * 2}px rgba(0,0,0, ${(activeChat.conversationWeight || 0) * 0.0005})`
                        }
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/chat/page.tsx",
                        lineNumber: 1016,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$ChatHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onToggleRightPanel: ()=>setShowRightPanel(!showRightPanel),
                            name: activeChat.name,
                            avatarUrl: activeChat.avatarUrl,
                            isOnline: activeChat.isOnline,
                            driftLevel: activeChat.driftLevel,
                            interestScore: activeChat.interestScore,
                            interestTrend: activeChat.interestTrend,
                            gravity: activeChat.gravity,
                            persona: activeChat.persona,
                            energyBalance: activeChat.energyBalance,
                            isScrolled: isScrolledHeader,
                            isIncognito: isIncognito,
                            onToggleIncognito: ()=>setIsIncognito(!isIncognito),
                            isTyping: isGhostTyping,
                            disappearingDuration: activeChat.disappearingDuration,
                            onSetDisappearingDuration: handleSetDisappearingDuration
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/app/chat/page.tsx",
                            lineNumber: 1022,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/chat/page.tsx",
                        lineNumber: 1021,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: scrollContainerRef,
                        onScroll: handleScroll,
                        className: "chat-center relative z-10 flex-1 overflow-y-auto p-4 sm:p-6 no-scrollbar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-3xl space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400",
                                        children: "Today"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/app/chat/page.tsx",
                                        lineNumber: 1031,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/app/chat/page.tsx",
                                    lineNumber: 1030,
                                    columnNumber: 15
                                }, this),
                                messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center justify-center h-full text-zinc-500 mt-20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "No messages yet."
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/app/chat/page.tsx",
                                        lineNumber: 1037,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/app/chat/page.tsx",
                                    lineNumber: 1036,
                                    columnNumber: 40
                                }, this) : messages.map((msg_5)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-message-id": msg_5.id,
                                        className: `flex w-full ${msg_5.isMe ? 'justify-start' : 'justify-end'} ${msg_5.isConsecutive ? 'mt-1' : 'mt-4'}`,
                                        onContextMenu: (e_7)=>{
                                            e_7.preventDefault();
                                            handleReply(msg_5);
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$MessageBubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            type: msg_5.type || 'text',
                                            content: msg_5.content || '',
                                            timestamp: msg_5.timestamp,
                                            isMe: msg_5.isMe,
                                            duration: msg_5.duration,
                                            thumbnailUrl: msg_5.thumbnailUrl,
                                            fileName: msg_5.fileName,
                                            fileSize: msg_5.fileSize,
                                            reactions: msg_5.reactions,
                                            isConsecutive: msg_5.isConsecutive,
                                            status: msg_5.status,
                                            heatScore: msg_5.heatScore,
                                            confidenceScore: msg_5.confidenceScore,
                                            style: msg_5.style,
                                            replyTo: msg_5.replyTo,
                                            onReplyClick: scrollToMessage,
                                            onImageClick: (url)=>setSelectedImage(url),
                                            onRetry: ()=>handleRetry(msg_5.id),
                                            onReaction: (emoji_0)=>handleReaction(msg_5.id, emoji_0)
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/app/chat/page.tsx",
                                            lineNumber: 1042,
                                            columnNumber: 21
                                        }, this)
                                    }, msg_5.id, false, {
                                        fileName: "[project]/privlink/src/app/chat/page.tsx",
                                        lineNumber: 1038,
                                        columnNumber: 48
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: messagesEndRef
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/app/chat/page.tsx",
                                    lineNumber: 1044,
                                    columnNumber: 15
                                }, this),
                                (typingUsers.size > 0 || isGhostTyping) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-4 flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500 animate-pulse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 animate-bounce",
                                                    style: {
                                                        animationDelay: '0ms'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/app/chat/page.tsx",
                                                    lineNumber: 1049,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 animate-bounce",
                                                    style: {
                                                        animationDelay: '150ms'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/app/chat/page.tsx",
                                                    lineNumber: 1052,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 animate-bounce",
                                                    style: {
                                                        animationDelay: '300ms'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/app/chat/page.tsx",
                                                    lineNumber: 1055,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/privlink/src/app/chat/page.tsx",
                                            lineNumber: 1048,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: typingUsers.size > 0 ? `${Array.from(typingUsers).join(', ')} is typing...` : 'Someone is typing...'
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/app/chat/page.tsx",
                                            lineNumber: 1059,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/privlink/src/app/chat/page.tsx",
                                    lineNumber: 1047,
                                    columnNumber: 59
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/privlink/src/app/chat/page.tsx",
                            lineNumber: 1027,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/chat/page.tsx",
                        lineNumber: 1026,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$MessageInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onSendMessage: handleSendMessage,
                            boundaryMode: activeChat.boundaryMode,
                            isIncognito: isIncognito,
                            recentMessages: messages.filter((m_12)=>m_12.isMe).slice(-5).map((m_13)=>m_13.content || ""),
                            selfAlias: activeChat.selfAlias,
                            replyingTo: replyingTo,
                            onCancelReply: cancelReply,
                            onTyping: handleTyping
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/app/chat/page.tsx",
                            lineNumber: 1068,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/chat/page.tsx",
                        lineNumber: 1067,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/app/chat/page.tsx",
                lineNumber: 993,
                columnNumber: 18
            }, this),
            showRightPanel && activeChat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$RightPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                chat: activeChat,
                messages: messages,
                onImageClick: (url_0)=>setSelectedImage(url_0),
                onUpdateChat: (updated_2)=>{
                    const newChats = chats.map((c_10)=>c_10.id === updated_2.id ? updated_2 : c_10);
                    saveChats(newChats);
                // Also update local activeChat state if needed by reference (usually covered by hook or memo but safe to rely on chats prop)
                }
            }, void 0, false, {
                fileName: "[project]/privlink/src/app/chat/page.tsx",
                lineNumber: 1073,
                columnNumber: 40
            }, this),
            selectedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in",
                onClick: ()=>setSelectedImage(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectedImage(null),
                        className: "absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-8 h-8",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M6 18L18 6M6 6l12 12"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/app/chat/page.tsx",
                                lineNumber: 1083,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/app/chat/page.tsx",
                            lineNumber: 1082,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/chat/page.tsx",
                        lineNumber: 1081,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-[90vw] max-h-[90vh]",
                        onClick: (e_8)=>e_8.stopPropagation(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: selectedImage,
                            alt: "Full screen",
                            className: "max-h-[90vh] max-w-full object-contain rounded-lg shadow-2xl"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/app/chat/page.tsx",
                            lineNumber: 1089,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/chat/page.tsx",
                        lineNumber: 1088,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/app/chat/page.tsx",
                lineNumber: 1079,
                columnNumber: 25
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/privlink/src/app/chat/page.tsx",
        lineNumber: 983,
        columnNumber: 10
    }, this);
}
_s1(Home, "cAjP3g0uYlgdSu4mbaBI1CzGpFI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$store$2f$useSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$hooks$2f$useSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSocket"],
        useAttention
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=privlink_src_aaf7737a._.js.map