"use client";

import Sidebar from "@/components/Sidebar";
import ChatHeader from "@/components/ChatHeader";
import MessageBubble from "@/components/MessageBubble";
import MessageInput from "@/components/MessageInput";
import RightPanel from "@/components/RightPanel";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { mockChats, mockMessages, Message, Chat } from "@/lib/data";

import { useSettingsStore } from "@/store/useSettingsStore";

// Hook: Track User Attention
function useAttention() {
  const [isAttentionActive, setIsAttentionActive] = useState(false);
  const lastActivityRef = useRef(Date.now());
  const attentionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleActivity = () => {
      lastActivityRef.current = Date.now();
      if (!isAttentionActive && document.hasFocus()) {
        setIsAttentionActive(true);
      }

      // Reset "Idle" timer
      if (attentionTimeoutRef.current) clearTimeout(attentionTimeoutRef.current);
      attentionTimeoutRef.current = setTimeout(() => {
        setIsAttentionActive(false);
      }, 2000); // 2 seconds idle = No attention
    };

    const handleFocus = () => handleActivity();
    const handleBlur = () => setIsAttentionActive(false);

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("scroll", handleActivity);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("scroll", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, [isAttentionActive]);

  return isAttentionActive;
}

export default function Home() {
  const [showRightPanel, setShowRightPanel] = useState(true);

  // Initialize state
  const [chats, setChats] = useState<Chat[]>(mockChats);
  const [activeChatId, setActiveChatId] = useState(mockChats[0].id);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isScrolledBottom, setIsScrolledBottom] = useState(true);
  const [isScrolledHeader, setIsScrolledHeader] = useState(false); // Header calm-down state
  const { silentRead } = useSettingsStore();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Attention Tracking
  const hasAttention = useAttention();

  // Screenshot heuristic state
  const lastBlurTime = useRef<number>(0);
  const chatsRef = useRef(chats);

  useEffect(() => {
    chatsRef.current = chats;
  }, [chats]);

  // Selective Read Logic
  const readUpto = useCallback((messageId: string) => {
    // Requirements for "Read":
    // 1. App must be focused & user active (hasAttention)
    // 2. Global "Silent Read" must be OFF
    // 3. One-way "Ghost Mode" must be OFF

    // Find current chat to check per-chat settings
    const currentChat = chatsRef.current.find(c => c.id === activeChatId);
    if (!hasAttention || silentRead || currentChat?.isSilentRead || currentChat?.boundaryMode) return;

    setChats(prev => prev.map(c => {
      if (c.id === activeChatId && (c.unreadCount || 0) > 0) {
        // Simple Mock: If we see the *last* message, clear unread count.
        // In real app, we'd check index > readIndex.
        const isLastMessage = messages.length > 0 && messages[messages.length - 1].id === messageId;
        if (isLastMessage) {
          return { ...c, unreadCount: 0 };
        }
      }
      return c;
    }));
  }, [activeChatId, hasAttention, messages, silentRead]);

  // Use IntersectionObserver to call readUpto for *visible* messages AND track Heatmap
  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const entryTimes = new Map<string, number>();

    const observer = new IntersectionObserver((entries) => {
      const now = Date.now();
      entries.forEach(entry => {
        const messageId = entry.target.getAttribute("data-message-id");
        if (!messageId) return;

        if (entry.isIntersecting) {
          // READ LOGIC
          if (hasAttention) readUpto(messageId);

          // HEATMAP START
          if (!entryTimes.has(messageId)) {
            entryTimes.set(messageId, now);
          }
        } else {
          // HEATMAP END
          const startTime = entryTimes.get(messageId);
          if (startTime) {
            const duration = now - startTime;
            entryTimes.delete(messageId);

            // Calculate Heat Score
            setMessages(prev => prev.map(msg => {
              if (msg.id === messageId) {
                // Formula: Heat = Duration (ms) / Length (chars) * Factor
                // Example: 2000ms / 20 chars = 100 heat. 
                // Threshold ~ 50.
                const length = msg.content?.length || 10;
                const score = Math.min(100, Math.floor((duration / length) * 0.5)); // Arbitrary factor

                // Only update if significantly hotter or new
                if (score > (msg.heatScore || 0)) {
                  return { ...msg, heatScore: score };
                }
              }
              return msg;
            }));
          }
        }
      });
    }, { root: scrollContainerRef.current, threshold: 0.8 });

    // Note: We need to actually observe elements. Since we render messages in a map, 
    // we'll need to make sure we query them. 
    // For this iteration, we assume the MessageBubble container has data-message-id
    // We will add this observation logic in a separate effect or after render in a real app,
    // but for this file structure, we might need to select them manually:
    const userMessages = document.querySelectorAll("[data-message-id]");
    userMessages.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [readUpto, hasAttention, messages]); // Re-run when messages change to observe new ones

  // Auto-scroll logic also triggers read if attention is present
  useEffect(() => {
    if (isScrolledBottom) {
      scrollToBottom();
      if (messages.length > 0) {
        readUpto(messages[messages.length - 1].id);
      }
    }
  }, [messages, isScrolledBottom, readUpto]);

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
  const activeChat = useMemo(() => {
    const chat = chats.find(c => c.id === activeChatId) || chats[0];

    // Dynamic Analysis: Calculate Psychometrics from real messages
    if (messages.length > 0) {
      // 1. Gravity (Initiation Balance)
      let myStarts = 0;
      let theirStarts = 0;
      let lastTime = 0;

      messages.forEach(msg => {
        const msgTime = new Date(msg.timestamp).getTime(); // Note: Mock timestamps are strings like "10:23 AM", so parsing might fail without date. 
        // Mock timestamps are "10:23 AM". We need robust parsing or just assume basic flow for now.
        // Let's rely on simple `isConsecutive` logic: A "Start" is a message that is NOT consecutive and follows a long gap.
        // Since we don't have exact Dates in mock, we'll simpler heuristic:
        // Who sent the *first* message of the day/session?
        // Or ratio of total messages?
        // Let's use Message Count Ratio for Gravity for now as it's robust.
        // Gravity = Initiation. Let's approximation: Who sent more messages that started a block?
      });

      // Simpler Gravity: Message Count Ratio (Who drives the volume?)
      const myMsgCount = messages.filter(m => m.isMe).length;
      const theirMsgCount = messages.length - myMsgCount;
      const ratio = myMsgCount / (messages.length || 1);

      let computedGravity: 'balanced' | 'one-sided-me' | 'one-sided-them' = 'balanced';
      if (ratio > 0.65) computedGravity = 'one-sided-me';
      if (ratio < 0.35) computedGravity = 'one-sided-them';

      // 2. Persona (Time of Day - Last few messages)
      // Parse time string "10:23 AM"
      const times = messages.filter(m => !m.isMe).map(m => {
        const [time, modifier] = m.timestamp.split(' ');
        if (!time || !modifier) return null;
        let [hours, mins] = time.split(':').map(Number);
        if (modifier === 'PM' && hours < 12) hours += 12;
        if (modifier === 'AM' && hours === 12) hours = 0;
        return hours;
      }).filter(h => h !== null) as number[];

      let computedPersona: 'morning' | 'night' | 'balanced' = 'balanced';
      if (times.length > 0) {
        const avgHour = times.reduce((a, b) => a + b, 0) / times.length;
        if (avgHour >= 5 && avgHour < 12) computedPersona = 'morning';
        if (avgHour >= 22 || avgHour < 4) computedPersona = 'night';
      }

      // 3. Energy Balance (Length of messages)
      const myLength = messages.filter(m => m.isMe).reduce((acc, m) => acc + (m.content?.length || 0), 0);
      const theirLength = messages.filter(m => !m.isMe).reduce((acc, m) => acc + (m.content?.length || 0), 0);
      // Normalized score: -100 (They talk only) to +100 (I talk only)
      // 0 = Balanced
      const totalLen = myLength + theirLength || 1;
      const computedEnergy = Math.round(((myLength - theirLength) / totalLen) * 100);

      // 4. Conversation Weight (Depth/Seriousness)
      // Heuristic: Average message length. 
      // Short texts = Light (Weight ~20). Long paragraphs = Heavy (Weight ~80+).
      const avgLen = totalLen / messages.length;
      // Map 10 chars -> 10 weight, 200 chars -> 100 weight
      const computedWeight = Math.min(100, Math.max(10, Math.round((avgLen / 150) * 100)));

      // 5. Mutual Curiosity (Question Frequency)
      const questionCount = messages.filter(m => (m.content || "").includes('?')).length;
      // Heuristic: 20% questions = 100 score. (1 in 5)
      const computedCuriosity = Math.min(100, Math.round((questionCount / (messages.length || 1)) * 500));

      return {
        ...chat,
        gravity: computedGravity,
        persona: computedPersona,
        energyBalance: computedEnergy,
        conversationWeight: computedWeight,
        mutualCuriosity: computedCuriosity
      };
    }

    return chat;
  }, [activeChatId, chats, messages]);

  // Mark chat as seen with delay
  const markAsSeen = (chatId: string) => {
    // Respect "Seen Silently" mode AND "Boundary Mode"
    const currentChat = chats.find(c => c.id === chatId);
    if (silentRead || currentChat?.boundaryMode) return;

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
      // Check if scrolled based on threshold for Header Micro-Motion
      setIsScrolledHeader(scrollTop > 40);

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

  // Smarter Auto-Scroll Logic
  const prevMessagesLength = useRef(messages.length);

  useEffect(() => {
    // Only handle auto-scroll if new messages are added
    if (messages.length > prevMessagesLength.current) {
      const lastMessage = messages[messages.length - 1];

      // If I sent it, or if I was already at the bottom, scroll down
      if (lastMessage.isMe || isScrolledBottom) {
        scrollToBottom();
      }
    }
    prevMessagesLength.current = messages.length;
  }, [messages, isScrolledBottom]);

  // Handle chat selection with "Biometric Lock"
  const handleChatSelect = (chatId: string) => {
    const chat = chats.find(c => c.id === chatId);
    if (chat?.isLocked) {
      // Mock Biometric Auth
      const isAuthenticated = window.confirm(`🔐 "Biometric Scan" Required\n\nClick OK to simulate successful FaceID/TouchID.`);
      if (!isAuthenticated) return;
    }
    setActiveChatId(chatId);
    setShowRightPanel(true); // Ensure panel opens on mobile/tablet logic if applicable
  };

  const handleSendMessage = (content: string, type: 'text' | 'audio' | 'video' | 'image', duration?: number, confidenceScore?: number) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type: type,
      content: content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true,
      duration: duration,
      isConsecutive: messages.length > 0 && messages[messages.length - 1].isMe,
      status: 'sent',
      confidenceScore: confidenceScore,
    };
    setMessages((prev) => [...prev, newMessage]);

    // Simulate "Drift" reduction on interaction
    if (activeChat.driftLevel === 'high') {
      const updatedChats = chats.map(c =>
        c.id === activeChatId ? { ...c, driftLevel: 'medium' as const } : c
      );
      // In a real app, we'd update the store/state properly
      // setChats(updatedChats);
    }

    // Simulate backend "Delivered" event (Receiver Socket Connected)
    setTimeout(() => {
      setMessages(prev => prev.map(m =>
        m.id === newMessage.id ? { ...m, status: 'delivered', deliveredAt: new Date().toISOString() } : m
      ));

      // Simulate "Read" event (Chat Open + Bottom Scroll + Delay)
      let baseDelay = activeChat.avgReadTime || 2000;

      if (activeChat.relationshipMode === 'work') baseDelay = 500; // Instant
      if (activeChat.relationshipMode === 'casual') baseDelay = 20000; // Slow

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
      type: 'text',
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
        onSelectChat={handleChatSelect}
        onCreateChat={handleCreateChat}
      />

      {/* Main Chat Area */}
      {/* Background Drift Logic: 
          Warm (#9AA57A tint) -> Low Drift
          Neutral (Grey) -> Medium Drift
          Cold (#8A7F7F tint) -> High Drift
      */}
      <main
        className="flex flex-1 flex-col min-w-0 relative transition-colors duration-[120000ms] ease-linear"
        style={{
          backgroundColor:
            activeChat.driftLevel === 'high' ? '#F4F4F5' : // Cold (using zinc-100ish for now, tint via overlay maybe better but request says bg color)
              activeChat.driftLevel === 'medium' ? '#FAFAFA' : // Neutral
                '#FEFCF5' // Warm tint (custom)
        }}
      >
        {/* Atmosphere/Weight Vignette */}
        {/* Adds subtle visual depth/heaviness to serious conversations */}
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-1000"
          style={{
            background: `radial-gradient(circle at center, transparent 50%, rgba(0,0,0, ${Math.max(0.02, (activeChat.conversationWeight || 0) * 0.004)}) 100%)`,
            // Optional: Inset shadow for extra "tightness"
            boxShadow: `inset 0 0 ${(activeChat.conversationWeight || 0) * 2}px rgba(0,0,0, ${(activeChat.conversationWeight || 0) * 0.0005})`
          }}
        />

        {/* Memory Drift Overlay for finer tint control if needed, but using direct bg for now as per "transition background-color" request */}

        <ChatHeader
          onToggleRightPanel={() => setShowRightPanel(!showRightPanel)}
          name={activeChat.name}
          avatarUrl={activeChat.avatarUrl}
          isOnline={activeChat.isOnline}
          driftLevel={activeChat.driftLevel}
          interestScore={activeChat.interestScore}
          interestTrend={activeChat.interestTrend}
          gravity={activeChat.gravity}
          persona={activeChat.persona}
          energyBalance={activeChat.energyBalance}
          isScrolled={isScrolledHeader}
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
                <div
                  key={msg.id}
                  data-message-id={msg.id}
                  className={`flex w-full ${msg.isMe ? 'justify-end' : 'justify-start'} ${msg.isConsecutive ? 'mt-1' : 'mt-4'}`}
                >
                  <MessageBubble
                    type={msg.type || 'text'} // Fallback for safety though we migrated mocks
                    content={msg.content || ''}
                    timestamp={msg.timestamp}
                    isMe={msg.isMe}
                    duration={msg.duration}
                    reactions={msg.reactions}
                    isConsecutive={msg.isConsecutive}
                    status={msg.status}
                    heatScore={msg.heatScore}
                    confidenceScore={msg.confidenceScore}
                  />
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <MessageInput
          onSendMessage={handleSendMessage}
          boundaryMode={activeChat.boundaryMode}
          recentMessages={messages.filter(m => m.isMe).slice(-5).map(m => m.content || "")}
        />
      </main>

      {/* Right Sidebar */}
      {showRightPanel && <RightPanel chat={activeChat} />}
    </div >
  );
}
