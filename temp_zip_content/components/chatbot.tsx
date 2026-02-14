"use client";

import React from "react"

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "919876543210";

function extractLead(text: string) {
  const leadMatch = text.match(/---LEAD---([\s\S]*?)---END LEAD---/);
  if (!leadMatch) return null;
  const leadText = leadMatch[1];
  const name = leadText.match(/Name:\s*(.+)/)?.[1]?.trim();
  const phone = leadText.match(/Phone:\s*(.+)/)?.[1]?.trim();
  const service = leadText.match(/Service:\s*(.+)/)?.[1]?.trim();
  const acType = leadText.match(/AC Type:\s*(.+)/)?.[1]?.trim();
  const issue = leadText.match(/Issue:\s*(.+)/)?.[1]?.trim();
  if (name && phone) return { name, phone, service, acType, issue };
  return null;
}

function formatDisplayText(text: string) {
  return text.replace(/---LEAD---[\s\S]*?---END LEAD---/g, "").trim();
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [leadSent, setLeadSent] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const isLoading = status === "streaming" || status === "submitted";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Check for leads in the latest message
  useEffect(() => {
    if (leadSent) return;
    const lastMsg = messages[messages.length - 1];
    if (!lastMsg || lastMsg.role !== "assistant") return;
    const text =
      lastMsg.parts
        ?.filter((p): p is { type: "text"; text: string } => p.type === "text")
        .map((p) => p.text)
        .join("") || "";
    const lead = extractLead(text);
    if (lead) {
      setLeadSent(true);
      const whatsappText = encodeURIComponent(
        `*AI Chatbot Lead*\n\nName: ${lead.name}\nPhone: ${lead.phone}\nService: ${lead.service || "N/A"}\nAC Type: ${lead.acType || "N/A"}\nIssue: ${lead.issue || "N/A"}`
      );
      // Send lead to WhatsApp silently
      const link = document.createElement("a");
      link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.click();
    }
  }, [messages, leadSent]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  }

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-110"
          aria-label="Open AI Chat Assistant"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
            AI
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[360px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl sm:w-[400px]">
          {/* Chat Header */}
          <div className="flex items-center justify-between bg-primary px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/20">
                <Bot className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-primary-foreground">
                  AppliancesPro Assistant
                </h3>
                <p className="text-xs text-primary-foreground/70">
                  {isLoading ? "Typing..." : "Online"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 text-primary-foreground/70 hover:text-primary-foreground"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4">
            {/* Welcome message */}
            {messages.length === 0 && (
              <div className="mb-4 flex gap-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="rounded-2xl rounded-tl-sm bg-muted px-4 py-3 text-sm text-foreground leading-relaxed">
                  Hello! Welcome to AppliancesPro. I am your AI assistant. How
                  can I help you with your AC today? Whether it is repair, gas
                  refill, installation, or maintenance - I am here to help!
                </div>
              </div>
            )}

            {messages.map((message) => {
              const text =
                message.parts
                  ?.filter(
                    (p): p is { type: "text"; text: string } =>
                      p.type === "text"
                  )
                  .map((p) => p.text)
                  .join("") || "";
              const displayText =
                message.role === "assistant" ? formatDisplayText(text) : text;
              if (!displayText) return null;

              return (
                <div
                  key={message.id}
                  className={cn(
                    "mb-4 flex gap-2",
                    message.role === "user" && "flex-row-reverse"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                      message.role === "user"
                        ? "bg-accent/20"
                        : "bg-primary/10"
                    )}
                  >
                    {message.role === "user" ? (
                      <User className="h-4 w-4 text-accent-foreground" />
                    ) : (
                      <Bot className="h-4 w-4 text-primary" />
                    )}
                  </div>
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                      message.role === "user"
                        ? "rounded-tr-sm bg-primary text-primary-foreground"
                        : "rounded-tl-sm bg-muted text-foreground"
                    )}
                  >
                    {displayText}
                  </div>
                </div>
              );
            })}

            {isLoading &&
              messages[messages.length - 1]?.role !== "assistant" && (
                <div className="mb-4 flex gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm bg-muted px-4 py-3">
                    <div className="flex gap-1">
                      <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50" />
                      <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:0.15s]" />
                      <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:0.3s]" />
                    </div>
                  </div>
                </div>
              )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-border bg-card p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1 rounded-full border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button
              type="submit"
              size="icon"
              disabled={isLoading || !input.trim()}
              className="h-10 w-10 shrink-0 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
