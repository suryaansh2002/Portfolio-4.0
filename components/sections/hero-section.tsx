"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Download, Calendar, Info, Github, Linkedin, Mail, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypewriterText } from "@/components/ui/typewriter-text"
import { FloatingElements } from "@/components/ui/floating-elements"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleDownloadResume = () => {
    // Create a download link for the resume
    const link = document.createElement("a")
    link.href = "/SuryaanshRathinam_Resume.pdf"
    link.download = "SuryaanshRathinam_Resume.pdf"
    link.click()
  }

  const handleGetInTouch = () => {
    window.open("https://calendly.com/suryaansh2002/connect-with-suryaansh", "_blank")
  }

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  if (!mounted) return null

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
    >
      <FloatingElements />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="text-lg text-muted-foreground font-medium">Hello, I am</div>
              <h1 className="text-hero gradient-text">
                <TypewriterText text="SURYAANSH" />
              </h1>
              <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
                Full Stack Developer & AI Researcher
              </div>
              <div className="text-lg text-muted-foreground max-w-2xl">
                Pursuing Masters of Computing (AI Specialization) at National University of Singapore
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={handleDownloadResume} className="btn-primary">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button onClick={handleGetInTouch} variant="outline" className="btn-secondary bg-transparent">
                <Calendar className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button onClick={scrollToAbout} variant="ghost" className="btn-secondary">
                <Info className="w-5 h-5 mr-2" />
                More About Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full glass-morphism hover:scale-110 transition-transform"
                onClick={() => window.open("https://github.com/suryaansh2002/", "_blank")}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full glass-morphism hover:scale-110 transition-transform"
                onClick={() => window.open("https://www.linkedin.com/in/suryaansh-rathinam-33a86b1b6/", "_blank")}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full glass-morphism hover:scale-110 transition-transform"
                onClick={() => window.open("mailto:suryaansh2002@gmail.com", "_blank")}
              >
                <Mail className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full glass-morphism hover:scale-110 transition-transform"
                onClick={() => window.open("https://leetcode.com/suryaansh28/", "_blank")}
              >
                <Code className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-morphism p-2 floating-animation">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Suryaansh Rathinam"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
