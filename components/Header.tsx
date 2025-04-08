"use client"

import { CodeBracketIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-gradient-to-r from-[#0F3460] to-[#16213E] shadow-lg">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <CodeBracketIcon className="h-8 w-8 text-[#00ADB5]" />
          <span className="ml-2 text-2xl font-bold">CodeJudge</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link href="/" className="hover:text-[#00ADB5] transition-colors">
            Home
          </Link>
          <Link href="#problems" className="hover:text-[#00ADB5] transition-colors">
            Problems
          </Link>
          <Link href="#" className="hover:text-[#00ADB5] transition-colors">
            Leaderboard
          </Link>
          <Link href="#" className="hover:text-[#00ADB5] transition-colors">
            Login
          </Link>
          <Link href="#" className="px-4 py-1 bg-[#00ADB5] rounded-md hover:bg-opacity-80 transition-colors">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  )
}

