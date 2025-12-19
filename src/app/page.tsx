
"use client";

import Sidebar from "@/components/Sidebar";
import ChatHeader from "@/components/ChatHeader";
import MessageBubble from "@/components/MessageBubble";
import MessageInput from "@/components/MessageInput";
import RightPanel from "@/components/RightPanel";
import { useState, useRef, useEffect, useMemo } from "react";
import { mockChats, mockMessages, Message, Chat } from "@/lib/data";

export default function Home() {
  const [showRightPanel, setShowRightPanel] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize active chat with the first one
  const [activeChatId, setActiveChatId] = useState(mockChats[0].id);
  const [messages, setMessages] = useState<Message[]>([]);

  // Get current chat details
  const activeChat = useMemo(() =>
    mockChats.find(c => c.id === activeChatId) || mockChats[0],
    [activeChatId]);

  // Load messages when active chat changes
  useEffect(() => {
    if (mockMessages[activeChatId]) {
      setMessages(mockMessages[activeChatId]);
    } else {
      setMessages([]);
    }
  }, [activeChatId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true,
      isConsecutive: messages.length > 0 && messages[messages.length - 1].isMe,
    };
    setMessages((prev) => [...prev, newMessage]);

    // In a real app, you'd also update the backend/store here
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 font-sans">
      {/* Left Sidebar */}
      <Sidebar
        chats={mockChats}
        activeChatId={activeChatId}
        onSelectChat={setActiveChatId}
      />

      {/* Main Chat Area */}
      <main className="flex flex-1 flex-col min-w-0 bg-white/50 dark:bg-zinc-900/50 relative">
        <ChatHeader
          onToggleRightPanel={() => setShowRightPanel(!showRightPanel)}
          name={activeChat.name}
          avatarUrl={activeChat.avatarUrl}
          isOnline={activeChat.isOnline}
        />

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-800">
          <div className="mx-auto max-w-3xl space-y-6">

            {/* Date Divider */}
            <div className="flex items-center justify-center">
              <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                Today
              </span>
            </div>

            {messages.map((msg) => (
              <MessageBubble
                key={msg.id}
                content={msg.content}
                timestamp={msg.timestamp}
                isMe={msg.isMe}
                image={msg.image}
                reactions={msg.reactions}
                isConsecutive={msg.isConsecutive}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <MessageInput onSendMessage={handleSendMessage} />
      </main>

      {/* Right Sidebar */}
      {showRightPanel && <RightPanel />}
    </div >
  );
}

