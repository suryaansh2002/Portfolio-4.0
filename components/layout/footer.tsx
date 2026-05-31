"use client"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[hsl(var(--color-border-subtle))]">
      <div className="container-custom pt-8 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {year} Suryaansh Rathinam</p>
          <nav className="flex items-center gap-6 font-mono uppercase tracking-[0.12em] text-xs">
            <a
              href="https://github.com/suryaansh2002"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/suryaanshrathinam/"
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
