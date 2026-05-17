"use client"

import { useEffect, useRef } from "react"
import { SectionLabel } from "@/components/ui/section-label"

const skillCategories = [
  {
    name: "Artificial Intelligence & Machine Learning",
    skills: [
      "Large Language Models",
      "OpenAI API",
      "Mistral",
      "Vector Databases",
      "RAG",
      "Knowledge Graphs",
      "Speaker Diarization",
      "Computer Vision",
      "CNN",
      "RNN",
      "Medical Image Analysis",
      "NLP",
      "AI Model Integration",
      "Prompt Engineering",
      "Transformers",
    ],
  },
  {
    name: "Backend Development",
    skills: ["Node.js", "Express.js", "Django", "FastAPI", "NestJS", "RESTful APIs", "GraphQL"],
  },
  {
    name: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C++", "C", "Java", "Swift", "PHP"],
  },
  {
    name: "Databases & Cloud",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "TypeORM", "AWS", "Firebase", "Docker", "Git"],
  },
  {
    name: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "Vue.js",
      "HTML5",
      "CSS3",
      "Sass",
      "Bootstrap",
      "Tailwind CSS",
      "Redux",
      "React Native",
      "Flutter",
    ],
  },
  {
    name: "Testing & Automation",
    skills: ["Selenium", "Appium", "Pytest", "Jest", "Cypress", "Test Automation"],
  },
]

export function SkillsSection() {
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
    <section id="skills" ref={sectionRef} className="section-padding bg-[hsl(var(--color-bg-subtle))]">
      <div className="container-custom">
        <div className="mb-16 reveal text-center">
          <SectionLabel number="03" label="Skills" align="center" className="mb-4" />
          <h2 className="text-section-title">Skills</h2>
          <p className="text-base text-[hsl(var(--color-text-secondary))] max-w-2xl mx-auto mt-3">
            What I&rsquo;ve actually shipped with.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="reveal">
              <h3 className="text-xl sm:text-2xl font-display text-[hsl(var(--color-text-primary))] mb-5">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`tech-chip ${skillIndex === 0 ? "tech-chip--accent" : ""}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Reduced stats row */}
        <div className="mt-20 reveal max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-0 stats-row">
            <div className="text-center px-4 md:border-r md:border-[hsl(var(--color-border-subtle))]">
              <div className="font-display text-4xl sm:text-5xl text-accent mb-2 leading-none">10+</div>
              <div className="font-mono uppercase tracking-[0.2em] text-xs text-[hsl(var(--color-text-tertiary))]">
                Projects
              </div>
            </div>
            <div className="text-center px-4 md:border-r md:border-[hsl(var(--color-border-subtle))]">
              <div className="font-display text-4xl sm:text-5xl text-accent mb-2 leading-none">3</div>
              <div className="font-mono uppercase tracking-[0.2em] text-xs text-[hsl(var(--color-text-tertiary))]">
                Research Papers
              </div>
            </div>
            <div className="text-center px-4">
              <div className="font-display text-4xl sm:text-5xl text-accent mb-2 leading-none">5+</div>
              <div className="font-mono uppercase tracking-[0.2em] text-xs text-[hsl(var(--color-text-tertiary))]">
                Work Experiences
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
