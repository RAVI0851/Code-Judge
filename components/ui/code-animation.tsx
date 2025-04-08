"use client"

import { useEffect, useRef } from "react"

export function CodeAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Code animation
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = Array(columns).fill(1)

    // Define some code snippets
    const codeSnippets = [
      "function quickSort(arr) {",
      "  if (arr.length <= 1) return arr;",
      "  const pivot = arr[0];",
      "  const left = [];",
      "  const right = [];",
      "  for (let i = 1; i < arr.length; i++) {",
      "    if (arr[i] < pivot) left.push(arr[i]);",
      "    else right.push(arr[i]);",
      "  }",
      "  return [...quickSort(left), pivot, ...quickSort(right)];",
      "}",
      "",
      "class Node {",
      "  constructor(val) {",
      "    this.val = val;",
      "    this.left = null;",
      "    this.right = null;",
      "  }",
      "}",
      "",
      "function bfs(root) {",
      "  if (!root) return [];",
      "  const result = [];",
      "  const queue = [root];",
      "  while (queue.length > 0) {",
      "    const node = queue.shift();",
      "    result.push(node.val);",
      "    if (node.left) queue.push(node.left);",
      "    if (node.right) queue.push(node.right);",
      "  }",
      "  return result;",
      "}",
    ]

    const draw = () => {
      // Create a semi-transparent background to create the fading effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set the text color and font
      ctx.fillStyle = "#2563eb"
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`

      // Draw the code
      for (let i = 0; i < drops.length; i++) {
        // Get a random code snippet
        const text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]

        // Draw the character
        ctx.fillText(text[Math.floor(Math.random() * text.length)], i * fontSize, drops[i] * fontSize)

        // Send the drop back to the top randomly after it has crossed the screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        // Increment y coordinate
        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

