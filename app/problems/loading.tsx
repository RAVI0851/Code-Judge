import { LoadingSpinner } from "@/components/ui/loading-spinner"

export default function Loading() {
  return (
    <div className="container py-10 px-4 md:px-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="h-8 w-48 bg-muted animate-pulse rounded-md"></div>
          <div className="h-5 w-96 bg-muted animate-pulse rounded-md"></div>
        </div>

        {/* Search and filters skeleton */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="h-10 bg-muted animate-pulse rounded-md"></div>
            ))}
        </div>

        {/* Problem list skeleton */}
        <div className="rounded-md border">
          <div className="grid grid-cols-12 bg-muted/50 p-4 text-sm font-medium">
            <div className="col-span-1 flex items-center">#</div>
            <div className="col-span-5">Title</div>
            <div className="col-span-2 text-center">Difficulty</div>
            <div className="col-span-2 text-center">Acceptance</div>
            <div className="col-span-2 text-center">Status</div>
          </div>

          <div className="divide-y">
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="grid grid-cols-12 p-4 text-sm items-center">
                  <div className="col-span-1 h-4 w-8 bg-muted animate-pulse rounded-md"></div>
                  <div className="col-span-5">
                    <div className="h-5 w-3/4 bg-muted animate-pulse rounded-md mb-2"></div>
                    <div className="flex gap-1">
                      {Array(3)
                        .fill(0)
                        .map((_, j) => (
                          <div key={j} className="h-4 w-16 bg-muted animate-pulse rounded-full"></div>
                        ))}
                    </div>
                  </div>
                  <div className="col-span-2 flex justify-center">
                    <div className="h-6 w-16 bg-muted animate-pulse rounded-full"></div>
                  </div>
                  <div className="col-span-2 flex justify-center">
                    <div className="h-4 w-12 bg-muted animate-pulse rounded-md"></div>
                  </div>
                  <div className="col-span-2 flex justify-center">
                    <div className="h-5 w-5 bg-muted animate-pulse rounded-full"></div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <LoadingSpinner />
        </div>
      </div>
    </div>
  )
}

