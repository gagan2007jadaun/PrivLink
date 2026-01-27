"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type AuthMode = 'signin' | 'signup';

export default function AuthPage() {
    const [mode, setMode] = useState<AuthMode>('signin');
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    // Form State
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        // Basic Validation
        if (!username.trim() || !password.trim()) {
            setError("Please fill in all fields.");
            setIsLoading(false);
            return;
        }

        if (mode === 'signup' && password !== confirmPassword) {
            setError("Passwords do not match.");
            setIsLoading(false);
            return;
        }

        // Simulate API Call / Auth Delay
        await new Promise(resolve => setTimeout(resolve, 800));

        // Mock Authentication Logic
        if (mode === 'signup') {
            // Store user
            const user = { username, password }; // In real app, never store plain text password
            localStorage.setItem(`user_${username}`, JSON.stringify(user));

            // Auto-login session
            sessionStorage.setItem("alias", username);
            router.push("/chat");
        } else {
            // Login check
            const storedUser = localStorage.getItem(`user_${username}`);
            if (storedUser) {
                const user = JSON.parse(storedUser);
                if (user.password === password) {
                    sessionStorage.setItem("alias", username);
                    router.push("/chat");
                } else {
                    setError("Invalid credentials.");
                }
            } else {
                // Fallback for demo: Allow instant entry if user doesn't exist, treating it as a guest/new session or show error
                // For stricter auth simulation:
                setError("User not found. Please sign up.");
            }
        }

        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans flex items-center justify-center relative overflow-hidden selection:bg-indigo-500/30">

            {/* Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen opacity-30"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
            </div>

            {/* Main Card */}
            <div className={`relative z-10 w-full max-w-[400px] p-6 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>

                {/* Glass Container */}
                <div className="relative rounded-2xl bg-zinc-950/40 backdrop-blur-xl border border-white/5 shadow-2xl shadow-black/50 overflow-hidden">

                    {/* Top Shine */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                    <div className="p-8">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 mb-4 shadow-lg shadow-indigo-500/5">
                                <span className="font-bold text-indigo-400 text-lg">P</span>
                            </div>
                            <h1 className="text-xl font-semibold tracking-tight text-white">PrivLink ID</h1>
                        </div>

                        {/* Tabs */}
                        <div className="flex bg-zinc-900/50 p-1 rounded-xl mb-6 relative">
                            <button
                                onClick={() => { setMode('signin'); setError(""); }}
                                className={`flex-1 text-xs font-medium py-2 rounded-lg transition-all ${mode === 'signin' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
                            >
                                Sign In
                            </button>
                            <button
                                onClick={() => { setMode('signup'); setError(""); }}
                                className={`flex-1 text-xs font-medium py-2 rounded-lg transition-all ${mode === 'signup' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
                            >
                                Sign Up
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Username */}
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider ml-1">Username</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full bg-black/20 border border-zinc-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder-zinc-800 text-sm hover:border-zinc-700"
                                    placeholder="Enter username"
                                />
                            </div>

                            {/* Password */}
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider ml-1">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-black/20 border border-zinc-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder-zinc-800 text-sm hover:border-zinc-700"
                                    placeholder="••••••••"
                                />
                            </div>

                            {/* Confirm Password (Signup only) */}
                            <div className={`space-y-1.5 overflow-hidden transition-all duration-300 ${mode === 'signup' ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider ml-1">Confirm Password</label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full bg-black/20 border border-zinc-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder-zinc-800 text-sm hover:border-zinc-700"
                                    placeholder="••••••••"
                                />
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="text-red-400 text-xs text-center bg-red-500/10 border border-red-500/20 rounded-lg py-2 animate-fade-in">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3.5 rounded-xl font-medium text-sm bg-white text-black hover:bg-zinc-200 shadow-lg shadow-white/5 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                                        Processing...
                                    </span>
                                ) : (
                                    mode === 'signin' ? 'Access Account' : 'Create Identity'
                                )}
                            </button>
                        </form>

                        {/* Footer Info */}
                        <div className="mt-8 pt-6 border-t border-white/5 text-center">
                            <Link href="/" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
                                Return to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
