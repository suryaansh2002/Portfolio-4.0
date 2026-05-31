"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Download, Calendar, Info, Github, Linkedin, Mail, Code } from "lucide-react"
import profile from "@/assets/profile.jpg"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleDownloadResume = () => {
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

  const socialIconClass =
    "text-[hsl(var(--color-text-secondary))] hover:text-accent hover:-translate-y-0.5 transition-all duration-200"

  return (
    <section
      id="hero"
      className="hero-atmosphere relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 items-center">
          {/* Content */}
          <div className="space-y-7 text-center lg:text-left">
            <div className="space-y-4">
              <div className="hero-line hero-line-1 font-mono uppercase tracking-[0.2em] text-xs text-[hsl(var(--color-text-secondary))]">
                Hi, I am
              </div>
              <h1 className="hero-line hero-line-2 text-hero">
                <span className="hero-name text-[hsl(var(--color-text-primary))]">
                  Suryaansh Rathinam<span className="text-accent">.</span>
                </span>
              </h1>
              <div className="hero-line hero-line-3 text-xl sm:text-2xl lg:text-3xl text-accent font-display italic">
                I build AI systems.
              </div>
              <p className="hero-line hero-line-4 text-base sm:text-lg text-[hsl(var(--color-text-secondary))] max-w-2xl leading-relaxed">
                I turn research into real products — from fine-tuning ML models to deploying the
                full-stack systems that put them in users&rsquo; hands. Currently a Senior AI
                Engineer at{" "}
                <a
                  href="https://www.stengg.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  ST Engineering
                </a>
                .
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button onClick={handleDownloadResume} className="btn-primary inline-flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </button>
              <button onClick={handleGetInTouch} className="btn-secondary inline-flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2" />
                Get In Touch
              </button>
              <button onClick={scrollToAbout} className="btn-secondary inline-flex items-center justify-center">
                <Info className="w-4 h-4 mr-2" />
                More About Me
              </button>
            </div>

            {/* Social Links */}
            <div className="hero-socials flex gap-5 justify-center lg:justify-start pt-2">
              <button
                aria-label="GitHub"
                onClick={() => window.open("https://github.com/suryaansh2002/", "_blank")}
                className={socialIconClass}
              >
                <Github className="w-5 h-5" />
              </button>
              <button
                aria-label="LinkedIn"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/suryaanshrathinam/", "_blank")
                }
                className={socialIconClass}
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button
                aria-label="Email"
                onClick={() => window.open("mailto:suryaansh2002@gmail.com", "_blank")}
                className={socialIconClass}
              >
                <Mail className="w-5 h-5" />
              </button>
              <button
                aria-label="LeetCode"
                onClick={() => window.open("https://leetcode.com/suryaansh28", "_blank")}
                className={socialIconClass}
              >
                <Code className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="hero-photo relative flex justify-center lg:justify-end">
            <div className="profile-photo-frame w-72 h-72 lg:w-80 lg:h-80">
              <Image
                src={profile}
                alt="Suryaansh Rathinam"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
