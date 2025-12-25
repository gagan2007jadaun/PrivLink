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

    const getScoreColorStyle = (score: number) => {
        if (score >= 80) return 'var(--interest-high)';
        if (score >= 50) return 'var(--interest-mid)';
        return 'var(--interest-low)';
    };

    const scoreColorStyle = getScoreColorStyle(score);

    return (
        <aside className="hidden w-72 flex-col border-l border-zinc-200 bg-white/50 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/50 xl:flex xl:m-2 xl:rounded-2xl xl:border xl:h-[calc(100vh-16px)] overflow-hidden shadow-sm">

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

                    {/* Curiosity Index */}
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
                    {activeTab === 'media' && <ProfileEmptyState type="media" />}

                    {/* DOCS TAB */}
                    {activeTab === 'docs' && <ProfileEmptyState type="docs" />}

                    {/* LINKS TAB */}
                    {activeTab === 'links' && <ProfileEmptyState type="links" />}

                    {/* SETTINGS TAB */}
                    {activeTab === 'settings' && (
                        <div className="space-y-6 pt-2 animate-fade-in-up">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Relationship Settings</h3>

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

                            {/* Identity Layer */}
                            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                                <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-400">Identity Layer</h4>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Your Alias in this Chat</label>
                                    <input
                                        type="text"
                                        placeholder="Public Name (Default)"
                                        value={chat.selfAlias || ''}
                                        onChange={(e) => onUpdateChat?.({ ...chat, selfAlias: e.target.value })}
                                        className="w-full rounded-xl bg-zinc-100 px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 dark:bg-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                                    />
                                    <p className="text-[10px] text-zinc-400">This is how you appear in this specific conversation.</p>
                                </div>
                            </div>

                            {/* Wallpaper Settings */}
                            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Wallpaper</h4>
                                    {chat.chatBackground && (
                                        <button
                                            onClick={() => {
                                                localStorage.removeItem(`chat-bg-${chat.id}`);
                                                onUpdateChat?.({ ...chat, chatBackground: undefined });
                                            }}
                                            className="text-[10px] font-medium text-red-500 hover:text-red-700 transition-colors"
                                        >
                                            Reset to Default
                                        </button>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    {/* Gallery */}
                                    <label className="flex items-center gap-3 w-full cursor-pointer group">
                                        <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-500 group-hover:bg-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-400 transition-colors">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <span className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">Choose from Gallery</span>
                                        </div>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (!file) return;
                                                const reader = new FileReader();
                                                reader.onload = () => {
                                                    const bg = { type: "image", value: reader.result as string, blur: 10, intensity: 0.45 };
                                                    localStorage.setItem(`chat-bg-${chat.id}`, JSON.stringify(bg));
                                                    onUpdateChat?.({ ...chat, chatBackground: bg as any });
                                                };
                                                reader.readAsDataURL(file);
                                            }}
                                        />
                                    </label>

                                    {/* Textures */}
                                    <div>
                                        <label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2 block">Textures</label>
                                        <div className="grid grid-cols-5 gap-2 text-[8px] font-bold text-white uppercase text-center overflow-hidden">
                                            {[
                                                { id: "paper", value: "/textures/paper.png" },
                                                { id: "noise", value: "/textures/noise.png" },
                                                { id: "fabric", value: "/textures/fabric.png" },
                                                { id: "grid", value: "/textures/grid.png" },
                                                { id: "carbon", value: "/textures/carbon.png" }
                                            ].map((t) => (
                                                <button
                                                    key={t.id}
                                                    onClick={() => {
                                                        const bg = { type: "texture", value: t.value, blur: 0, intensity: 0.15 };
                                                        localStorage.setItem(`chat-bg-${chat.id}`, JSON.stringify(bg));
                                                        onUpdateChat?.({ ...chat, chatBackground: bg as any });
                                                    }}
                                                    className={`h-10 w-full rounded-xl border-2 bg-center bg-no-repeat transition-all hover:border-indigo-500 overflow-hidden relative flex items-center justify-center ${chat.chatBackground?.value === t.value ? 'border-indigo-500 shadow-lg scale-105' : 'border-zinc-100 dark:border-zinc-800'}`}
                                                    style={{ backgroundImage: `url(${t.value})`, backgroundSize: '64px' }}
                                                >
                                                    <span className="relative z-10 bg-black/20 backdrop-blur-[1px] px-1 rounded">{t.id}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Adjustment Controls */}
                                    {chat.chatBackground && (
                                        <div className="space-y-4 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                                            <div className="space-y-1">
                                                <div className="flex justify-between text-[10px] font-bold uppercase text-zinc-400">
                                                    <span>Intensity</span>
                                                    <span>{Math.round((chat.chatBackground.intensity ?? 0.15) * 100)}%</span>
                                                </div>
                                                <input
                                                    type="range"
                                                    min="0.05"
                                                    max="0.8"
                                                    step="0.01"
                                                    value={chat.chatBackground.intensity ?? 0.15}
                                                    onChange={(e) => {
                                                        const val = parseFloat(e.target.value);
                                                        const newBg = { ...chat.chatBackground!, intensity: val };
                                                        localStorage.setItem(`chat-bg-${chat.id}`, JSON.stringify(newBg));
                                                        onUpdateChat?.({ ...chat, chatBackground: newBg as any });
                                                    }}
                                                    className="w-full h-1.5 bg-zinc-100 rounded-lg appearance-none cursor-pointer dark:bg-zinc-800 accent-indigo-500"
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <div className="flex justify-between text-[10px] font-bold uppercase text-zinc-400">
                                                    <span>Blur</span>
                                                    <span>{chat.chatBackground.blur ?? 10}px</span>
                                                </div>
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max="40"
                                                    step="1"
                                                    value={chat.chatBackground.blur ?? 10}
                                                    onChange={(e) => {
                                                        const val = parseInt(e.target.value);
                                                        const newBg = { ...chat.chatBackground!, blur: val };
                                                        localStorage.setItem(`chat-bg-${chat.id}`, JSON.stringify(newBg));
                                                        onUpdateChat?.({ ...chat, chatBackground: newBg as any });
                                                    }}
                                                    className="w-full h-1.5 bg-zinc-100 rounded-lg appearance-none cursor-pointer dark:bg-zinc-800 accent-indigo-500"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                                <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-400">Chat Rules</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between rounded-xl bg-white p-3 border border-zinc-100 dark:bg-zinc-900/50 dark:border-zinc-800">
                                        <span className="font-medium text-zinc-900 dark:text-white text-sm">Allow Forwarding</span>
                                        <button
                                            className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${chat.permissions?.allowForward ? 'bg-indigo-600' : 'bg-red-500'}`}
                                            onClick={() => onUpdateChat?.({ ...chat, permissions: { ...chat.permissions, allowForward: !chat.permissions?.allowForward } })}
                                        >
                                            <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${chat.permissions?.allowForward ? 'translate-x-4.5' : 'translate-x-0.5'}`} />
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
