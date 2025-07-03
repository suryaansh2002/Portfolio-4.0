"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, Award } from "lucide-react"

const education = [
  {
    institution: "National University of Singapore",
    degree: "Masters of Computing: Artificial Intelligence Specialisation",
    duration: "2024-2025",
    gpa: "4.63 / 5",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Specializing in AI with focus on machine learning, deep learning, and natural language processing.",
  },
  {
    institution: "Manipal Institute of Technology",
    degree: "Bachelor's of Technology: Computer Science",
    duration: "2020-2024",
    gpa: "9.47 / 10",
    logo: "/placeholder.svg?height=80&width=80",
    description:
      "Comprehensive computer science education with strong foundation in algorithms, data structures, and software engineering.",
  },
]

export function EducationSection() {
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

  return (
    <section id="education" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <h2 className="text-section-title gradient-text">Education</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic journey in computer science and artificial intelligence
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="project-card reveal group">
              <CardHeader>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden glass-morphism p-2">
                      <Image
                        src={edu.logo || "/placeholder.svg"}
                        alt={`${edu.institution} logo`}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <div>
                      <CardTitle className="text-xl group-hover:gradient-text transition-all duration-300">
                        {edu.institution}
                      </CardTitle>
                      <p className="text-lg text-muted-foreground font-medium">{edu.degree}</p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{edu.description}</p>

                <div className="mt-4">
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400"
                  >
                    <GraduationCap className="w-3 h-3 mr-1" />
                    {edu.gpa} GPA
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
