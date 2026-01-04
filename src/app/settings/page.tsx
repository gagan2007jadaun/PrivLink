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
    const { fontVariable, setFontVariable, silentRead, toggleSilentRead, profile, updateProfile } = useSettingsStore();
    const [mounted, setMounted] = useState(false);

    // Profile Edit State
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState({
        displayName: "",
        username: "",
        bio: ""
    });

    // Sync form with store on mount/update
    useEffect(() => {
        if (profile) {
            setEditForm({
                displayName: profile.displayName,
                username: profile.username,
                bio: profile.bio
            });
        }
    }, [profile]);

    const handleSaveProfile = () => {
        updateProfile(editForm);
        setIsEditing(false);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Limit size to 2MB to prevent LocalStorage quota errors
        if (file.size > 2 * 1024 * 1024) {
            alert("Image is too large. Please choose an image under 2MB.");
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            updateProfile({ avatarUrl: reader.result as string });
        };
        reader.readAsDataURL(file);
    };

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
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Profile</h2>
                                <button
                                    onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${isEditing
                                        ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-500/20'
                                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
                                        }`}
                                >
                                    {isEditing ? 'Save Changes' : 'Edit Profile'}
                                </button>
                            </div>
                            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                                <div className="flex items-center gap-6">
                                    <div className="relative group">
                                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-tr from-purple-400 to-indigo-500 text-3xl font-bold text-white ring-4 ring-zinc-50 dark:ring-zinc-800 overflow-hidden">
                                            {profile.avatarUrl ? (
                                                <img src={profile.avatarUrl} alt="Profile" className="h-full w-full object-cover" />
                                            ) : (
                                                profile.displayName.substring(0, 2).toUpperCase()
                                            )}
                                        </div>

                                        {/* Image Upload Overlay */}
                                        <label className={`absolute inset-0 flex items-center justify-center bg-black/50 rounded-full cursor-pointer transition-opacity ${isEditing ? 'opacity-0 group-hover:opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                disabled={!isEditing}
                                                onChange={handleImageUpload}
                                            />
                                            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </label>
                                    </div>

                                    <div className="flex-1 space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="mb-1 block text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400">Display Name</label>
                                                <input
                                                    type="text"
                                                    value={editForm.displayName}
                                                    onChange={(e) => setEditForm({ ...editForm, displayName: e.target.value })}
                                                    disabled={!isEditing}
                                                    className={`w-full rounded-xl border px-4 py-2 text-sm font-medium outline-none transition-all ${isEditing
                                                        ? 'border-zinc-300 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white'
                                                        : 'border-transparent bg-transparent text-zinc-900 dark:text-white px-0'
                                                        }`}
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400">Username</label>
                                                <div className={`flex items-center rounded-xl border px-4 py-2 transition-all ${isEditing
                                                    ? 'border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800'
                                                    : 'border-transparent bg-transparent px-0'
                                                    }`}>
                                                    <span className="text-zinc-500 dark:text-zinc-500 mr-1">@</span>
                                                    <input
                                                        type="text"
                                                        value={editForm.username}
                                                        onChange={(e) => setEditForm({ ...editForm, username: e.target.value })}
                                                        disabled={!isEditing}
                                                        className={`w-full bg-transparent text-sm font-medium outline-none dark:text-white ${!isEditing && 'pointer-events-none'}`}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="mb-1 block text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400">Bio</label>
                                            <input
                                                type="text"
                                                value={editForm.bio}
                                                onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                                                disabled={!isEditing}
                                                className={`w-full rounded-xl border px-4 py-2 text-sm font-medium outline-none transition-all ${isEditing
                                                    ? 'border-zinc-300 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white'
                                                    : 'border-transparent bg-transparent text-zinc-600 dark:text-zinc-300 px-0'
                                                    }`}
                                            />
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

                        {/* Encrypted Backup */}
                        <section>
                            <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">Security & Backup</h2>
                            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                                <BackupManager />
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

function BackupManager() {
    const [password, setPassword] = useState("");
    const [isExporting, setIsExporting] = useState(false);

    const handleBackup = async () => {
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
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <div>
                    <h3 className="font-medium text-zinc-900 dark:text-white">Encrypted Local Backup</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Export your chats and settings to a local file. Your data is encrypted with the password you provide.
                        <strong> You hold the key.</strong>
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-3 rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <label className="text-xs font-semibold uppercase text-zinc-400">Set Backup Password</label>
                <div className="flex gap-2">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter a strong password..."
                        className="flex-1 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                    />
                    <button
                        onClick={handleBackup}
                        disabled={isExporting || !password}
                        className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 disabled:opacity-50"
                    >
                        {isExporting ? 'Encrypting...' : 'Download Backup'}
                    </button>
                </div>
                <p className="text-[10px] text-zinc-400">
                    Warning: If you lose this password, this backup cannot be recovered. We do not store your password.
                </p>
            </div>
        </div>
    );
}

// Web Crypto API Helper
async function encryptData(plainText: string, password: string): Promise<Blob> {
    const enc = new TextEncoder();
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));

    const keyMaterial = await crypto.subtle.importKey(
        "raw",
        enc.encode(password),
        { name: "PBKDF2" },
        false,
        ["deriveKey"]
    );

    const key = await crypto.subtle.deriveKey(
        {
            name: "PBKDF2",
            salt: salt,
            iterations: 100000,
            hash: "SHA-256"
        },
        keyMaterial,
        { name: "AES-GCM", length: 256 },
        false,
        ["encrypt"]
    );

    const encryptedContent = await crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: iv
        },
        key,
        enc.encode(plainText)
    );

    // Pack: Salt (16) + IV (12) + Content
    const blob = new Blob([salt, iv, new Uint8Array(encryptedContent)], { type: 'application/octet-stream' });
    return blob;
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
