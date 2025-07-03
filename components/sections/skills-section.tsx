"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronRight } from "lucide-react"

const skillCategories = [
  {
    name: "Artificial Intelligence & Machine Learning",
    skills: [
      "Large Language Models (LLMs)",
      "OpenAI API",
      "Mistral",
      "Vector Databases",
      "RAG (Retrieval Augmented Generation)",
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
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C++", "C", "Java", "Swift", "PHP"],
    color: "from-blue-500 to-cyan-500",
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
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Backend Development",
    skills: ["Node.js", "Express.js", "Django", "FastAPI", "NestJS", "Spring Boot", "RESTful APIs", "GraphQL"],
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Databases & Cloud",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "TypeORM", "AWS", "Firebase", "Docker", "Git"],
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Testing & Automation",
    skills: ["Selenium", "Appium", "Pytest", "Jest", "Cypress", "Test Automation"],
    color: "from-teal-500 to-blue-500",
  },
]

export function SkillsSection() {
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set([0]))
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

  const toggleCategory = (index: number) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedCategories(newExpanded)
  }

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <h2 className="text-section-title gradient-text">My Skills</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="skill-card reveal group">
              <CardHeader className="cursor-pointer" onClick={() => toggleCategory(index)}>
                <CardTitle className="flex items-center justify-between">
                  <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.name}
                  </span>
                  {expandedCategories.has(index) ? (
                    <ChevronDown className="w-5 h-5 transition-transform" />
                  ) : (
                    <ChevronRight className="w-5 h-5 transition-transform" />
                  )}
                </CardTitle>
              </CardHeader>

              {expandedCategories.has(index) && (
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 hover:border-blue-500/40 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">50+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">10+</div>
              <div className="text-muted-foreground">Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">3</div>
              <div className="text-muted-foreground">Research Papers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">5+</div>
              <div className="text-muted-foreground">Work Experiences</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
