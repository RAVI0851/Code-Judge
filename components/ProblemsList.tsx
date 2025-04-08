"use client"

import { useState, useEffect } from "react"

// Mock problem data
const mockProblems = [
  { id: 1, title: "Two Sum", difficulty: "Easy", description: "Find two numbers that add up to a target" },
  { id: 2, title: "Reverse Linked List", difficulty: "Medium", description: "Reverse a singly linked list" },
  {
    id: 3,
    title: "Binary Tree Traversal",
    difficulty: "Medium",
    description: "Implement pre-order, in-order, and post-order traversals",
  },
  {
    id: 4,
    title: "Dynamic Programming",
    difficulty: "Hard",
    description: "Solve the knapsack problem using dynamic programming",
  },
  { id: 5, title: "Graph Algorithms", difficulty: "Hard", description: "Implement Dijkstra's shortest path algorithm" },
  { id: 6, title: "String Manipulation", difficulty: "Easy", description: "Check if a string is a palindrome" },
]

interface Problem {
  id: number
  title: string
  difficulty: string
  description: string
}

export default function ProblemsList() {
  const [problems, setProblems] = useState<Problem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API fetch with a delay
    const fetchProblems = async () => {
      try {
        // In a real app, this would be:
        // const response = await axios.get('http://localhost:8080/api/problems')
        // setProblems(response.data)

        // Simulating API delay
        setTimeout(() => {
          setProblems(mockProblems)
          setLoading(false)
        }, 1500)
      } catch (error) {
        console.error("Error fetching problems:", error)
        setLoading(false)
      }
    }

    fetchProblems()
  }, [])

  return (
    <section id="problems" className="py-16 px-4 bg-[#16213E]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-10 text-center">Featured Problems</h2>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-[#1A1A2E] rounded-lg p-6 animate-pulse">
                <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-700 rounded w-1/4 mb-6"></div>
                <div className="h-4 bg-gray-700 rounded w-full mb-4"></div>
                <div className="h-4 bg-gray-700 rounded w-full mb-6"></div>
                <div className="h-10 bg-gray-700 rounded w-1/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem) => (
              <div
                key={problem.id}
                className="bg-[#1A1A2E] rounded-lg p-6 border border-gray-800 hover:border-[#00ADB5] transition-colors shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${
                    problem.difficulty === "Easy"
                      ? "bg-green-900 text-green-300"
                      : problem.difficulty === "Medium"
                        ? "bg-yellow-900 text-yellow-300"
                        : "bg-red-900 text-red-300"
                  }`}
                >
                  {problem.difficulty}
                </span>
                <p className="text-gray-400 mb-6">{problem.description}</p>
                <button className="px-4 py-2 bg-[#00ADB5] rounded-md hover:bg-opacity-80 transition-colors">
                  Solve
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

