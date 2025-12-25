"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy submit logic to prevent refresh and errors
    console.log("Submit", { isLogin, email, password, name });
    router.push("/chat");
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Ambience */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen opacity-30"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 flex flex-col items-center">
            <Link href="/" className="flex items-center gap-2 mb-8 group hover:scale-105 transition-transform">
                <Image src="/logo.png" alt="PrivLink Logo" width={40} height={40} className="w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
                <span className="font-bold text-3xl tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent group-hover:to-white transition-all">PrivLink</span>
            </Link>
            
            <h2 className="text-center text-2xl font-bold tracking-tight text-white mb-2">
                {isLogin ? "Welcome back" : "Create an account"}
            </h2>
            <p className="text-center text-sm text-zinc-400 mb-8 mt-2">
                {isLogin ? "Enter your details to access your account" : "Join the completely private network"}
            </p>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
            <div className="bg-zinc-900/50 backdrop-blur-xl py-8 px-4 shadow-2xl shadow-indigo-500/10 border border-zinc-800/50 sm:rounded-2xl sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
                                Display Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required={!isLogin}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="block w-full appearance-none rounded-xl border border-zinc-700/50 bg-zinc-800/50 px-4 py-3 placeholder-zinc-500 text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm transition-all"
                                    placeholder="Ghost Protocol"
                                />
                            </div>
                        </div>
                    )}

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full appearance-none rounded-xl border border-zinc-700/50 bg-zinc-800/50 px-4 py-3 placeholder-zinc-500 text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm transition-all"
                                placeholder="you@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-zinc-300">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete={isLogin ? "current-password" : "new-password"}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full appearance-none rounded-xl border border-zinc-700/50 bg-zinc-800/50 px-4 py-3 placeholder-zinc-500 text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    {isLogin && (
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-zinc-700 bg-zinc-800 text-indigo-500 focus:ring-indigo-500 transition-all"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-zinc-400">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-xl bg-indigo-600 px-4 py-3 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-all overflow-hidden"
                        >
                            <span className="relative z-10">{isLogin ? "Sign in" : "Create account"}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>
                </form>

                <div className="mt-8">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-zinc-700/50" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-zinc-900/80 px-2 text-zinc-400 backdrop-blur-sm">Or continue with</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button
                            type="button"
                            className="flex w-full items-center justify-center gap-3 rounded-xl border border-zinc-700/50 bg-zinc-800/30 px-4 py-3 text-sm font-medium text-zinc-300 hover:bg-zinc-700/50 transition-all"
                        >
                            <svg className="h-5 w-5 text-zinc-400" aria-hidden="true" viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" clipRule="evenodd" />
                            </svg>
                            <span>GitHub</span>
                        </button>
                    </div>
                </div>
            </div>

            <p className="mt-8 text-center text-sm text-zinc-400">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                    {isLogin ? "Sign up" : "Log in"}
                </button>
            </p>
        </div>
    </div>
  );
}
