"use client"

import { useEffect, useState } from "react"

type ToastType = "default" | "success" | "error" | "warning" | "info"

interface ToastOptions {
  title?: string
  description: string
  type?: ToastType
  duration?: number
}

interface Toast extends ToastOptions {
  id: string
  visible: boolean
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = (options: ToastOptions) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast: Toast = {
      id,
      title: options.title,
      description: options.description,
      type: options.type || "default",
      duration: options.duration || 5000,
      visible: true,
    }

    setToasts((prev) => [...prev, newToast])

    return id
  }

  const dismiss = (id: string) => {
    setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, visible: false } : t)))
  }

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []

    toasts.forEach((toast) => {
      if (toast.visible) {
        const timer = setTimeout(() => {
          dismiss(toast.id)
        }, toast.duration)
        timers.push(timer)
      }
    })

    return () => {
      timers.forEach((timer) => clearTimeout(timer))
    }
  }, [toasts])

  useEffect(() => {
    const interval = setInterval(() => {
      setToasts((prev) => prev.filter((t) => t.visible))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return { toast, dismiss, toasts }
}

