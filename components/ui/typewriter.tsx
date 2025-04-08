"use client"

import { useState, useEffect } from "react"

interface TypewriterProps {
  words: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenWords?: number
}

export function Typewriter({
  words,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1500,
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]

    const timeout = setTimeout(
      () => {
        // If deleting
        if (isDeleting) {
          setCurrentText(word.substring(0, currentText.length - 1))

          // If deleted completely, start typing the next word
          if (currentText.length === 1) {
            setIsDeleting(false)
            setCurrentWordIndex((currentWordIndex + 1) % words.length)
          }
        }
        // If typing
        else {
          setCurrentText(word.substring(0, currentText.length + 1))

          // If typed completely, wait and then start deleting
          if (currentText.length === word.length) {
            setTimeout(() => {
              setIsDeleting(true)
            }, delayBetweenWords)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, words, typingSpeed, deletingSpeed, delayBetweenWords])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
}

