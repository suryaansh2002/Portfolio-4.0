"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Brain, Server, Code2, Database, Layout, FlaskConical, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"

interface SkillCategory {
  id: string
  name: string
  short: string
  icon: LucideIcon
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    id: "ai",
    name: "Artificial Intelligence & Machine Learning",
    short: "AI / ML",
    icon: Brain,
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
    id: "backend",
    name: "Backend Development",
    short: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Django", "FastAPI", "NestJS", "RESTful APIs", "GraphQL"],
  },
  {
    id: "languages",
    name: "Programming Languages",
    short: "Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "C++", "C", "Java", "Swift", "PHP"],
  },
  {
    id: "data",
    name: "Databases & Cloud",
    short: "Data / Cloud",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "TypeORM", "AWS", "Firebase", "Docker", "Git"],
  },
  {
    id: "frontend",
    name: "Frontend Development",
    short: "Frontend",
    icon: Layout,
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
    id: "testing",
    name: "Testing & Automation",
    short: "Testing",
    icon: FlaskConical,
    skills: ["Selenium", "Appium", "Pytest", "Jest", "Cypress", "Test Automation"],
  },
]

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeId, setActiveId] = useState<string>("all")

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

  const filtered = useMemo(() => {
    if (activeId === "all") return skillCategories
    return skillCategories.filter((c) => c.id === activeId)
  }, [activeId])

  const totalSkills = skillCategories.reduce((sum, c) => sum + c.skills.length, 0)

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding bg-[hsl(var(--color-bg-subtle))]"
    >
      <div className="container-custom">
        <div className="mb-12 reveal text-center">
          <SectionLabel number="03" label="Skills" align="center" className="mb-4" />
          <h2 className="text-section-title">Skills</h2>
          <p className="text-base text-[hsl(var(--color-text-secondary))] max-w-2xl mx-auto mt-3">
            What I&rsquo;ve actually shipped with.
          </p>
        </div>

        {/* Filter pills */}
        <div className="reveal flex flex-wrap items-center justify-center gap-2 mb-12 max-w-3xl mx-auto">
          <FilterPill
            label="All"
            icon={Sparkles}
            count={totalSkills}
            active={activeId === "all"}
            onClick={() => setActiveId("all")}
          />
          {skillCategories.map((c) => (
            <FilterPill
              key={c.id}
              label={c.short}
              icon={c.icon}
              count={c.skills.length}
              active={activeId === c.id}
              onClick={() => setActiveId(c.id)}
            />
          ))}
        </div>

        {/* Skill panels */}
        <div className="max-w-5xl mx-auto space-y-10">
          {filtered.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.id}
                className="reveal active"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display text-[hsl(var(--color-text-primary))]">
                    {category.name}
                  </h3>
                  <span className="ml-auto font-mono text-xs text-[hsl(var(--color-text-tertiary))]">
                    {String(category.skills.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={skill}
                      className={`tech-chip ${i === 0 ? "tech-chip--accent" : ""}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Reduced stats row */}
        <div className="mt-24 reveal max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-0 stats-row">
            <div className="text-center px-4 md:border-r md:border-[hsl(var(--color-border-subtle))]">
              <div className="font-display text-4xl sm:text-5xl text-accent mb-2 leading-none">
                10+
              </div>
              <div className="font-mono uppercase tracking-[0.2em] text-xs text-[hsl(var(--color-text-tertiary))]">
                Projects
              </div>
            </div>
            <div className="text-center px-4 md:border-r md:border-[hsl(var(--color-border-subtle))]">
              <div className="font-display text-4xl sm:text-5xl text-accent mb-2 leading-none">
                3
              </div>
              <div className="font-mono uppercase tracking-[0.2em] text-xs text-[hsl(var(--color-text-tertiary))]">
                Research Papers
              </div>
            </div>
            <div className="text-center px-4">
              <div className="font-display text-4xl sm:text-5xl text-accent mb-2 leading-none">
                5+
              </div>
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

interface FilterPillProps {
  label: string
  icon: LucideIcon
  count: number
  active: boolean
  onClick: () => void
}

function FilterPill({ label, icon: Icon, count, active, onClick }: FilterPillProps) {
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-sm transition-all duration-200 border ${
        active
          ? "bg-accent/15 border-accent/50 text-accent"
          : "bg-transparent border-[hsl(var(--color-border-subtle))] text-[hsl(var(--color-text-secondary))] hover:border-accent/40 hover:text-[hsl(var(--color-text-primary))]"
      }`}
    >
      <Icon className={`w-3.5 h-3.5 ${active ? "" : "text-[hsl(var(--color-text-tertiary))] group-hover:text-accent"} transition-colors`} />
      <span>{label}</span>
      <span
        className={`font-mono text-[10px] ${
          active ? "text-accent" : "text-[hsl(var(--color-text-tertiary))]"
        }`}
      >
        {count}
      </span>
    </button>
  )
}
