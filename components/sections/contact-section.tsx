"use client"

import { useEffect, useRef } from "react"
import { Github, Linkedin, Mail, Code, Calendar } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/suryaansh2002/" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/suryaanshrathinam/",
  },
  { name: "Email", icon: Mail, url: "mailto:suryaansh2002@gmail.com" },
  { name: "LeetCode", icon: Code, url: "https://leetcode.com/suryaansh28" },
]

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.15 },
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleScheduleMeeting = () => {
    window.open("https://calendly.com/suryaansh2002/connect-with-suryaansh", "_blank")
  }

  return (
    <section id="contact" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center">
          <div className="reveal mb-6">
            <SectionLabel number="07" label="Contact" align="center" className="mb-4" />
            <h2 className="text-section-title">Contact</h2>
          </div>

          <p className="text-base sm:text-lg text-[hsl(var(--color-text-secondary))] leading-relaxed reveal mb-8">
            Happy to talk applied AI, LLM systems, agents, RAG, or the engineering side of shipping
            ML products. Not actively looking, but always up for an interesting conversation.
          </p>

          <div className="reveal mb-3">
            <button
              onClick={handleScheduleMeeting}
              className="btn-primary inline-flex items-center"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Schedule a meeting
            </button>
          </div>
          <p className="text-xs text-[hsl(var(--color-text-tertiary))] reveal mb-10">
            30-minute call — happy to chat about anything AI, engineering, or otherwise.
          </p>

          <div className="reveal flex items-center justify-center gap-8">
            {socialLinks.map((social) => (
              <button
                key={social.name}
                onClick={() => window.open(social.url, "_blank")}
                aria-label={social.name}
                className="text-[hsl(var(--color-text-secondary))] hover:text-accent hover:-translate-y-0.5 transition-all duration-200"
              >
                <social.icon className="w-5 h-5" />
              </button>
            ))}
          </div>

          <div className="reveal mt-14 pt-8 border-t border-[hsl(var(--color-border-subtle))] text-xs text-[hsl(var(--color-text-tertiary))] font-mono uppercase tracking-[0.2em]">
            Based in Singapore
          </div>
        </div>
      </div>
    </section>
  )
}
