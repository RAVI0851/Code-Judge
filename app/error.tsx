"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-12 px-4">
      <Alert variant="destructive" className="max-w-2xl">
        <AlertTriangle className="h-5 w-5" />
        <AlertTitle className="text-xl">Something went wrong!</AlertTitle>
        <AlertDescription>
          <div className="mt-4 text-sm text-muted-foreground">
            <p className="mb-4">We apologize for the inconvenience. An unexpected error has occurred.</p>
            {error.message && (
              <div className="p-2 bg-destructive/10 rounded-md mb-4 font-mono text-xs">{error.message}</div>
            )}
            <div className="flex gap-4 mt-6">
              <Button onClick={() => reset()}>Try again</Button>
              <Button variant="outline" asChild>
                <a href="/">Go to Home</a>
              </Button>
            </div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  )
}

