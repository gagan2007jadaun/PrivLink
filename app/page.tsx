"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">

      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen opacity-30"></div>
        <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen opacity-20"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="PrivLink Logo" width={32} height={32} className="w-8 h-8 object-contain" />
          <span className="font-bold text-xl tracking-tight">PrivLink</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#security" className="hover:text-white transition-colors">Security</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>
        <Link
          href="/auth"
          className="group relative px-5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-full text-sm font-medium transition-all hover:bg-zinc-800 hover:border-zinc-700 hover:shadow-lg hover:shadow-indigo-500/10 overflow-hidden"
        >
          <span className="relative z-10 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent group-hover:to-white transition-all">
            Launch App
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 pt-20 pb-32 md:pt-32 md:pb-48 max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-md mb-8 transition-all duration-700 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-xs font-medium text-zinc-400">v2.0 Now Available</span>
        </div>

        {/* Headline */}
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 transition-all duration-700 delay-100 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <span className="block bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-transparent pb-4">
            Chat Without
          </span>
          <span className="block text-indigo-500 relative inline-block">
            Limits
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-indigo-500/30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>
        </h1>

        <p className={`text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-200 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          Experience the next generation of private messaging.
          End-to-End encryption, ephemeral data, and zero logs.
          Your privacy is not just a feature, it's our foundation.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Link
            href="/auth"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-zinc-200 hover:scale-105 transition-all duration-300 shadow-xl shadow-white/5 active:scale-95"
          >
            Start Chatting Now
          </Link>
          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900/50 border border-zinc-800 text-white rounded-xl font-semibold text-lg hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 backdrop-blur-sm"
          >
            Explore Features
          </a>
        </div>

      </main>

      {/* Visualization / Mockup */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-32">
        <div className={`relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-indigo-500/10 bg-zinc-900/50 backdrop-blur-sm transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}`}>
          {/* Browser Header Mock */}
          <div className="h-10 bg-zinc-950/80 border-b border-zinc-800 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
            </div>
            <div className="mx-auto w-2/3 h-5 bg-zinc-800/50 rounded-md flex items-center justify-center text-[10px] text-zinc-600 font-mono">
              privlink.app/chat
            </div>
          </div>
          {/* Content Mock */}
          <div className="aspect-video w-full bg-gradient-to-br from-zinc-900 to-black p-8 flex items-center justify-center relative overflow-hidden">

            {/* Chat UI Abstract Representation */}
            <div className="absolute inset-0 flex">
              {/* Sidebar */}
              <div className="w-64 border-r border-zinc-800 bg-zinc-900/30 hidden md:block p-4 space-y-3">
                <div className="h-8 w-24 bg-zinc-800 rounded mb-6"></div>
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-14 w-full bg-zinc-800/40 rounded-lg animate-pulse" style={{ animationDelay: `${i * 150}ms` }}></div>
                ))}
              </div>
              {/* Main Chat */}
              <div className="flex-1 p-6 flex flex-col relative">
                {/* Messages */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-end gap-2">
                    <div className="w-8 h-8 rounded-full bg-zinc-800"></div>
                    <div className="bg-zinc-800/80 p-3 rounded-2xl rounded-bl-none max-w-sm">
                      <div className="h-2 w-32 bg-zinc-700/50 rounded mb-2"></div>
                      <div className="h-2 w-48 bg-zinc-700/50 rounded"></div>
                    </div>
                  </div>
                  <div className="flex items-end gap-2 flex-row-reverse">
                    <div className="bg-indigo-600/20 border border-indigo-500/30 p-3 rounded-2xl rounded-br-none max-w-sm text-indigo-100 text-sm">
                      <p>Everything is encrypted locally.</p>
                    </div>
                  </div>
                  <div className="flex items-end gap-2">
                    <div className="w-8 h-8 rounded-full bg-zinc-800"></div>
                    <div className="bg-zinc-800/80 p-3 rounded-2xl rounded-bl-none max-w-sm">
                      <div className="h-2 w-40 bg-zinc-700/50 rounded"></div>
                    </div>
                  </div>
                </div>
                {/* Input */}
                <div className="mt-4 h-12 bg-zinc-800/50 rounded-xl border border-zinc-700/50 flex items-center px-4 justify-between">
                  <div className="h-2 w-24 bg-zinc-700/50 rounded"></div>
                  <div className="w-8 h-8 bg-indigo-500/20 rounded-full"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md text-center pointer-events-none">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                    Private by Default.
                  </h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why PrivLink?</h2>
            <p className="text-zinc-400">Built for those who value digital sovereignty.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="👻"
              title="Ghost Typing"
              description="See when someone is typing without revealing your own status. Asynchronous presence detection."
            />
            <FeatureCard
              icon="🛡️"
              title="Zero Logs"
              description="We don't know who you are, who you talk to, or what you say. No metadata retention."
            />
            <FeatureCard
              icon="💎"
              title="Neon Mode"
              description="A stunning visual experience designed for late-night conversations. Eye-friendly and stylish."
            />
            <FeatureCard
              icon="🎭"
              title="Anonymous Levels"
              description="Choose your visibility. Go full ghost, semi-anon, or public. You control your identity."
            />
            <FeatureCard
              icon="🔒"
              title="Biometric Lock"
              description="Secure specific chats behind a simulated biometric wall for an extra layer of privacy."
            />
            <FeatureCard
              icon="⚡"
              title="Real-time Socket"
              description="Lightning fast delivery with our optimized WebSocket architecture. Instant connection."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900 bg-black text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <div className="font-bold text-xl mb-4">PrivLink</div>
          <p className="text-zinc-500 text-sm mb-8">© 2026 PrivLink Inc. All rights reserved.</p>
          <div className="flex gap-6 text-zinc-600">
            <a href="#" className="hover:text-zinc-400">Twitter</a>
            <a href="#" className="hover:text-zinc-400">GitHub</a>
            <a href="#" className="hover:text-zinc-400">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-800/50 hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 group">
      <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-zinc-100">{title}</h3>
      <p className="text-zinc-400 leading-relaxed text-sm">{description}</p>
    </div>
  );
}
