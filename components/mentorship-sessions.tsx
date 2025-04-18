"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Video } from "lucide-react"

export function MentorshipSessions() {
  const upcomingSessions = [
    {
      id: 1,
      title: "React Router Deep Dive",
      mentor: {
        name: "Alex Johnson",
        image: "/placeholder.svg?height=40&width=40",
        rating: 4.9,
      },
      date: "May 15, 2025",
      time: "3:00 PM - 4:00 PM",
      topics: ["React", "Frontend"],
    },
    {
      id: 2,
      title: "Mastering CSS Grid Layouts",
      mentor: {
        name: "Sarah Chen",
        image: "/placeholder.svg?height=40&width=40",
        rating: 4.8,
      },
      date: "May 18, 2025",
      time: "5:00 PM - 6:00 PM",
      topics: ["CSS", "Web Design"],
    },
  ]

  const pastSessions = [
    {
      id: 3,
      title: "JavaScript Promises & Async/Await",
      mentor: {
        name: "Michael Rodriguez",
        image: "/placeholder.svg?height=40&width=40",
        rating: 4.7,
      },
      date: "May 5, 2025",
      time: "2:00 PM - 3:00 PM",
      topics: ["JavaScript", "Backend"],
      feedback: "Great session! Learned a lot about async programming.",
    },
    {
      id: 4,
      title: "Introduction to TypeScript",
      mentor: {
        name: "Emma Wilson",
        image: "/placeholder.svg?height=40&width=40",
        rating: 4.9,
      },
      date: "April 28, 2025",
      time: "4:00 PM - 5:00 PM",
      topics: ["TypeScript", "JavaScript"],
      feedback: "Emma explained complex concepts in a very understandable way.",
    },
  ]

  return (
    <Tabs defaultValue="upcoming" className="space-y-4">
      <TabsList>
        <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
        <TabsTrigger value="past">Past Sessions</TabsTrigger>
        <TabsTrigger value="find">Find Mentors</TabsTrigger>
      </TabsList>
      <TabsContent value="upcoming" className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Upcoming Sessions</h2>
          <Button>Schedule New Session</Button>
        </div>
        {upcomingSessions.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-10">
              <p className="text-center text-muted-foreground">No upcoming sessions scheduled</p>
              <Button className="mt-4">Find a Mentor</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {upcomingSessions.map((session) => (
              <Card key={session.id}>
                <CardHeader>
                  <CardTitle>{session.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={session.mentor.image || "/placeholder.svg"} alt={session.mentor.name} />
                        <AvatarFallback>{session.mentor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span>{session.mentor.name}</span>
                      <Badge variant="outline" className="ml-2">
                        {session.mentor.rating} ★
                      </Badge>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{session.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{session.time}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {session.topics.map((topic) => (
                        <Badge key={topic} variant="secondary">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Reschedule</Button>
                  <Button>
                    <Video className="mr-2 h-4 w-4" />
                    Join Session
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </TabsContent>
      <TabsContent value="past" className="space-y-4">
        <h2 className="text-2xl font-bold">Past Sessions</h2>
        {pastSessions.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-10">
              <p className="text-center text-muted-foreground">No past sessions found</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {pastSessions.map((session) => (
              <Card key={session.id}>
                <CardHeader>
                  <CardTitle>{session.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={session.mentor.image || "/placeholder.svg"} alt={session.mentor.name} />
                        <AvatarFallback>{session.mentor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span>{session.mentor.name}</span>
                      <Badge variant="outline" className="ml-2">
                        {session.mentor.rating} ★
                      </Badge>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{session.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{session.time}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {session.topics.map((topic) => (
                        <Badge key={topic} variant="secondary">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                    {session.feedback && (
                      <div className="mt-4 p-3 bg-muted rounded-md">
                        <p className="text-sm italic">&ldquo;{session.feedback}&rdquo;</p>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Recording</Button>
                  <Button variant="secondary">Book Again</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </TabsContent>
      <TabsContent value="find">
        <Card>
          <CardHeader>
            <CardTitle>Find Mentors</CardTitle>
            <CardDescription>Discover mentors based on your learning goals and schedule a session</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center py-8">Mentor discovery feature coming soon!</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button>Browse All Mentors</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
