"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Calendar, Award, ChevronDown, ChevronUp, BookOpen } from "lucide-react"
import nus from "@/assets/nus.png"
import manipal from "@/assets/manipal.jpg"

const education = [
  {
    institution: "National University of Singapore",
    degree: "Masters of Computing: Artificial Intelligence Specialisation",
    duration: "2024-2025",
    gpa: "4.45 / 5",
    logo: nus,
    description: (
      <div>
        Specializing in AI with focus on machine learning, deep learning, and natural language processing. <br />{" "}
        Teaching Assistant for{" "}
        <a href="https://nusmods.com/courses/CS5224/cloud-computing" target="_blank" rel="noopener noreferrer">
          <Badge
            variant="secondary"
            className="bg-accent/10 text-accent border-accent/20"
          >
            Cloud Computing
          </Badge>
        </a>{" "}
        and{" "}
        <a
          href="https://nusmods.com/courses/CS3219/software-engineering-principles-and-patterns"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Badge
            variant="secondary"
            className="bg-accent/10 text-accent border-accent/20"
          >
            Software Engineering
          </Badge>
        </a>
      </div>
    ),
    courses: [
      "Neural Networks and Deep Learning",
      "Distributed Systems",
      "AI Planning and Decision Making",
      "Knowledge Discovery and Data Mining",
      "Big Data Analytics",
      "Text Mining",
      "Information Visualization",
      "Uncertainty Modelling in AI"
    ],
  },
  {
    institution: "Manipal Institute of Technology",
    degree: "Bachelor's of Technology: Computer Science",
    duration: "2020-2024",
    gpa: "9.30 / 10",
    logo: manipal,
    description:
      "Comprehensive computer science education with strong foundation in algorithms, data structures, and software engineering.",
    courses: [
    "Data Structures And Applications",
    "Digital System Design",
    "Object Oriented Programming",
    "Database Systems",
    "Design And Analysis Of Algorithms",
    "Embedded Systems",
    "Formal Languages And Automata Theory",
    "Compiler Design",
    "Computer Networks",
    "Operating Systems",
    "Software Engineering",
    "Distributed Systems",
    "Parallel Computer Architecture And Programming",
    "Big Data Integration And Processing"
]
,
  },
]

export function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>({})

  const toggleCourses = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

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
    <section id="education" ref={sectionRef} className="section-padding px-4 sm:px-0">
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <h2 className="text-section-title gradient-text">Education</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic journey in computer science and artificial intelligence
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="project-card reveal group">
              <CardHeader>
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex-shrink-0 md:w-auto w-[100%]">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden glass-morphism p-2 mx-auto">
                      <Image
                        src={edu.logo || "/placeholder.svg"}
                        alt={`${edu.institution} logo`}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3 text-center sm:text-left">
                    <div>
                      <CardTitle className="text-lg sm:text-xl group-hover:gradient-text transition-all duration-300">
                        {edu.institution}
                      </CardTitle>
                      <p className="text-md sm:text-lg text-muted-foreground font-medium">{edu.degree}</p>
                    </div>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-muted-foreground">
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

              <CardContent className="space-y-4">
                <div className="text-muted-foreground leading-relaxed">{edu.description}</div>

                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-accent/10 text-accent border-accent/20 inline-flex items-center"
                  >
                    <GraduationCap className="w-3 h-3 mr-1" />
                    {edu.gpa} GPA
                  </Badge>
                </div>

                {/* Courses Section */}
                <div className="border-t pt-4">
                  <Button
                    variant="ghost"
                    onClick={() => toggleCourses(index)}
                    className="w-full justify-between p-0 h-auto font-medium text-sm hover:bg-transparent group/button"
                  >
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-accent" />
                      <span className="group-hover/button:gradient-text transition-all duration-300">
                        Relevant Coursework ({edu.courses.length} courses)
                      </span>
                    </div>
                    {expandedCards[index] ? (
                      <ChevronUp className="w-4 h-4 text-muted-foreground group-hover/button:text-accent transition-colors" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted-foreground group-hover/button:text-accent transition-colors" />
                    )}
                  </Button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedCards[index] ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <Badge
                          key={courseIndex}
                          variant="outline"
                          className="text-xs px-3 py-1 bg-ink-subtle border-border text-cream-muted hover:bg-accent/10 hover:border-accent/40 hover:text-accent transition-all duration-200 cursor-default"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
