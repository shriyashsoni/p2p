"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, MessageSquare } from "lucide-react"

export function LearningCircles() {
  const circles = [
    {
      id: 1,
      name: "React Fundamentals",
      description: "Learn the basics of React and build your first components",
      members: 24,
      nextMeeting: "Tomorrow, 3:00 PM",
      topics: ["React", "JavaScript", "Frontend"],
      recentActivity: "New resource shared: React Hooks Cheatsheet",
    },
    {
      id: 2,
      name: "Data Structures & Algorithms",
      description: "Master the core concepts of DSA with weekly practice sessions",
      members: 18,
      nextMeeting: "Friday, 5:00 PM",
      topics: ["Algorithms", "Python", "Interview Prep"],
      recentActivity: "Discussion: Solving dynamic programming problems",
    },
    {
      id: 3,
      name: "UI/UX Design Principles",
      description: "Explore design thinking and create user-centered interfaces",
      members: 15,
      nextMeeting: "Monday, 6:00 PM",
      topics: ["Design", "Figma", "User Research"],
      recentActivity: "New challenge posted: Redesign a banking app",
    },
  ]

  return (
    <div className="grid gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Your Learning Circles</h2>
        <Button>Create New Circle</Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {circles.map((circle) => (
          <Card key={circle.id}>
            <CardHeader>
              <CardTitle>{circle.name}</CardTitle>
              <CardDescription>{circle.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{circle.members} members</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{circle.nextMeeting}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {circle.topics.map((topic) => (
                  <Badge key={topic} variant="outline">
                    {topic}
                  </Badge>
                ))}
              </div>
              <div className="pt-2 border-t">
                <div className="flex items-start gap-2">
                  <MessageSquare className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span className="text-sm">{circle.recentActivity}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                View Details
              </Button>
              <Button size="sm">Join Session</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
