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
        className: "hidden w-80 flex-col border-r border-white/20 dark:border-white/10 md:flex h-full overflow-hidden",
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
"[project]/privlink/src/app/settings/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Settings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/components/Sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$store$2f$useSettingsStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/store/useSettingsStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/privlink/src/lib/data.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function Settings() {
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const { silentRead, toggleSilentRead, profile, updateProfile, experiments, toggleExperiment } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$store$2f$useSettingsStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Profile Edit State
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editForm, setEditForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        displayName: "",
        username: "",
        bio: ""
    });
    // Sync form with store on mount/update
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (profile) {
            setEditForm({
                displayName: profile.displayName,
                username: profile.username,
                bio: profile.bio
            });
        }
    }, [
        profile
    ]);
    const handleSaveProfile = ()=>{
        updateProfile(editForm);
        setIsEditing(false);
    };
    const handleImageUpload = (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        // Limit size to 2MB to prevent LocalStorage quota errors
        if (file.size > 2 * 1024 * 1024) {
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
    };
    // Prevent hydration mismatch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    if (!mounted) {
        return null; // Or a skeleton/loading state
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen w-full overflow-hidden bg-transparent text-zinc-900 dark:text-zinc-100 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                chats: __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockChats"],
                activeChatId: "",
                onSelectChat: ()=>{}
            }, void 0, false, {
                fileName: "[project]/privlink/src/app/settings/page.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex flex-1 flex-col min-w-0 bg-white/30 dark:bg-zinc-900/30 backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "flex h-16 shrink-0 items-center justify-between border-b border-zinc-200 bg-white/50 px-6 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/chat",
                                    className: "flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-white/50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white backdrop-blur-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-5 w-5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl font-bold text-zinc-900 dark:text-white",
                                    children: "Settings"
                                }, void 0, false, {
                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                            lineNumber: 79,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-2xl space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-semibold text-zinc-900 dark:text-white",
                                                    children: "Profile"
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>isEditing ? handleSaveProfile() : setIsEditing(true),
                                                    className: `px-4 py-1.5 rounded-lg text-sm font-medium transition-all backdrop-blur-md border border-white/10 ${isEditing ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-500/20' : 'bg-white/50 text-zinc-600 hover:bg-white dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-700/50 shadow-sm'}`,
                                                    children: isEditing ? 'Save Changes' : 'Edit Profile'
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl border border-white/20 bg-white/50 p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900/50 backdrop-blur-md",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-tr from-purple-400 to-indigo-500 text-3xl font-bold text-white ring-4 ring-zinc-50 dark:ring-zinc-800 overflow-hidden",
                                                                children: profile.avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: profile.avatarUrl,
                                                                    alt: "Profile",
                                                                    className: "h-full w-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                    lineNumber: 112,
                                                                    columnNumber: 49
                                                                }, this) : profile.displayName.substring(0, 2).toUpperCase()
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                lineNumber: 110,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: `absolute inset-0 flex items-center justify-center bg-black/50 rounded-full cursor-pointer transition-opacity ${isEditing ? 'opacity-0 group-hover:opacity-100' : 'opacity-0 pointer-events-none'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "file",
                                                                        accept: "image/*",
                                                                        className: "hidden",
                                                                        disabled: !isEditing,
                                                                        onChange: handleImageUpload
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                        lineNumber: 120,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "h-8 w-8 text-white",
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        stroke: "currentColor",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                                lineNumber: 128,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                                lineNumber: 129,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                        lineNumber: 127,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "mb-1 block text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400",
                                                                                children: "Display Name"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                                lineNumber: 137,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                value: editForm.displayName,
                                                                                onChange: (e)=>setEditForm({
                                                                                        ...editForm,
                                                                                        displayName: e.target.value
                                                                                    }),
                                                                                disabled: !isEditing,
                                                                                className: `w-full rounded-xl border px-4 py-2 text-sm font-medium outline-none transition-all ${isEditing ? 'border-zinc-300 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white' : 'border-transparent bg-transparent text-zinc-900 dark:text-white px-0'}`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                                lineNumber: 138,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                        lineNumber: 136,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "mb-1 block text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400",
                                                                                children: "Username"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                                lineNumber: 150,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `flex items-center rounded-xl border px-4 py-2 transition-all ${isEditing ? 'border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800' : 'border-transparent bg-transparent px-0'}`,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-zinc-500 dark:text-zinc-500 mr-1",
                                                                                        children: "@"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                                        lineNumber: 155,
                                                                                        columnNumber: 53
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "text",
                                                                                        value: editForm.username,
                                                                                        onChange: (e)=>setEditForm({
                                                                                                ...editForm,
                                                                                                username: e.target.value
                                                                                            }),
                                                                                        disabled: !isEditing,
                                                                                        className: `w-full bg-transparent text-sm font-medium outline-none dark:text-white ${!isEditing && 'pointer-events-none'}`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                                        lineNumber: 156,
                                                                                        columnNumber: 53
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                                lineNumber: 151,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                        lineNumber: 149,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                lineNumber: 135,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "mb-1 block text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400",
                                                                        children: "Bio"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                        lineNumber: 167,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: editForm.bio,
                                                                        onChange: (e)=>setEditForm({
                                                                                ...editForm,
                                                                                bio: e.target.value
                                                                            }),
                                                                        disabled: !isEditing,
                                                                        className: `w-full rounded-xl border px-4 py-2 text-sm font-medium outline-none transition-all ${isEditing ? 'border-zinc-300 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white' : 'border-transparent bg-transparent text-zinc-600 dark:text-zinc-300 px-0'}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                        lineNumber: 168,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                lineNumber: 108,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mb-4 text-lg font-semibold text-zinc-900 dark:text-white",
                                            children: "Account Security"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl border border-white/20 bg-white/50 p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900/50 backdrop-blur-md space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "mb-1 block text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400",
                                                            children: "Recovery Email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "email",
                                                                    value: profile.email || "",
                                                                    onChange: (e)=>updateProfile({
                                                                            email: e.target.value
                                                                        }),
                                                                    placeholder: "your@email.com",
                                                                    className: "flex-1 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:bg-zinc-900 transition-all"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                    lineNumber: 192,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "px-4 py-2 rounded-xl bg-white/50 text-zinc-600 font-medium text-sm hover:bg-white dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-700/50 transition-colors backdrop-blur-md border border-white/10 shadow-sm",
                                                                    children: "Verify"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                    lineNumber: 199,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-[10px] text-zinc-400",
                                                            children: "Used for account recovery only. Never shared."
                                                        }, void 0, false, {
                                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-px bg-zinc-100 dark:bg-zinc-800"
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-medium text-zinc-900 dark:text-white",
                                                                            children: "Password"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                            lineNumber: 212,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-zinc-500 dark:text-zinc-400",
                                                                            children: "Last changed 3 months ago"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                            lineNumber: 213,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                    lineNumber: 211,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "px-4 py-1.5 rounded-lg border border-zinc-200/50 bg-white/50 text-sm font-medium text-zinc-700 hover:bg-white dark:border-zinc-700/50 dark:text-zinc-300 dark:hover:bg-zinc-800/50 transition-colors backdrop-blur-md",
                                                                    children: "Change"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                    lineNumber: 215,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-medium text-zinc-900 dark:text-white",
                                                                            children: "Two-Factor Authentication"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                            lineNumber: 222,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-zinc-500 dark:text-zinc-400",
                                                                            children: "Add an extra layer of security"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                            lineNumber: 223,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                    lineNumber: 221,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-200 transition-colors dark:bg-zinc-700",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                        lineNumber: 226,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                    lineNumber: 225,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                            lineNumber: 187,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 flex items-center justify-between",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg font-semibold text-zinc-900 dark:text-white",
                                                        children: "Experimental Labs 🧪"
                                                    }, void 0, false, {
                                                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-zinc-500 dark:text-zinc-400 max-w-sm",
                                                        children: "Test potential new features. These may be unstable."
                                                    }, void 0, false, {
                                                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                lineNumber: 237,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                            lineNumber: 236,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "divide-y divide-zinc-100/20 rounded-2xl border border-white/20 bg-white/50 shadow-sm dark:divide-white/5 dark:border-white/10 dark:bg-zinc-900/50 backdrop-blur-md",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium text-zinc-900 dark:text-white",
                                                                    children: "Neon Mode"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-zinc-500 dark:text-zinc-400",
                                                                    children: "Add a futuristic glow to the interface"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                    lineNumber: 246,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>toggleExperiment('neonMode'),
                                                            className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${experiments?.neonMode ? 'bg-indigo-600' : 'bg-zinc-200 dark:bg-zinc-700'}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${experiments?.neonMode ? 'translate-x-6' : 'translate-x-1'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                            lineNumber: 248,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium text-zinc-900 dark:text-white",
                                                                    children: "UI Sounds"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                    lineNumber: 257,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-zinc-500 dark:text-zinc-400",
                                                                    children: "Play subtle sounds for interactions"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                    lineNumber: 258,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                            lineNumber: 256,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>toggleExperiment('uiSounds'),
                                                            className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${experiments?.uiSounds ? 'bg-indigo-600' : 'bg-zinc-200 dark:bg-zinc-700'}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${experiments?.uiSounds ? 'translate-x-6' : 'translate-x-1'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                lineNumber: 264,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium text-zinc-900 dark:text-white",
                                                                    children: "Ghost Typing"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                    lineNumber: 269,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-zinc-500 dark:text-zinc-400",
                                                                    children: 'See "ghost" typing indicators (Simulated)'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                    lineNumber: 270,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                            lineNumber: 268,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>toggleExperiment('ghostTyping'),
                                                            className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${experiments?.ghostTyping ? 'bg-indigo-600' : 'bg-zinc-200 dark:bg-zinc-700'}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${experiments?.ghostTyping ? 'translate-x-6' : 'translate-x-1'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                lineNumber: 276,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                            lineNumber: 242,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                    lineNumber: 235,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mb-4 text-lg font-semibold text-red-600 dark:text-red-500",
                                            children: "Danger Zone"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                            lineNumber: 284,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl border border-red-200/30 bg-red-50/40 p-6 dark:border-red-900/30 dark:bg-red-950/20 backdrop-blur-md dark:text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium text-zinc-900 dark:text-white",
                                                                    children: "Log Out"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                    lineNumber: 288,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-zinc-500 dark:text-zinc-400",
                                                                    children: "End your session on this device"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                    lineNumber: 289,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                            lineNumber: 287,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>alert("Logging out... (Simulated)"),
                                                            className: "px-4 py-1.5 rounded-lg border border-zinc-200/50 bg-white/50 text-sm font-medium text-zinc-700 hover:bg-white dark:border-zinc-700/50 dark:bg-zinc-800/30 dark:text-zinc-300 dark:hover:bg-zinc-700/50 transition-colors shadow-sm backdrop-blur-md",
                                                            children: "Log Out"
                                                        }, void 0, false, {
                                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium text-red-600 dark:text-red-400",
                                                                    children: "Delete Account"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                    lineNumber: 301,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-red-600/70 dark:text-red-400/70",
                                                                    children: "Permanently delete your account and all data"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                    lineNumber: 302,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>confirm("Are you sure? This action cannot be undone.") && alert("Account deletion initiated (Simulated)"),
                                                            className: "px-4 py-1.5 rounded-lg bg-red-600/90 text-sm font-medium text-white hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30 transition-all shadow-md shadow-red-500/20 backdrop-blur-md",
                                                            children: "Delete Account"
                                                        }, void 0, false, {
                                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                            lineNumber: 304,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                            lineNumber: 285,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                    lineNumber: 283,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mb-4 text-lg font-semibold text-zinc-900 dark:text-white",
                                            children: "Appearance"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                            lineNumber: 318,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl border border-white/20 bg-white/50 p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900/50 backdrop-blur-md",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-3 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setTheme('light'),
                                                        className: `group flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all ${theme === 'light' ? 'border-indigo-600 bg-indigo-50/50 dark:border-indigo-500 dark:bg-indigo-500/10' : 'border-transparent bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-20 w-full rounded-lg bg-white shadow-sm ring-1 ring-zinc-200"
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-sm font-semibold ${theme === 'light' ? 'text-indigo-700 dark:text-indigo-400' : 'text-zinc-600 dark:text-zinc-400'}`,
                                                                children: "Light"
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 41
                                                            }, this),
                                                            theme === 'light' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute right-2 top-2 h-4 w-4 rounded-full bg-indigo-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                lineNumber: 327,
                                                                columnNumber: 63
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setTheme('dark'),
                                                        className: `group flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all ${theme === 'dark' ? 'border-indigo-600 bg-indigo-50/50 dark:border-indigo-500 dark:bg-indigo-500/10' : 'border-transparent bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-20 w-full rounded-lg bg-zinc-950 shadow-sm ring-1 ring-zinc-800"
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-sm font-medium ${theme === 'dark' ? 'text-indigo-700 dark:text-indigo-400' : 'text-zinc-600 dark:text-zinc-400'}`,
                                                                children: "Dark"
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                lineNumber: 334,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setTheme('system'),
                                                        className: `group flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all ${theme === 'system' ? 'border-indigo-600 bg-indigo-50/50 dark:border-indigo-500 dark:bg-indigo-500/10' : 'border-transparent bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex h-20 w-full overflow-hidden rounded-lg shadow-sm ring-1 ring-zinc-200 dark:ring-zinc-800",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-1/2 bg-white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                        lineNumber: 341,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-1/2 bg-zinc-950"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                        lineNumber: 342,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                lineNumber: 340,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-sm font-medium ${theme === 'system' ? 'text-indigo-700 dark:text-indigo-400' : 'text-zinc-600 dark:text-zinc-400'}`,
                                                                children: "System"
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                lineNumber: 344,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                            lineNumber: 319,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mb-4 text-lg font-semibold text-zinc-900 dark:text-white",
                                            children: "Privacy"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                            lineNumber: 352,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl border border-white/20 bg-white/50 p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900/50 backdrop-blur-md",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium text-zinc-900 dark:text-white",
                                                                children: "Seen Silently Mode"
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                lineNumber: 356,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-zinc-500 dark:text-zinc-400",
                                                                children: "Read messages without sending receipts"
                                                            }, void 0, false, {
                                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: toggleSilentRead,
                                                        className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${silentRead ? 'bg-indigo-600' : 'bg-zinc-200 dark:bg-zinc-700'}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${silentRead ? 'translate-x-6' : 'translate-x-1'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                            lineNumber: 363,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                        lineNumber: 359,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                lineNumber: 354,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                            lineNumber: 353,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                    lineNumber: 351,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mb-4 text-lg font-semibold text-zinc-900 dark:text-white",
                                            children: "Security & Backup"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                            lineNumber: 371,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl border border-white/20 bg-white/50 p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900/50 backdrop-blur-md",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BackupManager, {}, void 0, false, {
                                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                lineNumber: 373,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                            lineNumber: 372,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                    lineNumber: 370,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mb-4 text-lg font-semibold text-zinc-900 dark:text-white",
                                            children: "Notifications"
                                        }, void 0, false, {
                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                            lineNumber: 379,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "divide-y divide-zinc-100/20 rounded-2xl border border-white/20 bg-white/50 shadow-sm dark:divide-white/5 dark:border-white/10 dark:bg-zinc-900/50 backdrop-blur-md",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationToggle, {
                                                    title: "Direct Messages",
                                                    desc: "Receive notifications for direct messages",
                                                    defaultChecked: true
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationToggle, {
                                                    title: "Group Mentions",
                                                    desc: "Get notified when you're mentioned",
                                                    defaultChecked: true
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationToggle, {
                                                    title: "Email Notifications",
                                                    desc: "Receive a daily digest of missed messages",
                                                    defaultChecked: false
                                                }, void 0, false, {
                                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                                            lineNumber: 380,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                                    lineNumber: 378,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                            lineNumber: 91,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                        lineNumber: 90,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/app/settings/page.tsx",
                lineNumber: 75,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/privlink/src/app/settings/page.tsx",
        lineNumber: 66,
        columnNumber: 9
    }, this);
}
function BackupManager() {
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "h-5 w-5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                lineNumber: 455,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/privlink/src/app/settings/page.tsx",
                            lineNumber: 454,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                        lineNumber: 453,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-medium text-zinc-900 dark:text-white",
                                children: "Encrypted Local Backup"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                lineNumber: 459,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-zinc-500 dark:text-zinc-400",
                                children: [
                                    "Export your chats and settings to a local file. Your data is encrypted with the password you provide.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: " You hold the key."
                                    }, void 0, false, {
                                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                                        lineNumber: 462,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                lineNumber: 460,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                        lineNumber: 458,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/app/settings/page.tsx",
                lineNumber: 452,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3 rounded-xl bg-white/20 p-4 dark:bg-white/5 border border-white/10 backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-xs font-semibold uppercase text-zinc-400",
                        children: "Set Backup Password"
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                        lineNumber: 468,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                value: password,
                                onChange: (e)=>setPassword(e.target.value),
                                placeholder: "Enter a strong password...",
                                className: "flex-1 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                lineNumber: 470,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleBackup,
                                disabled: isExporting || !password,
                                className: "flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 disabled:opacity-50",
                                children: isExporting ? 'Encrypting...' : 'Download Backup'
                            }, void 0, false, {
                                fileName: "[project]/privlink/src/app/settings/page.tsx",
                                lineNumber: 477,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                        lineNumber: 469,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] text-zinc-400",
                        children: "Warning: If you lose this password, this backup cannot be recovered. We do not store your password."
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                        lineNumber: 485,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/app/settings/page.tsx",
                lineNumber: 467,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/privlink/src/app/settings/page.tsx",
        lineNumber: 451,
        columnNumber: 9
    }, this);
}
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
    // Pack: Salt (16) + IV (12) + Content
    const blob = new Blob([
        salt,
        iv,
        new Uint8Array(encryptedContent)
    ], {
        type: 'application/octet-stream'
    });
    return blob;
}
function NotificationToggle({ title, desc, defaultChecked }) {
    const [checked, setChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultChecked);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-medium text-zinc-900 dark:text-white",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                        lineNumber: 540,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-zinc-500 dark:text-zinc-400",
                        children: desc
                    }, void 0, false, {
                        fileName: "[project]/privlink/src/app/settings/page.tsx",
                        lineNumber: 541,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/privlink/src/app/settings/page.tsx",
                lineNumber: 539,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setChecked(!checked),
                className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${checked ? 'bg-indigo-600' : 'bg-zinc-200 dark:bg-zinc-700'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$privlink$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`
                }, void 0, false, {
                    fileName: "[project]/privlink/src/app/settings/page.tsx",
                    lineNumber: 547,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/privlink/src/app/settings/page.tsx",
                lineNumber: 543,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/privlink/src/app/settings/page.tsx",
        lineNumber: 538,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=privlink_src_d1422cd3._.js.map