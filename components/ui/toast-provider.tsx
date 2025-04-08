"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { X, CheckCircle, AlertTriangle, Info, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

type ToastType = "default" | "success" | "error" | "warning" | "info"

interface Toast {
  id: string
  title?: string
  description: string
  type: ToastType
  duration: number
}

interface ToastContextValue {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, "id">) => void
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined)

export function useToasts() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToasts must be used within a ToastProvider")
  }
  return context
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prev) => [...prev, { ...toast, id }])
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts((prev) => {
          if (prev.length === 0) return prev
          return prev.slice(1)
        })
      }, toasts[0].duration)

      return () => clearTimeout(timer)
    }
  }, [toasts])

  const getIcon = (type: ToastType) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "error":
        return <AlertCircle className="h-5 w-5 text-red-500" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />
      default:
        return null
    }
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      {toasts.length > 0 && (
        <div className="fixed bottom-0 right-0 z-50 m-4 flex flex-col gap-2">
          {toasts.map((toast) => (
            <div
              key={toast.id}
              className={cn(
                "flex w-80 items-start gap-3 rounded-lg border bg-background p-4 shadow-lg animate-in slide-in-from-right-full",
                {
                  "border-green-500/20 bg-green-500/10": toast.type === "success",
                  "border-red-500/20 bg-red-500/10": toast.type === "error",
                  "border-yellow-500/20 bg-yellow-500/10": toast.type === "warning",
                  "border-blue-500/20 bg-blue-500/10": toast.type === "info",
                },
              )}
            >
              {getIcon(toast.type)}
              <div className="flex-1">
                {toast.title && <h4 className="font-medium">{toast.title}</h4>}
                <p className="text-sm text-muted-foreground">{toast.description}</p>
              </div>
              <button onClick={() => removeToast(toast.id)} className="text-muted-foreground hover:text-foreground">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </ToastContext.Provider>
  )
}

