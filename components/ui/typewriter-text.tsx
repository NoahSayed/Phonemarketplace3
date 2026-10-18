"use client"
import { useState, useEffect } from "react"

type TypewriterTextProps = {
  baseText?: string
  words?: string[]
  loop?: boolean
  className?: string
}

export function TypewriterText({
  baseText = "Instant ",
  words = ["Cash", "Service", "Sale"],
  loop = true,
  className = "",
}: TypewriterTextProps) {
  const [text, setText] = useState(baseText + words[0])
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const word = words[wordIndex]
    const fullWord = baseText + word
    const shouldType = !isDeleting && text !== fullWord
    const shouldDelete = isDeleting && text !== baseText

    const timer = setTimeout(() => {
      if (shouldType) {
        setText(prev => fullWord.slice(0, prev.length + 1))
        setTypingSpeed(130)
      } else if (shouldDelete) {
        setText(prev => prev.slice(0, -1))
        setTypingSpeed(70)
      } else if (isDeleting && text === baseText) {
        setIsDeleting(false)
        const nextIndex = wordIndex + 1
        if (nextIndex >= words.length && !loop) return
        setWordIndex((prev) => (prev + 1) % words.length)
        setTypingSpeed(600)
      } else if (!isDeleting && text === fullWord) {
        if (!loop && wordIndex === words.length - 1) return
        setIsDeleting(true)
        setTypingSpeed(1500)
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex, typingSpeed, words, baseText, loop])

  return (
    <span className={`inline-block min-h-[2rem] ${className}`}>
      {text}
      <span className="inline-block w-0.5 h-7 -mb-0.5 bg-green-500 ml-1 animate-pulse" style={{ animationDuration: '1s' }} />
    </span>
  )
}
