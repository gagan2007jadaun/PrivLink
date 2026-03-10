module.exports = [
"[project]/privlink/src/components/ChatListItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatListItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ChatListItem({ name, lastMessage, time, isActive = false, unreadCount = 0, avatarUrl, isOnline = false, isLocked = false, onArchive, onDelete, isArchived = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `group relative flex w-full cursor-pointer items-center gap-3 rounded-lg p-3 transition-all duration-200 
      ${isActive ? 'bg-indigo-500/10 dark:bg-indigo-500/20 backdrop-blur-sm' : 'hover:bg-black/5 dark:hover:bg-white/5'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-12 w-12 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `h-full w-full rounded-full p-0.5 ${isActive ? 'bg-indigo-500' : 'bg-transparent'}`,
                        children: avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: avatarUrl,
                            alt: name,
                            className: "h-full w-full rounded-full object-cover bg-white"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-full w-full items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 font-bold text-lg text-indigo-500",
                            children: name.substring(0, 2).toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    isLocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 border-2 border-white dark:border-zinc-950 text-[10px]",
                        title: "Locked",
                        children: "🔐"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, this),
                    isOnline && !isLocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-950"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-w-0 flex-1 flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: `truncate text-sm font-semibold ${isActive ? 'text-indigo-900 dark:text-indigo-100' : 'text-zinc-900 dark:text-zinc-100'}`,
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-zinc-400 group-hover:text-zinc-500 dark:text-zinc-500",
                                children: time
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `truncate text-sm ${isActive ? 'text-indigo-700/80 dark:text-indigo-300/70' : 'text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400'} ${isLocked ? 'blur-[3px] select-none opacity-50' : ''}`,
                                children: isLocked ? 'Locked Message Content' : lastMessage
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-indigo-600 px-1 text-[10px] font-bold text-white shadow-md shadow-indigo-500/20",
                                children: unreadCount
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            onArchive?.();
                        },
                        className: "rounded-lg bg-zinc-200 p-2 text-zinc-600 hover:bg-zinc-300 hover:text-zinc-900 dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-600 dark:hover:text-white shadow-sm",
                        title: isArchived ? "Unarchive" : "Archive",
                        children: isArchived ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "h-4 w-4",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "h-4 w-4",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            onDelete?.();
                        },
                        className: "rounded-lg bg-zinc-200 p-2 text-zinc-600 hover:bg-red-100 hover:text-red-600 dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-red-900/30 dark:hover:text-red-400 shadow-sm",
                        title: "Delete",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "h-4 w-4",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/components/ChatListItem.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/privlink/src/components/ChatListItem.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/privlink/src/components/CreateGroupOrTree.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateGroupOrTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function CreateGroupOrTree({ onClose, onCreate }) {
    const [selectedType, setSelectedType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('group');
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        onCreate?.({
            type: selectedType,
            name,
            description
        });
        onClose();
        setName('');
        setDescription('');
        setSelectedType('group');
    };
    const options = [
        {
            id: 'group',
            label: 'Create Group',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6 text-white",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                    lineNumber: 31,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                lineNumber: 30,
                columnNumber: 17
            }, this),
            description: 'Private chat with selected people'
        },
        {
            id: 'community',
            label: 'Create Community',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6 text-white",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                    lineNumber: 41,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                lineNumber: 40,
                columnNumber: 17
            }, this),
            description: 'Topic-based space for many members'
        },
        {
            id: 'family',
            label: 'Create Family Tree',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6 text-white",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h-3v-4h3v4zm3-10h-3V5h3v4z"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                    lineNumber: 51,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                lineNumber: 50,
                columnNumber: 17
            }, this),
            description: 'Connect and chat with family members'
        },
        {
            id: 'friends',
            label: 'Create Friends Tree',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6 text-white",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.22-3.22-7.51-7.51 3.22 3.22 7.51z"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                    lineNumber: 61,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                lineNumber: 60,
                columnNumber: 17
            }, this),
            description: 'Friends connected through mutuals'
        }
    ];
    const getCtaText = (type)=>{
        switch(type){
            case 'group':
                return 'Create Group';
            case 'community':
                return 'Create Community';
            case 'family':
                return 'Create Tree';
            case 'friends':
                return 'Create Tree';
            default:
                return 'Create';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-2xl overflow-hidden rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-white",
                                children: "Create New"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                lineNumber: 83,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "text-zinc-400 hover:text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                        lineNumber: 86,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                    lineNumber: 85,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                lineNumber: 84,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                        lineNumber: 82,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-zinc-400 mb-4",
                        children: "What do you want to create?"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                        lineNumber: 91,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 mb-6",
                        children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedType(option.id),
                                className: `relative flex items-center w-full p-4 rounded-xl border transition-all text-left group ${selectedType === option.id ? 'border-indigo-500/50 bg-zinc-800 ring-1 ring-indigo-500/20' : 'border-zinc-800 bg-zinc-800/30 hover:bg-zinc-800/50 hover:border-zinc-700'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-zinc-800",
                                        children: option.icon
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                        lineNumber: 103,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-4 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: `text-sm font-semibold ${selectedType === option.id ? 'text-white' : 'text-zinc-200'}`,
                                                children: option.label
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                                lineNumber: 107,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-zinc-400 mt-0.5",
                                                children: option.description
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                                lineNumber: 110,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                        lineNumber: 106,
                                        columnNumber: 33
                                    }, this),
                                    selectedType === option.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-4 h-5 w-5 rounded-full bg-indigo-500 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-3 h-3 text-white",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 3,
                                                d: "M5 13l4 4L19 7"
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                                lineNumber: 117,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                            lineNumber: 116,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                        lineNumber: 115,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, option.id, true, {
                                fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                lineNumber: 95,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                        lineNumber: 93,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-zinc-400 mb-1",
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                        lineNumber: 127,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        required: true,
                                        value: name,
                                        onChange: (e)=>setName(e.target.value),
                                        placeholder: `Enter ${selectedType} name...`,
                                        className: "w-full rounded-[10px] bg-zinc-800/50 border border-zinc-700 px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                        lineNumber: 128,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                lineNumber: 126,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-zinc-400 mb-1",
                                        children: "Description (Optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                        lineNumber: 138,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: description,
                                        onChange: (e)=>setDescription(e.target.value),
                                        placeholder: "Add a short description...",
                                        rows: 3,
                                        className: "w-full rounded-[10px] bg-zinc-800/50 border border-zinc-700 px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all resize-none"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                        lineNumber: 139,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                lineNumber: 137,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-2 flex justify-end gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onClose,
                                        className: "px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                        lineNumber: 149,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: !name,
                                        className: "px-6 py-2 rounded-lg bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: getCtaText(selectedType)
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                        lineNumber: 156,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                                lineNumber: 148,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                        lineNumber: 125,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
                lineNumber: 81,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
            lineNumber: 80,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/privlink/src/components/CreateGroupOrTree.tsx",
        lineNumber: 79,
        columnNumber: 9
    }, this);
}
}),
"[project]/privlink/src/components/StartNewChat.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StartNewChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function StartNewChat({ onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-lg overflow-hidden rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-white",
                                children: "Start New Chat"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/StartNewChat.tsx",
                                lineNumber: 11,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "text-zinc-400 hover:text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/StartNewChat.tsx",
                                        lineNumber: 14,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/StartNewChat.tsx",
                                    lineNumber: 13,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/StartNewChat.tsx",
                                lineNumber: 12,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/StartNewChat.tsx",
                        lineNumber: 10,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-zinc-800/50 border border-zinc-700 text-center text-zinc-400 text-sm mb-6",
                        children: "To start a new chat, search for a friend in your contacts list."
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/StartNewChat.tsx",
                        lineNumber: 19,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/StartNewChat.tsx",
                            lineNumber: 26,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/StartNewChat.tsx",
                        lineNumber: 25,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/components/StartNewChat.tsx",
                lineNumber: 9,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/privlink/src/components/StartNewChat.tsx",
            lineNumber: 8,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/privlink/src/components/StartNewChat.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
}),
"[project]/privlink/src/components/Sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$ChatListItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/components/ChatListItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$CreateGroupOrTree$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/components/CreateGroupOrTree.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$StartNewChat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/components/StartNewChat.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
function Sidebar({ chats, activeChatId, onSelectChat, onCreateChat, onArchiveChat, onDeleteChat }) {
    const ACTIONS = {
        CREATE: "create",
        CHAT: "chat"
    };
    // Filters
    const FILTER_ALL = 'All Chats';
    const FILTER_ARCHIVED = 'Archived';
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(FILTER_ALL);
    const [action, setAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Filter Logic
    const getFilteredChats = ()=>{
        let filtered = chats.filter((chat)=>{
            // 1. Archive Status
            if (activeFilter === FILTER_ARCHIVED && !chat.isArchived) return false;
            if (activeFilter !== FILTER_ARCHIVED && chat.isArchived) return false;
            return true;
        });
        // 2. Search Query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter((chat)=>chat.name.toLowerCase().includes(query) || chat.lastMessage.toLowerCase().includes(query));
        }
        return filtered;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "hidden w-80 flex-col border-r border-white/20 bg-sidebar backdrop-blur-xl dark:border-white/10 md:flex md:m-3 md:rounded-3xl md:border md:h-[calc(100vh-24px)] overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 p-4 pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold tracking-tight text-zinc-900 dark:text-white",
                                children: "PrivLink"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/Sidebar.tsx",
                                lineNumber: 62,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                suppressHydrationWarning: true,
                                onClick: ()=>setAction(ACTIONS.CREATE),
                                className: "flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-white/20 hover:text-indigo-600 dark:hover:bg-white/10 backdrop-blur-md border border-white/5 active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 4v16m8-8H4"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/Sidebar.tsx",
                                        lineNumber: 71,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/Sidebar.tsx",
                                    lineNumber: 70,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/Sidebar.tsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/Sidebar.tsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "absolute left-3 top-2.5 h-4 w-4 text-zinc-400",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/Sidebar.tsx",
                                        lineNumber: 80,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/Sidebar.tsx",
                                    lineNumber: 79,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    suppressHydrationWarning: true,
                                    type: "text",
                                    placeholder: "Search messages...",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    className: "w-full rounded-xl border-none bg-black/5 py-2 pl-9 pr-4 text-sm font-medium text-zinc-900 transition-all placeholder:text-zinc-500 focus:bg-white/50 focus:ring-2 focus:ring-indigo-500/20 dark:bg-white/10 dark:text-zinc-100 dark:focus:bg-black/40 md:text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/Sidebar.tsx",
                                    lineNumber: 82,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/privlink/src/components/Sidebar.tsx",
                            lineNumber: 78,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/Sidebar.tsx",
                        lineNumber: 77,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/components/Sidebar.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 overflow-x-auto overflow-y-hidden no-scrollbar px-2 pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveFilter(FILTER_ALL),
                        className: `whitespace-nowrap rounded-xl px-4 py-1.5 text-xs font-bold transition-all border border-white/10 backdrop-blur-md ${activeFilter === FILTER_ALL ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-lg transform scale-105' : 'text-zinc-600 dark:text-zinc-300 bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/30'}`,
                        children: "All"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/Sidebar.tsx",
                        lineNumber: 97,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveFilter(FILTER_ARCHIVED),
                        className: `whitespace-nowrap rounded-xl px-4 py-1.5 text-xs font-bold transition-all border border-white/10 backdrop-blur-md ${activeFilter === FILTER_ARCHIVED ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-lg transform scale-105' : 'text-zinc-600 dark:text-zinc-300 bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/30'}`,
                        children: "Archived"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/Sidebar.tsx",
                        lineNumber: 103,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "whitespace-nowrap rounded-xl px-4 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/30 backdrop-blur-md border border-white/10 transition-colors",
                        children: "Personal"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/Sidebar.tsx",
                        lineNumber: 109,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "whitespace-nowrap rounded-xl px-4 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/30 backdrop-blur-md border border-white/10 transition-colors",
                        children: "Work"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/Sidebar.tsx",
                        lineNumber: 112,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "whitespace-nowrap rounded-xl px-4 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/30 backdrop-blur-md border border-white/10 transition-colors",
                        children: "Groups"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/Sidebar.tsx",
                        lineNumber: 115,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/components/Sidebar.tsx",
                lineNumber: 96,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto px-2 no-scrollbar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1 py-2",
                    children: getFilteredChats().map((chat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>onSelectChat(chat.id),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$ChatListItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                name: chat.name,
                                lastMessage: chat.lastMessage,
                                time: chat.time,
                                unreadCount: chat.unreadCount,
                                isOnline: chat.isOnline,
                                isActive: chat.id === activeChatId,
                                avatarUrl: chat.avatarUrl,
                                isArchived: chat.isArchived,
                                isLocked: chat.isLocked,
                                onArchive: ()=>onArchiveChat?.(chat.id),
                                onDelete: ()=>onDeleteChat?.(chat.id)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/Sidebar.tsx",
                                lineNumber: 125,
                                columnNumber: 29
                            }, this)
                        }, chat.id, false, {
                            fileName: "[project]/privlink/src/components/Sidebar.tsx",
                            lineNumber: 124,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/Sidebar.tsx",
                    lineNumber: 122,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/Sidebar.tsx",
                lineNumber: 121,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 border-t border-white/10 p-4 dark:border-white/5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/settings",
                        className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/50 text-zinc-500 shadow-sm transition-all hover:bg-white hover:text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:bg-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "h-5 w-5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/Sidebar.tsx",
                                    lineNumber: 147,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/Sidebar.tsx",
                                    lineNumber: 148,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/privlink/src/components/Sidebar.tsx",
                            lineNumber: 146,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/Sidebar.tsx",
                        lineNumber: 145,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setAction(ACTIONS.CHAT),
                        className: "flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600/90 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-600 hover:scale-[1.02] active:scale-[0.98] backdrop-blur-md border border-white/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 4v16m8-8H4"
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/Sidebar.tsx",
                                    lineNumber: 156,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/Sidebar.tsx",
                                lineNumber: 155,
                                columnNumber: 21
                            }, this),
                            "Start New Chat"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/Sidebar.tsx",
                        lineNumber: 151,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/components/Sidebar.tsx",
                lineNumber: 144,
                columnNumber: 13
            }, this),
            action === ACTIONS.CREATE && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$CreateGroupOrTree$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setAction(null),
                onCreate: (data)=>{
                    onCreateChat?.(data);
                    setAction(null);
                }
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/Sidebar.tsx",
                lineNumber: 164,
                columnNumber: 21
            }, this),
            action === ACTIONS.CHAT && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$StartNewChat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setAction(null)
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/Sidebar.tsx",
                lineNumber: 176,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/privlink/src/components/Sidebar.tsx",
        lineNumber: 58,
        columnNumber: 9
    }, this);
}
}),
"[project]/privlink/src/components/ChatHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function ChatHeader({ onToggleRightPanel, name, avatarUrl, isOnline, driftLevel = 'low', interestScore = 50, interestTrend = 'stable', gravity = 'balanced', persona, energyBalance = 0, isScrolled = false, isIncognito = false, onToggleIncognito, isTyping = false, disappearingDuration = 0, onSetDisappearingDuration }) {
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTrend, setShowTrend] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showBookmarkToast, setShowBookmarkToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDisappearingMenu, setShowDisappearingMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const disappearingMenuRef = __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        function handleClickOutside(event) {
            if (disappearingMenuRef.current && !disappearingMenuRef.current.contains(event.target)) {
                setShowDisappearingMenu(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    // Micro-Motion: Trigger active bounce on chat change key (name used as proxy)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsActive(true);
        const timer = setTimeout(()=>setIsActive(false), 220);
        return ()=>clearTimeout(timer);
    }, [
        name
    ]);
    const handleInterestClick = ()=>{
        setShowTrend(true);
        setTimeout(()=>setShowTrend(false), 2000); // Revert after 2s
    };
    const handleBookmark = ()=>{
        setShowBookmarkToast(true);
        setTimeout(()=>setShowBookmarkToast(false), 2500);
    };
    // Mood Line Text (Drift Logic)
    let moodText = "conversation stays steady";
    if (driftLevel === 'medium') moodText = "conversation slowing down";
    if (driftLevel === 'high') moodText = "conversation feels distant";
    // Override with typing indicator
    if (isTyping) {
        moodText = "Ghost is typing...";
    }
    // Mood Line Color (Interest Logic)
    const getMoodColor = (score)=>{
        if (score >= 80) return '#9AA57A'; // Warm
        if (score >= 50) return '#9A9A9A'; // Neutral
        return '#8A7F7F'; // Cold
    };
    const moodColor = getMoodColor(interestScore);
    // Convert hex to rgba for gradient if needed, or just use hex with opacity if browser supports (modern browsers do #RRGGBBAA).
    // User logic: linear-gradient(90deg, color-0.6, color-0).
    // moodColor is like '#9AA57A'. Appending '99' for ~60% opacity, '00' for 0%.
    const accentGradient = `linear-gradient(90deg, ${moodColor}99, ${moodColor}00)`;
    // Scroll Awareness & Micro-Motion Styles
    const containerStyle = {
        backgroundColor: 'var(--header-bg)',
        backdropFilter: 'var(--glass-blur)',
        WebkitBackdropFilter: 'var(--glass-blur)',
        borderBottom: `1px solid var(--header-border)`,
        boxShadow: isScrolled ? '0 1px 2px rgba(0,0,0,0.02)' : 'var(--header-shadow)',
        zIndex: 40
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative flex h-16 shrink-0 items-center justify-between px-6 transition-all duration-200 ease-out`,
        style: {
            ...containerStyle,
            transform: isActive ? 'translateY(0)' : 'translateY(-2px)'
        },
        children: [
            showBookmarkToast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1 right-20 z-50 rounded-full bg-zinc-800 px-3 py-1 text-xs text-white shadow-lg animate-fade-in-up",
                children: "✨ Bookmark saved. This moment matters."
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                lineNumber: 117,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "header-accent absolute bottom-0 left-0 h-[2px] w-full transition-all duration-1000",
                style: {
                    background: accentGradient
                }
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                lineNumber: 123,
                columnNumber: 13
            }, this),
            isIncognito && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 bg-zinc-900/90 backdrop-blur-md pointer-events-none transition-opacity duration-500"
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                lineNumber: 130,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative cursor-pointer",
                        onClick: handleInterestClick,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white shadow-md ring-2 ring-white dark:ring-zinc-900 transition-transform hover:scale-105 ${isIncognito ? 'bg-zinc-800' : 'bg-linear-to-tr from-purple-400 to-indigo-500'}`,
                                children: isIncognito ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6 text-white",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 2a9 9 0 00-9 9v11h18V11a9 9 0 00-9-9zm0 2.25c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5zm0 13.5c-3.728 0-6.75-2.25-6.75-5.25h13.5c0 3-3.022 5.25-6.75 5.25z"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                            lineNumber: 138,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 11c-2.485 0-4.5-1.12-4.5-2.5S9.515 6 12 6s4.5 1.12 4.5 2.5-2.015 2.5-4.5 2.5z",
                                            opacity: "0.4"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                            lineNumber: 139,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                    lineNumber: 137,
                                    columnNumber: 29
                                }, this) : showTrend ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg",
                                    children: interestTrend === 'rising' ? '↑' : interestTrend === 'falling' ? '↓' : '→'
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                    lineNumber: 143,
                                    columnNumber: 33
                                }, this) : avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: avatarUrl,
                                    alt: name,
                                    className: "h-full w-full rounded-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                    lineNumber: 148,
                                    columnNumber: 37
                                }, this) : name.slice(0, 2).toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                lineNumber: 135,
                                columnNumber: 21
                            }, this),
                            isOnline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-900 ${interestScore > 80 ? 'animate-pulse' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                lineNumber: 157,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                        lineNumber: 134,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "header-name text-sm font-bold leading-tight mb-[2px] dark:text-white",
                                style: {
                                    color: 'var(--title-text)'
                                },
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                lineNumber: 161,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "header-title transition-colors duration-1000",
                                        style: {
                                            color: isTyping ? '#6366f1' : 'var(--subtitle-text)',
                                            fontSize: '11.5px',
                                            fontWeight: isTyping ? 600 : 400,
                                            letterSpacing: '0.4px'
                                        },
                                        children: moodText
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                        lineNumber: 170,
                                        columnNumber: 25
                                    }, this),
                                    isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-[1px] h-2 items-end pb-[2px] ml-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "typing-dot",
                                                style: {
                                                    width: '3px',
                                                    height: '3px',
                                                    backgroundColor: '#6366f1'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                                lineNumber: 184,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "typing-dot",
                                                style: {
                                                    width: '3px',
                                                    height: '3px',
                                                    backgroundColor: '#6366f1'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                                lineNumber: 185,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "typing-dot",
                                                style: {
                                                    width: '3px',
                                                    height: '3px',
                                                    backgroundColor: '#6366f1'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                                lineNumber: 186,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                        lineNumber: 183,
                                        columnNumber: 29
                                    }, this),
                                    !isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex space-x-[1px] h-2 items-end pb-[2px]",
                                                title: "Conversation Pace",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-[2px] h-[2px] bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-[2px] h-[2px] bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                                lineNumber: 193,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-1 text-xs text-zinc-400 opacity-60 hover:opacity-100 transition-opacity cursor-help",
                                                title: `Initiation Balance: ${gravity.replace(/-/g, ' ')}`,
                                                children: gravity === 'balanced' ? '→' : gravity === 'one-sided-me' ? '↗' : '↙'
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                                lineNumber: 199,
                                                columnNumber: 33
                                            }, this),
                                            persona && persona !== 'balanced' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-0.5 text-xs opacity-60 hover:opacity-100 transition-opacity cursor-help",
                                                title: `${name} is a ${persona} person`,
                                                children: persona === 'morning' ? '☀️' : '🌙'
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                                lineNumber: 208,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-1 flex h-1.5 w-6 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700 opacity-60 hover:opacity-100 transition-opacity cursor-help",
                                                title: `Message Energy: ${energyBalance > 0 ? `You +${energyBalance}%` : `Them +${Math.abs(energyBalance)}%`}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full bg-indigo-400",
                                                    style: {
                                                        width: `${50 + energyBalance / 2}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                                lineNumber: 217,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                lineNumber: 169,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                        lineNumber: 160,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                lineNumber: 133,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex items-center gap-1 text-zinc-500 dark:text-zinc-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onToggleIncognito,
                        className: `flex h-9 w-9 items-center justify-center rounded-lg transition-colors border border-white/5 backdrop-blur-sm ${isIncognito ? 'bg-zinc-800 text-white shadow-inner ring-1 ring-white/10' : 'bg-white/5 hover:bg-white/15 dark:bg-black/10 dark:hover:bg-black/20'}`,
                        title: isIncognito ? "Disable Incognito Mode" : "Enable Incognito Mode",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: `h-5 w-5 ${isIncognito ? 'text-white' : 'text-zinc-500 dark:text-zinc-400'}`,
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 2C7.03 2 3 6.03 3 11v11h18V11c0-4.97-4.03-9-9-9zm0 2.25c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5zM5.25 17.75c0-3 3.022-5.25 6.75-5.25s6.75 2.25 6.75 5.25H5.25z"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                lineNumber: 242,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                            lineNumber: 241,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                        lineNumber: 236,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        ref: disappearingMenuRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowDisappearingMenu(!showDisappearingMenu),
                                className: `flex h-9 w-9 items-center justify-center rounded-lg transition-colors border border-white/5 backdrop-blur-sm ${disappearingDuration > 0 ? 'bg-indigo-500/20 text-indigo-400 ring-1 ring-indigo-500/50' : 'bg-white/5 hover:bg-white/15 dark:bg-black/10 dark:hover:bg-black/20 text-zinc-500 dark:text-zinc-400'}`,
                                title: "Disappearing Messages",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                        lineNumber: 254,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                    lineNumber: 253,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                lineNumber: 248,
                                columnNumber: 21
                            }, this),
                            showDisappearingMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-full right-0 mt-2 w-48 rounded-xl bg-white p-2 shadow-xl ring-1 ring-black/5 dark:bg-zinc-900 dark:ring-white/10 z-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500",
                                        children: "Disappearing Timer"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                        lineNumber: 259,
                                        columnNumber: 29
                                    }, this),
                                    [
                                        {
                                            label: 'Off',
                                            value: 0
                                        },
                                        {
                                            label: '1 Minute',
                                            value: 60
                                        },
                                        {
                                            label: '1 Hour',
                                            value: 3600
                                        },
                                        {
                                            label: '24 Hours',
                                            value: 86400
                                        }
                                    ].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                onSetDisappearingDuration?.(option.value);
                                                setShowDisappearingMenu(false);
                                            },
                                            className: `flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm transition-colors ${disappearingDuration === option.value ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300' : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800'}`,
                                            children: [
                                                option.label,
                                                disappearingDuration === option.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "h-4 w-4",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M5 13l4 4L19 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, option.value, true, {
                                            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                            lineNumber: 266,
                                            columnNumber: 33
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                lineNumber: 258,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                        lineNumber: 247,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex h-9 w-9 items-center justify-center rounded-lg transition-colors bg-white/5 hover:bg-white/15 dark:bg-black/10 dark:hover:bg-black/20 border border-white/5 backdrop-blur-sm hover:text-indigo-600",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "h-5 w-5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                lineNumber: 289,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                            lineNumber: 288,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                        lineNumber: 287,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleBookmark,
                        className: "flex h-9 w-9 items-center justify-center rounded-lg transition-colors bg-white/5 hover:bg-white/15 dark:bg-black/10 dark:hover:bg-black/20 border border-white/5 backdrop-blur-sm hover:text-yellow-500",
                        title: "Bookmark this moment",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "h-5 w-5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                lineNumber: 300,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                            lineNumber: 299,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                        lineNumber: 294,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-2 h-4 w-px bg-zinc-200 dark:bg-zinc-700"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                        lineNumber: 304,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onToggleRightPanel,
                        className: "flex h-9 w-9 items-center justify-center rounded-lg transition-colors bg-white/5 hover:bg-white/15 dark:bg-black/10 dark:hover:bg-black/20 border border-white/5 backdrop-blur-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "h-5 w-5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                                lineNumber: 310,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                            lineNumber: 309,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                        lineNumber: 305,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/components/ChatHeader.tsx",
                lineNumber: 234,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/privlink/src/components/ChatHeader.tsx",
        lineNumber: 108,
        columnNumber: 9
    }, this);
}
}),
"[project]/privlink/src/components/media/AudioBubble.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const AudioBubble = ({ src, duration, isMe })=>{
    if (!src) return null;
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [playbackRate, setPlaybackRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [waveformData, setWaveformData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Audio Context for caching/decoding
    // Note: In a real app, use a store or global context to limit Active AudioContexts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // "Smart Media State": Pause when tab hidden
        const handleVisibilityChange = ()=>{
            if (document.hidden && audioRef.current && !audioRef.current.paused) {
                audioRef.current.pause();
                setIsPlaying(false);
            }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return ()=>document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Decode Audio for Waveform
        // Ideally cache this. For now, decode on load (or on fetch).
        let isActive = true;
        const fetchAndDecode = async ()=>{
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
        };
        if (src) fetchAndDecode();
        return ()=>{
            isActive = false;
        };
    }, [
        src
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
        waveformData,
        currentTime,
        isMe,
        duration
    ]);
    // Helper for rounded rect since fillRect is square
    const roundRect = (ctx, x, y, w, h, r)=>{
        if (w < 2 * r) r = w / 2;
        if (h < 2 * r) r = h / 2;
        ctx.beginPath();
        ctx.roundRect ? ctx.roundRect(x, y, w, h, r) : ctx.rect(x, y, w, h); // Fallback
        ctx.fill();
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
        const x = e.clientX - rect.left;
        const width = rect.width;
        const pct = Math.min(1, Math.max(0, x / width));
        audioRef.current.currentTime = pct * (audioRef.current.duration || duration);
        setCurrentTime(audioRef.current.currentTime);
    };
    const toggleSpeed = (e)=>{
        e.stopPropagation();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col w-full min-w-[240px] gap-2 p-1`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: audioRef,
                src: src,
                onPlay: ()=>setIsPlaying(true),
                onPause: ()=>setIsPlaying(false),
                onTimeUpdate: handleTimeUpdate,
                onEnded: handleEnded,
                className: "hidden"
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                lineNumber: 201,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: togglePlay,
                        className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all active:scale-95 ${isMe ? 'bg-white/20 hover:bg-white/30 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-200 dark:shadow-none'}`,
                        children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            className: "w-5 h-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "6",
                                    y: "4",
                                    width: "4",
                                    height: "16",
                                    rx: "1"
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                                    lineNumber: 221,
                                    columnNumber: 90
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "14",
                                    y: "4",
                                    width: "4",
                                    height: "16",
                                    rx: "1"
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                                    lineNumber: 221,
                                    columnNumber: 139
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                            lineNumber: 221,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            className: "w-5 h-5 ml-0.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                                lineNumber: 223,
                                columnNumber: 97
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                            lineNumber: 223,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                        lineNumber: 213,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 h-8 relative group cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                ref: canvasRef,
                                className: "w-full h-full block",
                                onClick: handleCanvasClick
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                                lineNumber: 229,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 bottom-0 w-[1px] bg-red-400 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity",
                                style: {
                                    left: '0%' /* Would need mouse tracking for precise line helper */ 
                                }
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                                lineNumber: 235,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                        lineNumber: 228,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-end justify-center min-w-[32px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleSpeed,
                                className: `text-[10px] font-bold px-1.5 py-0.5 rounded-md transition-colors ${isMe ? 'bg-white/20 hover:bg-white/30 text-white/90' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300'}`,
                                title: "Playback Speed",
                                children: [
                                    playbackRate,
                                    "x"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                                lineNumber: 240,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-[10px] mt-0.5 ${isMe ? 'text-white/70' : 'text-zinc-500'}`,
                                children: duration ? `${Math.floor(currentTime)}:${Math.floor(duration % 60).toString().padStart(2, '0')}` : '0:00'
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                                lineNumber: 250,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                        lineNumber: 239,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
                lineNumber: 211,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/privlink/src/components/media/AudioBubble.tsx",
        lineNumber: 199,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AudioBubble;
}),
"[project]/privlink/src/components/media/VideoBubble.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const VideoBubble = ({ src, thumbnailUrl, duration })=>{
    // Safety check: if no src is provided, don't render the video element to avoid runtime error
    if (!src) return null;
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true); // "Auto-mute video in chat"
    const [showOverlay, setShowOverlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Visibility API: Pause when tab hidden
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleVisibilityChange = ()=>{
            if (document.hidden && videoRef.current && !videoRef.current.paused) {
                videoRef.current.pause();
                setIsPlaying(false);
                setShowOverlay(true);
            }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return ()=>document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, []);
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
    const toggleMute = (e)=>{
        e.stopPropagation();
        if (!videoRef.current) return;
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };
    const handleVideoEnd = ()=>{
        setIsPlaying(false);
        setShowOverlay(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative aspect-video w-full overflow-hidden rounded-2xl bg-black group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
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
                lineNumber: 59,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            (!isPlaying || showOverlay) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity hover:bg-black/40 cursor-pointer",
                onClick: togglePlay,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-full bg-white/20 p-4 backdrop-blur-sm transition-transform group-hover:scale-110",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "h-8 w-8 text-white fill-current",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M8 5v14l11-7z"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
                            lineNumber: 85,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
                        lineNumber: 84,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
                    lineNumber: 83,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
                lineNumber: 79,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleMute,
                className: `absolute bottom-3 right-3 rounded-full bg-black/60 p-2 text-white backdrop-blur-md transition-opacity ${isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`,
                children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "h-4 w-4",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
                            lineNumber: 98,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
                            lineNumber: 99,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
                    lineNumber: 97,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "h-4 w-4",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
                        lineNumber: 103,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
                    lineNumber: 102,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
                lineNumber: 92,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            !isPlaying && duration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-3 left-3 rounded-md bg-black/60 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-md",
                children: [
                    duration,
                    "s"
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
                lineNumber: 110,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/privlink/src/components/media/VideoBubble.tsx",
        lineNumber: 58,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = VideoBubble;
}),
"[project]/privlink/src/components/MessageBubble.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessageBubble
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$media$2f$AudioBubble$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/components/media/AudioBubble.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$media$2f$VideoBubble$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/components/media/VideoBubble.tsx [app-ssr] (ecmascript)");
;
;
;
;
function MessageBubble({ type, content, timestamp, isMe = false, duration, thumbnailUrl, reactions = [], isConsecutive = false, status = 'sent', heatScore = 0, confidenceScore, style: propsStyle, replyTo, onReplyClick, onImageClick, fileName, fileSize, onRetry, onReaction, expiresAt }) {
    const [showReactionPicker, setShowReactionPicker] = __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const reactionPickerRef = __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        function handleClickOutside(event) {
            if (reactionPickerRef.current && !reactionPickerRef.current.contains(event.target)) {
                setShowReactionPicker(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex w-full ${isMe ? 'justify-start' : 'justify-end'} ${isConsecutive ? 'mt-1' : 'mt-4'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative max-w-[70%] sm:max-w-[65%] ${isMe ? 'items-start' : 'items-end'} flex flex-col gap-1`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `relative px-5 py-3 text-sm overflow-visible transition-all duration-300
          ${isMe ? 'rounded-[26px] rounded-tl-lg bg-linear-to-tr from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 selection:bg-indigo-800 selection:text-indigo-100' : 'rounded-[26px] rounded-tr-lg bg-white/90 backdrop-blur-sm text-zinc-900 shadow-md shadow-zinc-200/50 dark:bg-zinc-800/90 dark:text-zinc-100 dark:shadow-zinc-900/50'}
          ${type !== 'text' ? 'p-1.5' : ''}
          ${confidenceScore !== undefined ? confidenceScore < 70 ? 'border-b-[3px] border-dotted border-white/40' : 'border-b-[3px] border-solid border-white/20' : ''}
          `,
                    children: [
                        replyTo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                onReplyClick?.(replyTo.messageId);
                            },
                            className: `mb-2 cursor-pointer rounded-sm border-l-[3px] px-2 py-0.5 text-xs opacity-90 transition-opacity hover:opacity-100 ${isMe ? 'border-indigo-300 bg-indigo-700/30' : 'border-indigo-500 bg-zinc-100 dark:bg-zinc-700/50'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block font-bold mb-0.5 opacity-100",
                                    children: replyTo.username
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                    lineNumber: 93,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block truncate opacity-80",
                                    children: replyTo.mediaType ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "italic",
                                        children: [
                                            replyTo.mediaType === 'image' && '🖼 Photo',
                                            replyTo.mediaType === 'video' && '📹 Video',
                                            replyTo.mediaType === 'audio' && '🎤 Audio'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                        lineNumber: 96,
                                        columnNumber: 37
                                    }, this) : replyTo.text
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                    lineNumber: 94,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                            lineNumber: 89,
                            columnNumber: 25
                        }, this),
                        type === 'image' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mb-2 aspect-video w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: content,
                                alt: "Attached",
                                onClick: ()=>onImageClick?.(content),
                                className: "h-full w-full object-cover transition-transform hover:scale-105 cursor-zoom-in"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                lineNumber: 108,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                            lineNumber: 107,
                            columnNumber: 25
                        }, this),
                        type === 'video' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-[320px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$media$2f$VideoBubble$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: content,
                                thumbnailUrl: thumbnailUrl,
                                duration: duration
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                lineNumber: 119,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                            lineNumber: 118,
                            columnNumber: 25
                        }, this),
                        type === 'audio' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$media$2f$AudioBubble$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: content,
                            duration: duration,
                            isMe: isMe
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                            lineNumber: 124,
                            columnNumber: 25
                        }, this),
                        type === 'file' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex items-center gap-3 rounded-xl p-3 ${isMe ? 'bg-indigo-600/20' : 'bg-zinc-100 dark:bg-zinc-800'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-200 dark:bg-zinc-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-6 w-6 text-zinc-500 dark:text-zinc-400",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                            lineNumber: 131,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                        lineNumber: 130,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                    lineNumber: 129,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col overflow-hidden max-w-[150px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate text-sm font-medium text-zinc-800 dark:text-zinc-200",
                                            title: fileName || "Document",
                                            children: fileName || "Document"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                            lineNumber: 135,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-zinc-500",
                                            children: fileSize || "Unknown Size"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                            lineNumber: 136,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                    lineNumber: 134,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: content,
                                    download: fileName || "download",
                                    className: "ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white transition-colors hover:bg-indigo-600",
                                    onClick: (e)=>e.stopPropagation(),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-4 w-4",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                            lineNumber: 140,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                        lineNumber: 139,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                    lineNumber: 138,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                            lineNumber: 128,
                            columnNumber: 25
                        }, this),
                        type === 'text' && content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `leading-relaxed ${confidenceScore !== undefined && confidenceScore < 80 ? 'opacity-90' : ''} 
                        ${propsStyle?.bold ? 'font-bold' : ''} 
                        ${propsStyle?.italic ? 'italic' : ''} 
                        ${propsStyle?.underline ? 'underline underline-offset-4' : ''}`,
                            children: content
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                            lineNumber: 147,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `mt-1 flex items-center ${isMe ? 'justify-start' : 'justify-end'} gap-1.5`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-[10px] opacity-45 ${isMe ? 'text-indigo-100' : 'text-zinc-400 dark:text-zinc-500'}`,
                                    children: timestamp
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                    lineNumber: 158,
                                    columnNumber: 25
                                }, this),
                                !isMe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                setShowReactionPicker(!showReactionPicker);
                                            },
                                            className: "opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "h-4 w-4",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                                lineNumber: 169,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                            lineNumber: 165,
                                            columnNumber: 33
                                        }, this),
                                        showReactionPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: reactionPickerRef,
                                            className: "absolute bottom-full left-0 mb-2 flex gap-1 rounded-full bg-white p-1 shadow-lg ring-1 ring-black/5 dark:bg-zinc-800 dark:ring-white/10 z-10",
                                            children: [
                                                '👍',
                                                '❤️',
                                                '😂',
                                                '😮',
                                                '😢',
                                                '🔥'
                                            ].map((emoji)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        onReaction?.(emoji);
                                                        setShowReactionPicker(false);
                                                    },
                                                    className: "h-8 w-8 rounded-full text-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors",
                                                    children: emoji
                                                }, emoji, false, {
                                                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 45
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                            lineNumber: 174,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                    lineNumber: 164,
                                    columnNumber: 29
                                }, this),
                                isMe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    title: status,
                                    children: [
                                        status === 'sending' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            width: "12",
                                            height: "12",
                                            className: "text-[#8e8e93] opacity-60",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10",
                                                    strokeDasharray: "4 4",
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M12 6v6l4 2"
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                            lineNumber: 196,
                                            columnNumber: 37
                                        }, this),
                                        status === 'failed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                onRetry?.();
                                            },
                                            className: "flex items-center justify-center transition-transform hover:scale-110 active:scale-95",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                width: "14",
                                                height: "14",
                                                className: "text-red-500",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M12 8v4m0 4h.01"
                                                    }, void 0, false, {
                                                        fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                                lineNumber: 203,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                            lineNumber: 202,
                                            columnNumber: 37
                                        }, this),
                                        status === 'queued' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            width: "14",
                                            height: "14",
                                            className: "text-zinc-400 dark:text-zinc-500",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                                lineNumber: 211,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                            lineNumber: 210,
                                            columnNumber: 37
                                        }, this),
                                        status === 'sent' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 16 15",
                                            width: "16",
                                            height: "15",
                                            className: "text-indigo-200/70",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fill: "currentColor",
                                                d: "M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 14.377l-3.609-3.419a.364.364 0 0 0-.513.008l-.5.509a.364.364 0 0 0 .009.513l4.316 4.088a.36.36 0 0 0 .506-.01L15.074 3.827a.365.365 0 0 0-.063-.51z"
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                                lineNumber: 216,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                            lineNumber: 215,
                                            columnNumber: 37
                                        }, this),
                                        status === 'delivered' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex -space-x-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 16 15",
                                                    width: "16",
                                                    height: "15",
                                                    className: "text-indigo-200/70",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "currentColor",
                                                        d: "M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 14.377l-3.609-3.419a.364.364 0 0 0-.513.008l-.5.509a.364.364 0 0 0 .009.513l4.316 4.088a.36.36 0 0 0 .506-.01L15.074 3.827a.365.365 0 0 0-.063-.51z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 16 15",
                                                    width: "16",
                                                    height: "15",
                                                    className: "text-indigo-200/70 relative -left-[7px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "currentColor",
                                                        d: "M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 14.377l-3.609-3.419a.364.364 0 0 0-.513.008l-.5.509a.364.364 0 0 0 .009.513l4.316 4.088a.36.36 0 0 0 .506-.01L15.074 3.827a.365.365 0 0 0-.063-.51z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                            lineNumber: 220,
                                            columnNumber: 37
                                        }, this),
                                        status === 'read' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex -space-x-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 16 15",
                                                    width: "16",
                                                    height: "15",
                                                    className: "text-blue-300",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "currentColor",
                                                        d: "M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 14.377l-3.609-3.419a.364.364 0 0 0-.513.008l-.5.509a.364.364 0 0 0 .009.513l4.316 4.088a.36.36 0 0 0 .506-.01L15.074 3.827a.365.365 0 0 0-.063-.51z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 16 15",
                                                    width: "16",
                                                    height: "15",
                                                    className: "text-blue-300 relative -left-[7px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "currentColor",
                                                        d: "M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 14.377l-3.609-3.419a.364.364 0 0 0-.513.008l-.5.509a.364.364 0 0 0 .009.513l4.316 4.088a.36.36 0 0 0 .506-.01L15.074 3.827a.365.365 0 0 0-.063-.51z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                            lineNumber: 230,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                    lineNumber: 194,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                            lineNumber: 157,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                    lineNumber: 77,
                    columnNumber: 17
                }, this),
                reactions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex items-center gap-1 ${isMe ? 'justify-start pl-1' : 'justify-end pr-1'} -mt-3 relative z-10`,
                    children: [
                        reactions.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 rounded-full border border-white bg-zinc-50 px-1.5 py-0.5 text-[10px] shadow-sm dark:border-zinc-900 dark:bg-zinc-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: r.emoji
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                        lineNumber: 249,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-zinc-500 dark:text-zinc-400",
                                        children: r.count
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                        lineNumber: 250,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                lineNumber: 248,
                                columnNumber: 29
                            }, this)),
                        heatScore > 50 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-2 -right-2 flex items-center justify-center rounded-full bg-orange-100 p-1 shadow-sm ring-1 ring-white dark:bg-zinc-800 dark:ring-zinc-900",
                            title: "High Interest Message",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] opacity-70",
                                    children: timestamp
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                    lineNumber: 256,
                                    columnNumber: 33
                                }, this),
                                expiresAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    title: `Expires: ${new Date(expiresAt).toLocaleTimeString()}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-3 h-3 text-zinc-400",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                            lineNumber: 262,
                                            columnNumber: 45
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                        lineNumber: 261,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                                    lineNumber: 260,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                            lineNumber: 255,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/components/MessageBubble.tsx",
                    lineNumber: 246,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/MessageBubble.tsx",
            lineNumber: 74,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/privlink/src/components/MessageBubble.tsx",
        lineNumber: 73,
        columnNumber: 9
    }, this);
}
}),
"[project]/privlink/src/hooks/useTypingMetrics.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTypingMetrics",
    ()=>useTypingMetrics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useTypingMetrics(text) {
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        backspaceCount: 0,
        pauseCount: 0,
        totalKeystrokes: 0,
        maxTypedLength: 0
    });
    // Refs for timing
    const lastKeystrokeTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(Date.now());
    const typingTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasStartedTyping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
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
            setStats((prev)=>({
                    ...prev,
                    backspaceCount: prev.backspaceCount + 1
                }));
        }
        setStats((prev)=>({
                ...prev,
                totalKeystrokes: prev.totalKeystrokes + 1
            }));
        // Reset pause timer
        if (typingTimer.current) clearTimeout(typingTimer.current);
    };
    const handleChange = (val)=>{
        setStats((prev)=>({
                ...prev,
                maxTypedLength: Math.max(prev.maxTypedLength, val.length)
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
}),
"[project]/privlink/src/lib/mediaUtils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/privlink/src/components/MessageInput.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessageInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$hooks$2f$useTypingMetrics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/hooks/useTypingMetrics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$lib$2f$mediaUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/lib/mediaUtils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
function MessageInput({ onSendMessage, boundaryMode = false, recentMessages = [], selfAlias, replyingTo, onCancelReply, isIncognito = false, onTyping }) {
    const [showEmojiPicker, setShowEmojiPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isEcho, setIsEcho] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pickerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const typingTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Premium Attachment Menu State
    const [isAttachOpen, setIsAttachOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFontToolbar, setShowFontToolbar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messageStyle, setMessageStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        bold: false,
        italic: false,
        underline: false
    });
    // Recording State
    const [isRecordingAudio, setIsRecordingAudio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRecordingVideo, setIsRecordingVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mediaRecorder, setMediaRecorder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [timer, setTimer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Audio Visualization Refs
    const [waveBars, setWaveBars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Array(12).fill(4));
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const analyserRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Typing Metrics Hook
    const metrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$hooks$2f$useTypingMetrics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTypingMetrics"])(message);
    // Echo Detection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!message || message.length < 5) {
            setIsEcho(false);
            return;
        }
        const isRepetitive = recentMessages.some((prev)=>prev.toLowerCase().trim() === message.toLowerCase().trim() || prev.length > 10 && prev.includes(message) || message.length > 10 && message.includes(prev));
        setIsEcho(isRepetitive);
    }, [
        message,
        recentMessages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleClickOutside(event) {
            if (pickerRef.current && !pickerRef.current.contains(event.target)) {
                setShowEmojiPicker(false);
            }
        // Close attachment menu on outside click if not clicking the toggle itself
        // (Simplified logic: clicking input or elsewhere closes it)
        // For now, we rely on specific interactions closing it or explicit toggles.
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const startTimer = ()=>{
        setTimer(0);
        timerRef.current = setInterval(()=>{
            setTimer((prev)=>prev + 1);
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
    const isRecordingCancelled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Auto-stop recording after 60 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ((isRecordingAudio || isRecordingVideo) && timer >= 60) {
            stopRecording();
        }
    }, [
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
                    thumbnail = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$lib$2f$mediaUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateThumbnail"])(url);
                }
                if (onSendMessage) {
                    onSendMessage(url, type, duration, undefined, thumbnail);
                }
                stream.getTracks().forEach((track)=>track.stop());
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
                } catch (e) {
                    console.error("Audio Web API error", e);
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
        setMessage((prev)=>prev + emojiData.emoji);
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
    const handleKeyDown = (e)=>{
        if (isRecordingAudio || isRecordingVideo) return;
        metrics.handleKeyDown(e);
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    const handleChange = (e)=>{
        if (isRecordingAudio || isRecordingVideo) return;
        const msg = e.target.value;
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
        setMessageStyle((prev)=>({
                ...prev,
                [style]: !prev[style]
            }));
    };
    const isRecording = isRecordingAudio || isRecordingVideo;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `chat-input relative px-3 py-2 rounded-[24px] m-[10px] shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] transition-colors duration-300 ${isIncognito ? 'bg-zinc-800' : 'bg-white/40 backdrop-blur-xl dark:bg-black/40'}`,
        children: [
            replyingTo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex items-center justify-between rounded-lg border-l-4 border-indigo-500 bg-white/40 dark:bg-zinc-800/40 backdrop-blur-md p-2 animate-fade-in-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold text-indigo-600 dark:text-indigo-400",
                                children: [
                                    "Replying to ",
                                    replyingTo.sender
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 303,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate text-xs text-zinc-600 dark:text-zinc-400",
                                children: [
                                    replyingTo.mediaType ? `[${replyingTo.mediaType}] ` : '',
                                    replyingTo.text
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 306,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 302,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCancelReply,
                        className: "ml-2 rounded-full p-1 text-zinc-500 hover:bg-white/20 dark:hover:bg-white/10 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "h-4 w-4",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M6 18L18 6M6 6l12 12"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 315,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/MessageInput.tsx",
                            lineNumber: 314,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 310,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                lineNumber: 301,
                columnNumber: 17
            }, this),
            showFontToolbar && !isRecording && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-12 left-4 z-50 flex items-center gap-1 rounded-xl bg-white/90 p-1 shadow-lg ring-1 ring-black/5 dark:bg-zinc-900/90 dark:ring-white/10 animate-fade-in-up backdrop-blur-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>toggleStyle('bold'),
                        className: `flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold transition-colors ${messageStyle.bold ? 'bg-zinc-100 text-indigo-600 dark:bg-zinc-700 dark:text-indigo-400' : 'text-zinc-500 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-white/10'}`,
                        children: "B"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 324,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>toggleStyle('italic'),
                        className: `flex h-8 w-8 items-center justify-center rounded-lg text-sm italic font-serif transition-colors ${messageStyle.italic ? 'bg-zinc-100 text-indigo-600 dark:bg-zinc-700 dark:text-indigo-400' : 'text-zinc-500 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-white/10'}`,
                        children: "I"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 330,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>toggleStyle('underline'),
                        className: `flex h-8 w-8 items-center justify-center rounded-lg text-sm underline transition-colors ${messageStyle.underline ? 'bg-zinc-100 text-indigo-600 dark:bg-zinc-700 dark:text-indigo-400' : 'text-zinc-500 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-white/10'}`,
                        children: "U"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 336,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                lineNumber: 323,
                columnNumber: 17
            }, this),
            isAttachOpen && !isRecording && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-20 left-4 z-50 flex flex-col min-w-[240px] gap-1 rounded-2xl bg-white/80 p-2 shadow-2xl backdrop-blur-2xl ring-1 ring-black/5 dark:bg-zinc-900/80 dark:ring-white/10 animate-fade-in-up origin-bottom-left border border-white/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>startRecording('video'),
                        className: "flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-200 dark:hover:bg-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-10 w-10 items-center justify-center rounded-full bg-red-100/80 text-red-600 dark:bg-red-900/40 dark:text-red-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 356,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                    lineNumber: 355,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 354,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "leading-tight",
                                        children: "Camera"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 360,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-zinc-400 dark:text-zinc-500",
                                        children: "Photos & Videos"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 361,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 359,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 350,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>document.getElementById('image-upload')?.click(),
                        className: "flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-200 dark:hover:bg-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-10 w-10 items-center justify-center rounded-full bg-purple-100/80 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z"
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "leading-tight",
                                        children: "Gallery"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 376,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-zinc-400 dark:text-zinc-500",
                                        children: "Send images"
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
                        lineNumber: 366,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "image-upload",
                        type: "file",
                        accept: "image/*",
                        className: "hidden",
                        onChange: (e)=>{
                            const file = e.target.files?.[0];
                            if (file && onSendMessage) {
                                const url = URL.createObjectURL(file);
                                onSendMessage(url, 'image');
                                setIsAttachOpen(false);
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 380,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>document.getElementById('doc-upload')?.click(),
                        className: "flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-200 dark:hover:bg-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-10 w-10 items-center justify-center rounded-full bg-blue-100/80 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 402,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                    lineNumber: 401,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 400,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "leading-tight",
                                        children: "Document"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 406,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-zinc-400 dark:text-zinc-500",
                                        children: "Share files"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 407,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 405,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 396,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "doc-upload",
                        type: "file",
                        accept: ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.zip",
                        className: "hidden",
                        onChange: (e)=>{
                            const file = e.target.files?.[0];
                            if (file && onSendMessage) {
                                const url = URL.createObjectURL(file);
                                const size = (file.size / (1024 * 1024)).toFixed(2) + " MB";
                                onSendMessage(url, 'file', undefined, undefined, undefined, undefined, file.name, size);
                                setIsAttachOpen(false);
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 410,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>alert("Polls coming soon!"),
                        className: "flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-200 dark:hover:bg-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-10 w-10 items-center justify-center rounded-full bg-amber-100/80 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 433,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                    lineNumber: 432,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 431,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "leading-tight",
                                        children: "Poll"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 437,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-zinc-400 dark:text-zinc-500",
                                        children: "Create a poll"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 438,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 436,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 427,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>alert("Contact sharing coming soon!"),
                        className: "flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-200 dark:hover:bg-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100/80 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 449,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                    lineNumber: 448,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 447,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "leading-tight",
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 453,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-zinc-400 dark:text-zinc-500",
                                        children: "Share contact"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 454,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 452,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 443,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>alert("Event creation coming soon!"),
                        className: "flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-200 dark:hover:bg-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-10 w-10 items-center justify-center rounded-full bg-orange-100/80 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 465,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                    lineNumber: 464,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 463,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "leading-tight",
                                        children: "Event"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 469,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-zinc-400 dark:text-zinc-500",
                                        children: "Create event"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 470,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 468,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 459,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setShowFontToolbar(!showFontToolbar);
                            setIsAttachOpen(false);
                        },
                        className: "flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-200 dark:hover:bg-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100/80 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-serif font-bold",
                                    children: "Aa"
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                    lineNumber: 483,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 482,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "leading-tight",
                                        children: "Text Options"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 486,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-zinc-400 dark:text-zinc-500",
                                        children: "Format text"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 487,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 485,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 475,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                lineNumber: 347,
                columnNumber: 17
            }, this),
            metrics.isUnsentIntent && !boundaryMode && !isEcho && !isRecording && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-6 left-6 text-xs italic text-zinc-400 animate-pulse bg-white/80 px-2 py-1 rounded-md shadow-sm dark:bg-zinc-800/80",
                children: "You almost said something here..."
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                lineNumber: 496,
                columnNumber: 17
            }, this),
            isEcho && !boundaryMode && !isRecording && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-6 left-6 text-xs font-medium text-amber-500 animate-fade-in-up bg-amber-50 px-2 py-1 rounded-md shadow-sm border border-amber-100 dark:bg-amber-900/30 dark:border-amber-800",
                children: "↺ Copycat? You said this recently."
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                lineNumber: 503,
                columnNumber: 17
            }, this),
            showEmojiPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-full left-4 mb-2 z-50 shadow-2xl rounded-2xl",
                ref: pickerRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    theme: theme === 'dark' ? __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Theme"].DARK : __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Theme"].LIGHT,
                    emojiStyle: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmojiStyle"].APPLE,
                    onEmojiClick: onEmojiClick,
                    width: 350,
                    height: 450,
                    searchDisabled: false,
                    skinTonesDisabled: false
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                    lineNumber: 510,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                lineNumber: 509,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex items-center gap-2 rounded-2xl bg-zinc-100/50 px-3 py-1.5 min-h-[38px] dark:bg-zinc-800/30 transition-all focus-within:ring-2 focus-within:ring-indigo-500/50 focus-within:bg-white/80 dark:focus-within:bg-zinc-800/80 backdrop-blur-sm ${isRecording ? 'ring-red-200 bg-red-50/50 dark:bg-red-900/20 dark:ring-red-900/50' : ''}`,
                children: [
                    isRecording && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-2 inset-y-2 flex items-center justify-between rounded-xl bg-red-50/90 dark:bg-red-900/40 z-10 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.2)] border border-red-100 dark:border-red-800/50 transition-all duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 pl-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 h-8 filter drop-shadow-[0_0_4px_rgba(108,92,231,0.4)]",
                                        children: isRecordingAudio ? waveBars.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-[3px] bg-indigo-500 rounded-full transition-[height] duration-75 ease-linear",
                                                style: {
                                                    height: `${h}px`
                                                }
                                            }, i, false, {
                                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                                lineNumber: 532,
                                                columnNumber: 37
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex h-3 w-3 relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative inline-flex rounded-full h-3 w-3 bg-red-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                                    lineNumber: 540,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                            lineNumber: 538,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 530,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `font-mono text-sm font-bold ${isRecordingAudio ? 'text-indigo-600 dark:text-indigo-400' : 'text-red-600 dark:text-red-400'}`,
                                                children: formatTime(timer)
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                                lineNumber: 546,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400",
                                                children: isRecordingAudio ? 'Mic Active' : 'Recording'
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                                lineNumber: 549,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 545,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 529,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 pr-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: cancelRecording,
                                        className: "p-2 rounded-full text-zinc-500 hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 transition-colors",
                                        title: "Cancel",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M6 18L18 6M6 6l12 12"
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                                lineNumber: 563,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                            lineNumber: 562,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 557,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: stopRecording,
                                        className: "flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white hover:bg-indigo-600 shadow-lg shadow-indigo-500/30 transition-all transform hover:scale-105 active:scale-95",
                                        title: "Send",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                                lineNumber: 571,
                                                columnNumber: 98
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                            lineNumber: 571,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 566,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 556,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 527,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 pl-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setIsAttachOpen(!isAttachOpen);
                                // Also close font toolbar if opening menu?
                                if (!isAttachOpen) setShowFontToolbar(false);
                            },
                            className: `flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ease-spring ${isAttachOpen ? 'rotate-45 bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-white' : 'text-zinc-500 hover:bg-white/20 hover:text-indigo-600 dark:text-zinc-400 dark:hover:bg-white/10'}`,
                            disabled: isRecording,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-5 w-5",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 4v16m8-8H4"
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                    lineNumber: 589,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 588,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/MessageInput.tsx",
                            lineNumber: 579,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 578,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            rows: 1,
                            value: message,
                            onChange: handleChange,
                            onKeyDown: handleKeyDown,
                            onInput: (e)=>{
                                const target = e.target;
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
                            lineNumber: 596,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 595,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 items-center gap-1 pr-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>startRecording('audio'),
                                disabled: isRecording,
                                className: `flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-white/20 hover:text-red-500 dark:hover:bg-white/10 ${isRecording ? 'opacity-0' : ''}`,
                                title: "Record Voice",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 638,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                    lineNumber: 637,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 631,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowEmojiPicker(!showEmojiPicker),
                                disabled: isRecording,
                                className: `flex h-8 w-8 items-center justify-center rounded-full transition-colors ${showEmojiPicker ? 'text-indigo-600 bg-indigo-50/50 dark:bg-indigo-500/10' : 'text-zinc-400 hover:bg-white/20 hover:text-zinc-600 dark:hover:bg-white/10'} ${isRecording ? 'opacity-0' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 650,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                    lineNumber: 649,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 644,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pl-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSend,
                                    disabled: !message.trim() || isRecording,
                                    className: `flex h-9 w-9 items-center justify-center rounded-full text-white shadow-lg transition-all hover:scale-105 active:scale-95 ${boundaryMode ? 'bg-zinc-600 shadow-zinc-500/30 hover:bg-zinc-700' : 'bg-indigo-600 shadow-indigo-500/30 hover:bg-indigo-700'} ${isRecording ? 'opacity-0' : ''}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-5 w-5 ml-0.5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2.5,
                                            d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                            lineNumber: 661,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                        lineNumber: 660,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                    lineNumber: 655,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                                lineNumber: 654,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/MessageInput.tsx",
                        lineNumber: 629,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/components/MessageInput.tsx",
                lineNumber: 522,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/privlink/src/components/MessageInput.tsx",
        lineNumber: 298,
        columnNumber: 9
    }, this);
}
}),
"[project]/privlink/src/components/RightPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RightPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function RightPanel({ chat, messages = [], onUpdateChat, onImageClick }) {
    const [isPulsing, setIsPulsing] = __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [activeTab, setActiveTab] = __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState('media');
    if (!chat) return null;
    const score = chat.interestScore || 100;
    // Derived Data
    const sharedImages = __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>messages.filter((m)=>m.type === 'image' && m.content).reverse(), [
        messages
    ]);
    // Pulse animation on score change
    __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        setIsPulsing(true);
        const timer = setTimeout(()=>setIsPulsing(false), 300);
        return ()=>clearTimeout(timer);
    }, [
        score
    ]);
    // ... (lines 24-160 are mostly same, skipping to render logic)
    const getScoreColorStyle = (score)=>{
        if (score >= 80) return 'var(--interest-high)';
        if (score >= 50) return 'var(--interest-mid)';
        return 'var(--interest-low)';
    };
    const scoreColorStyle = getScoreColorStyle(score);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "hidden w-72 flex-col border-l border-white/20 bg-white/40 backdrop-blur-xl dark:border-white/10 dark:bg-black/40 xl:flex xl:m-3 xl:rounded-3xl xl:border xl:h-[calc(100vh-24px)] overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto px-6 py-6 scrollbar-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-24 w-24 rounded-full bg-linear-to-tr from-purple-400 to-indigo-500 p-0.5 ring-4 ring-white dark:ring-zinc-900",
                                    children: chat.avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: chat.avatarUrl,
                                        alt: chat.name,
                                        className: "h-full w-full rounded-full object-cover bg-white"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                        lineNumber: 52,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-full w-full items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 font-bold text-2xl text-indigo-500",
                                        children: chat.name.substring(0, 2).toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                        lineNumber: 54,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                    lineNumber: 50,
                                    columnNumber: 25
                                }, this),
                                chat.isOnline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute bottom-1 right-1 h-5 w-5 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-zinc-900"
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                    lineNumber: 60,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-bold text-zinc-900 dark:text-white text-center",
                            children: chat.name
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                            lineNumber: 63,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium text-zinc-500 dark:text-zinc-400",
                            children: "@username"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex flex-col items-center justify-center relative group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-32 w-32 flex items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-full w-full rotate-[-90deg]",
                                        viewBox: "0 0 100 100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                        id: "scoreGradientHigh",
                                                        x1: "0%",
                                                        y1: "0%",
                                                        x2: "100%",
                                                        y2: "0%",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "0%",
                                                                stopColor: "#10B981"
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                lineNumber: 74,
                                                                columnNumber: 41
                                                            }, this),
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "100%",
                                                                stopColor: "#34D399"
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                lineNumber: 75,
                                                                columnNumber: 41
                                                            }, this),
                                                            " "
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                        id: "scoreGradientMid",
                                                        x1: "0%",
                                                        y1: "0%",
                                                        x2: "100%",
                                                        y2: "0%",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "0%",
                                                                stopColor: "#6366F1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                lineNumber: 78,
                                                                columnNumber: 41
                                                            }, this),
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "100%",
                                                                stopColor: "#818CF8"
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                lineNumber: 79,
                                                                columnNumber: 41
                                                            }, this),
                                                            " "
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                        id: "scoreGradientLow",
                                                        x1: "0%",
                                                        y1: "0%",
                                                        x2: "100%",
                                                        y2: "0%",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "0%",
                                                                stopColor: "#F59E0B"
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                lineNumber: 82,
                                                                columnNumber: 41
                                                            }, this),
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "100%",
                                                                stopColor: "#FBBF24"
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 41
                                                            }, this),
                                                            " "
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                lineNumber: 72,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                                                lineNumber: 88,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                                                lineNumber: 100,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                        lineNumber: 70,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex flex-col items-center justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-[-2px]",
                                                children: "Score"
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                lineNumber: 119,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-baseline gap-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-3xl font-bold transition-all duration-300 ease-out`,
                                                        style: {
                                                            color: score >= 80 ? '#10B981' : score >= 50 ? '#6366F1' : '#F59E0B',
                                                            transform: isPulsing ? 'scale(1.1)' : 'scale(1)'
                                                        },
                                                        children: score
                                                    }, void 0, false, {
                                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-medium text-zinc-300 dark:text-zinc-600",
                                                        children: "/100"
                                                    }, void 0, false, {
                                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                lineNumber: 120,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                        lineNumber: 118,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                lineNumber: 68,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                            lineNumber: 67,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex w-full gap-1 rounded-xl bg-zinc-100/50 p-1 dark:bg-zinc-800/50 backdrop-blur-sm",
                            children: [
                                'media',
                                'docs',
                                'links',
                                'settings'
                            ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab(tab),
                                    className: `flex-1 rounded-lg py-1.5 text-xs font-semibold capitalize transition-all border border-white/5 backdrop-blur-md ${activeTab === tab ? 'bg-white text-zinc-900 shadow-sm dark:bg-white dark:text-zinc-900' : 'text-zinc-500 hover:text-white bg-white/5 hover:bg-white/20 dark:text-zinc-400 dark:hover:bg-black/30'}`,
                                    children: tab
                                }, tab, false, {
                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                    lineNumber: 141,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                            lineNumber: 139,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                    lineNumber: 48,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex-1 min-h-0 flex flex-col",
                    children: [
                        activeTab === 'media' && (sharedImages.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-2 animate-fade-in-up",
                            children: sharedImages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-square relative group overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: msg.content,
                                            alt: "Shared media",
                                            className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                            lineNumber: 164,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                            lineNumber: 169,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, msg.id, true, {
                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                    lineNumber: 163,
                                    columnNumber: 37
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                            lineNumber: 161,
                            columnNumber: 29
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileEmptyState, {
                            type: "media"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                            lineNumber: 174,
                            columnNumber: 29
                        }, this)),
                        activeTab === 'docs' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileEmptyState, {
                            type: "docs"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                            lineNumber: 179,
                            columnNumber: 46
                        }, this),
                        activeTab === 'links' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileEmptyState, {
                            type: "links"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                            lineNumber: 182,
                            columnNumber: 47
                        }, this),
                        activeTab === 'settings' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 pt-2 animate-fade-in-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-bold uppercase tracking-wider text-zinc-400",
                                    children: "Relationship Settings"
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                    lineNumber: 187,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-semibold text-zinc-500 dark:text-zinc-400",
                                            children: "Relationship Mode"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                            lineNumber: 191,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex rounded-xl bg-white/20 p-1 dark:bg-black/20 border border-white/10 backdrop-blur-sm",
                                            children: [
                                                'work',
                                                'personal',
                                                'casual'
                                            ].map((mode)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>alert(`Set mode to ${mode} (Mock)`),
                                                    className: `flex-1 rounded-lg py-1.5 text-xs font-medium capitalize transition-all border border-white/5 backdrop-blur-md ${(chat.relationshipMode || 'personal') === mode ? 'bg-white text-zinc-900 shadow-sm dark:bg-white dark:text-zinc-900' : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white bg-white/5 hover:bg-white/20'}`,
                                                    children: mode
                                                }, mode, false, {
                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                            lineNumber: 192,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                    lineNumber: 190,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-4 border-t border-zinc-100 dark:border-zinc-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "mb-3 text-xs font-bold uppercase tracking-wider text-zinc-400",
                                            children: "Identity Layer"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                            lineNumber: 210,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-semibold text-zinc-500 dark:text-zinc-400",
                                                    children: "Your Alias in this Chat"
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                    lineNumber: 213,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-zinc-400",
                                                    children: "This is how you appear in this specific conversation."
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                            lineNumber: 211,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                    lineNumber: 209,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-4 border-t border-zinc-100 dark:border-zinc-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xs font-bold uppercase tracking-wider text-zinc-400",
                                                    children: "Wallpaper"
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 37
                                                }, this),
                                                chat.chatBackground && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                    lineNumber: 229,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                            lineNumber: 226,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-3 w-full cursor-pointer group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-10 w-10 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-500 group-hover:bg-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-400 transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-5 h-5",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                    lineNumber: 246,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                lineNumber: 245,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block text-sm font-medium text-zinc-700 dark:text-zinc-200",
                                                                children: "Choose from Gallery"
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                lineNumber: 250,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            accept: "image/*",
                                                            className: "hidden",
                                                            onChange: (e)=>{
                                                                const file = e.target.files?.[0];
                                                                if (!file) return;
                                                                const compressImage = (file)=>{
                                                                    return new Promise((resolve, reject)=>{
                                                                        const reader = new FileReader();
                                                                        reader.readAsDataURL(file);
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
                                                                        reader.onerror = (err)=>reject(err);
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
                                                                }).catch((err)=>{
                                                                    console.error("Compression failed:", err);
                                                                    alert('Failed to process image.');
                                                                });
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2 block",
                                                            children: "Textures"
                                                        }, void 0, false, {
                                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                            ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        const bg = {
                                                                            type: "texture",
                                                                            value: t.value,
                                                                            blur: 0,
                                                                            intensity: 0.15
                                                                        };
                                                                        try {
                                                                            localStorage.setItem(`chat-bg-${chat.id}`, JSON.stringify(bg));
                                                                            onUpdateChat?.({
                                                                                ...chat,
                                                                                chatBackground: bg
                                                                            });
                                                                        } catch (e) {
                                                                            console.error("Failed to save texture:", e);
                                                                            if (e.name === 'QuotaExceededError') alert("Storage full. Texture not saved.");
                                                                        }
                                                                    },
                                                                    className: `h-10 w-full rounded-xl border-2 bg-center bg-no-repeat transition-all hover:border-indigo-500 overflow-hidden relative flex items-center justify-center ${chat.chatBackground?.value === t.value ? 'border-indigo-500 shadow-lg scale-105' : 'border-zinc-100 dark:border-zinc-800 opacity-80 hover:opacity-100'}`,
                                                                    style: {
                                                                        backgroundImage: `url(${t.value})`,
                                                                        backgroundSize: '64px'
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "relative z-10 bg-black/20 backdrop-blur-[1px] px-1 rounded",
                                                                        children: t.id
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                        lineNumber: 349,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, t.id, false, {
                                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                    lineNumber: 334,
                                                                    columnNumber: 49
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                            lineNumber: 326,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 37
                                                }, this),
                                                chat.chatBackground && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4 pt-2 border-t border-zinc-100 dark:border-zinc-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-[10px] font-bold uppercase text-zinc-400",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Intensity"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                            lineNumber: 360,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                Math.round((chat.chatBackground.intensity ?? 0.15) * 100),
                                                                                "%"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                            lineNumber: 361,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                    lineNumber: 359,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "range",
                                                                    min: "0.05",
                                                                    max: "0.8",
                                                                    step: "0.01",
                                                                    value: chat.chatBackground.intensity ?? 0.15,
                                                                    onChange: (e)=>{
                                                                        const val = parseFloat(e.target.value);
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
                                                                        } catch (e) {
                                                                            // Silent fail for slider to avoid spamming alerts
                                                                            console.error("Failed to save intensity:", e);
                                                                        }
                                                                    },
                                                                    className: "w-full h-1.5 bg-zinc-100 rounded-lg appearance-none cursor-pointer dark:bg-zinc-800 accent-indigo-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                    lineNumber: 363,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                            lineNumber: 358,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-[10px] font-bold uppercase text-zinc-400",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Blur"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                            lineNumber: 386,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                chat.chatBackground.blur ?? 10,
                                                                                "px"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                            lineNumber: 387,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                    lineNumber: 385,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "range",
                                                                    min: "0",
                                                                    max: "40",
                                                                    step: "1",
                                                                    value: chat.chatBackground.blur ?? 10,
                                                                    onChange: (e)=>{
                                                                        const val = parseInt(e.target.value);
                                                                        const newBg = {
                                                                            ...chat.chatBackground,
                                                                            blur: val
                                                                        };
                                                                        try {
                                                                            localStorage.setItem(`chat-bg-${chat.id}`, JSON.stringify(newBg));
                                                                            onUpdateChat?.({
                                                                                ...chat,
                                                                                chatBackground: newBg
                                                                            });
                                                                        } catch (e) {
                                                                            // Silent fail for slider
                                                                            console.error("Failed to save blur:", e);
                                                                        }
                                                                    },
                                                                    className: "w-full h-1.5 bg-zinc-100 rounded-lg appearance-none cursor-pointer dark:bg-zinc-800 accent-indigo-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                                    lineNumber: 389,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                            lineNumber: 241,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                    lineNumber: 225,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-4 border-t border-zinc-100 dark:border-zinc-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "mb-3 text-xs font-bold uppercase tracking-wider text-zinc-400",
                                            children: "Chat Rules"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                            lineNumber: 415,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between rounded-xl bg-white/50 p-3 border border-white/10 dark:bg-zinc-900/30 backdrop-blur-sm shadow-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-zinc-900 dark:text-white text-sm",
                                                        children: "Allow Forwarding"
                                                    }, void 0, false, {
                                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${chat.permissions?.allowForward ? 'bg-indigo-600' : 'bg-red-500'}`,
                                                        onClick: ()=>onUpdateChat?.({
                                                                ...chat,
                                                                permissions: {
                                                                    ...chat.permissions,
                                                                    allowForward: !chat.permissions?.allowForward
                                                                }
                                                            }),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${chat.permissions?.allowForward ? 'translate-x-4.5' : 'translate-x-0.5'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                            lineNumber: 423,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                        lineNumber: 419,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                lineNumber: 417,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                            lineNumber: 416,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                    lineNumber: 414,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-4 border-t border-zinc-100 dark:border-zinc-800",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full flex items-center justify-center gap-2 rounded-xl border border-red-200/50 bg-red-50/50 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-100/80 dark:border-red-900/30 dark:bg-red-950/20 dark:text-red-400 dark:hover:bg-red-950/40 transition-colors backdrop-blur-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                                lineNumber: 431,
                                                columnNumber: 37
                                            }, this),
                                            "End-to-End Encrypted"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                        lineNumber: 430,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                                    lineNumber: 429,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/privlink/src/components/RightPanel.tsx",
                            lineNumber: 186,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                    lineNumber: 156,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/privlink/src/components/RightPanel.tsx",
            lineNumber: 45,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/privlink/src/components/RightPanel.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
function ProfileEmptyState({ type }) {
    const config = {
        media: {
            title: "No media shared yet",
            subtitle: "Photos and videos will appear here",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "h-8 w-8 text-zinc-300 dark:text-zinc-600",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.5,
                    d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                    lineNumber: 456,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                lineNumber: 455,
                columnNumber: 17
            }, this)
        },
        docs: {
            title: "No documents",
            subtitle: "Files shared in chat will appear here",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "h-8 w-8 text-zinc-300 dark:text-zinc-600",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.5,
                    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                    lineNumber: 465,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                lineNumber: 464,
                columnNumber: 17
            }, this)
        },
        links: {
            title: "No links shared",
            subtitle: "URLs shared in chat will appear here",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "h-8 w-8 text-zinc-300 dark:text-zinc-600",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.5,
                    d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/RightPanel.tsx",
                    lineNumber: 474,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                lineNumber: 473,
                columnNumber: 17
            }, this)
        }
    };
    const { title, subtitle, icon } = config[type];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center text-center opacity-60 py-8 px-4 transition-opacity duration-200 ease-in-out h-full animate-fade-in-up",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-50 dark:bg-zinc-800/50",
                children: icon
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                lineNumber: 484,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-medium text-zinc-900 dark:text-white",
                children: title
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                lineNumber: 487,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 max-w-[180px] text-xs text-zinc-500 dark:text-zinc-400",
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/RightPanel.tsx",
                lineNumber: 488,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/privlink/src/components/RightPanel.tsx",
        lineNumber: 483,
        columnNumber: 9
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/privlink/src/components/AppNavigation.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/privlink/src/components/AppNavigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/privlink/src/components/AppNavigation.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
function AppNavigation() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const toggleOpen = ()=>setIsOpen(!isOpen);
    const menuItems = [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebar} ${isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].open : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggle} z-50`,
                type: "button",
                onClick: toggleOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    className: "w-5 h-5 ml-[2px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inner,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoIcon,
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M13 2L3 14H12L11 22L21 10H12L13 2Z",
                                    fill: "#656aff",
                                    stroke: "#656aff",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "BOLT UI"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].search,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                className: `w-5 h-5 ${__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchIcon}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchInput
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menu,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menuIndicator,
                                style: {
                                    '--top': `${activeIndex === 0 ? 0 : activeIndex * 56}px`
                                }
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            menuItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menuButton} ${activeIndex === index ? __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                                    onClick: ()=>{
                                        setActiveIndex(index);
                                        if (item.id === 'settings') {
                                            router.push('/settings');
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            className: `w-6 h-6 ${__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menuButtonIcon}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: item.iconPath
                                            }, void 0, false, {
                                                fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/components/AppNavigation.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/privlink/src/components/AppNavigation.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/privlink/src/lib/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockChats",
    ()=>mockChats,
    "mockMessages",
    ()=>mockMessages
]);
const mockChats = [];
const mockMessages = {};
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[project]/privlink/src/hooks/useSocket.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSocket",
    ()=>useSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/privlink/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) <locals>");
;
;
const useSocket = ()=>{
    const [socket, setSocket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const socketInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])({
            path: '/api/socket/io',
            addTrailingSlash: false
        });
        socketInstance.on('connect', ()=>{
            console.log('Connected to backend socket');
            setIsConnected(true);
        });
        socketInstance.on('disconnect', ()=>{
            console.log('Disconnected from backend socket');
            setIsConnected(false);
        });
        setSocket(socketInstance);
        return ()=>{
            socketInstance.disconnect();
        };
    }, []);
    return {
        socket,
        isConnected
    };
};
}),
"[project]/privlink/src/app/chat/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/components/Sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$ChatHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/components/ChatHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$MessageBubble$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/components/MessageBubble.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$MessageInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/components/MessageInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$RightPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/components/RightPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/components/AppNavigation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$store$2f$useSettingsStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/store/useSettingsStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$hooks$2f$useSocket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/hooks/useSocket.ts [app-ssr] (ecmascript)");
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
    const [isAttentionActive, setIsAttentionActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastActivityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(Date.now());
    const attentionTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleActivity = ()=>{
            lastActivityRef.current = Date.now();
            if (!isAttentionActive && document.hasFocus()) {
                setIsAttentionActive(true);
            }
            // Reset "Idle" timer
            if (attentionTimeoutRef.current) clearTimeout(attentionTimeoutRef.current);
            attentionTimeoutRef.current = setTimeout(()=>{
                setIsAttentionActive(false);
            }, 2000); // 2 seconds idle = No attention
        };
        const handleFocus = ()=>handleActivity();
        const handleBlur = ()=>setIsAttentionActive(false);
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
    }, [
        isAttentionActive
    ]);
    return isAttentionActive;
}
;
function Home() {
    const [showRightPanel, setShowRightPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isIncognito, setIsIncognito] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGhostTyping, setIsGhostTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { updateProfile, silentRead, experiments } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$store$2f$useSettingsStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    // 🧪 Experiment: Neon Mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (experiments.neonMode) {
            document.body.classList.add('neon-mode');
        } else {
            document.body.classList.remove('neon-mode');
        }
    }, [
        experiments.neonMode
    ]);
    // 🧪 Experiment: Ghost Typing Simulation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!experiments.ghostTyping) {
            setIsGhostTyping(false);
            return;
        }
        // Randomly show typing every 10-25 seconds
        const loop = ()=>{
            const delay = Math.random() * 15000 + 10000;
            setTimeout(()=>{
                if (experiments.ghostTyping) {
                    setIsGhostTyping(true);
                    // Stop typing after 3-5 seconds
                    setTimeout(()=>{
                        setIsGhostTyping(false);
                        loop(); // Schedule next
                    }, Math.random() * 2000 + 3000);
                }
            }, delay);
        };
        loop();
        return ()=>setIsGhostTyping(false); // Cleanup isn't perfect here but good enough for experiment
    }, [
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let zoomTimeout;
        const handleWheel = (e)=>{
            if (e.ctrlKey) {
                const active = document.activeElement;
                if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) {
                    active.blur();
                }
            }
        };
        const handleResize = ()=>{
            // If visual viewport scale > 1, it means we are zoomed in
            if (window.visualViewport && window.visualViewport.scale > 1) {
                const active = document.activeElement;
                if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) {
                    active.blur();
                }
            }
        };
        window.addEventListener("wheel", handleWheel, {
            passive: true
        });
        if (window.visualViewport) {
            window.visualViewport.addEventListener("resize", handleResize);
        }
        return ()=>{
            window.removeEventListener("wheel", handleWheel);
            if (window.visualViewport) {
                window.visualViewport.removeEventListener("resize", handleResize);
            }
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
        updateProfile
    ]);
    const [chats, setChats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeChatId, setActiveChatId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [userPrefs, setUserPrefs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Persist Active Chat
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeChatId) {
            localStorage.setItem("privlink_last_chat_id", activeChatId);
        }
    }, [
        activeChatId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const stored = localStorage.getItem("userPrefs");
        if (stored) {
            try {
                setUserPrefs(JSON.parse(stored));
            } catch (e) {
                console.error("Failed to parse userPrefs", e);
            }
        }
    }, []);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Offline / Queue State
    const [isOnline, setIsOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [messageQueue, setMessageQueue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Reply State
    const [replyingTo, setReplyingTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMounted(true);
    }, []);
    // Socket Integration
    const { socket, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$hooks$2f$useSocket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSocket"])();
    // Join Chat Room
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (socket && activeChatId) {
            socket.emit('join_chat', activeChatId);
        }
    }, [
        socket,
        activeChatId
    ]);
    // Listen for Messages
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!socket) return;
        socket.on('receive_message', (data)=>{
            // Only append if it's the current chat to avoid pollution
            setMessages((prev)=>{
                if (prev.some((m)=>m.id === data.id)) return prev;
                return [
                    ...prev,
                    data
                ];
            });
            // Clear typing indicator for sender
            setTypingUsers((prev)=>{
                const next = new Set(prev);
                next.delete(data.senderId || 'Unknown'); // Use ID or Name
                return next;
            });
        });
        socket.on('user_typing', (data)=>{
            setTypingUsers((prev)=>{
                const next = new Set(prev);
                next.add(data.username);
                return next;
            });
        });
        socket.on('user_stop_typing', (data)=>{
            setTypingUsers((prev)=>{
                const next = new Set(prev);
                next.delete(data.username);
                return next;
            });
        });
        socket.on('reaction_added', (data)=>{
            setMessages((prev)=>prev.map((msg)=>{
                    if (msg.id === data.messageId) {
                        const existingReaction = msg.reactions?.find((r)=>r.emoji === data.emoji);
                        const newReactions = existingReaction ? msg.reactions?.map((r)=>r.emoji === data.emoji ? {
                                ...r,
                                count: r.count + 1
                            } : r) : [
                            ...msg.reactions || [],
                            {
                                emoji: data.emoji,
                                count: 1
                            }
                        ];
                        return {
                            ...msg,
                            reactions: newReactions
                        };
                    }
                    return msg;
                }));
        });
        return ()=>{
            socket.off('receive_message');
            socket.off('user_typing');
            socket.off('user_stop_typing');
            socket.off('reaction_added');
        };
    }, [
        socket,
        activeChatId
    ]);
    // Typing Logic
    const [typingUsers, setTypingUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
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
    // Load Chats from API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchChats = async ()=>{
            try {
                const res = await fetch('/api/chats?userId=' + (sessionStorage.getItem("alias") || "anon"));
                if (!res.ok) throw new Error("Failed to load chats");
                const data = await res.json();
                if (data && data.length > 0) {
                    // Hydrate with local backgrounds
                    const hydratedChats = data.map((chat)=>{
                        const storedBg = localStorage.getItem(`chat-bg-${chat.id}`);
                        if (storedBg) {
                            try {
                                return {
                                    ...chat,
                                    chatBackground: JSON.parse(storedBg)
                                };
                            } catch (e) {
                                console.error("Failed to parse bg", e);
                                return chat;
                            }
                        }
                        return chat;
                    });
                    setChats(hydratedChats);
                    const savedActiveId = localStorage.getItem("privlink_last_chat_id");
                    if (savedActiveId && data.some((c)=>c.id === savedActiveId)) {
                        setActiveChatId(savedActiveId);
                    } else {
                        setActiveChatId(data[0].id);
                    }
                } else {
                    // Auto-create default chat if none exist
                    const createRes = await fetch('/api/chats', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: 'General',
                            isGroup: true
                        })
                    });
                    const newChat = await createRes.json();
                    setChats([
                        newChat
                    ]);
                    setActiveChatId(newChat.id);
                }
            } catch (e) {
                console.error("API Error (Chats):", e);
                setChats([]);
                setActiveChatId("");
            }
        };
        fetchChats();
    }, []);
    // Network Status & Queue Processing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // 1. Initial State
        setIsOnline(navigator.onLine);
        // 2. Listeners
        const handleOnline = ()=>{
            setIsOnline(true);
        // Queue processing removed for ephemeral mode
        };
        const handleOffline = ()=>setIsOnline(false);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return ()=>{
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);
    const saveChats = (updatedChats)=>{
        setChats(updatedChats);
    // Persistence removed
    };
    const [isScrolledBottom, setIsScrolledBottom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isScrolledHeader, setIsScrolledHeader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // Header calm-down state
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Attention Tracking
    const hasAttention = useAttention();
    // Screenshot heuristic state
    const lastBlurTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const chatsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(chats);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        chatsRef.current = chats;
    }, [
        chats
    ]);
    // Selective Read Logic
    const readUpto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((messageId)=>{
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
        const currentChat = chatsRef.current.find((c)=>c.id === activeChatId);
        if (!hasAttention || silentRead || currentChat?.isSilentRead || currentChat?.boundaryMode) return;
        setChats((prev)=>prev.map((c)=>{
                if (c.id === activeChatId && (c.unreadCount || 0) > 0) {
                    // Simple Mock: If we see the *last* message, clear unread count.
                    // In real app, we'd check index > readIndex.
                    const isLastMessage = messages.length > 0 && messages[messages.length - 1].id === messageId;
                    if (isLastMessage) {
                        return {
                            ...c,
                            unreadCount: 0
                        };
                    }
                }
                return c;
            }));
    }, [
        activeChatId,
        hasAttention,
        messages,
        silentRead
    ]);
    // Use IntersectionObserver to call readUpto for *visible* messages AND track Heatmap
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!scrollContainerRef.current) return;
        const entryTimes = new Map();
        const observer = new IntersectionObserver((entries)=>{
            const now = Date.now();
            entries.forEach((entry)=>{
                const messageId = entry.target.getAttribute("data-message-id");
                if (!messageId) return;
                if (entry.isIntersecting) {
                    // READ LOGIC
                    if (hasAttention) readUpto(messageId);
                    // HEATMAP START
                    if (!entryTimes.has(messageId)) {
                        entryTimes.set(messageId, now);
                    }
                } else {
                    // HEATMAP END
                    const startTime = entryTimes.get(messageId);
                    if (startTime) {
                        const duration = now - startTime;
                        entryTimes.delete(messageId);
                        // Calculate Heat Score
                        setMessages((prev)=>prev.map((msg)=>{
                                if (msg.id === messageId) {
                                    // Formula: Heat = Duration (ms) / Length (chars) * Factor
                                    // Example: 2000ms / 20 chars = 100 heat. 
                                    // Threshold ~ 50.
                                    const length = msg.content?.length || 10;
                                    const score = Math.min(100, Math.floor(duration / length * 0.5)); // Arbitrary factor
                                    // Only update if significantly hotter or new
                                    if (score > (msg.heatScore || 0)) {
                                        return {
                                            ...msg,
                                            heatScore: score
                                        };
                                    }
                                }
                                return msg;
                            }));
                    }
                }
            });
        }, {
            root: scrollContainerRef.current,
            threshold: 0.8
        });
        // Note: We need to actually observe elements. Since we render messages in a map, 
        // we'll need to make sure we query them. 
        // For this iteration, we assume the MessageBubble container has data-message-id
        // We will add this observation logic in a separate effect or after render in a real app,
        // but for this file structure, we might need to select them manually:
        const userMessages = document.querySelectorAll("[data-message-id]");
        userMessages.forEach((el)=>observer.observe(el));
        return ()=>observer.disconnect();
    }, [
        readUpto,
        hasAttention,
        messages
    ]); // Re-run when messages change to observe new ones
    // Auto-scroll logic also triggers read if attention is present
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isScrolledBottom) {
            scrollToBottom();
            if (messages.length > 0) {
                readUpto(messages[messages.length - 1].id);
            }
        }
    }, [
        messages,
        isScrolledBottom,
        readUpto
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Screenshot Detection Heuristics
        const handleVisibilityChange = ()=>{
            if (document.hidden) {
                // Heuristic: If hidden shortly after blur, possible screenshot/recording setup or switching
                console.warn("Visibility hidden - Possible capture event");
            }
        };
        const handleBlur = ()=>{
            lastBlurTime.current = Date.now();
            console.log("Window blurred");
        };
        // Combined Heuristic (Example: Blur + Hidden within small window)
        const checkHeuristics = ()=>{
            if (document.hidden && Date.now() - lastBlurTime.current < 500) {
                console.warn("High Probability Screenshot/Capture detected");
            }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);
        window.addEventListener("blur", handleBlur);
        document.addEventListener("visibilitychange", checkHeuristics);
        return ()=>{
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            window.removeEventListener("blur", handleBlur);
            document.removeEventListener("visibilitychange", checkHeuristics);
        };
    }, []);
    // Auto-Archive Effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;
        const now = Date.now();
        setChats((prev)=>{
            let hasChanges = false;
            const updated = prev.map((chat)=>{
                const chatTime = new Date(chat.timestamp || Date.now()).getTime();
                // If older than 30 days and NOT already archived
                if (now - chatTime > THIRTY_DAYS_MS && !chat.isArchived) {
                    hasChanges = true;
                    return {
                        ...chat,
                        isArchived: true
                    };
                }
                return chat;
            });
            return hasChanges ? updated : prev;
        });
    }, []); // Run once on mount
    // Get current chat details
    const activeChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // Safety check: chats might be empty initially before loading from local storage
        if (chats.length === 0) return null;
        const chat = chats.find((c)=>c.id === activeChatId) || chats[0];
        if (!chat) return null;
        // Dynamic Analysis: Calculate Psychometrics from real messages
        if (messages.length > 0) {
            // 1. Gravity (Initiation Balance)
            let myStarts = 0;
            let theirStarts = 0;
            let lastTime = 0;
            messages.forEach((msg)=>{
                const msgTime = new Date(msg.timestamp).getTime(); // Note: Mock timestamps are strings like "10:23 AM", so parsing might fail without date. 
            // Mock timestamps are "10:23 AM". We need robust parsing or just assume basic flow for now.
            // Let's rely on simple `isConsecutive` logic: A "Start" is a message that is NOT consecutive and follows a long gap.
            // Since we don't have exact Dates in mock, we'll simpler heuristic:
            // Who sent the *first* message of the day/session?
            // Or ratio of total messages?
            // Let's use Message Count Ratio for Gravity for now as it's robust.
            // Gravity = Initiation. Let's approximation: Who sent more messages that started a block?
            });
            // Simpler Gravity: Message Count Ratio (Who drives the volume?)
            const myMsgCount = messages.filter((m)=>m.isMe).length;
            const theirMsgCount = messages.length - myMsgCount;
            const ratio = myMsgCount / (messages.length || 1);
            let computedGravity = 'balanced';
            if (ratio > 0.65) computedGravity = 'one-sided-me';
            if (ratio < 0.35) computedGravity = 'one-sided-them';
            // 2. Persona (Time of Day - Last few messages)
            // Parse time string "10:23 AM"
            const times = messages.filter((m)=>!m.isMe).map((m)=>{
                if (!m.timestamp || typeof m.timestamp !== 'string') return null;
                const parts = m.timestamp.split(' ');
                // If format is not "HH:MM AM/PM", try standard date parsing
                if (parts.length < 2) {
                    const date = new Date(m.timestamp);
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
            }).filter((h)=>h !== null);
            let computedPersona = 'balanced';
            if (times.length > 0) {
                const avgHour = times.reduce((a, b)=>a + b, 0) / times.length;
                if (avgHour >= 5 && avgHour < 12) computedPersona = 'morning';
                if (avgHour >= 22 || avgHour < 4) computedPersona = 'night';
            }
            // 3. Energy Balance (Length of messages)
            const myLength = messages.filter((m)=>m.isMe).reduce((acc, m)=>acc + (m.content?.length || 0), 0);
            const theirLength = messages.filter((m)=>!m.isMe).reduce((acc, m)=>acc + (m.content?.length || 0), 0);
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
                ...chat,
                gravity: computedGravity,
                persona: computedPersona,
                energyBalance: computedEnergy,
                conversationWeight: computedWeight
            };
        }
        return chat;
    }, [
        activeChatId,
        chats,
        messages
    ]);
    // Mark chat as seen with delay
    const markAsSeen = (chatId)=>{
        // Respect "Seen Silently" mode AND "Boundary Mode"
        const currentChat = chats.find((c)=>c.id === chatId);
        if (silentRead || currentChat?.boundaryMode) return;
        // Human-like delay logic
        const delay = Math.floor(Math.random() * 2500) + 1500;
        setTimeout(()=>{
            setChats((prev)=>prev.map((chat)=>chat.id === chatId && (chat.unreadCount || 0) > 0 ? {
                        ...chat,
                        unreadCount: 0
                    } : chat));
        }, delay);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeChatId && isScrolledBottom) {
            markAsSeen(activeChatId);
        }
    }, [
        activeChatId,
        isScrolledBottom
    ]);
    // Load messages from API when active chat changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!activeChatId) return;
        const fetchMessages = async ()=>{
            try {
                const res = await fetch(`/api/messages/${activeChatId}`);
                if (!res.ok) throw new Error("Failed to load messages");
                const data = await res.json();
                const currentUser = sessionStorage.getItem("alias");
                const processed = data.map((m)=>({
                        ...m,
                        // Map DB fields to UI fields if needed, or ensuring compatibility
                        id: m.id,
                        content: m.content,
                        type: m.type || 'text',
                        timestamp: m.createdAt ? new Date(m.createdAt).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                        }) : m.timestamp,
                        isMe: m.sender?.username === currentUser || m.senderId === currentUser,
                        status: 'read' // db messages are historically read
                    }));
                setMessages(processed);
            } catch (e) {
                console.error("API Error (Messages):", e);
                setMessages([]);
            }
        };
        fetchMessages();
    }, [
        activeChatId
    ]);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    // Smarter Auto-Scroll Logic
    const prevMessagesLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(messages.length);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Only handle auto-scroll if new messages are added
        if (messages.length > prevMessagesLength.current) {
            const lastMessage = messages[messages.length - 1];
            // If I sent it, or if I was already at the bottom, scroll down
            if (lastMessage.isMe || isScrolledBottom) {
                scrollToBottom();
            }
        }
        prevMessagesLength.current = messages.length;
    }, [
        messages,
        isScrolledBottom
    ]);
    // Handle chat selection with "Biometric Lock"
    const handleChatSelect = (chatId)=>{
        const chat = chats.find((c)=>c.id === chatId);
        if (chat?.isLocked) {
            // Mock Biometric Auth
            const isAuthenticated = window.confirm(`🔐 "Biometric Scan" Required\n\nClick OK to simulate successful FaceID/TouchID.`);
            if (!isAuthenticated) return;
        }
        setActiveChatId(chatId);
        setShowRightPanel(true); // Ensure panel opens on mobile/tablet logic if applicable
    };
    const handleRetry = (id)=>{
        const msg = messages.find((m)=>m.id === id);
        if (!msg) return;
        // Remove failed message
        setMessages((prev)=>prev.filter((m)=>m.id !== id));
        // Resend
        handleSendMessage(msg.content, msg.type, msg.duration, msg.confidenceScore, msg.thumbnailUrl, msg.style);
    };
    const handleReaction = (messageId, emoji)=>{
        if (!socket || !activeChatId) return;
        // Optimistic Update
        setMessages((prev)=>prev.map((msg)=>{
                if (msg.id === messageId) {
                    const existingReaction = msg.reactions?.find((r)=>r.emoji === emoji);
                    const newReactions = existingReaction ? msg.reactions?.map((r)=>r.emoji === emoji ? {
                            ...r,
                            count: r.count + 1
                        } : r) : [
                        ...msg.reactions || [],
                        {
                            emoji,
                            count: 1
                        }
                    ];
                    return {
                        ...msg,
                        reactions: newReactions
                    };
                }
                return msg;
            }));
        socket.emit('add_reaction', {
            chatId: activeChatId,
            messageId,
            emoji
        });
    };
    const handleSetDisappearingDuration = async (duration)=>{
        if (!activeChatId) return;
        // Optimistic Update
        const updatedChat = {
            ...activeChat,
            disappearingDuration: duration
        };
        // @ts-ignore - setChats might expect full Chat object but we are updating activeChat derived state? 
        // Wait, activeChat is derived from chats.find. We need to update chats state.
        setChats((prev)=>prev.map((c)=>c.id === activeChatId ? {
                    ...c,
                    disappearingDuration: duration
                } : c));
        try {
            await fetch(`/api/chats/${activeChatId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    disappearingDuration: duration
                })
            });
        } catch (e) {
            console.error("Failed to update disappearing duration", e);
        // Revert on error could be added here
        }
    };
    const handleSendMessage = (content, type, duration, confidenceScore, thumbnailUrl, style, fileName, fileSize)=>{
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
            duration: duration,
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
        // Save to Database
        const saveMessage = async ()=>{
            let finalContent = content;
            let finalMediaUrl = thumbnailUrl;
            // If media type, upload to Cloudinary if it's a data or blob URL
            if (type !== 'text' && (content.startsWith('data:') || content.startsWith('blob:'))) {
                try {
                    // Convert data URL to Blob
                    const res = await fetch(content);
                    const blob = await res.blob();
                    const formData = new FormData();
                    formData.append('file', blob);
                    const uploadRes = await fetch('/api/upload', {
                        method: 'POST',
                        body: formData
                    });
                    if (uploadRes.ok) {
                        const uploadData = await uploadRes.json();
                        finalContent = uploadData.secure_url;
                        finalMediaUrl = uploadData.secure_url; // For now use same, or thumbnails if generated by cloudinary
                    }
                } catch (e) {
                    console.error("Cloudinary upload failed", e);
                }
            }
            fetch('/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content: finalContent,
                    chatId: activeChatId,
                    senderId: sessionStorage.getItem("alias") || "Anonymous",
                    type,
                    mediaUrl: finalMediaUrl,
                    fileName,
                    fileSize
                })
            }).catch((err)=>console.error("Failed to save message to DB", err));
        };
        saveMessage();
        setReplyingTo(null); // Clear reply state
        // UPDATE SIDEBAR ("You: ...")
        const updatedChats = chats.map((c)=>{
            if (c.id === activeChatId) {
                let preview = content;
                if (isIncognito) preview = '🔒 Incognito Message';
                else if (type === 'image') preview = '📷 Photo';
                else if (type === 'video') preview = '📹 Video';
                else if (type === 'audio') preview = '🎤 Audio';
                return {
                    ...c,
                    lastMessage: `You: ${preview}`,
                    time: 'Just now',
                    unreadCount: 0
                };
            }
            return c;
        });
        // Sort active chat to top
        updatedChats.sort((a, b)=>a.id === activeChatId ? -1 : b.id === activeChatId ? 1 : 0);
        setChats(updatedChats);
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
                } catch (e) {
                    console.error("Failed to save queue:", e);
                }
            }
            return; // Stop here, don't simulate network events
        }
        // Simulate "Drift" reduction on interaction
        if (activeChat.driftLevel === 'high') {
            const updatedChats = chats.map((c)=>c.id === activeChatId ? {
                    ...c,
                    driftLevel: 'medium'
                } : c);
        // In a real app, we'd update the store/state properly
        // setChats(updatedChats);
        }
        // Simulate backend "Delivered" event (Receiver Socket Connected)
        setTimeout(()=>{
            setMessages((prev)=>prev.map((m)=>m.id === newMessage.id ? {
                        ...m,
                        status: 'delivered',
                        deliveredAt: new Date().toISOString()
                    } : m));
            // Simulate "Read" event (Chat Open + Bottom Scroll + Delay)
            let baseDelay = activeChat.avgReadTime || 2000;
            if (activeChat.relationshipMode === 'work') baseDelay = 500; // Instant
            if (activeChat.relationshipMode === 'casual') baseDelay = 20000; // Slow
            // Add variance: +/- 20%
            const variance = baseDelay * 0.2;
            const adaptiveDelay = baseDelay + (Math.random() * variance * 2 - variance);
            setTimeout(()=>{
                setMessages((prev)=>prev.map((m)=>m.id === newMessage.id ? {
                            ...m,
                            status: 'read',
                            readAt: new Date().toISOString()
                        } : m));
            }, adaptiveDelay);
        }, 1500);
    };
    const handleCreateChat = (data)=>{
        const newChat = {
            id: Date.now().toString(),
            name: data.name,
            lastMessage: `Welcome to ${data.name}!`,
            time: 'Just now',
            unreadCount: 0,
            isOnline: true,
            avatarUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}&background=random`,
            // @ts-ignore - straightforward for mock purposes
            type: data.type,
            isArchived: false
        };
        saveChats([
            newChat,
            ...chats
        ]);
        setActiveChatId(newChat.id);
        // Initialize empty messages for the new chat
        __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockMessages"][newChat.id] = [
            {
                id: 'welcome',
                type: 'text',
                content: `This is the start of your new ${data.type}: ${data.name}. ${data.description ? `\n\n${data.description}` : ''}`,
                timestamp: new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                }),
                isMe: false
            }
        ];
        setMessages(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockMessages"][newChat.id]);
    };
    const handleArchiveChat = (chatId)=>{
        const updated = chats.map((chat)=>chat.id === chatId ? {
                ...chat,
                isArchived: !chat.isArchived
            } : chat);
        saveChats(updated);
    };
    const handleDeleteChat = (chatId)=>{
        if (confirm("Are you sure you want to delete this chat?")) {
            const updated = chats.filter((c)=>c.id !== chatId);
            saveChats(updated);
            if (activeChatId === chatId && updated.length > 0) {
                setActiveChatId(updated[0].id);
            } else if (updated.length === 0) {
                setActiveChatId("");
            }
        }
    };
    if (!isMounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen w-full overflow-hidden bg-transparent text-zinc-900 dark:text-zinc-100 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex md:my-3 md:ml-3 md:h-[calc(100vh-24px)] rounded-[24px] overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/20 dark:border-white/10 z-20 shrink-0 bg-[#1c1b2a]/90 backdrop-blur-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$AppNavigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/privlink/src/app/chat/page.tsx",
                        lineNumber: 1010,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        chats: chats,
                        activeChatId: activeChatId,
                        onSelectChat: handleChatSelect,
                        onCreateChat: handleCreateChat,
                        onArchiveChat: handleArchiveChat,
                        onDeleteChat: handleDeleteChat
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/chat/page.tsx",
                        lineNumber: 1011,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/app/chat/page.tsx",
                lineNumber: 1009,
                columnNumber: 7
            }, this),
            !activeChat ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 items-center justify-center bg-background text-zinc-400",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Select a conversation to start chatting."
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/chat/page.tsx",
                    lineNumber: 1024,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/privlink/src/app/chat/page.tsx",
                lineNumber: 1023,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: `flex flex-1 flex-col min-w-0 relative transition-colors duration-[120000ms] ease-linear
            ${activeChat.permissions?.allowScreenshot === false ? 'select-none decoration-clone' : ''}
            md:rounded-[18px] md:m-2 md:overflow-hidden shadow-sm
          `,
                onContextMenu: (e)=>{
                    if (activeChat.permissions?.allowSaveMedia === false) {
                        e.preventDefault();
                    }
                },
                style: {
                    backgroundColor: 'transparent' // Let the wallpaper/global background handle it
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 overflow-hidden pointer-events-none select-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                lineNumber: 1043,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-white/20 dark:bg-black/30 mix-blend-overlay"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/app/chat/page.tsx",
                                lineNumber: 1064,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/app/chat/page.tsx",
                        lineNumber: 1042,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 z-0 transition-opacity duration-1000",
                        style: {
                            background: `radial-gradient(circle at center, transparent 50%, rgba(0,0,0, ${Math.max(0.02, (activeChat.conversationWeight || 0) * 0.004)}) 100%)`,
                            boxShadow: `inset 0 0 ${(activeChat.conversationWeight || 0) * 2}px rgba(0,0,0, ${(activeChat.conversationWeight || 0) * 0.0005})`
                        }
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/chat/page.tsx",
                        lineNumber: 1068,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$ChatHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                            lineNumber: 1077,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/chat/page.tsx",
                        lineNumber: 1076,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: scrollContainerRef,
                        onScroll: handleScroll,
                        className: "chat-center relative z-10 flex-1 overflow-y-auto p-4 sm:p-6 no-scrollbar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-3xl space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400",
                                        children: "Today"
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/app/chat/page.tsx",
                                        lineNumber: 1107,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/app/chat/page.tsx",
                                    lineNumber: 1106,
                                    columnNumber: 15
                                }, this),
                                messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center justify-center h-full text-zinc-500 mt-20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "No messages yet."
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/app/chat/page.tsx",
                                        lineNumber: 1114,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/app/chat/page.tsx",
                                    lineNumber: 1113,
                                    columnNumber: 17
                                }, this) : messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-message-id": msg.id,
                                        className: `flex w-full ${msg.isMe ? 'justify-start' : 'justify-end'} ${msg.isConsecutive ? 'mt-1' : 'mt-4'}`,
                                        onContextMenu: (e)=>{
                                            e.preventDefault();
                                            handleReply(msg);
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$MessageBubble$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            type: msg.type || 'text',
                                            content: msg.content || '',
                                            timestamp: msg.timestamp,
                                            isMe: msg.isMe,
                                            duration: msg.duration,
                                            thumbnailUrl: msg.thumbnailUrl,
                                            fileName: msg.fileName,
                                            fileSize: msg.fileSize,
                                            reactions: msg.reactions,
                                            isConsecutive: msg.isConsecutive,
                                            status: msg.status,
                                            heatScore: msg.heatScore,
                                            confidenceScore: msg.confidenceScore,
                                            style: msg.style,
                                            replyTo: msg.replyTo,
                                            onReplyClick: scrollToMessage,
                                            onImageClick: (url)=>setSelectedImage(url),
                                            onRetry: ()=>handleRetry(msg.id),
                                            onReaction: (emoji)=>handleReaction(msg.id, emoji)
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/app/chat/page.tsx",
                                            lineNumber: 1127,
                                            columnNumber: 21
                                        }, this)
                                    }, msg.id, false, {
                                        fileName: "[project]/privlink/src/app/chat/page.tsx",
                                        lineNumber: 1118,
                                        columnNumber: 19
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: messagesEndRef
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/app/chat/page.tsx",
                                    lineNumber: 1151,
                                    columnNumber: 15
                                }, this),
                                (typingUsers.size > 0 || isGhostTyping) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-4 flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500 animate-pulse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 animate-bounce",
                                                    style: {
                                                        animationDelay: '0ms'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/app/chat/page.tsx",
                                                    lineNumber: 1157,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 animate-bounce",
                                                    style: {
                                                        animationDelay: '150ms'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/app/chat/page.tsx",
                                                    lineNumber: 1158,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 animate-bounce",
                                                    style: {
                                                        animationDelay: '300ms'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/app/chat/page.tsx",
                                                    lineNumber: 1159,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/privlink/src/app/chat/page.tsx",
                                            lineNumber: 1156,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: typingUsers.size > 0 ? `${Array.from(typingUsers).join(', ')} is typing...` : 'Someone is typing...'
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/app/chat/page.tsx",
                                            lineNumber: 1161,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/privlink/src/app/chat/page.tsx",
                                    lineNumber: 1155,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/privlink/src/app/chat/page.tsx",
                            lineNumber: 1103,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/chat/page.tsx",
                        lineNumber: 1098,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$MessageInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            onSendMessage: handleSendMessage,
                            boundaryMode: activeChat.boundaryMode,
                            isIncognito: isIncognito,
                            recentMessages: messages.filter((m)=>m.isMe).slice(-5).map((m)=>m.content || ""),
                            selfAlias: activeChat.selfAlias,
                            replyingTo: replyingTo,
                            onCancelReply: cancelReply,
                            onTyping: handleTyping
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/app/chat/page.tsx",
                            lineNumber: 1173,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/chat/page.tsx",
                        lineNumber: 1172,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/app/chat/page.tsx",
                lineNumber: 1027,
                columnNumber: 9
            }, this),
            showRightPanel && activeChat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$RightPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                chat: activeChat,
                messages: messages,
                onImageClick: (url)=>setSelectedImage(url),
                onUpdateChat: (updated)=>{
                    const newChats = chats.map((c)=>c.id === updated.id ? updated : c);
                    saveChats(newChats);
                // Also update local activeChat state if needed by reference (usually covered by hook or memo but safe to rely on chats prop)
                }
            }, void 0, false, {
                fileName: "[project]/privlink/src/app/chat/page.tsx",
                lineNumber: 1189,
                columnNumber: 9
            }, this),
            selectedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in",
                onClick: ()=>setSelectedImage(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectedImage(null),
                        className: "absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-8 h-8",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M6 18L18 6M6 6l12 12"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/app/chat/page.tsx",
                                lineNumber: 1212,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/app/chat/page.tsx",
                            lineNumber: 1211,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/chat/page.tsx",
                        lineNumber: 1207,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-[90vw] max-h-[90vh]",
                        onClick: (e)=>e.stopPropagation(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: selectedImage,
                            alt: "Full screen",
                            className: "max-h-[90vh] max-w-full object-contain rounded-lg shadow-2xl"
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/app/chat/page.tsx",
                            lineNumber: 1218,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/chat/page.tsx",
                        lineNumber: 1217,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/app/chat/page.tsx",
                lineNumber: 1202,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/privlink/src/app/chat/page.tsx",
        lineNumber: 1007,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1d1fa912._.js.map