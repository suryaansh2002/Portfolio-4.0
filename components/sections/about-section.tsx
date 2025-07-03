"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar } from "lucide-react"

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
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleConnect = () => {
    window.open("https://calendly.com/suryaansh2002/connect-with-suryaansh", "_blank")
  }

  const scrollToSection = (sectionId: string) => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <h2 className="text-section-title gradient-text">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative solutions through technology and research
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative flex justify-center reveal">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden glass-morphism p-4">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Suryaansh Rathinam - About"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 reveal">
            <div className="space-y-4">
              <h3 className="text-subsection-title">Hello, I'm Suryaansh Rathinam</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm pursuing my Masters of Computing (AI Specialization) at the National University of Singapore.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Proficient as a Full Stack Developer with experience in ML Development, I've constantly worked on
                developing my skills by exploring various tech stacks, tools, and frameworks through diverse projects,
                fostering an unceasing desire for learning and growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey extends beyond development; I have delved into research in Artificial Intelligence and other
                domains as well. I am currently working on solidifying and enhancing my knowledge in the field of LLMs,
                and trying to keep up with the latest advancements in the AI space.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I am also open to take up any freelance opportunities, and am on the search for internships for Summer
                (May-Jul) 2025.
              </p>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 glass-morphism card-hover cursor-pointer" onClick={() => scrollToSection("#skills")}>
                <h4 className="font-semibold mb-2">Skills & Technologies</h4>
                <p className="text-sm text-muted-foreground">Explore my technical expertise</p>
              </Card>
              <Card
                className="p-4 glass-morphism card-hover cursor-pointer"
                onClick={() => scrollToSection("#projects")}
              >
                <h4 className="font-semibold mb-2">Featured Projects</h4>
                <p className="text-sm text-muted-foreground">View my latest work</p>
              </Card>
              <Card
                className="p-4 glass-morphism card-hover cursor-pointer"
                onClick={() => scrollToSection("#research")}
              >
                <h4 className="font-semibold mb-2">Research Work</h4>
                <p className="text-sm text-muted-foreground">Academic publications</p>
              </Card>
              <Card className="p-4 glass-morphism card-hover cursor-pointer" onClick={handleConnect}>
                <h4 className="font-semibold mb-2">Let's Connect</h4>
                <p className="text-sm text-muted-foreground">Schedule a meeting</p>
              </Card>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button onClick={handleConnect} className="btn-primary">
                <Calendar className="w-5 h-5 mr-2" />
                Connect With Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
