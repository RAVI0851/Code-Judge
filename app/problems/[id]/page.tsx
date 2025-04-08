"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CodeEditor } from "@/components/ui/code-editor"
import { mockProblems } from "@/lib/mock-data"
import { useParams } from "next/navigation"
import { Play, Check, Clock, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function ProblemPage() {
  const params = useParams()
  const problemId = Number(params.id)

  const [problem, setProblem] = useState(mockProblems.find((p) => p.id === problemId))
  const [language, setLanguage] = useState("javascript")
  const [code, setCode] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [output, setOutput] = useState("")
  const [editorSettings, setEditorSettings] = useState({
    fontSize: 14,
    vimMode: false,
  })

  // Set default code based on selected language
  useEffect(() => {
    if (language === "javascript") {
      setCode(`/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function solution(nums, target) {
  // Write your solution here
  
}`)
    } else if (language === "python") {
      setCode(`def solution(nums, target):
    # Write your solution here
    pass`)
    } else if (language === "java") {
      setCode(`class Solution {
    public int[] solution(int[] nums, int target) {
        // Write your solution here
        
    }
}`)
    }
  }, [language])

  // Mock run code function
  const runCode = () => {
    setIsRunning(true)
    setOutput("")

    // Simulate code execution with delay
    setTimeout(() => {
      setOutput(`Running test cases...
Test case 1: [2, 7, 11, 15], target = 9
Your output: [0, 1]
Expected output: [0, 1]
✅ Passed

Test case 2: [3, 2, 4], target = 6
Your output: [1, 2]
Expected output: [1, 2]
✅ Passed

Test case 3: [3, 3], target = 6
Your output: [0, 1]
Expected output: [0, 1]
✅ Passed

All test cases passed!`)
      setIsRunning(false)
    }, 1500)
  }

  // Mock submit code function
  const submitCode = () => {
    setIsSubmitting(true)
    setOutput("")

    // Simulate code submission with delay
    setTimeout(() => {
      setOutput(`Submitting solution...
Running all test cases...

✅ 35/35 test cases passed.
Runtime: 76 ms (faster than 85.42% of submissions)
Memory: 42.1 MB (less than 76.18% of submissions)

Congratulations! Your solution has been accepted.`)
      setIsSubmitting(false)

      // Update problem status to solved
      if (problem) {
        setProblem({ ...problem, solved: true })
      }
    }, 2000)
  }

  // Handle font size change
  const handleFontSizeChange = (size: string) => {
    setEditorSettings({ ...editorSettings, fontSize: Number(size) })
  }

  // Toggle vim mode
  const toggleVimMode = () => {
    setEditorSettings({ ...editorSettings, vimMode: !editorSettings.vimMode })
  }

  if (!problem) {
    return (
      <div className="container py-10 px-4 md:px-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Problem not found</h1>
        <p className="mb-6">The problem you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/problems">Back to Problems</Link>
        </Button>
      </div>
    )
  }

  // Find next and previous problems
  const nextProblem = mockProblems.find((p) => p.id === problemId + 1)
  const prevProblem = mockProblems.find((p) => p.id === problemId - 1)

  return (
    <div className="container py-6 px-4 md:px-6">
      <div className="flex flex-col gap-6">
        {/* Problem header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">{problem.title}</h1>
            <Badge
              variant={
                problem.difficulty === "Easy" ? "success" : problem.difficulty === "Medium" ? "warning" : "destructive"
              }
            >
              {problem.difficulty}
            </Badge>
          </div>
          <div className="flex flex-wrap gap-2 items-center text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              Acceptance: {problem.acceptanceRate}%
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex flex-wrap gap-1">
              {problem.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Problem description */}
          <div className="flex flex-col h-[calc(100vh-220px)] overflow-hidden">
            <Tabs defaultValue="description">
              <TabsList className="mb-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="solution">Solution</TabsTrigger>
                <TabsTrigger value="submissions">Submissions</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="flex-1 overflow-auto p-4 border rounded-md">
                <div className="prose dark:prose-invert max-w-none">
                  <h2>{problem.title}</h2>
                  <p>{problem.description}</p>

                  <h3>Example 1:</h3>
                  <pre className="bg-muted p-4 rounded-md">
                    <code>
                      Input: nums = [2,7,11,15], target = 9 Output: [0,1] Explanation: Because nums[0] + nums[1] == 9,
                      we return [0, 1].
                    </code>
                  </pre>

                  <h3>Example 2:</h3>
                  <pre className="bg-muted p-4 rounded-md">
                    <code>Input: nums = [3,2,4], target = 6 Output: [1,2]</code>
                  </pre>

                  <h3>Example 3:</h3>
                  <pre className="bg-muted p-4 rounded-md">
                    <code>Input: nums = [3,3], target = 6 Output: [0,1]</code>
                  </pre>

                  <h3>Constraints:</h3>
                  <ul>
                    <li>
                      2 ≤ nums.length ≤ 10<sup>4</sup>
                    </li>
                    <li>
                      -10<sup>9</sup> ≤ nums[i] ≤ 10<sup>9</sup>
                    </li>
                    <li>
                      -10<sup>9</sup> ≤ target ≤ 10<sup>9</sup>
                    </li>
                    <li>Only one valid answer exists.</li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="solution" className="flex-1 overflow-auto p-4 border rounded-md">
                <div className="prose dark:prose-invert max-w-none">
                  <h2>Solution Approach</h2>
                  <p>
                    This problem can be solved efficiently using a hash map to keep track of values we've seen and their
                    indices.
                  </p>

                  <h3>Approach 1: Brute Force</h3>
                  <p>
                    The brute force approach is to use two nested loops to check every possible pair of numbers. Time
                    complexity: O(n²) Space complexity: O(1)
                  </p>

                  <h3>Approach 2: Hash Map (Optimal)</h3>
                  <p>
                    We can use a hash map to store the values we've seen so far and their indices. For each number, we
                    check if the complement (target - current number) exists in the hash map. Time complexity: O(n)
                    Space complexity: O(n)
                  </p>

                  <pre className="bg-muted p-4 rounded-md">
                    <code>
                      {`function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return null;
}`}
                    </code>
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="submissions" className="flex-1 overflow-auto p-4 border rounded-md">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Your Submissions</h3>
                  {problem.solved ? (
                    <div className="space-y-4">
                      <div className="bg-muted p-4 rounded-md">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <Check className="h-5 w-5 text-green-500 mr-2" />
                            <span className="font-medium">Accepted</span>
                          </div>
                          <span className="text-sm text-gray-500">2 hours ago</span>
                        </div>
                        <div className="text-sm">
                          <div>Runtime: 76 ms (faster than 85.42%)</div>
                          <div>Memory: 42.1 MB (less than 76.18%)</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500">You haven't submitted any solutions yet.</p>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Code editor */}
          <div className="flex flex-col h-[calc(100vh-220px)] overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center gap-2">
                <Select value={editorSettings.fontSize.toString()} onValueChange={handleFontSizeChange}>
                  <SelectTrigger className="w-[80px]">
                    <SelectValue placeholder="Font size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12">12px</SelectItem>
                    <SelectItem value="14">14px</SelectItem>
                    <SelectItem value="16">16px</SelectItem>
                    <SelectItem value="18">18px</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleVimMode}
                  className={editorSettings.vimMode ? "bg-muted" : ""}
                >
                  Vim
                </Button>
              </div>
            </div>

            <div className="flex-1 border rounded-md overflow-hidden">
              <CodeEditor
                value={code}
                onChange={setCode}
                language={language}
                fontSize={editorSettings.fontSize}
                vimMode={editorSettings.vimMode}
              />
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => setCode("")}>
                  <RotateCcw className="h-4 w-4 mr-1" />
                  Reset
                </Button>

                <div className="flex">
                  {prevProblem && (
                    <Button variant="outline" size="sm" asChild className="rounded-r-none border-r-0">
                      <Link href={`/problems/${prevProblem.id}`}>
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Prev
                      </Link>
                    </Button>
                  )}

                  {nextProblem && (
                    <Button variant="outline" size="sm" asChild className={prevProblem ? "rounded-l-none" : ""}>
                      <Link href={`/problems/${nextProblem.id}`}>
                        Next
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" onClick={runCode} disabled={isRunning || isSubmitting}>
                  <Play className="h-4 w-4 mr-1" />
                  {isRunning ? "Running..." : "Run Code"}
                </Button>

                <Button onClick={submitCode} disabled={isRunning || isSubmitting}>
                  <Check className="h-4 w-4 mr-1" />
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </div>

            {/* Output console */}
            {output && (
              <div className="mt-4 border rounded-md p-4 bg-muted/50 h-[200px] overflow-auto font-mono text-sm">
                <pre>{output}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

