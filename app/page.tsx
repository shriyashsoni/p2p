import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Globe, Calendar, Search, Star, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Image src="/images/peerly-logo.png" alt="Peerly Logo" width={40} height={40} className="mr-2" />
          <span className="text-2xl font-bold">Peerly</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
        <div className="ml-4 flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/auth/signin">Log In</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/auth/signin">Sign Up</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Learn, Teach, Grow Together
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Peerly is the next generation of peer-to-peer learning and mentorship. Connect with peers, share
                    knowledge, and build skills together.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1" asChild>
                    <Link href="/auth/signin">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  alt="Students collaborating"
                  width={550}
                  height={550}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Core Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Reimagined P2P Learning</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform combines the best of mentorship, skill-sharing, and community learning with modern
                  technology.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Skill Exchange System</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  "You teach me Python, I help you with Resume Building" - Exchange knowledge and skills with peers.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Mentor Discovery</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Find the perfect mentor based on skills, ratings, language, and availability.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">ChatGPT Integration</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Get instant help from our AI assistant powered by ChatGPT for quick answers to your questions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Session Booking</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Book 1:1 chat or video sessions with mentors and receive calendar notifications.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Learning Circles</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Join topic-based groups for resource sharing, discussions, and weekly goal tracking.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Reputation System</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Build your profile with ratings, reviews, and badges as you help others learn.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm dark:bg-gray-900">
                  Getting Started
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Build Your MVP in 1-2 Months</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Start with these core features to get your platform up and running quickly.
                </p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <span>User Login & Profiles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <span>Mentor/Mentee Status Selection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <span>Learning Circle Creation & Joining</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <span>ChatGPT Integration for AI Assistance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <span>Protected Learning Resources</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Tech Stack</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Build your platform with these modern technologies:
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border bg-white p-4 shadow-sm dark:bg-gray-950">
                    <h4 className="font-semibold">Frontend</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">React.js / Next.js</p>
                  </div>
                  <div className="rounded-lg border bg-white p-4 shadow-sm dark:bg-gray-950">
                    <h4 className="font-semibold">Backend</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Node.js + Express.js</p>
                  </div>
                  <div className="rounded-lg border bg-white p-4 shadow-sm dark:bg-gray-950">
                    <h4 className="font-semibold">Database</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">MongoDB / Firebase Firestore</p>
                  </div>
                  <div className="rounded-lg border bg-white p-4 shadow-sm dark:bg-gray-950">
                    <h4 className="font-semibold">AI Integration</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">OpenAI API (ChatGPT)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join us in reimagining peer-to-peer learning for the future.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1" asChild>
                  <Link href="/auth/signin">
                    Sign Up Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="flex items-center gap-2">
          <Image src="/images/peerly-logo.png" alt="Peerly Logo" width={24} height={24} />
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 Peerly. All rights reserved.</p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
