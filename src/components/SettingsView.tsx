import React, { useEffect } from 'react';

interface SettingsViewProps {
    onClose: () => void;
}

export default function SettingsView({ onClose }: SettingsViewProps) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <div className="flex flex-col h-full bg-white dark:bg-zinc-900 relative">
            {/* Contextual Header with Back Button */}
            <div className="px-6 py-5 border-b border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 z-10">
                <div className="settings-header !mb-0">
                    <button className="settings-back text-zinc-900 dark:text-white" onClick={onClose}>
                        ←
                    </button>
                    <div>
                        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Settings</h2>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">Manage your preferences and account details</p>
                    </div>
                </div>

                {/* Top-Right Close Button */}
                <button className="settings-close text-zinc-500 dark:text-white hover:bg-zinc-100 dark:hover:bg-white/10" onClick={onClose}>
                    ✕
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 text-zinc-900 dark:text-zinc-100">
                <div className="max-w-2xl space-y-8">

                    {/* Section: Appearance */}
                    <section>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-4">Appearance</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-700">
                                <div>
                                    <p className="font-medium text-zinc-900 dark:text-zinc-100">Theme</p>
                                    <p className="text-sm text-zinc-500">Customize the look and feel</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="h-8 w-8 rounded-full bg-zinc-100 border border-zinc-300"></button>
                                    <button className="h-8 w-8 rounded-full bg-zinc-900 border border-zinc-700"></button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section: Notifications */}
                    <section>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-4">Notifications</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-700">
                                <div>
                                    <p className="font-medium text-zinc-900 dark:text-zinc-100">Push Notifications</p>
                                    <p className="text-sm text-zinc-500">Receive alerts for new messages</p>
                                </div>
                                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                                    <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
