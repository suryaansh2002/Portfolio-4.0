"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Research", href: "#research" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(var(--color-bg-base)/0.92)] backdrop-blur-xl border-b border-[hsl(var(--color-border-subtle))] shadow-[0_4px_20px_hsl(var(--color-bg-base)/0.4)]"
          : "bg-[hsl(var(--color-bg-base)/0.7)] border-b border-transparent"
      }`}
    >
      <nav className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display text-lg text-[hsl(var(--color-text-primary))]">
              Suryaansh<span className="text-accent">.</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-[hsl(var(--color-text-secondary))] hover:text-accent transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[hsl(var(--color-text-primary))] hover:text-accent hover:bg-transparent"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[hsl(var(--color-bg-base)/0.95)] backdrop-blur-md border-t border-[hsl(var(--color-border-subtle))]">
            <div className="px-4 py-6 space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-sm text-[hsl(var(--color-text-secondary))] hover:text-accent transition-colors duration-200 py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
