"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink, ArrowRight } from "lucide-react"
import moneyflo from '@/assets/moneyflo.png'
import ridecell from '@/assets/ridecell.jpeg'
import pefo from '@/assets/pefo.png'
import kaiziq from '@/assets/kaiziq.png'
import aidf from '@/assets/aidf.png'

const workExperience = [
   {
    company: "AIDF (Asian Institute of Digital Finance)",
    duration: "Oct '24 - Jun '25",
    logo: aidf,
    website: "https://www.aidf.nus.edu.sg/",
    role: "Full Stack Developer",
    description:
      "Led the end-to-end development of ‘Caesers’, a credit risk assessment report platform, and engineered a ‘Credit Research Tool’ powered by OpenAI’s LLM. Built robust Django-based RESTful APIs, a dynamic NextJS front-end, and integrated secure authentication, real-time data visualizations, and automated report generation pipelines.",
    technologies: [
      "NextJS",
      "Django",
      "OpenAI GPT-4",
      "GraphQL",
      "PostgreSQL",
      "Recharts",
      "Ant Design",
      "Docker",
      "AWS (Lambda, S3, RDS)",
      "GitLab CI/CD"
    ],
    highlights: [
      "Architected and launched ‘Caesers’, automating credit risk report generation and cutting manual processing time.",
      "Developed a ‘Credit Research Tool’ leveraging GPT-4 for on-demand financial insights, reducing analyst workload.",
      "Designed and implemented secure, scalable REST APIs with Django.",
      "Built interactive dashboards in NextJS with Recharts & AntD, enabling stakeholders to visualize key risk metrics in real time",
      "Integrated CI/CD pipelines using GitLab, Docker, and AWS Lambda for zero-downtime deployments",
      "Collaborated with data scientists to embed ML risk models, boosting prediction accuracy."
    ],
  },
  {
    company: "Moneyflo",
    duration: "Mar '23 - Jul '24",
    logo: moneyflo,
    website: "https://www.moneyflo.ai/",
    role: "Full Stack Developer",
    description:
      "Built financial intelligence platform for e-commerce profitability. Developed UI/UX enhancements, RestAPI endpoints, and AI Assistant using OpenAI API.",
    technologies: ["NextJS", "Sass", "AntD", "FastAPI", "NestJS", "TypeORM", "Postgres", "AWS", "OpenAI"],
    highlights: [
      "Enhanced platform UI/UX across multiple iterations",
      "Built RestAPI endpoints and backend functionalities",
      "Developed AI Assistant with OpenAI integration",
      "Provided data insights for client decision-making",
    ],
  },
  {
    company: "Ridecell",
    duration: "May '22 - Aug '22",
    logo: ridecell,
    website: "https://ridecell.com/",
    role: "QA Automation Engineer",
    description:
      "Worked on Quality Assurance, Automation and Testing. Automated test cases using Selenium and Appium, integrated with CI/CD pipeline.",
    technologies: ["Python", "Pytest", "RestAPIs", "Selenium", "Appium", "Testrail"],
    highlights: [
      "Automated test cases on Testrail platform",
      "Built mobile app testing automation",
      "Integrated automated tests into CI/CD pipeline",
      "Improved testing efficiency and coverage",
    ],
  },
  {
    company: "KaizIQ",
    duration: "Apr '22 - Jul '22",
    logo: kaiziq,
    website: "https://kaiziq.io/",
    role: "Full Stack Software Engineering Intern",
    description:
      "Worked on building an end-to-end SDLC tool. Developed both frontend and backend components, wrote unit tests for microservices.",
    technologies: ["ReactJS", "JavaScript", "CSS", "Java", "Spring Boot"],
    highlights: [
      "Developed full-stack features for SDLC tool",
      "Worked closely with founders on product vision",
      "Built frontend and server-side components",
      "Wrote comprehensive unit tests",
    ],
  },
    {
    company: "PE Front Office",
    duration: "Dec '21 - Jan '22",
    logo: pefo,
    website: "https://pefrontoffice.com/",
    role: "Frontend Developer",
    description:
      "Worked on help-engine for alternative investment management platform. Enhanced user interface and implemented additional features.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    highlights: [
      "Enhanced help-engine user interface",
      "Implemented new client-facing features",
      "Improved user experience for financial platform",
      "Worked with alternative investment management tools",
    ],
  },
]

export function WorkExperienceSection() {
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
    <section id="experience" ref={sectionRef} className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <h2 className="text-section-title gradient-text">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional journey across startups and established companies
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {workExperience.map((work, index) => (
            <Card key={index} className="project-card reveal group">
              <CardHeader>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl overflow-hidden glass-morphism p-2">
                      <Image
                        src={work.logo || "/placeholder.svg"}
                        alt={`${work.company} logo`}
                        width={60}
                        height={60}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <CardTitle className="text-xl group-hover:gradient-text transition-all duration-300">
                          {work.company}
                        </CardTitle>
                        <p className="text-lg text-muted-foreground font-medium">{work.role}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {work.duration}
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => window.open(work.website, "_blank")}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{work.description}</p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {work.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {work.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-500/10 to-blue-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-blue-500/20 transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
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
