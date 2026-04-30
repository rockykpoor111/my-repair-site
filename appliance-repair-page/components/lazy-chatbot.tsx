"use client";

import dynamic from "next/dynamic";

export const LazyChatbot = dynamic(
  () => import("@/components/chatbot").then((mod) => mod.Chatbot),
  { ssr: false }
);
