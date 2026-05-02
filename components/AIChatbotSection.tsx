"use client"

import { FormEvent, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Bot, Send, Sparkles, User } from "lucide-react"

type ChatMessage = {
  id: number
  role: "user" | "assistant"
  text: string
}

const starterPrompts = [
  "Summarize this week's customer sentiment",
  "Show top objections from sales calls",
  "Give me 3 actions to improve NPS",
]

const starterMessages: ChatMessage[] = [
  {
    id: 1,
    role: "assistant",
    text: "Hi! I am your AI copilot. Ask me about meeting insights, call sentiment, team alignment, or customer trends.",
  },
]

export function AIChatbotSection() {
  const [messages, setMessages] = useState<ChatMessage[]>(starterMessages)
  const [input, setInput] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const sendMessage = (content: string) => {
    const text = content.trim()
    if (!text) return

    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      text,
    }

    const assistantMessage: ChatMessage = {
      id: Date.now() + 1,
      role: "assistant",
      text: `I can help with that. Based on your request "${text}", I suggest focusing on the top recurring patterns first, then assigning clear owners for follow-up actions.`,
    }

    setMessages((prev) => [...prev, userMessage, assistantMessage])
    setInput("")
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    sendMessage(input)
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[90]">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Open AI chatbot"
          className="group relative h-16 w-16 rounded-full p-[2px] shadow-[0_12px_40px_rgba(76,63,200,0.45)]"
        >
          <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#ff3cac_0%,#784ba0_22%,#2b86c5_48%,#42e695_68%,#f9f871_83%,#ff3cac_100%)] group-hover:scale-105 transition-transform duration-300" />
          <span className="relative flex h-full w-full items-center justify-center rounded-full bg-[#0d1020] text-white">
            <Sparkles className="h-6 w-6" />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 420, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 420, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.8, 0.25, 1] }}
            className="fixed bottom-24 right-6 z-[100] w-[min(92vw,420px)] rounded-3xl border border-[#d9deea] bg-white shadow-[0_30px_70px_rgba(26,36,64,0.20)] overflow-hidden"
          >
            <div className="flex items-center justify-between gap-3 border-b border-[#edf0f7] px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111827] text-white">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#141722]">Auralink Assistant</p>
                  <p className="text-xs text-[#68708a]">Online now</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg border border-[#d9deea] px-2 py-1 text-xs text-[#606a84] hover:bg-[#f5f7fd] transition-colors"
              >
                Close
              </button>
            </div>

            <div className="px-6 pt-4 pb-2">
              <div className="flex flex-wrap gap-2">
                {starterPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => sendMessage(prompt)}
                    className="rounded-full border border-[#d9deea] bg-white px-3 py-1.5 text-xs text-[#30374a] hover:bg-[#eef1f8] transition-colors"
                    type="button"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-[320px] overflow-y-auto px-6 py-4 space-y-4 bg-[linear-gradient(180deg,#ffffff_0%,#fafbff_100%)]">
              {messages.map((message) => {
                const isUser = message.role === "user"
                return (
                  <div key={message.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                        isUser ? "bg-[#111827] text-white" : "bg-[#eef2ff] text-[#1f2540]"
                      }`}
                    >
                      <div className="mb-1 flex items-center gap-2 text-[11px] opacity-80">
                        {isUser ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
                        {isUser ? "You" : "AI Assistant"}
                      </div>
                      {message.text}
                    </div>
                  </div>
                )
              })}
            </div>

            <form onSubmit={onSubmit} className="border-t border-[#edf0f7] bg-white p-4">
              <div className="flex items-center gap-3 rounded-2xl border border-[#d9deea] bg-[#fbfcff] px-4 py-2">
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about your team insights..."
                  className="h-10 w-full bg-transparent text-sm text-[#1d2237] placeholder:text-[#8f97ad] outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#111827] text-white hover:bg-[#1c2333] transition-colors"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
