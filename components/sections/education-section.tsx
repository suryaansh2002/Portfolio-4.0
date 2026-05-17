"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Calendar, Award, ChevronDown, BookOpen } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"
import nus from "@/assets/nus.png"
import manipal from "@/assets/manipal.jpg"

const education = [
  {
    institution: "National University of Singapore",
    degree: "Masters of Computing: Artificial Intelligence Specialisation",
    duration: "Aug 2024 – Dec 2025",
    gpa: "4.45 / 5",
    logo: nus,
    description: (
      <p>
        Specialising in AI with focus on machine learning, deep learning, and natural language
        processing. Teaching Assistant for{" "}
        <a
          href="https://nusmods.com/courses/CS5224/cloud-computing"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline"
        >
          Cloud Computing
        </a>{" "}
        and{" "}
        <a
          href="https://nusmods.com/courses/CS3219/software-engineering-principles-and-patterns"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline"
        >
          Software Engineering
        </a>
        .
      </p>
    ),
    courses: [
      "Neural Networks and Deep Learning",
      "Distributed Systems",
      "AI Planning and Decision Making",
      "Knowledge Discovery and Data Mining",
      "Big Data Analytics",
      "Text Mining",
      "Information Visualization",
      "Uncertainty Modelling in AI",
    ],
  },
  {
    institution: "Manipal Institute of Technology",
    degree: "Bachelor's of Technology: Computer Science",
    duration: "Sep 2020 – Jul 2024",
    gpa: "9.30 / 10",
    logo: manipal,
    description: (
      <p>
        Comprehensive computer science education with strong foundation in algorithms, data
        structures, and software engineering.
      </p>
    ),
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
      "Big Data Integration And Processing",
    ],
  },
]

export function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({})

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
      { threshold: 0.15 },
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" ref={sectionRef} className="section-padding bg-[hsl(var(--color-bg-subtle))]">
      <div className="container-custom">
        <div className="mb-16 reveal text-center">
          <SectionLabel number="06" label="Education" align="center" className="mb-4" />
          <h2 className="text-section-title">Education</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <article key={index} className="project-card card-hover reveal">
              <header className="flex flex-col sm:flex-row items-start gap-5 mb-4">
                <div className="w-14 h-14 rounded-lg overflow-hidden bg-[hsl(var(--color-bg-elevated))] border border-[hsl(var(--color-border-subtle))] flex items-center justify-center shrink-0">
                  <Image
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    width={56}
                    height={56}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-display text-[hsl(var(--color-text-primary))]">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-[hsl(var(--color-text-secondary))]">{edu.degree}</p>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-xs font-mono text-[hsl(var(--color-text-tertiary))]">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      GPA: {edu.gpa}
                    </span>
                  </div>
                </div>
              </header>

              <div className="text-sm text-[hsl(var(--color-text-secondary))] leading-relaxed [&_a]:text-accent">
                {edu.description}
              </div>

              <div className="border-t border-[hsl(var(--color-border-subtle))] mt-5 pt-4">
                <button
                  onClick={() => toggleCourses(index)}
                  className="w-full inline-flex items-center justify-between font-mono uppercase tracking-[0.15em] text-xs text-[hsl(var(--color-text-secondary))] hover:text-accent transition-colors"
                >
                  <span className="inline-flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    Relevant Coursework ({edu.courses.length})
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      expandedCards[index] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    expandedCards[index] ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((course, courseIndex) => (
                      <span key={courseIndex} className="tech-chip">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
