"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Research", href: "#research" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

// Hard-coded HSL of --color-bg-base so the mobile sheet is fully solid even
// if the body grain pseudo or any blend-mode parent tries to bleed through.
const SOLID_BG = "hsl(32 28% 6%)"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Body scroll lock when mobile menu is open (preserves scroll position)
  useEffect(() => {
    if (!isOpen) return
    const scrollY = window.scrollY
    const { overflow, position, top, width } = document.body.style
    document.body.style.overflow = "hidden"
    document.body.style.position = "fixed"
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = "100%"
    return () => {
      document.body.style.overflow = overflow
      document.body.style.position = position
      document.body.style.top = top
      document.body.style.width = width
      window.scrollTo(0, scrollY)
    }
  }, [isOpen])

  // Esc closes the mobile menu
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen])

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    requestAnimationFrame(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    })
  }

  const headerOpaque = scrolled || isOpen

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[60] border-b ${
          headerOpaque
            ? "border-[hsl(var(--color-border-subtle))]"
            : "border-transparent"
        }`}
        style={{
          // Solid background (with optional translucency only at top)
          backgroundColor: headerOpaque
            ? "hsla(32, 28%, 6%, 0.96)"
            : "hsla(32, 28%, 6%, 0.78)",
          // Forces a compositor layer on iOS Safari — eliminates the
          // URL-bar collapse jitter that makes fixed headers appear to scroll.
          transform: "translate3d(0, 0, 0)",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          willChange: "background-color",
          transitionProperty: "background-color, border-color, box-shadow",
          transitionDuration: "250ms",
          transitionTimingFunction: "ease",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow: headerOpaque
            ? "0 4px 20px hsla(32, 28%, 4%, 0.5)"
            : "none",
        }}
      >
        <nav className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-2 relative z-10"
              onClick={() => setIsOpen(false)}
            >
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

            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden relative z-10 w-10 h-10 inline-flex items-center justify-center rounded-full text-[hsl(var(--color-text-primary))] active:text-accent transition-colors"
            >
              <span className="relative w-5 h-5 block">
                <Menu
                  className={`w-5 h-5 absolute inset-0 transition-all duration-200 ${
                    isOpen ? "opacity-0 rotate-90 scale-90" : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  className={`w-5 h-5 absolute inset-0 transition-all duration-200 ${
                    isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-90"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu — full-viewport sheet behind the header */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-250 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: SOLID_BG,
          isolation: "isolate",
          transitionDuration: "250ms",
          transitionTimingFunction: "ease",
        }}
      >
        <nav className="h-full overflow-y-auto pt-20 pb-12 px-6">
          <ul className="flex flex-col">
            {navigation.map((item, i) => (
              <li
                key={item.name}
                className="border-b border-[hsl(var(--color-border-subtle))]"
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateX(0)" : "translateX(8px)",
                  transition: `opacity 300ms ease ${isOpen ? 80 + i * 35 : 0}ms, transform 300ms ease ${isOpen ? 80 + i * 35 : 0}ms`,
                }}
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="w-full text-left py-4 inline-flex items-baseline gap-3 group active:opacity-80 transition-opacity"
                >
                  <span className="font-mono uppercase tracking-[0.18em] text-[10px] text-[hsl(var(--color-text-tertiary))] w-6 shrink-0">
                    0{i + 1}
                  </span>
                  <span className="font-display text-lg text-[hsl(var(--color-text-primary))] group-active:text-accent">
                    {item.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>

        </nav>
      </div>
    </>
  )
}
