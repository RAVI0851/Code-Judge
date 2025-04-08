import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { ToastProvider } from "@/components/ui/toast-provider"
import { ErrorBoundary } from "@/components/ui/error-boundary"

// Initialize fonts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "CodeMaster - Online Judge Platform",
  description: "Master coding interviews with thousands of problems and real-time contests",
  keywords: [
    "coding",
    "programming",
    "algorithms",
    "data structures",
    "interview preparation",
    "competitive programming",
  ],
  authors: [{ name: "CodeMaster Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codemaster.vercel.app",
    title: "CodeMaster - Online Judge Platform",
    description: "Master coding interviews with thousands of problems and real-time contests",
    siteName: "CodeMaster",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeMaster - Online Judge Platform",
    description: "Master coding interviews with thousands of problems and real-time contests",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ErrorBoundary>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ToastProvider>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </ToastProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}



import './globals.css'