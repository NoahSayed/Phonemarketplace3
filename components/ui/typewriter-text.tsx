"use client"
import { useState, useEffect } from "react"

export function TypewriterText() {
  const words = ["Sale", "Care", "Cash"]
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const word = words[wordIndex]
    const baseText = "Instant "
    const fullWord = baseText + word
    const shouldType = !isDeleting && text !== fullWord
    const shouldDelete = isDeleting && text !== baseText

    const timer = setTimeout(() => {
      // Typing
      if (shouldType) {
        setText(prev => {
          const nextLength = prev.length + 1
          return fullWord.slice(0, nextLength)
        })
        setTypingSpeed(150) // Regular typing speed
      }
      // Deleting
      else if (shouldDelete) {
        setText(prev => prev.slice(0, -1))
        setTypingSpeed(75) // Faster when deleting
      }
      // Finished deleting a word
      else if (isDeleting && text === baseText) {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
        setTypingSpeed(750) // Pause before typing next word
      }
      // Finished typing a word
      else if (!isDeleting && text === fullWord) {
        setIsDeleting(true)
        setTypingSpeed(2000) // Pause at the end of the word
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex, typingSpeed, words])

  return (
    <span className="inline-block min-h-[2rem]">
      {text}
      <span className="inline-block w-0.5 h-7 -mb-0.5 bg-green-500 ml-1 animate-pulse" 
            style={{ animationDuration: '1s' }}>
      </span>
    </span>
  )
}
