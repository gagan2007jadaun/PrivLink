"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AuthPage() {
    const [alias, setAlias] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [glitch, setGlitch] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Initial glitch effect
        const interval = setInterval(() => {
            setGlitch(true);
            setTimeout(() => setGlitch(false), 200);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!alias.trim()) return;

        // Secure Entry Simulation
        sessionStorage.setItem("alias", alias.trim());

        // Trigger exit animation if we had one, for now just push
        router.push("/chat");
    };

    return (
        <div className="min-h-screen bg-black text-white font-mono flex items-center justify-center relative overflow-hidden selection:bg-green-500/30">

            {/* Matrix Rain / Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(1000px)_rotateX(60deg)] origin-top h-[200%] animate-scan"></div>
            </div>

            {/* Cyber Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-green-500/10 rounded-full animate-spin-slow pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-green-500/20 rounded-full animate-spin-reverse-slow pointer-events-none"></div>

            <div className={`relative z-10 w-full max-w-md p-8 ${glitch ? 'animate-glitch' : ''}`}>

                {/* Header */}
                <div className="mb-10 text-center space-y-2">
                    <div className="inline-block border border-green-500/50 px-3 py-1 text-xs text-green-500 mb-4 tracking-[0.2em] relative overflow-hidden group">
                        <span className="relative z-10">SYSTEM_ENTRY</span>
                        <div className="absolute inset-0 bg-green-500/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                        IDENTITY_LINK
                    </h1>
                    <p className="text-zinc-500 text-sm">Secure connection establishing...</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative group">
                        <input
                            type="text"
                            value={alias}
                            onChange={(e) => {
                                setAlias(e.target.value);
                                setIsTyping(e.target.value.length > 0);
                            }}
                            placeholder=" "
                            className="w-full bg-zinc-900/50 border border-zinc-800 text-green-500 px-4 py-4 rounded-lg focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all text-center text-lg tracking-wider placeholder-transparent peer"
                        />
                        <label className="absolute left-1/2 -translate-x-1/2 top-4 text-zinc-600 text-sm transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:text-xs peer-focus:text-green-500 peer-focus:bg-black peer-focus:px-2 peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-green-500 peer-not-placeholder-shown:bg-black peer-not-placeholder-shown:px-2">
                            ENTER ALIAS
                        </label>

                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-500 opacity-50 transition-all group-hover:w-full group-hover:h-full group-hover:opacity-10 pointer-events-none"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-green-500 opacity-50 transition-all group-hover:w-full group-hover:h-full group-hover:opacity-10 pointer-events-none"></div>
                    </div>

                    <button
                        type="button" // Change to submit
                        onClick={handleSubmit}
                        disabled={!alias.trim()}
                        className={`w-full py-4 rounded-lg font-bold tracking-widest uppercase transition-all duration-300 relative overflow-hidden group ${alias.trim()
                                ? 'bg-green-600 text-black hover:bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)]'
                                : 'bg-zinc-900 text-zinc-600 cursor-not-allowed border border-zinc-800'
                            }`}
                    >
                        <span className="relative z-10">{alias.trim() ? 'Initialize Session' : 'Awaiting Input'}</span>
                        {alias.trim() && (
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white/20 transition-transform duration-500 skew-x-12"></div>
                        )}
                    </button>
                </form>

                {/* Footer Info */}
                <div className="mt-12 text-center">
                    <div className="grid grid-cols-3 gap-2 text-[10px] text-zinc-700 font-mono text-opacity-70">
                        <div className="border border-zinc-900 py-1">ENC: AES-256</div>
                        <div className="border border-zinc-900 py-1">LOGS: NULL</div>
                        <div className="border border-zinc-900 py-1">NODE: ACTIVE</div>
                    </div>
                    <Link href="/" className="inline-block mt-8 text-xs text-zinc-600 hover:text-green-500 transition-colors">
                        &larr; ABORT SEQUENCE
                    </Link>
                </div>

            </div>
        </div>
    );
}
