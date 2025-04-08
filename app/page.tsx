import { Typewriter } from "@/components/ui/typewriter"
import { StatsCounter } from "@/components/ui/stats-counter"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Trophy, Users } from "lucide-react"
import Link from "next/link"
import { CodeAnimation } from "@/components/ui/code-animation"

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-purple-600/20 -z-10" />
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-10" />

      {/* Hero section */}
      <section className="relative py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400 mb-2">
                The Ultimate Coding Platform
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                <span className="block">Master Your</span>
                <Typewriter
                  words={["Coding Skills", "Algorithms", "Data Structures", "Coding Interviews"]}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                />
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-[600px]">
                Practice with thousands of coding challenges, compete with others, and land your dream job.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Button size="lg" asChild>
                  <Link href="/problems">
                    Start Coding <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/leaderboard">View Leaderboard</Link>
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square">
                <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl overflow-hidden">
                  <CodeAnimation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex justify-center">
                <Code className="h-8 w-8 text-blue-500" />
              </div>
              <StatsCounter end={2500} duration={2.5} className="text-3xl md:text-4xl font-bold" />
              <p className="text-gray-500 dark:text-gray-400">Coding Problems</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <Users className="h-8 w-8 text-blue-500" />
              </div>
              <StatsCounter end={150000} duration={2.5} className="text-3xl md:text-4xl font-bold" />
              <p className="text-gray-500 dark:text-gray-400">Active Users</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <Trophy className="h-8 w-8 text-blue-500" />
              </div>
              <StatsCounter end={500} duration={2.5} className="text-3xl md:text-4xl font-bold" />
              <p className="text-gray-500 dark:text-gray-400">Daily Contests</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <svg
                  className="h-8 w-8 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 16L7 11L8.4 9.55L12 13.15L19.6 5.5L21 7L12 16Z" fill="currentColor" />
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C16.418 20 20 16.418 20 12C20 7.582 16.418 4 12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <StatsCounter end={5000000} duration={2.5} className="text-3xl md:text-4xl font-bold" />
              <p className="text-gray-500 dark:text-gray-400">Submissions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CodeMaster?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-[800px] mx-auto">
              The most comprehensive platform to improve your coding skills and prepare for technical interviews.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-200 hover:scale-105 hover:shadow-xl">
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 2C9.5 2 10 6 10 9C10 12 8 14 8 14C8 14 11 16 11 19C11 22 9.5 22.5 9.5 22.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.5 2C14.5 2 14 6 14 9C14 12 16 14 16 14C16 14 13 16 13 19C13 22 14.5 22.5 14.5 22.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Curated Problems</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Thousands of problems categorized by difficulty, topics, and companies.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-200 hover:scale-105 hover:shadow-xl">
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced Editor</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Feature-rich code editor with syntax highlighting and multiple language support.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-200 hover:scale-105 hover:shadow-xl">
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Real-time Contests</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Participate in daily coding contests and compete with coders worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 relative">
        <div className="absolute inset-0 bg-grid-white/[0.1] -z-10" />
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Master Coding?</h2>
          <p className="text-xl text-blue-100 max-w-[600px] mx-auto mb-8">
            Join thousands of developers who are improving their skills every day.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/problems">Start Solving Problems</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

