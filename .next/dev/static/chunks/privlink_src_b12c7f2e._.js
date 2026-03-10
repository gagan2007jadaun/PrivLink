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
"[project]/privlink/src/app/settings/Settings.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "avatar": "Settings-module__TrASrG__avatar",
  "btn": "Settings-module__TrASrG__btn",
  "btnSmall": "Settings-module__TrASrG__btnSmall",
  "profileInfo": "Settings-module__TrASrG__profileInfo",
  "profileRow": "Settings-module__TrASrG__profileRow",
  "settingItem": "Settings-module__TrASrG__settingItem",
  "settingsCard": "Settings-module__TrASrG__settingsCard",
  "settingsContainer": "Settings-module__TrASrG__settingsContainer",
  "settingsGrid": "Settings-module__TrASrG__settingsGrid",
  "settingsTitle": "Settings-module__TrASrG__settingsTitle",
  "slider": "Settings-module__TrASrG__slider",
  "switch": "Settings-module__TrASrG__switch",
});
}),
"[project]/privlink/src/app/settings/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Settings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$store$2f$useSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/store/useSettingsStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/privlink/src/app/settings/Settings.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function Settings() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(177);
    if ($[0] !== "506cb69b68911b30ca9b56ac8d47c23cb9a6be1e87a090457be7d954052258b0") {
        for(let $i = 0; $i < 177; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "506cb69b68911b30ca9b56ac8d47c23cb9a6be1e87a090457be7d954052258b0";
    }
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { silentRead, toggleSilentRead, profile, updateProfile, experiments, toggleExperiment } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$store$2f$useSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            displayName: "",
            username: "",
            bio: ""
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [editForm, setEditForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] !== profile) {
        t1 = ({
            "Settings[useEffect()]": ()=>{
                if (profile) {
                    setEditForm({
                        displayName: profile.displayName,
                        username: profile.username,
                        bio: profile.bio
                    });
                }
            }
        })["Settings[useEffect()]"];
        t2 = [
            profile
        ];
        $[2] = profile;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[5] !== editForm || $[6] !== updateProfile) {
        t3 = ({
            "Settings[handleSaveProfile]": ()=>{
                updateProfile(editForm);
                setIsEditing(false);
            }
        })["Settings[handleSaveProfile]"];
        $[5] = editForm;
        $[6] = updateProfile;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const handleSaveProfile = t3;
    let t4;
    if ($[8] !== updateProfile) {
        t4 = ({
            "Settings[handleImageUpload]": (e)=>{
                const file = e.target.files?.[0];
                if (!file) {
                    return;
                }
                if (file.size > 2097152) {
                    alert("Image is too large. Please choose an image under 2MB.");
                    return;
                }
                const reader = new FileReader();
                reader.onload = ()=>{
                    updateProfile({
                        avatarUrl: reader.result
                    });
                };
                reader.readAsDataURL(file);
            }
        })["Settings[handleImageUpload]"];
        $[8] = updateProfile;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const handleImageUpload = t4;
    let t5;
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "Settings[useEffect()]": ()=>{
                setMounted(true);
            }
        })["Settings[useEffect()]"];
        t6 = [];
        $[10] = t5;
        $[11] = t6;
    } else {
        t5 = $[10];
        t6 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    if (!mounted) {
        return null;
    }
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            chats: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockChats"],
            activeChatId: "",
            onSelectChat: _SettingsSidebarOnSelectChat
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 131,
            columnNumber: 10
        }, this);
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "flex h-16 shrink-0 items-center justify-between border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-sidebar px-6 shadow-sm backdrop-blur-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/chat",
                        className: "flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 dark:text-zinc-300 transition-colors hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "h-5 w-5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                lineNumber: 138,
                                columnNumber: 517
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                            lineNumber: 138,
                            columnNumber: 438
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                        lineNumber: 138,
                        columnNumber: 225
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold text-white",
                        children: "Settings"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                        lineNumber: 138,
                        columnNumber: 631
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/app/settings/page.tsx",
                lineNumber: 138,
                columnNumber: 184
            }, this)
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 138,
            columnNumber: 10
        }, this);
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsTitle,
            children: "Account Settings"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 145,
            columnNumber: 10
        }, this);
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            style: {
                marginBottom: 0
            },
            children: "Profile"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== handleSaveProfile || $[17] !== isEditing) {
        t11 = ({
            "Settings[<button>.onClick]": ()=>isEditing ? handleSaveProfile() : setIsEditing(true)
        })["Settings[<button>.onClick]"];
        $[16] = handleSaveProfile;
        $[17] = isEditing;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    const t12 = isEditing ? "Save Changes" : "Edit Profile";
    let t13;
    if ($[19] !== t11 || $[20] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-4",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: t11,
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn} ${__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnSmall}`,
                    children: t12
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 173,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[19] = t11;
        $[20] = t12;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] !== profile.avatarUrl || $[23] !== profile.displayName) {
        t14 = profile.avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: profile.avatarUrl,
            alt: "Profile",
            className: "h-full w-full object-cover"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 182,
            columnNumber: 31
        }, this) : profile.displayName.substring(0, 2).toUpperCase();
        $[22] = profile.avatarUrl;
        $[23] = profile.displayName;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    const t15 = `absolute inset-0 flex items-center justify-center bg-black/50 rounded-full cursor-pointer transition-opacity ${isEditing ? "opacity-0 group-hover:opacity-100" : "opacity-0 pointer-events-none"}`;
    const t16 = !isEditing;
    let t17;
    if ($[25] !== handleImageUpload || $[26] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "file",
            accept: "image/*",
            className: "hidden",
            disabled: t16,
            onChange: handleImageUpload
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[25] = handleImageUpload;
        $[26] = t16;
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    let t18;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-6 w-6 text-white",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            }, void 0, false, {
                fileName: "[project]/privlink/src/app/settings/page.tsx",
                lineNumber: 202,
                columnNumber: 101
            }, this)
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    let t19;
    if ($[29] !== t15 || $[30] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: t15,
            children: [
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[29] = t15;
        $[30] = t17;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    if ($[32] !== t14 || $[33] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar} relative group overflow-hidden cursor-pointer shrink-0`,
            children: [
                t14,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[32] = t14;
        $[33] = t19;
        $[34] = t20;
    } else {
        t20 = $[34];
    }
    let t21;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-24 text-xs font-bold text-zinc-400",
            children: "DISPLAY NAME"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[35] = t21;
    } else {
        t21 = $[35];
    }
    let t22;
    if ($[36] !== editForm) {
        t22 = ({
            "Settings[<input>.onChange]": (e_0)=>setEditForm({
                    ...editForm,
                    displayName: e_0.target.value
                })
        })["Settings[<input>.onChange]"];
        $[36] = editForm;
        $[37] = t22;
    } else {
        t22 = $[37];
    }
    const t23 = !isEditing;
    const t24 = !isEditing ? "opacity-60" : "";
    let t25;
    if ($[38] !== editForm.displayName || $[39] !== t22 || $[40] !== t23 || $[41] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingItem,
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: editForm.displayName,
                    onChange: t22,
                    disabled: t23,
                    className: t24
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 249,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[38] = editForm.displayName;
        $[39] = t22;
        $[40] = t23;
        $[41] = t24;
        $[42] = t25;
    } else {
        t25 = $[42];
    }
    let t26;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-24 text-xs font-bold text-zinc-400",
            children: "USERNAME"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 260,
            columnNumber: 11
        }, this);
        $[43] = t26;
    } else {
        t26 = $[43];
    }
    let t27;
    if ($[44] !== editForm) {
        t27 = ({
            "Settings[<input>.onChange]": (e_1)=>setEditForm({
                    ...editForm,
                    username: e_1.target.value
                })
        })["Settings[<input>.onChange]"];
        $[44] = editForm;
        $[45] = t27;
    } else {
        t27 = $[45];
    }
    const t28 = !isEditing;
    const t29 = !isEditing ? "opacity-60" : "";
    let t30;
    if ($[46] !== editForm.username || $[47] !== t27 || $[48] !== t28 || $[49] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingItem,
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: editForm.username,
                    onChange: t27,
                    disabled: t28,
                    className: t29
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 282,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[46] = editForm.username;
        $[47] = t27;
        $[48] = t28;
        $[49] = t29;
        $[50] = t30;
    } else {
        t30 = $[50];
    }
    let t31;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-24 text-xs font-bold text-zinc-400",
            children: "BIO"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 293,
            columnNumber: 11
        }, this);
        $[51] = t31;
    } else {
        t31 = $[51];
    }
    let t32;
    if ($[52] !== editForm) {
        t32 = ({
            "Settings[<input>.onChange]": (e_2)=>setEditForm({
                    ...editForm,
                    bio: e_2.target.value
                })
        })["Settings[<input>.onChange]"];
        $[52] = editForm;
        $[53] = t32;
    } else {
        t32 = $[53];
    }
    const t33 = !isEditing;
    const t34 = !isEditing ? "opacity-60" : "";
    let t35;
    if ($[54] !== editForm.bio || $[55] !== t32 || $[56] !== t33 || $[57] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingItem,
            children: [
                t31,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: editForm.bio,
                    onChange: t32,
                    disabled: t33,
                    className: t34
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 315,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[54] = editForm.bio;
        $[55] = t32;
        $[56] = t33;
        $[57] = t34;
        $[58] = t35;
    } else {
        t35 = $[58];
    }
    let t36;
    if ($[59] !== t25 || $[60] !== t30 || $[61] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileInfo} min-w-0`,
            children: [
                t25,
                t30,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[59] = t25;
        $[60] = t30;
        $[61] = t35;
        $[62] = t36;
    } else {
        t36 = $[62];
    }
    let t37;
    if ($[63] !== t20 || $[64] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileRow,
            children: [
                t20,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 336,
            columnNumber: 11
        }, this);
        $[63] = t20;
        $[64] = t36;
        $[65] = t37;
    } else {
        t37 = $[65];
    }
    let t38;
    if ($[66] !== t13 || $[67] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsCard,
            children: [
                t13,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 345,
            columnNumber: 11
        }, this);
        $[66] = t13;
        $[67] = t37;
        $[68] = t38;
    } else {
        t38 = $[68];
    }
    let t39;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            children: "Account Security"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 354,
            columnNumber: 11
        }, this);
        $[69] = t39;
    } else {
        t39 = $[69];
    }
    let t40;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs font-bold text-zinc-400 mb-2 mt-2 uppercase",
            children: "Recovery Email"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 361,
            columnNumber: 11
        }, this);
        $[70] = t40;
    } else {
        t40 = $[70];
    }
    const t41 = profile.email || "";
    let t42;
    if ($[71] !== updateProfile) {
        t42 = ({
            "Settings[<input>.onChange]": (e_3)=>updateProfile({
                    email: e_3.target.value
                })
        })["Settings[<input>.onChange]"];
        $[71] = updateProfile;
        $[72] = t42;
    } else {
        t42 = $[72];
    }
    let t43;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = {
            backgroundColor: "var(--settings-input-bg)",
            color: "var(--settings-text)"
        };
        $[73] = t43;
    } else {
        t43 = $[73];
    }
    let t44;
    if ($[74] !== t41 || $[75] !== t42) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "email",
            value: t41,
            onChange: t42,
            placeholder: "your@email.com",
            className: "border-none p-2.5 rounded-lg flex-1 outline-none focus:ring-1 focus:ring-[#6c5cff]",
            style: t43
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 391,
            columnNumber: 11
        }, this);
        $[74] = t41;
        $[75] = t42;
        $[76] = t44;
    } else {
        t44 = $[76];
    }
    let t45;
    if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn,
            children: "Verify"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 400,
            columnNumber: 11
        }, this);
        $[77] = t45;
    } else {
        t45 = $[77];
    }
    let t46;
    if ($[78] !== t44) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: [
                t44,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 407,
            columnNumber: 11
        }, this);
        $[78] = t44;
        $[79] = t46;
    } else {
        t46 = $[79];
    }
    let t47;
    if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-[10px] text-zinc-500",
            children: "Used for account recovery only. Never shared."
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 415,
            columnNumber: 11
        }, this);
        $[80] = t47;
    } else {
        t47 = $[80];
    }
    let t48;
    if ($[81] !== t46) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4",
            children: [
                t40,
                t46,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 422,
            columnNumber: 11
        }, this);
        $[81] = t46;
        $[82] = t48;
    } else {
        t48 = $[82];
    }
    let t49;
    if ($[83] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-px bg-zinc-800 my-4"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 430,
            columnNumber: 11
        }, this);
        $[83] = t49;
    } else {
        t49 = $[83];
    }
    let t50;
    if ($[84] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-bold",
                    children: "Password"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 437,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-zinc-500",
                    children: "Last changed 3 months ago"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 437,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 437,
            columnNumber: 11
        }, this);
        $[84] = t50;
    } else {
        t50 = $[84];
    }
    let t51;
    if ($[85] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingItem,
            children: [
                t50,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn} ${__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnSmall}`,
                    style: {
                        background: "#444"
                    },
                    children: "Change"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 444,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 444,
            columnNumber: 11
        }, this);
        $[85] = t51;
    } else {
        t51 = $[85];
    }
    let t52;
    if ($[86] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-bold",
                    children: "Two-Factor Authentication"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 453,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-zinc-500",
                    children: "Add an extra layer of security"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 453,
                    columnNumber: 74
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 453,
            columnNumber: 11
        }, this);
        $[86] = t52;
    } else {
        t52 = $[86];
    }
    let t53;
    if ($[87] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingItem,
            children: [
                t52,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switch,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                            lineNumber: 460,
                            columnNumber: 85
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slider
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                            lineNumber: 460,
                            columnNumber: 110
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 460,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 460,
            columnNumber: 11
        }, this);
        $[87] = t53;
    } else {
        t53 = $[87];
    }
    let t54;
    if ($[88] !== t48) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsCard,
            children: [
                t39,
                t48,
                t49,
                t51,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 467,
            columnNumber: 11
        }, this);
        $[88] = t48;
        $[89] = t54;
    } else {
        t54 = $[89];
    }
    let t55;
    let t56;
    if ($[90] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            children: "Experimental Labs 🧪"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 476,
            columnNumber: 11
        }, this);
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-zinc-500 mb-4 -mt-2",
            children: "Test potential new features. Unstable."
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 477,
            columnNumber: 11
        }, this);
        $[90] = t55;
        $[91] = t56;
    } else {
        t55 = $[90];
        t56 = $[91];
    }
    let t57;
    if ($[92] === Symbol.for("react.memo_cache_sentinel")) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-bold",
                    children: "Neon Mode"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 486,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-zinc-500",
                    children: "Add a futuristic glow"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 486,
                    columnNumber: 58
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 486,
            columnNumber: 11
        }, this);
        $[92] = t57;
    } else {
        t57 = $[92];
    }
    const t58 = experiments?.neonMode;
    let t59;
    if ($[93] !== toggleExperiment) {
        t59 = ({
            "Settings[<input>.onChange]": ()=>toggleExperiment("neonMode")
        })["Settings[<input>.onChange]"];
        $[93] = toggleExperiment;
        $[94] = t59;
    } else {
        t59 = $[94];
    }
    let t60;
    if ($[95] !== t58 || $[96] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "checkbox",
            checked: t58,
            onChange: t59
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 504,
            columnNumber: 11
        }, this);
        $[95] = t58;
        $[96] = t59;
        $[97] = t60;
    } else {
        t60 = $[97];
    }
    let t61;
    if ($[98] === Symbol.for("react.memo_cache_sentinel")) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slider
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 513,
            columnNumber: 11
        }, this);
        $[98] = t61;
    } else {
        t61 = $[98];
    }
    let t62;
    if ($[99] !== t60) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingItem,
            children: [
                t57,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switch,
                    children: [
                        t60,
                        t61
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 520,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 520,
            columnNumber: 11
        }, this);
        $[99] = t60;
        $[100] = t62;
    } else {
        t62 = $[100];
    }
    let t63;
    if ($[101] === Symbol.for("react.memo_cache_sentinel")) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-bold",
                    children: "UI Sounds"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 528,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-zinc-500",
                    children: "Play subtle sounds"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 528,
                    columnNumber: 58
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 528,
            columnNumber: 11
        }, this);
        $[101] = t63;
    } else {
        t63 = $[101];
    }
    const t64 = experiments?.uiSounds;
    let t65;
    if ($[102] !== toggleExperiment) {
        t65 = ({
            "Settings[<input>.onChange]": ()=>toggleExperiment("uiSounds")
        })["Settings[<input>.onChange]"];
        $[102] = toggleExperiment;
        $[103] = t65;
    } else {
        t65 = $[103];
    }
    let t66;
    if ($[104] !== t64 || $[105] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "checkbox",
            checked: t64,
            onChange: t65
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 546,
            columnNumber: 11
        }, this);
        $[104] = t64;
        $[105] = t65;
        $[106] = t66;
    } else {
        t66 = $[106];
    }
    let t67;
    if ($[107] === Symbol.for("react.memo_cache_sentinel")) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slider
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 555,
            columnNumber: 11
        }, this);
        $[107] = t67;
    } else {
        t67 = $[107];
    }
    let t68;
    if ($[108] !== t66) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingItem,
            children: [
                t63,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switch,
                    children: [
                        t66,
                        t67
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 562,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 562,
            columnNumber: 11
        }, this);
        $[108] = t66;
        $[109] = t68;
    } else {
        t68 = $[109];
    }
    let t69;
    if ($[110] === Symbol.for("react.memo_cache_sentinel")) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-bold",
                    children: "Ghost Typing"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 570,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-zinc-500",
                    children: "Simulate typing indicators"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 570,
                    columnNumber: 61
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 570,
            columnNumber: 11
        }, this);
        $[110] = t69;
    } else {
        t69 = $[110];
    }
    const t70 = experiments?.ghostTyping;
    let t71;
    if ($[111] !== toggleExperiment) {
        t71 = ({
            "Settings[<input>.onChange]": ()=>toggleExperiment("ghostTyping")
        })["Settings[<input>.onChange]"];
        $[111] = toggleExperiment;
        $[112] = t71;
    } else {
        t71 = $[112];
    }
    let t72;
    if ($[113] !== t70 || $[114] !== t71) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "checkbox",
            checked: t70,
            onChange: t71
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 588,
            columnNumber: 11
        }, this);
        $[113] = t70;
        $[114] = t71;
        $[115] = t72;
    } else {
        t72 = $[115];
    }
    let t73;
    if ($[116] === Symbol.for("react.memo_cache_sentinel")) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slider
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 597,
            columnNumber: 11
        }, this);
        $[116] = t73;
    } else {
        t73 = $[116];
    }
    let t74;
    if ($[117] !== t72) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingItem,
            children: [
                t69,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switch,
                    children: [
                        t72,
                        t73
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 604,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 604,
            columnNumber: 11
        }, this);
        $[117] = t72;
        $[118] = t74;
    } else {
        t74 = $[118];
    }
    let t75;
    if ($[119] !== t62 || $[120] !== t68 || $[121] !== t74) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsCard,
            children: [
                t55,
                t56,
                t62,
                t68,
                t74
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 612,
            columnNumber: 11
        }, this);
        $[119] = t62;
        $[120] = t68;
        $[121] = t74;
        $[122] = t75;
    } else {
        t75 = $[122];
    }
    let t76;
    if ($[123] === Symbol.for("react.memo_cache_sentinel")) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            children: "Privacy"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 622,
            columnNumber: 11
        }, this);
        $[123] = t76;
    } else {
        t76 = $[123];
    }
    let t77;
    if ($[124] === Symbol.for("react.memo_cache_sentinel")) {
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-bold",
                    children: "Seen Silently Mode"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 629,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-zinc-500",
                    children: "Read messages without receipts"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 629,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 629,
            columnNumber: 11
        }, this);
        $[124] = t77;
    } else {
        t77 = $[124];
    }
    let t78;
    if ($[125] !== silentRead || $[126] !== toggleSilentRead) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "checkbox",
            checked: silentRead,
            onChange: toggleSilentRead
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 636,
            columnNumber: 11
        }, this);
        $[125] = silentRead;
        $[126] = toggleSilentRead;
        $[127] = t78;
    } else {
        t78 = $[127];
    }
    let t79;
    if ($[128] === Symbol.for("react.memo_cache_sentinel")) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slider
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 645,
            columnNumber: 11
        }, this);
        $[128] = t79;
    } else {
        t79 = $[128];
    }
    let t80;
    if ($[129] !== t78) {
        t80 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingItem,
            children: [
                t77,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switch,
                    children: [
                        t78,
                        t79
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 652,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 652,
            columnNumber: 11
        }, this);
        $[129] = t78;
        $[130] = t80;
    } else {
        t80 = $[130];
    }
    let t81;
    let t82;
    if ($[131] === Symbol.for("react.memo_cache_sentinel")) {
        t81 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-px bg-zinc-800 my-4"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 661,
            columnNumber: 11
        }, this);
        t82 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "mb-4",
            children: "Appearance"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 662,
            columnNumber: 11
        }, this);
        $[131] = t81;
        $[132] = t82;
    } else {
        t81 = $[131];
        t82 = $[132];
    }
    let t83;
    if ($[133] !== setTheme) {
        t83 = ({
            "Settings[<button>.onClick]": ()=>setTheme("light")
        })["Settings[<button>.onClick]"];
        $[133] = setTheme;
        $[134] = t83;
    } else {
        t83 = $[134];
    }
    const t84 = theme === "light" ? "#6c5cff" : "var(--settings-input-bg)";
    const t85 = theme === "light" ? "white" : "var(--settings-text)";
    let t86;
    if ($[135] !== t84 || $[136] !== t85) {
        t86 = {
            background: t84,
            color: t85
        };
        $[135] = t84;
        $[136] = t85;
        $[137] = t86;
    } else {
        t86 = $[137];
    }
    let t87;
    if ($[138] !== t83 || $[139] !== t86) {
        t87 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t83,
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn} flex-1 transition-all`,
            style: t86,
            children: "Light"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 695,
            columnNumber: 11
        }, this);
        $[138] = t83;
        $[139] = t86;
        $[140] = t87;
    } else {
        t87 = $[140];
    }
    let t88;
    if ($[141] !== setTheme) {
        t88 = ({
            "Settings[<button>.onClick]": ()=>setTheme("dark")
        })["Settings[<button>.onClick]"];
        $[141] = setTheme;
        $[142] = t88;
    } else {
        t88 = $[142];
    }
    const t89 = theme === "dark" ? "#6c5cff" : "var(--settings-input-bg)";
    const t90 = theme === "dark" ? "white" : "var(--settings-text)";
    let t91;
    if ($[143] !== t89 || $[144] !== t90) {
        t91 = {
            background: t89,
            color: t90
        };
        $[143] = t89;
        $[144] = t90;
        $[145] = t91;
    } else {
        t91 = $[145];
    }
    let t92;
    if ($[146] !== t88 || $[147] !== t91) {
        t92 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t88,
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn} flex-1 transition-all`,
            style: t91,
            children: "Dark"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 728,
            columnNumber: 11
        }, this);
        $[146] = t88;
        $[147] = t91;
        $[148] = t92;
    } else {
        t92 = $[148];
    }
    let t93;
    if ($[149] !== setTheme) {
        t93 = ({
            "Settings[<button>.onClick]": ()=>setTheme("system")
        })["Settings[<button>.onClick]"];
        $[149] = setTheme;
        $[150] = t93;
    } else {
        t93 = $[150];
    }
    const t94 = theme === "system" ? "#6c5cff" : "var(--settings-input-bg)";
    const t95 = theme === "system" ? "white" : "var(--settings-text)";
    let t96;
    if ($[151] !== t94 || $[152] !== t95) {
        t96 = {
            background: t94,
            color: t95
        };
        $[151] = t94;
        $[152] = t95;
        $[153] = t96;
    } else {
        t96 = $[153];
    }
    let t97;
    if ($[154] !== t93 || $[155] !== t96) {
        t97 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t93,
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn} flex-1 transition-all`,
            style: t96,
            children: "System"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 761,
            columnNumber: 11
        }, this);
        $[154] = t93;
        $[155] = t96;
        $[156] = t97;
    } else {
        t97 = $[156];
    }
    let t98;
    if ($[157] !== t87 || $[158] !== t92 || $[159] !== t97) {
        t98 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4",
            children: [
                t87,
                t92,
                t97
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 770,
            columnNumber: 11
        }, this);
        $[157] = t87;
        $[158] = t92;
        $[159] = t97;
        $[160] = t98;
    } else {
        t98 = $[160];
    }
    let t99;
    if ($[161] !== t80 || $[162] !== t98) {
        t99 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsCard,
            children: [
                t76,
                t80,
                t81,
                t82,
                t98
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 780,
            columnNumber: 11
        }, this);
        $[161] = t80;
        $[162] = t98;
        $[163] = t99;
    } else {
        t99 = $[163];
    }
    let t100;
    if ($[164] === Symbol.for("react.memo_cache_sentinel")) {
        t100 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsCard,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: "Notifications"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 789,
                    columnNumber: 49
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationToggle, {
                    title: "Direct Messages",
                    desc: "Receive notifications for direct messages",
                    defaultChecked: true
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 789,
                    columnNumber: 71
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationToggle, {
                    title: "Group Mentions",
                    desc: "Get notified when you're mentioned",
                    defaultChecked: true
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 789,
                    columnNumber: 188
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationToggle, {
                    title: "Email Notifications",
                    desc: "Receive a daily digest of missed messages",
                    defaultChecked: false
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 789,
                    columnNumber: 297
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 789,
            columnNumber: 12
        }, this);
        $[164] = t100;
    } else {
        t100 = $[164];
    }
    let t101;
    if ($[165] === Symbol.for("react.memo_cache_sentinel")) {
        t101 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsCard,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: "Security & Backup"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 796,
                    columnNumber: 49
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackupManager, {}, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 796,
                    columnNumber: 79
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 796,
            columnNumber: 12
        }, this);
        $[165] = t101;
    } else {
        t101 = $[165];
    }
    let t102;
    let t103;
    if ($[166] === Symbol.for("react.memo_cache_sentinel")) {
        t102 = {
            border: "1px solid rgba(239, 68, 68, 0.2)"
        };
        t103 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-red-500",
            children: "Danger Zone"
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 807,
            columnNumber: 12
        }, this);
        $[166] = t102;
        $[167] = t103;
    } else {
        t102 = $[166];
        t103 = $[167];
    }
    let t104;
    if ($[168] === Symbol.for("react.memo_cache_sentinel")) {
        t104 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-bold",
                    children: "Log Out"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 816,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-zinc-500",
                    children: "End your session on this device"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 816,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 816,
            columnNumber: 12
        }, this);
        $[168] = t104;
    } else {
        t104 = $[168];
    }
    let t105;
    if ($[169] === Symbol.for("react.memo_cache_sentinel")) {
        t105 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingItem,
            children: [
                t104,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: _SettingsButtonOnClick,
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn} ${__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnSmall}`,
                    style: {
                        background: "#444"
                    },
                    children: "Log Out"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 823,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 823,
            columnNumber: 12
        }, this);
        $[169] = t105;
    } else {
        t105 = $[169];
    }
    let t106;
    if ($[170] === Symbol.for("react.memo_cache_sentinel")) {
        t106 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-bold text-red-500",
                    children: "Delete Account"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 832,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-red-500/70",
                    children: "Permanently delete your account"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 832,
                    columnNumber: 77
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 832,
            columnNumber: 12
        }, this);
        $[170] = t106;
    } else {
        t106 = $[170];
    }
    let t107;
    if ($[171] === Symbol.for("react.memo_cache_sentinel")) {
        t107 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsCard,
            style: t102,
            children: [
                t103,
                t105,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingItem,
                    children: [
                        t106,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: _SettingsButtonOnClick2,
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn} ${__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnSmall}`,
                            style: {
                                background: "#ef4444"
                            },
                            children: "Delete Account"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                            lineNumber: 839,
                            columnNumber: 116
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 839,
                    columnNumber: 74
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 839,
            columnNumber: 12
        }, this);
        $[171] = t107;
    } else {
        t107 = $[171];
    }
    let t108;
    if ($[172] !== t38 || $[173] !== t54 || $[174] !== t75 || $[175] !== t99) {
        t108 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-screen w-full overflow-hidden bg-background text-foreground transition-colors duration-300 font-sans",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-1 flex-col py-4 pr-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex flex-1 flex-col min-w-0 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl bg-white dark:bg-sidebar",
                        children: [
                            t8,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex-1 overflow-y-auto ${__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsContainer} scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700`,
                                children: [
                                    t9,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsGrid,
                                        children: [
                                            t38,
                                            t54,
                                            t75,
                                            t99,
                                            t100,
                                            t101,
                                            t107
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                                        lineNumber: 848,
                                        columnNumber: 490
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                lineNumber: 848,
                                columnNumber: 348
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                        lineNumber: 848,
                        columnNumber: 189
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 848,
                    columnNumber: 141
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 848,
            columnNumber: 12
        }, this);
        $[172] = t38;
        $[173] = t54;
        $[174] = t75;
        $[175] = t99;
        $[176] = t108;
    } else {
        t108 = $[176];
    }
    return t108;
}
_s(Settings, "UNP6m6PIhmewuwILmYUmeDaqay8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$store$2f$useSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"]
    ];
});
_c = Settings;
function _SettingsButtonOnClick2() {
    return confirm("Are you sure? This action cannot be undone.") && alert("Account deletion initiated (Simulated)");
}
function _SettingsButtonOnClick() {
    return alert("Logging out...");
}
function _SettingsSidebarOnSelectChat() {}
function BackupManager() {
    _s1();
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleBackup = async ()=>{
        if (!password) {
            alert("Please set a password to encrypt your backup.");
            return;
        }
        setIsExporting(true);
        try {
            // 1. Gather Data
            const chats = localStorage.getItem("privlink_chats");
            const queue = localStorage.getItem("privlink_message_queue");
            const data = JSON.stringify({
                timestamp: new Date().toISOString(),
                chats: chats ? JSON.parse(chats) : [],
                queue: queue ? JSON.parse(queue) : [],
                version: 1
            });
            // 2. Encrypt
            const encryptedBlob = await encryptData(data, password);
            // 3. Download
            const url = URL.createObjectURL(encryptedBlob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `privlink-backup-${new Date().toISOString().slice(0, 10)}.enc`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            alert("Backup encrypted and downloaded successfully!");
            setPassword("");
        } catch (error) {
            console.error("Backup failed", error);
            alert("Backup failed. See console for details.");
        } finally{
            setIsExporting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-zinc-400",
                children: "Export your chats and settings to an encrypted local file."
            }, void 0, false, {
                fileName: "[project]/privlink/src/app/settings/page.tsx",
                lineNumber: 908,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs font-bold text-zinc-400 mb-2 mt-2 uppercase",
                        children: "Set Backup Password"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                        lineNumber: 912,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                value: password,
                                onChange: (e)=>setPassword(e.target.value),
                                placeholder: "Master password...",
                                className: "border-none p-2.5 rounded-lg flex-1 outline-none focus:ring-1 focus:ring-[#6c5cff]",
                                style: {
                                    backgroundColor: 'var(--settings-input-bg)',
                                    color: 'var(--settings-text)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                lineNumber: 914,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleBackup,
                                disabled: isExporting || !password,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn,
                                style: {
                                    opacity: isExporting || !password ? 0.5 : 1
                                },
                                children: isExporting ? 'Encrypting...' : 'Download'
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                lineNumber: 918,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                        lineNumber: 913,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-[10px] text-zinc-500",
                        children: "Warning: If you lose this password, this backup cannot be recovered."
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                        lineNumber: 924,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/app/settings/page.tsx",
                lineNumber: 911,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/privlink/src/app/settings/page.tsx",
        lineNumber: 907,
        columnNumber: 10
    }, this);
}
_s1(BackupManager, "ADhw0EP0Z+7AgQCCaOFw0soVO8Y=");
_c1 = BackupManager;
// Web Crypto API Helper
async function encryptData(plainText, password) {
    const enc = new TextEncoder();
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const keyMaterial = await crypto.subtle.importKey("raw", enc.encode(password), {
        name: "PBKDF2"
    }, false, [
        "deriveKey"
    ]);
    const key = await crypto.subtle.deriveKey({
        name: "PBKDF2",
        salt: salt,
        iterations: 100000,
        hash: "SHA-256"
    }, keyMaterial, {
        name: "AES-GCM",
        length: 256
    }, false, [
        "encrypt"
    ]);
    const encryptedContent = await crypto.subtle.encrypt({
        name: "AES-GCM",
        iv: iv
    }, key, enc.encode(plainText));
    const blob = new Blob([
        salt,
        iv,
        new Uint8Array(encryptedContent)
    ], {
        type: 'application/octet-stream'
    });
    return blob;
}
function NotificationToggle(t0) {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "506cb69b68911b30ca9b56ac8d47c23cb9a6be1e87a090457be7d954052258b0") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "506cb69b68911b30ca9b56ac8d47c23cb9a6be1e87a090457be7d954052258b0";
    }
    const { title, desc, defaultChecked } = t0;
    const [checked, setChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultChecked);
    let t1;
    if ($[1] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-bold",
            children: title
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 973,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== desc) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs text-zinc-500",
            children: desc
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 981,
            columnNumber: 10
        }, this);
        $[3] = desc;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 989,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== checked) {
        t4 = ({
            "NotificationToggle[<input>.onChange]": ()=>setChecked(!checked)
        })["NotificationToggle[<input>.onChange]"];
        $[8] = checked;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== checked || $[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "checkbox",
            checked: checked,
            onChange: t4
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 1008,
            columnNumber: 10
        }, this);
        $[10] = checked;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slider
        }, void 0, false, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 1017,
            columnNumber: 10
        }, this);
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switch,
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 1024,
            columnNumber: 10
        }, this);
        $[14] = t5;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t3 || $[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingItem,
            children: [
                t3,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/app/settings/page.tsx",
            lineNumber: 1032,
            columnNumber: 10
        }, this);
        $[16] = t3;
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    return t8;
}
_s2(NotificationToggle, "3Plyyp6pPVV6O/Ud+cwbH53ILJM=");
_c2 = NotificationToggle;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Settings");
__turbopack_context__.k.register(_c1, "BackupManager");
__turbopack_context__.k.register(_c2, "NotificationToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=privlink_src_b12c7f2e._.js.map