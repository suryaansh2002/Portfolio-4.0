"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { CountUp } from "@/components/ui/count-up"
import { SectionLabel } from "@/components/ui/section-label"
import about from "@/assets/about.png"

export function AboutSection() {
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

  return (
    <section id="about" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className="mb-16 reveal text-center">
          <SectionLabel number="01" label="About" align="center" className="mb-4" />
          <h2 className="text-section-title">About</h2>
        </div>

        <div className="grid lg:grid-cols-[auto,1fr] gap-12 items-start max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="relative flex justify-center reveal">
            <div className="profile-photo-frame w-56 h-56 lg:w-64 lg:h-64">
              <Image
                src={about}
                alt="Suryaansh Rathinam"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-5 reveal text-base sm:text-lg leading-relaxed text-[hsl(var(--color-text-secondary))]">
            <p>
              I completed my Masters of Computing (AI Specialisation) at the National University of
              Singapore in December 2025.
            </p>
            <p>
              Before that I did a CS undergrad at Manipal, built production AI at startups in
              parallel, credit risk platforms, NL2SQL engines, fine-tuned speech models, and
              agentic systems.
            </p>
            <p>
              Now I&rsquo;m at{" "}
              <a
                href="https://www.stengg.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                ST Engineering
              </a>
              &rsquo;s R&amp;D division as a Senior AI Engineer. The work I&rsquo;m drawn to lives
              at the intersection of AI research, real-time systems, and product engineering — which
              is where I&rsquo;ve been heading the whole time.
            </p>
          </div>
        </div>

        {/* Stats Block */}
        <div className="mt-24 reveal max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 stats-row">
            <div
              className="text-center px-6 stat-item md:border-r md:border-[hsl(var(--color-border-subtle))]"
              style={{ animationDelay: "0ms" }}
            >
              <div className="font-display text-5xl sm:text-6xl text-accent mb-3 leading-none">
                <CountUp end={2} suffix="+" />
              </div>
              <div className="font-mono uppercase tracking-[0.2em] text-xs text-[hsl(var(--color-text-tertiary))]">
                Years Experience
              </div>
            </div>
            <div
              className="text-center px-6 stat-item md:border-r md:border-[hsl(var(--color-border-subtle))]"
              style={{ animationDelay: "150ms" }}
            >
              <div className="font-display text-5xl sm:text-6xl text-accent mb-3 leading-none">
                <CountUp end={3} />
              </div>
              <div className="font-mono uppercase tracking-[0.2em] text-xs text-[hsl(var(--color-text-tertiary))]">
                Publications
              </div>
            </div>
            <div className="text-center px-6 stat-item" style={{ animationDelay: "300ms" }}>
              <div className="font-display text-5xl sm:text-6xl text-accent mb-3 leading-none">
                NUS
              </div>
              <div className="font-mono uppercase tracking-[0.2em] text-xs text-[hsl(var(--color-text-tertiary))]">
                Masters in AI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
