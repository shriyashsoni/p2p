"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, Send, User } from "lucide-react"

type Message = {
  role: "user" | "assistant"
  content: string
}

export function ChatGPTIntegration() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! I'm your AI learning assistant. How can I help you with your studies today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message to chat
    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // In a real implementation, this would call your API endpoint that connects to OpenAI
      // For demo purposes, we'll simulate a response
      setTimeout(() => {
        const assistantMessage: Message = {
          role: "assistant",
          content: getSimulatedResponse(input),
        }
        setMessages((prev) => [...prev, assistantMessage])
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error("Error calling AI assistant:", error)
      setIsLoading(false)
    }
  }

  // This is just for demo purposes - in production you would call the OpenAI API
  const getSimulatedResponse = (query: string): string => {
    const responses = [
      "That's a great question about learning! I'd recommend breaking down the concept into smaller parts and practicing each one.",
      "Based on your question, you might want to check out these resources: Khan Academy, Coursera, or MIT OpenCourseWare.",
      "When studying this topic, try using the Feynman Technique - explain it as if you're teaching someone else to identify gaps in your understanding.",
      "This is a complex topic! Let's approach it step by step. First, make sure you understand the fundamentals before moving to advanced concepts.",
      "Have you tried creating flashcards for this? Spaced repetition is one of the most effective study techniques for long-term retention.",
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  return (
    <div className="flex flex-col h-[600px]">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-4 border rounded-md">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}>
            <Card
              className={`max-w-[80%] ${message.role === "assistant" ? "bg-muted" : "bg-primary text-primary-foreground"}`}
            >
              <CardContent className="p-3">
                <div className="flex items-start gap-2">
                  {message.role === "assistant" ? (
                    <Bot className="h-5 w-5 mt-1 flex-shrink-0" />
                  ) : (
                    <User className="h-5 w-5 mt-1 flex-shrink-0" />
                  )}
                  <div>{message.content}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <Card className="max-w-[80%] bg-muted">
              <CardContent className="p-3">
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  <div className="flex gap-1">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-500"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:0.2s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Textarea
          placeholder="Ask me anything about your studies..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 resize-none"
          rows={2}
        />
        <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  )
}
