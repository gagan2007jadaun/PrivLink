'use client';

import Sidebar from "@/components/Sidebar";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSettingsStore } from "@/store/useSettingsStore";
import { mockChats } from "@/lib/data";
import styles from './Settings.module.css';

export default function Settings() {
    const { theme, setTheme } = useTheme();
    const { silentRead, toggleSilentRead, profile, updateProfile, experiments, toggleExperiment } = useSettingsStore();
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
        <div className="flex h-screen w-full overflow-hidden bg-background text-foreground transition-colors duration-300 font-sans">
            {/* Resuable Sidebar with mock functionality for settings page */}
            <Sidebar
                chats={mockChats}
                activeChatId=""
                onSelectChat={() => { }}
            />

            {/* Settings Content Wrapper */}
            <div className="flex flex-1 flex-col py-4 pr-4">
                <main className="flex flex-1 flex-col min-w-0 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl bg-white dark:bg-sidebar">

                {/* Header */}
                <header className="flex h-16 shrink-0 items-center justify-between border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-sidebar px-6 shadow-sm backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <Link href="/chat" className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 dark:text-zinc-300 transition-colors hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </Link>
                        <h1 className="text-xl font-bold text-white">Settings</h1>
                    </div>
                </header>

                {/* Scrollable Settings Area */}
                <div className={`flex-1 overflow-y-auto ${styles.settingsContainer} scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700`}>
                    
                    <h1 className={styles.settingsTitle}>Account Settings</h1>
                    
                    <div className={styles.settingsGrid}>

                        {/* Profile Section */}
                        <div className={styles.settingsCard}>
                            <div className="flex items-center justify-between mb-4">
                                <h3 style={{ marginBottom: 0 }}>Profile</h3>
                                <button
                                    onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                                    className={`${styles.btn} ${styles.btnSmall}`}
                                >
                                    {isEditing ? 'Save Changes' : 'Edit Profile'}
                                </button>
                            </div>
                            
                            <div className={styles.profileRow}>
                                <div className={`${styles.avatar} relative group overflow-hidden cursor-pointer shrink-0`}>
                                    {profile.avatarUrl ? (
                                        <img src={profile.avatarUrl} alt="Profile" className="h-full w-full object-cover" />
                                    ) : (
                                        profile.displayName.substring(0, 2).toUpperCase()
                                    )}

                                    {/* Image Upload Overlay */}
                                    <label className={`absolute inset-0 flex items-center justify-center bg-black/50 rounded-full cursor-pointer transition-opacity ${isEditing ? 'opacity-0 group-hover:opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            disabled={!isEditing}
                                            onChange={handleImageUpload}
                                        />
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        </svg>
                                    </label>
                                </div>
                                
                                <div className={`${styles.profileInfo} min-w-0`}>
                                    <div className={styles.settingItem}>
                                        <div className="w-24 text-xs font-bold text-zinc-400">DISPLAY NAME</div>
                                        <input
                                            type="text"
                                            value={editForm.displayName}
                                            onChange={(e) => setEditForm({ ...editForm, displayName: e.target.value })}
                                            disabled={!isEditing}
                                            className={!isEditing ? "opacity-60" : ""}
                                        />
                                    </div>
                                    <div className={styles.settingItem}>
                                        <div className="w-24 text-xs font-bold text-zinc-400">USERNAME</div>
                                        <input
                                            type="text"
                                            value={editForm.username}
                                            onChange={(e) => setEditForm({ ...editForm, username: e.target.value })}
                                            disabled={!isEditing}
                                            className={!isEditing ? "opacity-60" : ""}
                                        />
                                    </div>
                                    <div className={styles.settingItem}>
                                        <div className="w-24 text-xs font-bold text-zinc-400">BIO</div>
                                        <input
                                            type="text"
                                            value={editForm.bio}
                                            onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                                            disabled={!isEditing}
                                            className={!isEditing ? "opacity-60" : ""}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Account Security */}
                        <div className={styles.settingsCard}>
                            <h3>Account Security</h3>
                            <div className="mb-4">
                                <div className="text-xs font-bold text-zinc-400 mb-2 mt-2 uppercase">Recovery Email</div>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        value={profile.email || ""}
                                        onChange={(e) => updateProfile({ email: e.target.value })}
                                        placeholder="your@email.com"
                                        className="border-none p-2.5 rounded-lg flex-1 outline-none focus:ring-1 focus:ring-[#6c5cff]"
                                        style={{ backgroundColor: 'var(--settings-input-bg)', color: 'var(--settings-text)' }}
                                    />
                                    <button className={styles.btn}>Verify</button>
                                </div>
                                <p className="mt-1 text-[10px] text-zinc-500">Used for account recovery only. Never shared.</p>
                            </div>

                            <div className="h-px bg-zinc-800 my-4" />

                            <div className={styles.settingItem}>
                                <div>
                                    <div className="font-bold">Password</div>
                                    <div className="text-xs text-zinc-500">Last changed 3 months ago</div>
                                </div>
                                <button className={`${styles.btn} ${styles.btnSmall}`} style={{ background: '#444' }}>
                                    Change
                                </button>
                            </div>

                            <div className={styles.settingItem}>
                                <div>
                                    <div className="font-bold">Two-Factor Authentication</div>
                                    <div className="text-xs text-zinc-500">Add an extra layer of security</div>
                                </div>
                                <label className={styles.switch}>
                                    <input type="checkbox" />
                                    <span className={styles.slider}></span>
                                </label>
                            </div>
                        </div>

                        {/* Experimental Labs */}
                        <div className={styles.settingsCard}>
                            <h3>Experimental Labs 🧪</h3>
                            <div className="text-sm text-zinc-500 mb-4 -mt-2">Test potential new features. Unstable.</div>
                            
                            <div className={styles.settingItem}>
                                <div>
                                    <div className="font-bold">Neon Mode</div>
                                    <div className="text-xs text-zinc-500">Add a futuristic glow</div>
                                </div>
                                <label className={styles.switch}>
                                    <input type="checkbox" checked={experiments?.neonMode} onChange={() => toggleExperiment('neonMode')} />
                                    <span className={styles.slider}></span>
                                </label>
                            </div>

                            <div className={styles.settingItem}>
                                <div>
                                    <div className="font-bold">UI Sounds</div>
                                    <div className="text-xs text-zinc-500">Play subtle sounds</div>
                                </div>
                                <label className={styles.switch}>
                                    <input type="checkbox" checked={experiments?.uiSounds} onChange={() => toggleExperiment('uiSounds')} />
                                    <span className={styles.slider}></span>
                                </label>
                            </div>

                            <div className={styles.settingItem}>
                                <div>
                                    <div className="font-bold">Ghost Typing</div>
                                    <div className="text-xs text-zinc-500">Simulate typing indicators</div>
                                </div>
                                <label className={styles.switch}>
                                    <input type="checkbox" checked={experiments?.ghostTyping} onChange={() => toggleExperiment('ghostTyping')} />
                                    <span className={styles.slider}></span>
                                </label>
                            </div>
                        </div>

                        {/* Privacy & Appearance */}
                        <div className={styles.settingsCard}>
                            <h3>Privacy</h3>
                            <div className={styles.settingItem}>
                                <div>
                                    <div className="font-bold">Seen Silently Mode</div>
                                    <div className="text-xs text-zinc-500">Read messages without receipts</div>
                                </div>
                                <label className={styles.switch}>
                                    <input type="checkbox" checked={silentRead} onChange={toggleSilentRead} />
                                    <span className={styles.slider}></span>
                                </label>
                            </div>

                            <div className="h-px bg-zinc-800 my-4" />

                            <h3 className="mb-4">Appearance</h3>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setTheme('light')}
                                    className={`${styles.btn} flex-1 transition-all`}
                                    style={{ background: theme === 'light' ? '#6c5cff' : 'var(--settings-input-bg)', color: theme === 'light' ? 'white' : 'var(--settings-text)' }}
                                >
                                    Light
                                </button>
                                <button
                                    onClick={() => setTheme('dark')}
                                    className={`${styles.btn} flex-1 transition-all`}
                                    style={{ background: theme === 'dark' ? '#6c5cff' : 'var(--settings-input-bg)', color: theme === 'dark' ? 'white' : 'var(--settings-text)' }}
                                >
                                    Dark
                                </button>
                                <button
                                    onClick={() => setTheme('system')}
                                    className={`${styles.btn} flex-1 transition-all`}
                                    style={{ background: theme === 'system' ? '#6c5cff' : 'var(--settings-input-bg)', color: theme === 'system' ? 'white' : 'var(--settings-text)' }}
                                >
                                    System
                                </button>
                            </div>
                        </div>

                        {/* Notifications */}
                        <div className={styles.settingsCard}>
                            <h3>Notifications</h3>
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

                        {/* Backup Manager */}
                        <div className={styles.settingsCard}>
                            <h3>Security & Backup</h3>
                            <BackupManager />
                        </div>

                        {/* Danger Zone */}
                        <div className={styles.settingsCard} style={{ border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                            <h3 className="text-red-500">Danger Zone</h3>
                            <div className={styles.settingItem}>
                                <div>
                                    <div className="font-bold">Log Out</div>
                                    <div className="text-xs text-zinc-500">End your session on this device</div>
                                </div>
                                <button onClick={() => alert("Logging out...")} className={`${styles.btn} ${styles.btnSmall}`} style={{ background: '#444' }}>
                                    Log Out
                                </button>
                            </div>

                            <div className={styles.settingItem}>
                                <div>
                                    <div className="font-bold text-red-500">Delete Account</div>
                                    <div className="text-xs text-red-500/70">Permanently delete your account</div>
                                </div>
                                <button
                                    onClick={() => confirm("Are you sure? This action cannot be undone.") && alert("Account deletion initiated (Simulated)")}
                                    className={`${styles.btn} ${styles.btnSmall}`} style={{ background: '#ef4444' }}
                                >
                                    Delete Account
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                </main>
            </div>
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
            <p className="text-sm text-zinc-400">
                Export your chats and settings to an encrypted local file.
            </p>
            <div>
                <div className="text-xs font-bold text-zinc-400 mb-2 mt-2 uppercase">Set Backup Password</div>
                <div className="flex gap-2">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Master password..."
                        className="border-none p-2.5 rounded-lg flex-1 outline-none focus:ring-1 focus:ring-[#6c5cff]"
                        style={{ backgroundColor: 'var(--settings-input-bg)', color: 'var(--settings-text)' }}
                    />
                    <button
                        onClick={handleBackup}
                        disabled={isExporting || !password}
                        className={styles.btn}
                        style={{ opacity: (isExporting || !password) ? 0.5 : 1 }}
                    >
                        {isExporting ? 'Encrypting...' : 'Download'}
                    </button>
                </div>
                <p className="mt-1 text-[10px] text-zinc-500">
                    Warning: If you lose this password, this backup cannot be recovered.
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

    const blob = new Blob([salt, iv, new Uint8Array(encryptedContent)], { type: 'application/octet-stream' });
    return blob;
}

function NotificationToggle({ title, desc, defaultChecked }: { title: string, desc: string, defaultChecked: boolean }) {
    const [checked, setChecked] = useState(defaultChecked);

    return (
        <div className={styles.settingItem}>
            <div>
                <div className="font-bold">{title}</div>
                <div className="text-xs text-zinc-500">{desc}</div>
            </div>
            <label className={styles.switch}>
                <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
                <span className={styles.slider}></span>
            </label>
        </div>
    );
}
