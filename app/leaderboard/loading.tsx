import { LoadingSpinner } from "@/components/ui/loading-spinner"

export default function Loading() {
  return (
    <div className="container py-10 px-4 md:px-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="h-8 w-48 bg-muted animate-pulse rounded-md"></div>
          <div className="h-5 w-96 bg-muted animate-pulse rounded-md"></div>
        </div>

        {/* Time period filter skeleton */}
        <div className="flex gap-2 mb-4">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="h-10 w-24 bg-muted animate-pulse rounded-md"></div>
            ))}
        </div>

        {/* Top 3 users skeleton */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="border rounded-xl overflow-hidden">
                <div className="h-2 bg-muted animate-pulse"></div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 bg-muted animate-pulse rounded-full"></div>
                      <div className="h-5 w-16 bg-muted animate-pulse rounded-md"></div>
                    </div>
                    <div className="h-6 w-20 bg-muted animate-pulse rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 bg-muted animate-pulse rounded-full"></div>
                    <div className="space-y-2">
                      <div className="h-5 w-32 bg-muted animate-pulse rounded-md"></div>
                      <div className="h-4 w-24 bg-muted animate-pulse rounded-md"></div>
                      <div className="h-4 w-40 bg-muted animate-pulse rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Leaderboard table skeleton */}
        <div className="border rounded-md">
          <div className="p-4 border-b">
            <div className="h-6 w-48 bg-muted animate-pulse rounded-md"></div>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div className="grid grid-cols-5 gap-4 py-2 border-b">
                <div className="h-5 w-16 bg-muted animate-pulse rounded-md"></div>
                <div className="h-5 w-24 bg-muted animate-pulse rounded-md"></div>
                <div className="h-5 w-20 bg-muted animate-pulse rounded-md"></div>
                <div className="h-5 w-16 bg-muted animate-pulse rounded-md"></div>
                <div className="h-5 w-32 bg-muted animate-pulse rounded-md"></div>
              </div>

              {Array(7)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="grid grid-cols-5 gap-4 py-4">
                    <div className="h-5 w-8 bg-muted animate-pulse rounded-md"></div>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 bg-muted animate-pulse rounded-full"></div>
                      <div className="h-5 w-24 bg-muted animate-pulse rounded-md"></div>
                    </div>
                    <div className="h-6 w-20 bg-muted animate-pulse rounded-full"></div>
                    <div className="h-5 w-12 bg-muted animate-pulse rounded-md"></div>
                    <div className="h-5 w-16 bg-muted animate-pulse rounded-md"></div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <LoadingSpinner />
        </div>
      </div>
    </div>
  )
}

