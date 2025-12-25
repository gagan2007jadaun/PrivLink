import React from 'react';
import { Chat } from '@/lib/data';

interface RightPanelProps {
    chat?: Chat;
    onUpdateChat?: (updatedChat: Chat) => void;
}

export default function RightPanel({ chat, onUpdateChat }: RightPanelProps) {
    const [isPulsing, setIsPulsing] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState<'media' | 'docs' | 'links' | 'settings'>('media');

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

                    {/* Curiosity Index (New) */}
                    <div className="mt-2 flex w-full items-center justify-between rounded-xl bg-zinc-50 px-4 py-3 dark:bg-zinc-800/50">
                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Curiosity</span>
                        <div className="flex items-center gap-2">
                            <div className="h-1.5 w-16 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
                                <div
                                    className="h-full bg-indigo-500 transition-all duration-500"
                                    style={{ width: `${chat.mutualCuriosity || 0}%` }}
                                />
                            </div>
                            <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">{chat.mutualCuriosity || 0}%</span>
                        </div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="mt-6 flex w-full gap-1 rounded-xl bg-zinc-100 p-1 dark:bg-zinc-800">
                        {(['media', 'docs', 'links', 'settings'] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex-1 rounded-lg py-1.5 text-xs font-semibold capitalize transition-all ${activeTab === tab
                                    ? 'bg-white text-zinc-900 shadow-sm dark:bg-zinc-700 dark:text-white'
                                    : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="mt-6 flex-1 min-h-0 flex flex-col">

                    {/* MEDIA TAB */}
                    {activeTab === 'media' && (() => {
                        const mediaList: any[] = []; // Dummy grid removed

                        if (mediaList.length === 0) {
                            return <ProfileEmptyState type="media" />;
                        }

                        return (
                            <div className="space-y-4 animate-fade-in duration-200">
                                <div className="grid grid-cols-3 gap-2">
                                    {mediaList.map((i) => (
                                        <div key={i} className="aspect-square relative overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800 cursor-pointer group">
                                            <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 to-purple-500/10 group-hover:opacity-75 transition-opacity" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })()}

                    {/* DOCS TAB */}
                    {activeTab === 'docs' && (() => {
                        const docsList: any[] = [];

                        if (docsList.length === 0) {
                            return <ProfileEmptyState type="docs" />;
                        }

                        return (
                            <div className="space-y-3 animate-fade-in duration-200">
                                {docsList.map((doc, i) => (
                                    <div key={i} className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
                                        <div className="flex-1 overflow-hidden">
                                            <h4 className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-100">{doc.name}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    })()}

                    {/* LINKS TAB */}
                    {activeTab === 'links' && (() => {
                        const linksList: any[] = [];

                        if (linksList.length === 0) {
                            return <ProfileEmptyState type="links" />;
                        }

                        return (
                            <div className="space-y-4 animate-fade-in duration-200">
                                {linksList.map((link, i) => (
                                    <div key={i} className="group rounded-xl border border-zinc-100 bg-white p-3 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50">
                                        <p className="mb-1 text-xs font-semibold text-zinc-400">{link.site}</p>
                                        <a href="#" className="block truncate text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400">
                                            {link.url}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        );
                    })()}

                    {/* SETTINGS TAB */}
                    {activeTab === 'settings' && (
                        <div className="space-y-6 pt-2 animate-fade-in-up">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Relationship Settings</h3>

                            {/* Silent Boundary Mode */}
                            <div className="flex items-center justify-between rounded-xl bg-white p-3 border border-zinc-100 dark:bg-zinc-900/50 dark:border-zinc-800">
                                <div>
                                    <div className="font-medium text-zinc-900 dark:text-white text-sm">Silent Boundary</div>
                                    <div className="text-xs text-zinc-500 dark:text-zinc-400">Hide typing & read status</div>
                                </div>
                                <button
                                    className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${chat.boundaryMode ? 'bg-indigo-600' : 'bg-zinc-200 dark:bg-zinc-700'}`}
                                    onClick={() => alert("Silent Boundary Mode toggled (Mock)")}
                                >
                                    <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${chat.boundaryMode ? 'translate-x-4.5' : 'translate-x-0.5'}`} />
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

                            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                                <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-400">Chat Rules</h4>
                                <div className="space-y-3">
                                    {/* Allow Forward */}
                                    <div className="flex items-center justify-between rounded-xl bg-white p-3 border border-zinc-100 dark:bg-zinc-900/50 dark:border-zinc-800">
                                        <span className="font-medium text-zinc-900 dark:text-white text-sm">Allow Forwarding</span>
                                        <button
                                            className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${chat.permissions?.allowForward ? 'bg-indigo-600' : 'bg-red-500'}`}
                                            onClick={() => onUpdateChat?.({ ...chat, permissions: { ...chat.permissions, allowForward: !chat.permissions?.allowForward } })}
                                        >
                                            <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${chat.permissions?.allowForward ? 'translate-x-4.5' : 'translate-x-0.5'}`} />
                                        </button>
                                    </div>

                                    {/* Allow Save Media */}
                                    <div className="flex items-center justify-between rounded-xl bg-white p-3 border border-zinc-100 dark:bg-zinc-900/50 dark:border-zinc-800">
                                        <span className="font-medium text-zinc-900 dark:text-white text-sm">Allow Saving Media</span>
                                        <button
                                            className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${chat.permissions?.allowSaveMedia ? 'bg-indigo-600' : 'bg-red-500'}`}
                                            onClick={() => onUpdateChat?.({ ...chat, permissions: { ...chat.permissions, allowSaveMedia: !chat.permissions?.allowSaveMedia } })}
                                        >
                                            <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${chat.permissions?.allowSaveMedia ? 'translate-x-4.5' : 'translate-x-0.5'}`} />
                                        </button>
                                    </div>

                                    {/* Allow Permission */}
                                    <div className="flex items-center justify-between rounded-xl bg-white p-3 border border-zinc-100 dark:bg-zinc-900/50 dark:border-zinc-800">
                                        <span className="font-medium text-zinc-900 dark:text-white text-sm">Allow Screenshots</span>
                                        <button
                                            className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${chat.permissions?.allowScreenshot ? 'bg-indigo-600' : 'bg-red-500'}`}
                                            onClick={() => onUpdateChat?.({ ...chat, permissions: { ...chat.permissions, allowScreenshot: !chat.permissions?.allowScreenshot } })}
                                        >
                                            <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${chat.permissions?.allowScreenshot ? 'translate-x-4.5' : 'translate-x-0.5'}`} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                                <button className="w-full flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-100 dark:border-red-900/30 dark:bg-red-950/20 dark:text-red-400 dark:hover:bg-red-950/30 transition-colors">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    End-to-End Encrypted
                                </button>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </aside>
    );
}

interface ProfileEmptyStateProps {
    type: 'media' | 'docs' | 'links';
}

function ProfileEmptyState({ type }: ProfileEmptyStateProps) {
    const config = {
        media: {
            title: "No media shared yet",
            subtitle: "Photos and videos will appear here",
            icon: (
                <svg className="h-8 w-8 text-zinc-300 dark:text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        },
        docs: {
            title: "No documents",
            subtitle: "Files shared in chat will appear here",
            icon: (
                <svg className="h-8 w-8 text-zinc-300 dark:text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        links: {
            title: "No links shared",
            subtitle: "URLs shared in chat will appear here",
            icon: (
                <svg className="h-8 w-8 text-zinc-300 dark:text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
            )
        }
    };

    const { title, subtitle, icon } = config[type];

    return (
        <div className="flex flex-col items-center justify-center text-center opacity-60 py-8 px-4 transition-opacity duration-200 ease-in-out h-full animate-fade-in-up">
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-50 dark:bg-zinc-800/50">
                {icon}
            </div>
            <p className="text-sm font-medium text-zinc-900 dark:text-white">{title}</p>
            <p className="mt-1 max-w-[180px] text-xs text-zinc-500 dark:text-zinc-400">{subtitle}</p>
        </div>
    );
}
