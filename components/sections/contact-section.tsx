"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Code, Calendar, MessageCircle } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/suryaansh2002/",
    description: "View my code repositories and open source contributions",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/suryaansh-rathinam-33a86b1b6/",
    description: "Connect with me professionally",
    color: "hover:text-blue-600",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:suryaansh2002@gmail.com",
    description: "Send me a direct message",
    color: "hover:text-red-500",
  },
  {
    name: "LeetCode",
    icon: Code,
    url: "https://leetcode.com/suryaansh28/",
    description: "Check out my coding practice and solutions",
    color: "hover:text-orange-500",
  },
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
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleScheduleMeeting = () => {
    window.open("https://calendly.com/suryaansh2002/connect-with-suryaansh", "_blank")
  }

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <h2 className="text-section-title gradient-text">Get In Touch With Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say
            hello.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8 reveal">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Let's Connect!</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently open to new opportunities, freelance projects, and interesting collaborations. I'm
                  particularly interested in internships for Summer 2025 (May-Jul) and projects involving AI/ML,
                  full-stack development, or research opportunities.
                </p>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <Button onClick={handleScheduleMeeting} className="btn-primary w-full sm:w-auto">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Meeting
                </Button>
                <p className="text-sm text-muted-foreground">
                  Book a 30-minute call to discuss opportunities, projects, or just to chat!
                </p>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <Card
                    key={index}
                    className="skill-card cursor-pointer group"
                    onClick={() => window.open(social.url, "_blank")}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <social.icon className={`w-6 h-6 transition-colors ${social.color}`} />
                        <div>
                          <div className="font-medium">{social.name}</div>
                          <div className="text-xs text-muted-foreground line-clamp-2">{social.description}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <div className="flex justify-center reveal">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl glass-morphism p-8 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=128&width=128"
                        alt="Contact illustration"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold gradient-text">Ready to Connect?</h4>
                      <p className="text-muted-foreground text-sm">Let's build something amazing together!</p>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60 animate-bounce delay-1000"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-60 animate-bounce delay-500"></div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 reveal">
            <div className="space-y-4">
              <p className="text-muted-foreground">Based in Singapore • Available for remote work worldwide</p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <MessageCircle className="w-4 h-4" />
                <span>Usually responds within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
