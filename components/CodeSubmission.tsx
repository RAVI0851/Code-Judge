"use client"

import { useState } from "react"

export default function CodeSubmission() {
  const [code, setCode] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!code.trim()) return

    setSubmitting(true)
    try {
      // In a real app, this would be:
      // const response = await axios.post('http://localhost:8080/api/submit', { code })
      // console.log(response.data)

      // Simulating API call
      console.log("Submitting code:", code)
      setTimeout(() => {
        console.log("Submission successful!")
        setSubmitting(false)
        setCode("")
      }, 1000)
    } catch (error) {
      console.error("Error submitting code:", error)
      setSubmitting(false)
    }
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-10 text-center">Submit Your Solution</h2>
        <div className="bg-[#16213E] rounded-lg p-6 border border-gray-800 shadow-lg">
          <textarea
            className="w-full h-64 p-4 bg-[#1A1A2E] text-white rounded-md border border-gray-700 focus:border-[#00ADB5] focus:outline-none font-mono mb-4"
            placeholder="// Write your code here..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
          ></textarea>
          <div className="flex justify-end">
            <button
              className={`px-6 py-3 bg-[#00ADB5] rounded-md flex items-center hover:bg-opacity-80 transition-colors ${submitting ? "opacity-70 cursor-not-allowed" : ""}`}
              onClick={handleSubmit}
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit Solution"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

