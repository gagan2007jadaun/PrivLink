'use client';

import Sidebar from "@/components/Sidebar";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSettingsStore } from "@/store/useSettingsStore";
import { fontOptions } from "@/lib/fonts";
import { mockChats } from "@/lib/data";

export default function Settings() {
    const { theme, setTheme } = useTheme();
    const { fontVariable, setFontVariable, silentRead, toggleSilentRead } = useSettingsStore();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Or a skeleton/loading state
    }

    return (
        <div className="flex h-screen w-full overflow-hidden bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 font-sans">
            {/* Resuable Sidebar with mock functionality for settings page */}
            <Sidebar
                chats={mockChats}
                activeChatId=""
                onSelectChat={() => { }}
            />

            {/* Settings Content */}
            <main className="flex flex-1 flex-col min-w-0 bg-white/50 dark:bg-zinc-900/50">

                {/* Header */}
                <header className="flex h-16 shrink-0 items-center justify-between border-b border-zinc-200 bg-white/50 px-6 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/50">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </Link>
                        <h1 className="text-xl font-bold text-zinc-900 dark:text-white">Settings</h1>
                    </div>
                </header>

                {/* Scrollable Settings Area */}
                <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-800">
                    <div className="mx-auto max-w-2xl space-y-8">

                        {/* Profile Section */}
                        <section>
                            <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">Profile</h2>
                            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                                <div className="flex items-center gap-6">
                                    <div className="relative">
                                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-tr from-purple-400 to-indigo-500 text-2xl font-bold text-white ring-4 ring-zinc-50 dark:ring-zinc-800">
                                            SW
                                        </div>
                                        <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-white text-zinc-600 shadow-md ring-1 ring-zinc-200 hover:bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700">
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-400">Display Name</label>
                                            <input type="text" defaultValue="Sarah Wilson" className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white" />
                                        </div>
                                        <div>
                                            <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-400">Username</label>
                                            <div className="flex items-center rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2 dark:border-zinc-700 dark:bg-zinc-800">
                                                <span className="text-zinc-500 dark:text-zinc-500">@</span>
                                                <input type="text" defaultValue="sarahw_design" className="w-full bg-transparent text-sm font-medium outline-none dark:text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Typography */}
                        <section>
                            <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">Typography</h2>
                            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                    {fontOptions.map((font) => (
                                        <button
                                            key={font.variable}
                                            onClick={() => setFontVariable(font.variable)}
                                            className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all text-left flex items-center justify-between ${fontVariable === font.variable
                                                ? 'border-indigo-600 bg-indigo-50 text-indigo-700 dark:border-indigo-500 dark:bg-indigo-500/10 dark:text-indigo-400'
                                                : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800'
                                                }`}
                                            style={{ fontFamily: `var(${font.variable})` }}
                                        >
                                            <span className="truncate">{font.name}</span>
                                            {fontVariable === font.variable && (
                                                <div className="h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0 ml-2" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Appearance settings */}
                        <section>
                            <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">Appearance</h2>
                            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                                <div className="grid grid-cols-3 gap-4">
                                    <button
                                        onClick={() => setTheme('light')}
                                        className={`group flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all ${theme === 'light' ? 'border-indigo-600 bg-indigo-50/50 dark:border-indigo-500 dark:bg-indigo-500/10' : 'border-transparent bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700'}`}
                                    >
                                        <div className="h-20 w-full rounded-lg bg-white shadow-sm ring-1 ring-zinc-200"></div>
                                        <span className={`text-sm font-semibold ${theme === 'light' ? 'text-indigo-700 dark:text-indigo-400' : 'text-zinc-600 dark:text-zinc-400'}`}>Light</span>
                                        {theme === 'light' && <div className="absolute right-2 top-2 h-4 w-4 rounded-full bg-indigo-600"></div>}
                                    </button>
                                    <button
                                        onClick={() => setTheme('dark')}
                                        className={`group flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all ${theme === 'dark' ? 'border-indigo-600 bg-indigo-50/50 dark:border-indigo-500 dark:bg-indigo-500/10' : 'border-transparent bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700'}`}
                                    >
                                        <div className="h-20 w-full rounded-lg bg-zinc-950 shadow-sm ring-1 ring-zinc-800"></div>
                                        <span className={`text-sm font-medium ${theme === 'dark' ? 'text-indigo-700 dark:text-indigo-400' : 'text-zinc-600 dark:text-zinc-400'}`}>Dark</span>
                                    </button>
                                    <button
                                        onClick={() => setTheme('system')}
                                        className={`group flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all ${theme === 'system' ? 'border-indigo-600 bg-indigo-50/50 dark:border-indigo-500 dark:bg-indigo-500/10' : 'border-transparent bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700'}`}
                                    >
                                        <div className="flex h-20 w-full overflow-hidden rounded-lg shadow-sm ring-1 ring-zinc-200 dark:ring-zinc-800">
                                            <div className="w-1/2 bg-white"></div>
                                            <div className="w-1/2 bg-zinc-950"></div>
                                        </div>
                                        <span className={`text-sm font-medium ${theme === 'system' ? 'text-indigo-700 dark:text-indigo-400' : 'text-zinc-600 dark:text-zinc-400'}`}>System</span>
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Privacy Settings */}
                        <section>
                            <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">Privacy</h2>
                            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium text-zinc-900 dark:text-white">Seen Silently Mode</div>
                                        <div className="text-xs text-zinc-500 dark:text-zinc-400">Read messages without sending receipts</div>
                                    </div>
                                    <button
                                        onClick={toggleSilentRead}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${silentRead ? 'bg-indigo-600' : 'bg-zinc-200 dark:bg-zinc-700'}`}
                                    >
                                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${silentRead ? 'translate-x-6' : 'translate-x-1'}`} />
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Notifications */}
                        <section>
                            <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">Notifications</h2>
                            <div className="divide-y divide-zinc-100 rounded-2xl border border-zinc-200 bg-white shadow-sm dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900">
                                <NotificationToggle
                                    title="Direct Messages"
                                    desc="Receive notifications for direct messages"
                                    defaultChecked={true}
                                />
                                <NotificationToggle
                                    title="Group Mentions"
                                    desc="Get notified when you're mentioned"
                                    defaultChecked={true}
                                />
                                <NotificationToggle
                                    title="Email Notifications"
                                    desc="Receive a daily digest of missed messages"
                                    defaultChecked={false}
                                />
                            </div>
                        </section>

                    </div>
                </div>
            </main>
        </div>
    );
}

function NotificationToggle({ title, desc, defaultChecked }: { title: string, desc: string, defaultChecked: boolean }) {
    const [checked, setChecked] = useState(defaultChecked);

    return (
        <div className="flex items-center justify-between p-4">
            <div>
                <div className="font-medium text-zinc-900 dark:text-white">{title}</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">{desc}</div>
            </div>
            <button
                onClick={() => setChecked(!checked)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${checked ? 'bg-indigo-600' : 'bg-zinc-200 dark:bg-zinc-700'}`}
            >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
        </div>
    );
}
