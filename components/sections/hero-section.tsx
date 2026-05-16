"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Download, Calendar, Info, Github, Linkedin, Mail, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FloatingElements } from "@/components/ui/floating-elements"
import profile from '@/assets/profile.jpg'
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
              <div className="hero-line hero-line-1 text-xs sm:text-sm text-muted-foreground font-mono uppercase tracking-[0.12em]">
                Hi, my name is
              </div>
              <h1 className="hero-line hero-line-2 text-hero font-display">
                <span className="text-foreground">Suryaansh Rathinam.</span>
              </h1>
              <div className="hero-line hero-line-3 text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-display italic">
                I build AI systems.
              </div>
              <p className="hero-line hero-line-4 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                I turn research into real products — from fine-tuning ML models to deploying the full-stack systems
                that put them in users' hands. Currently a Senior AI Engineer at{" "}
                <a
                  href="https://www.stengg.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover underline-offset-4 hover:underline transition-colors"
                >
                  ST Engineering
                </a>
                .
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                onClick={() => window.open("https://leetcode.com/suryaansh28", "_blank")}
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
                    src={profile}
                    alt="Suryaansh Rathinam"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-15"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-muted rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
