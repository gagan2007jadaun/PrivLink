"use client";

import Sidebar from "@/components/Sidebar";
import ChatHeader from "@/components/ChatHeader";
import MessageBubble from "@/components/MessageBubble";
import MessageInput from "@/components/MessageInput";
import RightPanel from "@/components/RightPanel";
import { useState, useRef, useEffect, useMemo } from "react";
import { mockChats, mockMessages, Message, Chat } from "@/lib/data";

import { useSettingsStore } from "@/store/useSettingsStore";

export default function Home() {
  const [showRightPanel, setShowRightPanel] = useState(true);

  // Initialize state
  const [chats, setChats] = useState<Chat[]>(mockChats);
  const [activeChatId, setActiveChatId] = useState(mockChats[0].id);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isScrolledBottom, setIsScrolledBottom] = useState(true);
  const { silentRead } = useSettingsStore();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Screenshot heuristic state
  const lastBlurTime = useRef<number>(0);

  useEffect(() => {
    // Screenshot Detection Heuristics
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Heuristic: If hidden shortly after blur, possible screenshot/recording setup or switching
        console.warn("Visibility hidden - Possible capture event");
      }
    };

    const handleBlur = () => {
      lastBlurTime.current = Date.now();
      console.log("Window blurred");
    };

    // Combined Heuristic (Example: Blur + Hidden within small window)
    const checkHeuristics = () => {
      if (document.hidden && Date.now() - lastBlurTime.current < 500) {
        console.warn("High Probability Screenshot/Capture detected");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);
    document.addEventListener("visibilitychange", checkHeuristics);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
      document.removeEventListener("visibilitychange", checkHeuristics);
    };
  }, []);

  // Get current chat details
  const activeChat = useMemo(() =>
    chats.find(c => c.id === activeChatId) || chats[0],
    [activeChatId, chats]);

  // Mark chat as seen with delay
  const markAsSeen = (chatId: string) => {
    // Respect "Seen Silently" mode
    if (silentRead) return;

    // Human-like delay logic
    const delay = Math.floor(Math.random() * 2500) + 1500;

    setTimeout(() => {
      setChats(prev => prev.map(chat =>
        chat.id === chatId && (chat.unreadCount || 0) > 0
          ? { ...chat, unreadCount: 0 }
          : chat
      ));
    }, delay);
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      // Check if scrolled to bottom with a small tolerance (e.g. 20px)
      const isBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 20;
      setIsScrolledBottom(isBottom);
    }
  };

  // Check if we should mark as seen when scroll position or active chat changes
  useEffect(() => {
    if (activeChatId && isScrolledBottom) {
      markAsSeen(activeChatId);
    }
  }, [activeChatId, isScrolledBottom]);

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
      status: 'sent',
    };
    setMessages((prev) => [...prev, newMessage]);

    // Simulate backend "Delivered" event (Receiver Socket Connected)
    setTimeout(() => {
      setMessages(prev => prev.map(m =>
        m.id === newMessage.id ? { ...m, status: 'delivered', deliveredAt: new Date().toISOString() } : m
      ));

      // Simulate "Read" event (Chat Open + Bottom Scroll + Delay)
      // Adaptive Delay: Use contact's average read time for natural feel
      const baseDelay = activeChat.avgReadTime || 2000;
      // Add variance: +/- 20%
      const variance = baseDelay * 0.2;
      const adaptiveDelay = baseDelay + (Math.random() * variance * 2 - variance);

      setTimeout(() => {
        setMessages(prev => prev.map(m =>
          m.id === newMessage.id ? { ...m, status: 'read', readAt: new Date().toISOString() } : m
        ));
      }, adaptiveDelay);

    }, 1500);
  };

  const handleCreateChat = (data: { type: string; name: string; description: string }) => {
    const newChat: Chat = {
      id: Date.now().toString(),
      name: data.name,
      lastMessage: `Welcome to ${data.name}!`,
      time: 'Just now',
      unreadCount: 0,
      isOnline: true,
      avatarUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}&background=random`,
      // @ts-ignore - straightforward for mock purposes
      type: data.type,
    };

    setChats(prev => [newChat, ...prev]);
    setActiveChatId(newChat.id);

    // Initialize empty messages for the new chat
    mockMessages[newChat.id] = [{
      id: 'welcome',
      content: `This is the start of your new ${data.type}: ${data.name}. ${data.description ? `\n\n${data.description}` : ''}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: false,
    }];
    setMessages(mockMessages[newChat.id]);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 font-sans">
      {/* Left Sidebar */}
      <Sidebar
        chats={chats}
        activeChatId={activeChatId}
        onSelectChat={setActiveChatId}
        onCreateChat={handleCreateChat}
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
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto p-4 sm:p-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-800"
        >
          <div className="mx-auto max-w-3xl space-y-6">

            {/* Date Divider */}
            <div className="flex items-center justify-center">
              <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                Today
              </span>
            </div>

            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-zinc-500 mt-20">
                <p>No messages yet.</p>
              </div>
            ) : (
              messages.map((msg) => (
                <MessageBubble
                  key={msg.id}
                  content={msg.content}
                  timestamp={msg.timestamp}
                  isMe={msg.isMe}
                  image={msg.image}
                  reactions={msg.reactions}
                  isConsecutive={msg.isConsecutive}
                  status={msg.status}
                />
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <MessageInput onSendMessage={handleSendMessage} />
      </main>

      {/* Right Sidebar */}
      {showRightPanel && <RightPanel chat={activeChat} />}
    </div >
  );
}
