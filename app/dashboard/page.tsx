"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChatGPTIntegration } from "@/components/chat-gpt-integration"
import { UserProfile } from "@/components/user-profile"
import { LearningCircles } from "@/components/learning-circles"
import { MentorshipSessions } from "@/components/mentorship-sessions"

export default function Dashboard() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth/signin")
    },
  })

  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <h1 className="text-xl font-bold">Peerly Dashboard</h1>
          <div className="flex items-center gap-4">
            <span>Welcome, {session?.user?.name || "User"}!</span>
            <Button variant="outline" size="sm" asChild>
              <a href="/api/auth/signout">Sign Out</a>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <Tabs defaultValue="profile">
          <TabsList className="mb-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
            <TabsTrigger value="circles">Learning Circles</TabsTrigger>
            <TabsTrigger value="ai-assistant">AI Assistant</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <UserProfile user={session.user} />
          </TabsContent>
          <TabsContent value="mentorship">
            <MentorshipSessions />
          </TabsContent>
          <TabsContent value="circles">
            <LearningCircles />
          </TabsContent>
          <TabsContent value="ai-assistant">
            <Card>
              <CardHeader>
                <CardTitle>AI Assistant</CardTitle>
                <CardDescription>
                  Get help with your learning journey using our AI assistant powered by ChatGPT
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChatGPTIntegration />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
