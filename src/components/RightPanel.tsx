import React from 'react';
import { Chat } from '@/lib/data';

interface RightPanelProps {
    chat?: Chat;
}

export default function RightPanel({ chat }: RightPanelProps) {
    const [isPulsing, setIsPulsing] = React.useState(false);

    if (!chat) return null;

    const score = chat.interestScore || 100;

    // Pulse animation on score change
    React.useEffect(() => {
        setIsPulsing(true);
        const timer = setTimeout(() => setIsPulsing(false), 300);
        return () => clearTimeout(timer);
    }, [score]);

    // Calculate color based on score using tokens is tricky with Tailwind classes if we want exact vars
    // But we can use style prop or custom classes. Let's use style prop for the tokens to be specific.
    const getScoreColorStyle = (score: number) => {
        if (score >= 80) return 'var(--interest-high)';
        if (score >= 50) return 'var(--interest-mid)';
        return 'var(--interest-low)';
    };

    const scoreColorStyle = getScoreColorStyle(score);

    return (
        <aside className="hidden h-full w-72 flex-col border-l border-zinc-200 bg-white/50 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/50 xl:flex">

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6 scrollbar-none">

                {/* Profile */}
                <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                        <div className="h-24 w-24 rounded-full bg-linear-to-tr from-purple-400 to-indigo-500 p-0.5 ring-4 ring-white dark:ring-zinc-900">
                            {chat.avatarUrl ? (
                                <img src={chat.avatarUrl} alt={chat.name} className="h-full w-full rounded-full object-cover bg-white" />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 font-bold text-2xl text-indigo-500">
                                    {chat.name.substring(0, 2).toUpperCase()}
                                </div>
                            )}
                        </div>
                        {chat.isOnline && (
                            <span className="absolute bottom-1 right-1 h-5 w-5 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-zinc-900" />
                        )}
                    </div>
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-white text-center">{chat.name}</h2>
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">@username</p>

                    {/* Interest Score Badge */}
                    <div className="mt-4 flex flex-col items-center gap-1 rounded-2xl bg-zinc-50 px-4 py-3 dark:bg-zinc-800/50">
                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Interest Score</span>
                        <div className="flex items-baseline gap-1">
                            <span
                                className={`text-2xl font-bold transition-all duration-300 ease-out`}
                                style={{
                                    color: scoreColorStyle,
                                    transform: isPulsing ? 'scale(1.03)' : 'scale(1)'
                                }}
                            >
                                {score}
                            </span>
                            <span className="text-xs font-medium text-zinc-400 opacity-[0.35]">/100</span>
                        </div>
                    </div>

                    <div className="mt-6 flex w-full gap-2">
                        <button className="flex-1 rounded-xl bg-zinc-100 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700">
                            Profile
                        </button>
                        <button className="flex-1 rounded-xl border border-zinc-200 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800">
                            Mute
                        </button>
                    </div>
                </div>

                {/* Sections */}
                <div className="mt-8 space-y-6">

                    {/* Shared Media */}
                    <div>
                        <div className="mb-3 flex items-center justify-between">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Shared Media</h3>
                            <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400">See All</button>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="aspect-square relative overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
                                    {/* Placeholder for media */}
                                    <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 to-purple-500/10 hover:opacity-75 transition-opacity" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Shared Files */}
                    <div>
                        <div className="mb-3 flex items-center justify-between">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Files & Docs</h3>
                            <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400">See All</button>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400">
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <h4 className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-100">Project_specs.pdf</h4>
                                    <p className="text-xs text-zinc-500">2.4 MB • 2m ago</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <h4 className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-100">Guidelines.docx</h4>
                                    <p className="text-xs text-zinc-500">1.8 MB • 1h ago</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <div className="mb-3 flex items-center justify-between">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Shared Links</h3>
                            <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400">See All</button>
                        </div>
                        <div className="space-y-3">
                            <div className="px-1">
                                <a href="#" className="mb-1 block truncate text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400">
                                    https://dribbble.com/shots/123...
                                </a>
                                <p className="text-xs text-zinc-500">Dribbble - Design Inspiration</p>
                            </div>
                            <div className="px-1">
                                <a href="#" className="mb-1 block truncate text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400">
                                    https://www.figma.com/file/xyz...
                                </a>
                                <p className="text-xs text-zinc-500">Figma - Project Files</p>
                            </div>
                        </div>
                    </div>

                    {/* Relationship Settings (New) */}
                    <div className="mt-6 border-t border-zinc-100 pt-6 dark:border-zinc-800">
                        <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-zinc-400">Relationship Settings</h3>

                        {/* One-way Silent Mode */}
                        <div className="mb-4 flex items-center justify-between">
                            <div>
                                <div className="font-medium text-zinc-900 dark:text-white">Ghost Mode</div>
                                <div className="text-xs text-zinc-500 dark:text-zinc-400">Read without receipts</div>
                            </div>
                            <button
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${chat.isSilentRead ? 'bg-indigo-600' : 'bg-zinc-200 dark:bg-zinc-700'}`}
                                // Mock Toggle Logic (In real app, update store/backend)
                                onClick={() => alert("Ghost Mode toggled (Mock)")}
                            >
                                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${chat.isSilentRead ? 'translate-x-6' : 'translate-x-1'}`} />
                            </button>
                        </div>

                        {/* Relationship Mode */}
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Relationship Mode</label>
                            <div className="flex rounded-xl bg-zinc-100 p-1 dark:bg-zinc-800">
                                {['work', 'personal', 'casual'].map((mode) => (
                                    <button
                                        key={mode}
                                        onClick={() => alert(`Set mode to ${mode} (Mock)`)}
                                        className={`flex-1 rounded-lg py-1.5 text-xs font-medium capitalize transition-all ${(chat.relationshipMode || 'personal') === mode
                                            ? 'bg-white text-zinc-900 shadow-sm dark:bg-zinc-700 dark:text-white'
                                            : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                                            }`}
                                    >
                                        {mode}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </aside>
    );
}
