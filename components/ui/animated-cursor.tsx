"use client"

import { useEffect, useState, useRef } from "react"

export function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const requestRef = useRef<number>()

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0

    const updateCursor = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      const target = e.target as HTMLElement
      setIsPointer(
        target.tagName.toLowerCase() === "button" ||
          target.tagName.toLowerCase() === "a" ||
          target.classList.contains("cursor-pointer") ||
          window.getComputedStyle(target).cursor === "pointer",
      )
    }

    const animateCursor = () => {
      setPosition({ x: mouseX, y: mouseY })
      requestRef.current = requestAnimationFrame(animateCursor)
    }

    window.addEventListener("mousemove", updateCursor, { passive: true })
    requestRef.current = requestAnimationFrame(animateCursor)

    return () => {
      window.removeEventListener("mousemove", updateCursor)
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])

  return (
    <>
      <div
        className={`fixed pointer-events-none z-50 transition-transform duration-150 ease-out ${
          isPointer ? "scale-150" : "scale-100"
        }`}
        style={{
          left: position.x - 10,
          top: position.y - 10,
          width: 20,
          height: 20,
          background: "radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(139,92,246,0.4) 100%)",
          borderRadius: "50%",
          filter: "blur(1px)",
          transform: `translate3d(0, 0, 0)`, // Hardware acceleration
        }}
      />
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: position.x - 2,
          top: position.y - 2,
          width: 4,
          height: 4,
          backgroundColor: "#3b82f6",
          borderRadius: "50%",
          transform: `translate3d(0, 0, 0)`, // Hardware acceleration
        }}
      />
    </>
  )
}
