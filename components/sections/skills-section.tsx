"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronRight } from "lucide-react"

const skillCategories = [
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
    name: "AI & Machine Learning",
    skills: ["OpenAI API", "Whisper", "Mistral", "Vector Databases", "RAG", "LLMs", "NumPy", "Pandas", "Scikit-learn"],
    color: "from-indigo-500 to-purple-500",
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
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="hover:scale-105 transition-transform cursor-default"
                      >
                        {skill}
                      </Badge>
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
              <div className="text-3xl font-bold gradient-text">9</div>
              <div className="text-muted-foreground">Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">4</div>
              <div className="text-muted-foreground">Research Papers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">4</div>
              <div className="text-muted-foreground">Work Experiences</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
