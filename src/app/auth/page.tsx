"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AuthPage() {
    const [alias, setAlias] = useState("");
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!alias.trim()) return;

        // Secure Entry Simulation
        sessionStorage.setItem("alias", alias.trim());
        router.push("/chat");
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans flex items-center justify-center relative overflow-hidden selection:bg-indigo-500/30">

            {/* Ambient Background (Matching Landing Page) */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen opacity-30"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
            </div>

            {/* Main Card */}
            <div className={`relative z-10 w-full max-w-md p-8 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>

                {/* Glass Container */}
                <div className="relative rounded-2xl bg-zinc-950/40 backdrop-blur-xl border border-white/5 shadow-2xl shadow-black/50 overflow-hidden">

                    {/* Top Shine */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                    <div className="p-8 sm:p-12">
                        {/* Header */}
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 mb-6 shadow-lg shadow-indigo-500/5">
                                <span className="font-bold text-indigo-400 text-xl">P</span>
                            </div>
                            <h1 className="text-2xl font-semibold tracking-tight text-white mb-2">Welcome Back</h1>
                            <p className="text-zinc-500 text-sm">Create a temporary identity to continue.</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="alias" className="text-xs font-medium text-zinc-400 uppercase tracking-wider ml-1">Display Name</label>
                                <div className="relative group">
                                    <input
                                        id="alias"
                                        type="text"
                                        value={alias}
                                        onChange={(e) => setAlias(e.target.value)}
                                        placeholder="e.g. GhostWalker"
                                        className="w-full bg-black/20 border border-zinc-800 text-white px-4 py-3.5 rounded-xl focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder-zinc-700 hover:border-zinc-700"
                                    />
                                    {/* Input Glow on Focus (Handled by ring above, adding extra subtle ambient logic if needed) */}
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={!alias.trim()}
                                className={`w-full py-3.5 rounded-xl font-medium text-sm transition-all duration-300 transform active:scale-95 ${alias.trim()
                                        ? 'bg-white text-black hover:bg-zinc-200 shadow-lg shadow-white/5'
                                        : 'bg-zinc-900 text-zinc-500 cursor-not-allowed border border-zinc-800/50'
                                    }`}
                            >
                                Enter System
                            </button>
                        </form>

                        {/* Footer Info */}
                        <div className="mt-8 pt-8 border-t border-white/5 text-center">
                            <p className="text-[10px] text-zinc-600 mb-4">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500/50 mr-2 align-middle"></span>
                                End-to-End Encrypted Session
                            </p>
                            <Link href="/" className="text-xs text-zinc-500 hover:text-indigo-400 transition-colors">
                                Return to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
