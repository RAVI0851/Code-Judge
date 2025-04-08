"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Pagination } from "@/components/ui/pagination"
import { Search, CheckCircle2 } from "lucide-react"
import { useDebounce } from "@/hooks/use-debounce"
import { mockProblems } from "@/lib/mock-data"
import Link from "next/link"

export default function ProblemsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [difficulty, setDifficulty] = useState("all")
  const [status, setStatus] = useState("all")
  const [tag, setTag] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredProblems, setFilteredProblems] = useState(mockProblems)

  const debouncedSearchQuery = useDebounce(searchQuery, 300)
  const problemsPerPage = 10

  // Filter problems based on search query and filters
  useEffect(() => {
    let result = [...mockProblems]

    // Apply search filter
    if (debouncedSearchQuery) {
      result = result.filter(
        (problem) =>
          problem.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
          problem.tags.some((t) => t.toLowerCase().includes(debouncedSearchQuery.toLowerCase())),
      )
    }

    // Apply difficulty filter
    if (difficulty !== "all") {
      result = result.filter((problem) => problem.difficulty.toLowerCase() === difficulty)
    }

    // Apply status filter
    if (status !== "all") {
      result = result.filter((problem) => {
        if (status === "solved") return problem.solved
        if (status === "unsolved") return !problem.solved
        return true
      })
    }

    // Apply tag filter
    if (tag !== "all") {
      result = result.filter((problem) => problem.tags.includes(tag))
    }

    setFilteredProblems(result)
    setCurrentPage(1) // Reset to first page when filters change
  }, [debouncedSearchQuery, difficulty, status, tag])

  // Calculate pagination
  const totalPages = Math.ceil(filteredProblems.length / problemsPerPage)
  const currentProblems = filteredProblems.slice((currentPage - 1) * problemsPerPage, currentPage * problemsPerPage)

  // Get unique tags from all problems
  const allTags = Array.from(new Set(mockProblems.flatMap((problem) => problem.tags)))

  return (
    <div className="container py-10 px-4 md:px-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Problems</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Solve coding problems to improve your skills and prepare for interviews.
          </p>
        </div>

        {/* Search and filters */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search problems..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Select value={difficulty} onValueChange={setDifficulty}>
            <SelectTrigger>
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Difficulties</SelectItem>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
            </SelectContent>
          </Select>

          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="solved">Solved</SelectItem>
              <SelectItem value="unsolved">Unsolved</SelectItem>
            </SelectContent>
          </Select>

          <Select value={tag} onValueChange={setTag}>
            <SelectTrigger>
              <SelectValue placeholder="Tag" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Tags</SelectItem>
              {allTags.map((tag) => (
                <SelectItem key={tag} value={tag}>
                  {tag}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Problem list */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Problems</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="company">Company</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="rounded-md border">
              <div className="grid grid-cols-12 bg-muted/50 p-4 text-sm font-medium">
                <div className="col-span-1 flex items-center">#</div>
                <div className="col-span-5">Title</div>
                <div className="col-span-2 text-center">Difficulty</div>
                <div className="col-span-2 text-center">Acceptance</div>
                <div className="col-span-2 text-center">Status</div>
              </div>

              {currentProblems.length > 0 ? (
                <div className="divide-y">
                  {currentProblems.map((problem) => (
                    <div
                      key={problem.id}
                      className="grid grid-cols-12 p-4 text-sm items-center hover:bg-muted/50 transition-colors"
                    >
                      <div className="col-span-1">{problem.id}</div>
                      <div className="col-span-5">
                        <Link
                          href={`/problems/${problem.id}`}
                          className="font-medium hover:text-blue-600 transition-colors"
                        >
                          {problem.title}
                        </Link>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {problem.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="col-span-2 text-center">
                        <Badge
                          variant={
                            problem.difficulty === "Easy"
                              ? "success"
                              : problem.difficulty === "Medium"
                                ? "warning"
                                : "destructive"
                          }
                        >
                          {problem.difficulty}
                        </Badge>
                      </div>
                      <div className="col-span-2 text-center">{problem.acceptanceRate}%</div>
                      <div className="col-span-2 text-center">
                        {problem.solved ? (
                          <div className="flex justify-center">
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          </div>
                        ) : (
                          <span className="text-gray-500">Not solved</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <p className="text-gray-500 dark:text-gray-400">No problems found matching your criteria.</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredProblems.length > 0 && (
              <div className="flex justify-center mt-6">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
              </div>
            )}
          </TabsContent>

          <TabsContent value="featured">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProblems
                .filter((problem) => problem.featured)
                .slice(0, 6)
                .map((problem) => (
                  <Card key={problem.id} className="overflow-hidden transition-all duration-200 hover:shadow-lg">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{problem.title}</CardTitle>
                        <Badge
                          variant={
                            problem.difficulty === "Easy"
                              ? "success"
                              : problem.difficulty === "Medium"
                                ? "warning"
                                : "destructive"
                          }
                        >
                          {problem.difficulty}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{problem.description}</p>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {problem.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-3 border-t">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Acceptance: {problem.acceptanceRate}%
                      </div>
                      <Button size="sm" asChild>
                        <Link href={`/problems/${problem.id}`}>Solve</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="company">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {["Google", "Amazon", "Microsoft", "Facebook", "Apple", "Netflix"].map((company) => (
                <Card key={company} className="overflow-hidden transition-all duration-200 hover:shadow-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{company}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Problems frequently asked in {company} interviews.
                    </p>
                  </CardContent>
                  <CardFooter className="pt-3 border-t">
                    <Button size="sm" variant="outline" className="w-full">
                      View Problems
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

