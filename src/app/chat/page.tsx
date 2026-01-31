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

import { useSocket } from "@/hooks/useSocket";

export default function Home() {
  const [showRightPanel, setShowRightPanel] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isIncognito, setIsIncognito] = useState(false);
  const [isGhostTyping, setIsGhostTyping] = useState(false);
  const { updateProfile, silentRead, experiments } = useSettingsStore();



  // 🧪 Experiment: Neon Mode
  useEffect(() => {
    if (experiments.neonMode) {
      document.body.classList.add('neon-mode');
    } else {
      document.body.classList.remove('neon-mode');
    }
  }, [experiments.neonMode]);

  // 🧪 Experiment: Ghost Typing Simulation
  useEffect(() => {
    if (!experiments.ghostTyping) {
      setIsGhostTyping(false);
      return;
    }

    // Randomly show typing every 10-25 seconds
    const loop = () => {
      const delay = Math.random() * 15000 + 10000;
      setTimeout(() => {
        if (experiments.ghostTyping) {
          setIsGhostTyping(true);
          // Stop typing after 3-5 seconds
          setTimeout(() => {
            setIsGhostTyping(false);
            loop(); // Schedule next
          }, Math.random() * 2000 + 3000);
        }
      }, delay);
    };

    loop();
    return () => setIsGhostTyping(false); // Cleanup isn't perfect here but good enough for experiment
  }, [experiments.ghostTyping]);

  // 🧪 Experiment: UI Sounds Helper
  const playInteractionSound = () => {
    if (!experiments.uiSounds) return;
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      // Subtle "pop"
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
      console.error("Audio play failed", e);
    }
  };

  // FIX: Blur input on zoom to prevent jump (Refined)
  // FIX: Blur input on zoom to prevent jump (Refined with VisualViewport)
  useEffect(() => {
    let zoomTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        const active = document.activeElement;
        if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) {
          (active as HTMLElement).blur();
        }
      }
    };

    const handleResize = () => {
      // If visual viewport scale > 1, it means we are zoomed in
      if (window.visualViewport && window.visualViewport.scale > 1) {
        const active = document.activeElement;
        if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) {
          (active as HTMLElement).blur();
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  useEffect(() => {
    // Check for alias from Identity Page
    const alias = sessionStorage.getItem("alias");
    if (alias) {
      updateProfile({
        displayName: alias,
        username: alias.toLowerCase().replace(/\s+/g, '_'),
      });
      // Clear it so it doesn't overwrite if the user later changes it manually and refreshes
      sessionStorage.removeItem("alias");
    }
  }, [updateProfile]);

  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChatId, setActiveChatId] = useState("");
  const [userPrefs, setUserPrefs] = useState<any>({});

  useEffect(() => {
    const stored = localStorage.getItem("userPrefs");
    if (stored) {
      try {
        setUserPrefs(JSON.parse(stored));
      } catch (e) { console.error("Failed to parse userPrefs", e); }
    }
  }, []);
  const [messages, setMessages] = useState<Message[]>([]);

  // Offline / Queue State
  const [isOnline, setIsOnline] = useState(true);
  const [messageQueue, setMessageQueue] = useState<Message[]>([]);

  // Reply State
  const [replyingTo, setReplyingTo] = useState<{ id: string; sender: string; text: string; mediaType?: 'image' | 'video' | 'audio' } | null>(null);

  const handleReply = (msg: Message) => {
    let text = msg.content;
    let mediaType: 'image' | 'video' | 'audio' | undefined;

    if (msg.type === 'image') { text = "Photo"; mediaType = 'image'; }
    if (msg.type === 'video') { text = "Video"; mediaType = 'video'; }
    if (msg.type === 'audio') { text = "Audio Message"; mediaType = 'audio'; }

    setReplyingTo({
      id: msg.id,
      sender: msg.isMe ? 'You' : (activeChatId ? chats.find(c => c.id === activeChatId)?.name || 'Sender' : 'Sender'),
      text,
      mediaType
    });
  };

  const cancelReply = () => setReplyingTo(null);

  const scrollToMessage = (messageId: string) => {
    const el = document.querySelector(`[data-message-id="${messageId}"]`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('bg-indigo-50/50', 'dark:bg-indigo-900/20', 'transition-colors', 'duration-500');
      setTimeout(() => {
        el.classList.remove('bg-indigo-50/50', 'dark:bg-indigo-900/20');
      }, 1000);
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Socket Integration
  const { socket, isConnected } = useSocket();

  // Join Chat Room
  useEffect(() => {
    if (socket && activeChatId) {
      socket.emit('join_chat', activeChatId);
    }
  }, [socket, activeChatId]);

  // Listen for Messages
  useEffect(() => {
    if (!socket) return;

    socket.on('receive_message', (data: Message) => {
      // Only append if it's the current chat to avoid pollution
      setMessages((prev) => {
        if (prev.some(m => m.id === data.id)) return prev;
        return [...prev, data];
      });
    });

    return () => {
      socket.off('receive_message');
    };
  }, [socket, activeChatId]);

  // Load Chats from API
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await fetch('/api/chats?userId=' + (sessionStorage.getItem("alias") || "anon"));
        if (!res.ok) throw new Error("Failed to load chats");
        const data = await res.json();

        if (data && data.length > 0) {
          setChats(data);
          setActiveChatId(data[0].id);
        } else {
          // Auto-create default chat if none exist
          const createRes = await fetch('/api/chats', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'General', isGroup: true })
          });
          const newChat = await createRes.json();
          setChats([newChat]);
          setActiveChatId(newChat.id);
        }
      } catch (e) {
        console.error("API Error (Chats):", e);
        // Fallback to mock for smooth failure
        setChats(mockChats);
        setActiveChatId(mockChats[0].id);
      }
    };

    fetchChats();
  }, []);

  // Network Status & Queue Processing
  useEffect(() => {
    // 1. Initial State
    setIsOnline(navigator.onLine);

    // 2. Listeners
    const handleOnline = () => {
      setIsOnline(true);
      // Queue processing removed for ephemeral mode
    };

    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const saveChats = (updatedChats: Chat[]) => {
    setChats(updatedChats);
    // Persistence removed
  };
  const [isScrolledBottom, setIsScrolledBottom] = useState(true);
  const [isScrolledHeader, setIsScrolledHeader] = useState(false); // Header calm-down state

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

    // Auto-Archive Logic (Run once on mount or when chats change significantly)
    const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;
    const now = Date.now();

    // Check if any visible chat is old enough to be archived
    // We do this check and update state if needed.
    // To prevent infinite loops, we should be careful. 
    // Best to do this check in a separate effect or initial load.
    // For now, let's put it in a separate effect that runs once on mount or when chat list is re-initialized.

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

  // Auto-Archive Effect
  useEffect(() => {
    const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;
    const now = Date.now();

    setChats(prev => {
      let hasChanges = false;
      const updated = prev.map(chat => {
        const chatTime = new Date(chat.timestamp || Date.now()).getTime();
        // If older than 30 days and NOT already archived
        if (now - chatTime > THIRTY_DAYS_MS && !chat.isArchived) {
          hasChanges = true;
          return { ...chat, isArchived: true };
        }
        return chat;
      });
      return hasChanges ? updated : prev;
    });
  }, []); // Run once on mount

  // Get current chat details
  const activeChat = useMemo(() => {
    // Safety check: chats might be empty initially before loading from local storage
    if (chats.length === 0) return null;
    const chat = chats.find(c => c.id === activeChatId) || chats[0];
    if (!chat) return null;

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

      return {
        ...chat,
        gravity: computedGravity,
        persona: computedPersona,
        energyBalance: computedEnergy,
        conversationWeight: computedWeight
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

  // Load messages from API when active chat changes
  useEffect(() => {
    if (!activeChatId) return;

    const fetchMessages = async () => {
      try {
        const res = await fetch(`/api/messages/${activeChatId}`);
        if (!res.ok) throw new Error("Failed to load messages");
        const data = await res.json();
        setMessages(data);
      } catch (e) {
        console.error("API Error (Messages):", e);
        setMessages([]);
      }
    };

    fetchMessages();
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

  const handleRetry = (id: string) => {
    const msg = messages.find(m => m.id === id);
    if (!msg) return;

    // Remove failed message
    setMessages(prev => prev.filter(m => m.id !== id));

    // Resend
    handleSendMessage(msg.content, msg.type, msg.duration, msg.confidenceScore, msg.thumbnailUrl, msg.style);
  };

  const handleSendMessage = (content: string, type: 'text' | 'audio' | 'video' | 'image', duration?: number, confidenceScore?: number, thumbnailUrl?: string, style?: { bold?: boolean; italic?: boolean; underline?: boolean; fontSize?: string }) => {
    if (!activeChat) return;

    // 🧪 Experiment: Play Sound
    playInteractionSound();

    const newMessage: Message = {
      id: Date.now().toString(),
      type: type,
      content: content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true,
      duration: duration,
      thumbnailUrl: thumbnailUrl,
      isConsecutive: messages.length > 0 && messages[messages.length - 1].isMe,
      status: isOnline ? 'sent' : 'queued',
      confidenceScore: confidenceScore,
      style: style,
      replyTo: replyingTo ? {
        messageId: replyingTo.id,
        username: replyingTo.sender,
        text: replyingTo.text,
        mediaType: replyingTo.mediaType
      } : undefined
    };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);

    // Save to Database
    fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content,
        chatId: activeChatId,
        senderId: sessionStorage.getItem("alias") || "Anonymous", // Sending Alias as ID for our lazy controller
        type,
        mediaUrl: thumbnailUrl
      })
    }).catch(err => console.error("Failed to save message to DB", err));


    setReplyingTo(null); // Clear reply state

    // UPDATE SIDEBAR ("You: ...")
    const updatedChats = chats.map(c => {
      if (c.id === activeChatId) {
        let preview = content;
        if (isIncognito) preview = '🔒 Incognito Message';
        else if (type === 'image') preview = '📷 Photo';
        else if (type === 'video') preview = '📹 Video';
        else if (type === 'audio') preview = '🎤 Audio';

        return {
          ...c,
          lastMessage: `You: ${preview}`,
          time: 'Just now',
          unreadCount: 0
        };
      }
      return c;
    });

    // Sort active chat to top
    updatedChats.sort((a, b) => a.id === activeChatId ? -1 : b.id === activeChatId ? 1 : 0);

    setChats(updatedChats);
    // Chat persistence removed


    if (!isOnline) {
      const updatedQueue = [...messageQueue, newMessage];
      setMessageQueue(updatedQueue);
      if (!isIncognito) {
        try {
          localStorage.setItem('privlink_message_queue', JSON.stringify(updatedQueue));
        } catch (e) {
          console.error("Failed to save queue:", e);
        }
      }
      return; // Stop here, don't simulate network events
    }

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
      isArchived: false,
    };

    saveChats([newChat, ...chats]);
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

  const handleArchiveChat = (chatId: string) => {
    const updated = chats.map(chat =>
      chat.id === chatId ? { ...chat, isArchived: !chat.isArchived } : chat
    );
    saveChats(updated);
  };

  const handleDeleteChat = (chatId: string) => {
    if (confirm("Are you sure you want to delete this chat?")) {
      const updated = chats.filter(c => c.id !== chatId);
      saveChats(updated);

      if (activeChatId === chatId && updated.length > 0) {
        setActiveChatId(updated[0].id);
      } else if (updated.length === 0) {
        setActiveChatId("");
      }
    }
  };

  if (!isMounted) return null;

  return (
    <div className="flex h-screen w-full overflow-hidden bg-transparent text-zinc-900 dark:text-zinc-100 font-sans">
      {/* Left Sidebar */}
      <Sidebar
        chats={chats}
        activeChatId={activeChatId}
        onSelectChat={handleChatSelect}
        onCreateChat={handleCreateChat}
        onArchiveChat={handleArchiveChat}
        onDeleteChat={handleDeleteChat}
      />

      {/* Main Chat Area */}
      {!activeChat ? (
        <div className="flex flex-1 items-center justify-center bg-zinc-50 dark:bg-black text-zinc-400">
          <p>Select a conversation to start chatting.</p>
        </div>
      ) : (
        <main
          className={`flex flex-1 flex-col min-w-0 relative transition-colors duration-[120000ms] ease-linear
            ${activeChat.permissions?.allowScreenshot === false ? 'select-none decoration-clone' : ''}
            md:rounded-[18px] md:m-2 md:overflow-hidden shadow-sm
          `}
          onContextMenu={(e) => {
            if (activeChat.permissions?.allowSaveMedia === false) {
              e.preventDefault();
            }
          }}
          style={{
            backgroundColor: 'transparent' // Let the wallpaper/global background handle it
          }}
        >
          {/* Dynamic Wallpaper Layer (Z-0) */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <div
              className={`absolute inset-0 transition-all duration-700 chat-background-pan ${(activeChat.chatBackground?.type === 'texture' || (!activeChat.chatBackground && userPrefs.chatBackground?.type === 'texture'))
                ? 'bg-repeat'
                : 'bg-cover bg-center'
                }`}
              style={{
                backgroundImage: (activeChat.chatBackground?.type === 'image' || (!activeChat.chatBackground && userPrefs.chatBackground?.type === 'image'))
                  ? `url("${activeChat.chatBackground?.value || userPrefs.chatBackground?.value}")`
                  : (activeChat.chatBackground?.type === 'texture' || (!activeChat.chatBackground && userPrefs.chatBackground?.type === 'texture'))
                    ? `url("${activeChat.chatBackground?.value || userPrefs.chatBackground?.value}")`
                    : (activeChat.chatBackground?.type === 'gradient' || (!activeChat.chatBackground && userPrefs.chatBackground?.type === 'gradient'))
                      ? (activeChat.chatBackground?.value || userPrefs.chatBackground?.value)
                      : 'none',
                backgroundColor: (activeChat.chatBackground?.type === 'color' || (!activeChat.chatBackground && userPrefs.chatBackground?.type === 'color'))
                  ? (activeChat.chatBackground?.value || userPrefs.chatBackground?.value)
                  : 'transparent',
                backgroundSize: (activeChat.chatBackground?.type === 'texture' || (!activeChat.chatBackground && userPrefs.chatBackground?.type === 'texture')) ? 'auto' : undefined,
                filter: `blur(${activeChat.chatBackground?.blur ?? userPrefs.chatBackground?.blur ?? 0}px) saturate(1.1)`,
                opacity: (activeChat.chatBackground?.intensity ?? userPrefs.chatBackground?.intensity ?? (activeChat.chatBackground?.type === 'texture' || userPrefs.chatBackground?.type === 'texture' ? 0.15 : 0.45)),
              }}
            />
            <div className="absolute inset-0 bg-white/55 dark:bg-black/20 mix-blend-overlay"></div>
          </div>

          {/* Atmosphere/Weight Vignette */}
          <div
            className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-1000"
            style={{
              background: `radial-gradient(circle at center, transparent 50%, rgba(0,0,0, ${Math.max(0.02, (activeChat.conversationWeight || 0) * 0.004)}) 100%)`,
              boxShadow: `inset 0 0 ${(activeChat.conversationWeight || 0) * 2}px rgba(0,0,0, ${(activeChat.conversationWeight || 0) * 0.0005})`
            }}
          />

          <div className="relative z-10 w-full">
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
              isIncognito={isIncognito}
              onToggleIncognito={() => setIsIncognito(!isIncognito)}
              isTyping={isGhostTyping}
            />
          </div>

          {/* Messages Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="chat-center relative z-10 flex-1 overflow-y-auto p-4 sm:p-6 no-scrollbar"
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
                    onContextMenu={(e) => {
                      e.preventDefault();
                      handleReply(msg);
                    }}
                  >
                    <MessageBubble
                      type={msg.type || 'text'}
                      content={msg.content || ''}
                      timestamp={msg.timestamp}
                      isMe={msg.isMe}
                      duration={msg.duration}
                      thumbnailUrl={msg.thumbnailUrl}
                      reactions={msg.reactions}
                      isConsecutive={msg.isConsecutive}
                      status={msg.status}
                      heatScore={msg.heatScore}
                      confidenceScore={msg.confidenceScore}
                      style={msg.style}
                      replyTo={msg.replyTo}
                      onReplyClick={scrollToMessage}
                      onImageClick={(url) => setSelectedImage(url)}
                      onRetry={() => handleRetry(msg.id)}
                    />
                  </div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="relative z-10 w-full">
            <MessageInput
              onSendMessage={handleSendMessage}
              boundaryMode={activeChat.boundaryMode}
              isIncognito={isIncognito}
              recentMessages={messages.filter(m => m.isMe).slice(-5).map(m => m.content || "")}
              selfAlias={activeChat.selfAlias}
              replyingTo={replyingTo}
              onCancelReply={cancelReply}
            />
          </div>
        </main>
      )}

      {/* Right Sidebar */}
      {showRightPanel && activeChat && (
        <RightPanel
          chat={activeChat}
          messages={messages}
          onImageClick={(url) => setSelectedImage(url)}
          onUpdateChat={(updated) => {
            const newChats = chats.map(c => c.id === updated.id ? updated : c);
            saveChats(newChats);
            // Also update local activeChat state if needed by reference (usually covered by hook or memo but safe to rely on chats prop)
          }}
        />
      )}
      {/* Lightbox Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image */}
          <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Full screen"
              className="max-h-[90vh] max-w-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div >
  );
}
