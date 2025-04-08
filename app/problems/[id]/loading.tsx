import { LoadingSpinner } from "@/components/ui/loading-spinner"

export default function Loading() {
  return (
    <div className="container py-6 px-4 md:px-6">
      <div className="flex flex-col gap-6">
        {/* Problem header skeleton */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="h-8 w-64 bg-muted animate-pulse rounded-md"></div>
            <div className="h-6 w-20 bg-muted animate-pulse rounded-full"></div>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <div className="h-4 w-32 bg-muted animate-pulse rounded-md"></div>
            <div className="h-4 w-px bg-muted"></div>
            <div className="flex gap-1">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="h-5 w-16 bg-muted animate-pulse rounded-full"></div>
                ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Problem description skeleton */}
          <div className="flex flex-col h-[calc(100vh-220px)] overflow-hidden">
            <div className="flex gap-2 mb-4">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="h-10 w-24 bg-muted animate-pulse rounded-md"></div>
                ))}
            </div>

            <div className="flex-1 p-4 border rounded-md space-y-4">
              <div className="h-6 w-48 bg-muted animate-pulse rounded-md"></div>
              <div className="h-4 w-full bg-muted animate-pulse rounded-md"></div>
              <div className="h-4 w-full bg-muted animate-pulse rounded-md"></div>
              <div className="h-4 w-3/4 bg-muted animate-pulse rounded-md"></div>

              <div className="h-5 w-32 bg-muted animate-pulse rounded-md mt-6"></div>
              <div className="h-24 w-full bg-muted animate-pulse rounded-md"></div>

              <div className="h-5 w-32 bg-muted animate-pulse rounded-md mt-6"></div>
              <div className="h-24 w-full bg-muted animate-pulse rounded-md"></div>
            </div>
          </div>

          {/* Code editor skeleton */}
          <div className="flex flex-col h-[calc(100vh-220px)] overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <div className="h-10 w-40 bg-muted animate-pulse rounded-md"></div>
              <div className="flex gap-2">
                <div className="h-10 w-24 bg-muted animate-pulse rounded-md"></div>
                <div className="h-10 w-16 bg-muted animate-pulse rounded-md"></div>
              </div>
            </div>

            <div className="flex-1 border rounded-md overflow-hidden bg-muted animate-pulse">
              <div className="flex items-center justify-center h-full">
                <LoadingSpinner size="lg" />
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-2">
                <div className="h-10 w-24 bg-muted animate-pulse rounded-md"></div>
                <div className="h-10 w-24 bg-muted animate-pulse rounded-md"></div>
              </div>

              <div className="flex gap-2">
                <div className="h-10 w-32 bg-muted animate-pulse rounded-md"></div>
                <div className="h-10 w-32 bg-muted animate-pulse rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

