import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AnimatedCursor } from "@/components/ui/animated-cursor"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Suryaansh Rathinam | Full Stack Developer & AI Researcher",
  description:
    "Portfolio of Suryaansh Rathinam - Full Stack Developer and AI Researcher pursuing Masters at NUS. Explore projects, research, and professional journey.",
  keywords: "Full Stack Developer, AI Researcher, Machine Learning, React, Next.js, Python, Singapore",
  authors: [{ name: "Suryaansh Rathinam" }],
  creator: "Suryaansh Rathinam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://suryaansh-portfolio.vercel.app",
    title: "Suryaansh Rathinam | Full Stack Developer & AI Researcher",
    description: "Portfolio showcasing projects, research, and professional journey in Full Stack Development and AI.",
    siteName: "Suryaansh Rathinam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suryaansh Rathinam | Full Stack Developer & AI Researcher",
    description: "Portfolio showcasing projects, research, and professional journey in Full Stack Development and AI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <AnimatedCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
