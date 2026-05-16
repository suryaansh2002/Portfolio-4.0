"use client"

import Link from "next/link"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-ink-subtle">
      <div className="container-custom py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {year} Suryaansh Rathinam</p>
          <nav className="flex items-center gap-6 font-mono uppercase tracking-[0.12em] text-xs">
            <Link
              href="/now"
              className="hover:text-accent transition-colors"
            >
              /now
            </Link>
            <a
              href="https://github.com/suryaansh2002"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/suryaansh-rathinam/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              linkedin
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
