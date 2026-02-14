"use client";
import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, Loader2, Phone } from "lucide-react";

export function Chatbot({ defaultService = "General Inquiry" }: { defaultService?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // Track processed leads to avoid duplicate popups
  const [processedLeads, setProcessedLeads] = useState<Set<string>>(new Set());
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = { id: Date.now().toString(), role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({
          messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content })),
          serviceContext: defaultService
        }),
      });

      if (!response.ok) throw new Error("Network response was not ok");
      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      const assistantId = (Date.now() + 1).toString();

      setMessages(prev => [...prev, { id: assistantId, role: "assistant", content: "" }]);

      let accumulated = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        accumulated += chunk;
        setMessages(prev => prev.map(m => m.id === assistantId ? { ...m, content: accumulated } : m));

        // Check for new leads in real-time
        const leadMatches = [...accumulated.matchAll(/---LEAD---[\s\S]*?(?=(?:---LEAD---|$))/g)];

        if (leadMatches.length > 0) {
          const lastLeadBlock = leadMatches[leadMatches.length - 1][0];
          const leadKey = lastLeadBlock.trim();

          if (!processedLeads.has(leadKey)) {
            // Check if the block contains at least Name and Phone
            if (leadKey.includes("Name:") && leadKey.includes("Phone:")) {
              const name = leadKey.match(/Name:\s*(.+)/)?.[1] || "";
              const phone = leadKey.match(/Phone:\s*(.+)/)?.[1] || "";
              // More robust regex to catch "Issue: **TV Repair**" or "Issue: TV Repair"
              const issueMatch = leadKey.match(/Issue:\s*\*?([^*]+)\*?/i);
              const issue = issueMatch?.[1]?.trim() || defaultService || "General Inquiry";

              // Only open if we have at least Name and Phone
              if (name && phone) {
                // Clean up values for URL
                const cleanName = name.replace(/\[|\]/g, "").trim();
                const rawPhone = phone.replace(/\[|\]/g, "").trim();
                const cleanIssue = issue.replace(/\[|\]/g, "").trim();

                // Strict Client-Side Validation: Handle +91, 91, 0 prefixes
                let cleanDigits = rawPhone.replace(/\D/g, '');

                // Normalization for Indian Numbers
                if (cleanDigits.length > 10) {
                  if (cleanDigits.startsWith('91')) {
                    cleanDigits = cleanDigits.slice(2);
                  } else if (cleanDigits.startsWith('0')) {
                    cleanDigits = cleanDigits.slice(1);
                  }
                }

                // Final Valid Check: Must be exactly 10 digits
                // Final Valid Check: Must be exactly 10 digits
                if (cleanDigits.length === 10) {
                  // Format Message to match Hero Section (User's "pic1" / "pic2" preference)
                  // Format: Hi, I need [Service] service. Please share details.
                  // Name: ...
                  // Phone: ...
                  // Issue: ...
                  // Type: ...

                  const serviceName = defaultService === "General Inquiry" ? "Home Appliance Repair" : defaultService;
                  const preText = `Hi, I need ${serviceName} service. Please share details.`;

                  // Send email in background (fire and forget)
                  fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      name: cleanName,
                      phone: cleanDigits,
                      service: serviceName,
                      issue: cleanIssue,
                      type: "Chatbot Lead"
                    }),
                  }).catch((err) => console.error("Failed to send chatbot email lead", err));

                  const waMessage = `*${preText}* %0a%0a` +
                    `*Name:* ${cleanName} %0a` +
                    `*Phone:* ${cleanDigits} %0a` +
                    `*Issue:* ${cleanIssue} %0a` +
                    `*Type:* ${defaultService}`;

                  window.open(`https://wa.me/918076418358?text=${waMessage}`, "_blank");
                  setProcessedLeads(prev => new Set(prev).add(leadKey));
                } else {
                  console.warn("Skipped invalid lead phone:", rawPhone);
                }
              }
            }
          }
        }
      }

    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleOpen = () => setIsOpen(!isOpen);

  // Helper to strip LEAD block from display
  const cleanContent = (content: string) => {
    return content.replace(/---LEAD---[\s\S]*/g, "").trim();
  };

  return (
    <>
      {/* Search/WhatsApp Floating Button (Green) - Fixed Position */}
      <a
        href="https://wa.me/918076418358?text=Hi%2C%20I%20need%20help%20with%20an%20appliance%20repair"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-36 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform hover:bg-[#128C7E]"
        title="Chat on WhatsApp"
      >
        <Phone size={28} />
      </a>

      {/* Chatbot Container */}
      <div className="fixed bottom-20 right-6 z-50 flex flex-col items-end">
        {!isOpen ? (
          <button onClick={toggleOpen} className="h-14 w-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center relative hover:scale-110 transition-transform">
            <MessageCircle size={28} />
            <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-[10px] font-bold px-1.5 rounded-full border-2 border-white">AI</span>
          </button>
        ) : (
          <div className="flex h-[500px] w-[350px] flex-col rounded-2xl border bg-white shadow-2xl overflow-hidden sm:w-[400px] animate-in fade-in slide-in-from-bottom-10">
            <div className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-md">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-1.5 rounded-lg">
                  <Bot size={20} />
                </div>
                <span className="font-bold">AppliancesPro</span>
              </div>
              <button onClick={toggleOpen} className="hover:bg-blue-500 p-1 rounded-full transition-colors"><X size={20} /></button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.length === 0 && (
                <div className="text-center text-gray-500 text-sm mt-10 p-4 bg-white shadow-sm rounded-lg mx-4">
                  <Bot className="mx-auto mb-2 text-blue-600" size={40} />
                  <p className="font-medium text-lg text-gray-800">Hello! Welcome to AppliancesPro.</p>
                  <p className="mt-2 text-gray-600">I am your AI assistant. How can I help you today?</p>
                  <p className="mt-1 text-gray-600">I can assist with inquiries for <strong>all home appliances</strong> including repair, maintenance, and installation.</p>
                </div>
              )}

              {messages.map(m => (
                <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${m.role === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-white border text-gray-800 rounded-bl-none"
                    }`}>
                    {m.role === "assistant" ? cleanContent(m.content) : m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border rounded-2xl rounded-bl-none px-4 py-2 shadow-sm">
                    <Loader2 className="animate-spin text-blue-600" size={16} />
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSend} className="p-3 border-t bg-white flex gap-2 shadow-inner">
              <input
                className="flex-1 bg-gray-100 border-transparent focus:bg-white focus:border-blue-500 rounded-full px-4 py-2 text-sm text-black outline-none transition-all placeholder:text-gray-400"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type your message..."
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-full disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-md"
                disabled={isLoading}
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}