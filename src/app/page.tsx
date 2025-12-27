"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import ChatHeader from "@/components/ChatHeader";
import MessageBubble from "@/components/MessageBubble";
import MessageInput from "@/components/MessageInput";
import RightPanel from "@/components/RightPanel";
import SettingsView from "@/components/SettingsView";

export default function Home() {
  const [currentView, setCurrentView] = useState<'chat' | 'settings'>('chat');

  return (
    <div className="app-shell">
      <div className="app-layout">

        {/* Left Sidebar */}
        <div className="left-sidebar">
          <Sidebar onNavigate={setCurrentView} />
        </div>

        {/* Main Chat Area */}
        <main className="chat-panel">
          {currentView === 'chat' ? (
            <>
              <div className="chat-header">
                <ChatHeader />
              </div>

              {/* Messages Container */}
              <div className="chat-messages scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-800">
                <div className="mx-auto max-w-3xl space-y-6">

                  {/* Date Divider */}
                  <div className="flex items-center justify-center">
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                      Today
                    </span>
                  </div>

                  <MessageBubble
                    content="Hey Sarah! How's the new design coming along?"
                    timestamp="10:23 AM"
                    isMe={true}
                  />

                  <MessageBubble
                    content="Hi! It's going great. I just finished the initial mockups for the dashboard."
                    timestamp="10:25 AM"
                    isMe={false}
                    isConsecutive={false}
                  />
                  <MessageBubble
                    image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
                    timestamp="10:25 AM"
                    isMe={false}
                    isConsecutive={true}
                  />
                  <MessageBubble
                    content="I really like the color palette you chose! vivid but professional."
                    timestamp="10:26 AM"
                    isMe={true}
                    reactions={[{ emoji: "🔥", count: 2 }]}
                  />
                  <MessageBubble
                    content="Thanks! I tried to follow the new brand guidelines strictly."
                    timestamp="10:28 AM"
                    isMe={false}
                  />
                  <MessageBubble
                    content="Could you send over the Figma link when you have a sec?"
                    timestamp="10:30 AM"
                    isMe={true}
                  />
                  <MessageBubble
                    content="Sure thing, sending it now."
                    timestamp="10:31 AM"
                    isMe={false}
                  />
                  <MessageBubble
                    content="Here it is: https://figma.com/file/..."
                    timestamp="10:31 AM"
                    isMe={false}
                    isConsecutive={true}
                  />
                  <MessageBubble
                    content="Perfect, checking it out now!"
                    timestamp="10:32 AM"
                    isMe={true}
                    reactions={[{ emoji: "👍", count: 1 }]}
                  />
                </div>
              </div>

              {/* Input Area */}
              <div className="chat-input">
                <MessageInput />
              </div>
            </>
          ) : (
            <SettingsView onClose={() => setCurrentView('chat')} />
          )}
        </main>

        {/* Right Sidebar */}
        <div className="right-sidebar">
          {currentView === 'chat' && <RightPanel />}
          {currentView === 'settings' && <div className="h-full w-full bg-white dark:bg-zinc-900 border-l border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-sm text-zinc-400">Settings Info</div>}
        </div>

      </div>
    </div>
  );
}
