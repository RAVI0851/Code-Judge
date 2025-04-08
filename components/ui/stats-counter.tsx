"use client"

import { useState, useEffect, useRef } from "react"

interface StatsCounterProps {
  end: number
  start?: number
  duration?: number
  className?: string
  formatter?: (value: number) => string
}

export function StatsCounter({
  end,
  start = 0,
  duration = 2,
  className = "",
  formatter = (value) => value.toLocaleString(),
}: StatsCounterProps) {
  const [count, setCount] = useState(start)
  const countRef = useRef(start)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    let animationFrameId: number

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }

      const progress = (timestamp - startTimeRef.current) / (duration * 1000)

      if (progress < 1) {
        const value = Math.floor(start + (end - start) * progress)
        countRef.current = value
        setCount(value)
        animationFrameId = requestAnimationFrame(animate)
      } else {
        countRef.current = end
        setCount(end)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [start, end, duration])

  return <span className={className}>{formatter(count)}</span>
}

