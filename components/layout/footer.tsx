"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Code, Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Code className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-xl">CodeMaster</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              The ultimate platform for mastering coding skills and acing technical interviews.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/problems"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors"
                >
                  Problems
                </Link>
              </li>
              <li>
                <Link
                  href="/contests"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors"
                >
                  Contests
                </Link>
              </li>
              <li>
                <Link
                  href="/discuss"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors"
                >
                  Discuss
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors"
                >
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Subscribe</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Get the latest updates and news from CodeMaster.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
              <Button type="submit">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} CodeMaster. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400">
            <Link href="/privacy" className="hover:text-blue-600 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-blue-600 transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-blue-600 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

