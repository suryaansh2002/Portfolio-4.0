"use client"

import { useEffect, useRef } from "react"
import Image, { type StaticImageData } from "next/image"
import { Calendar, ExternalLink } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"
import moneyflo from "@/assets/moneyflo.png"
import ridecell from "@/assets/ridecell.jpeg"
import kaiziq from "@/assets/kaiziq.png"
import aidf from "@/assets/aidf.png"
import datalensai from "@/assets/datalensai.png"
import stengg from "@/assets/stengg.png"
import thout from "@/assets/thout.png"

interface WorkEntry {
  company: string
  duration: string
  logo: StaticImageData | string
  website: string
  role: string
  description: string
  technologies: string[]
  highlights: string[]
}

const workExperience: WorkEntry[] = [
  {
    company: "ST Engineering",
    duration: "May 2026 – Present",
    logo: stengg,
    website: "https://www.stengg.com/",
    role: "Senior AI Engineer",
    description: "Senior AI Engineer in the Research & Development division.",
    technologies: ["AI/ML", "Python", "R&D"],
    highlights: [],
  },
  {
    company: "ThoutAI",
    duration: "Aug 2025 – Apr 2026",
    logo: thout,
    website: "https://thout.ai/",
    role: "Founding Engineer (Backend & AI Lead)",
    description:
      "Led the backend and AI team at ThoutAI, architecting the infrastructure behind a Meeting Intelligence Platform that turns conversations into action — at the intersection of AI agents, real-time systems, and product engineering.",
    technologies: [
      "AI Agents",
      "Python",
      "FastAPI",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "LangChain",
      "OpenAI",
      "WebSockets",
      "AWS",
      "Docker",
    ],
    highlights: [
      "Led the backend and AI team building a Meeting Intelligence Platform.",
      "Architected backend services for real-time meeting capture, transcription, and intelligence.",
      "Built AI Agents for action extraction, summarization, and downstream workflow automation.",
      "Developed the frontend interface that surfaced agent outputs to users.",
    ],
  },
  {
    company: "Datalens AI",
    duration: "May 2025 – Jul 2025",
    logo: datalensai,
    website: "https://datalensai.com/",
    role: "AI Developer",
    description:
      "Built intelligent speech and query interfaces for enterprise data systems. Developed a diarization and transcription pipeline for customer service call recordings using Whisper, and implemented a natural language to SQL translator for database querying.",
    technologies: [
      "Whisper",
      "Python",
      "PyTorch",
      "HuggingFace Transformers",
      "Streamlit",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "OpenAI API",
    ],
    highlights: [
      "Engineered a diarization and transcription pipeline to process large volumes of customer service calls.",
      "Improved Whisper model accuracy through fine-tuning on a labeled dataset of call audio and transcripts.",
      "Created a natural language to SQL query interface that enabled users to interact with databases via plain English.",
      "Built end-to-end pipeline to parse schema, generate SQL queries from prompts, execute queries, and return formatted results.",
      "Deployed tools with containerized microservices and interactive front-ends for internal teams.",
    ],
  },
  {
    company: "AIDF (Asian Institute of Digital Finance)",
    duration: "Oct 2024 – Jun 2025",
    logo: aidf,
    website: "https://www.aidf.nus.edu.sg/",
    role: "Full Stack Developer",
    description:
      "Led the end-to-end development of 'Caesers', a credit risk assessment report platform, and engineered a 'Credit Research Tool' powered by OpenAI's LLM. Built robust Django-based RESTful APIs, a dynamic Next.js front-end, and integrated secure authentication, real-time data visualisations, and automated report generation pipelines.",
    technologies: [
      "Next.js",
      "Django",
      "OpenAI GPT-4",
      "GraphQL",
      "PostgreSQL",
      "Recharts",
      "Ant Design",
      "Docker",
      "AWS (Lambda, S3, RDS)",
      "GitLab CI/CD",
    ],
    highlights: [
      "Architected and launched 'Caesers', automating credit risk report generation and cutting manual processing time.",
      "Developed a 'Credit Research Tool' leveraging GPT-4 for on-demand financial insights, reducing analyst workload.",
      "Designed and implemented secure, scalable REST APIs with Django.",
      "Built interactive dashboards in Next.js with Recharts & AntD, enabling stakeholders to visualise key risk metrics in real time.",
      "Integrated CI/CD pipelines using GitLab, Docker, and AWS Lambda for zero-downtime deployments.",
      "Collaborated with data scientists to embed ML risk models, boosting prediction accuracy.",
    ],
  },
  {
    company: "Moneyflo",
    duration: "Mar 2023 – Jul 2024",
    logo: moneyflo,
    website: "https://www.moneyflo.ai/",
    role: "Full Stack Developer",
    description:
      "Built financial intelligence platform for e-commerce profitability. Developed UI/UX enhancements, REST API endpoints, and AI Assistant using OpenAI API.",
    technologies: ["Next.js", "Sass", "AntD", "FastAPI", "NestJS", "TypeORM", "Postgres", "AWS", "OpenAI"],
    highlights: [
      "Enhanced platform UI/UX across multiple iterations.",
      "Built REST API endpoints and backend functionalities.",
      "Developed AI Assistant with OpenAI integration.",
      "Provided data insights for client decision-making.",
    ],
  },
  {
    company: "Ridecell",
    duration: "May 2022 – Aug 2022",
    logo: ridecell,
    website: "https://ridecell.com/",
    role: "QA Automation Engineer",
    description:
      "Worked on Quality Assurance, Automation and Testing. Automated test cases using Selenium and Appium, integrated with CI/CD pipeline.",
    technologies: ["Python", "Pytest", "REST APIs", "Selenium", "Appium", "Testrail"],
    highlights: [
      "Automated test cases on Testrail platform.",
      "Built mobile app testing automation.",
      "Integrated automated tests into CI/CD pipeline.",
      "Improved testing efficiency and coverage.",
    ],
  },
  {
    company: "KaizIQ",
    duration: "Apr 2022 – Jul 2022",
    logo: kaiziq,
    website: "https://kaiziq.io/",
    role: "Full Stack Software Engineering Intern",
    description:
      "Worked on building an end-to-end SDLC tool. Developed both frontend and backend components, wrote unit tests for microservices.",
    technologies: ["React", "JavaScript", "CSS", "Java", "Spring Boot"],
    highlights: [
      "Developed full-stack features for SDLC tool.",
      "Worked closely with founders on product vision.",
      "Built frontend and server-side components.",
      "Wrote comprehensive unit tests.",
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
      { threshold: 0.15 },
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className="mb-16 reveal text-center">
          <SectionLabel number="02" label="Experience" align="center" className="mb-4" />
          <h2 className="text-section-title">Experience</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline rail */}
          <div className="hidden sm:block absolute left-[27px] top-2 bottom-2 w-px bg-[hsl(var(--color-border-medium))]" />

          <div className="space-y-10">
            {workExperience.map((work, index) => (
              <article key={index} className="reveal relative sm:pl-20 group">
                {/* Timeline dot */}
                <div className="hidden sm:block absolute left-[23px] top-6 w-2 h-2 rounded-full bg-accent ring-4 ring-[hsl(var(--color-bg-base))]" />

                <div className="project-card card-hover">
                  <header className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-[hsl(var(--color-text-primary))] flex items-center justify-center shrink-0">
                      <Image
                        src={work.logo}
                        alt={`${work.company} logo`}
                        width={56}
                        height={56}
                        className="w-full h-full object-contain p-1.5"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-display text-[hsl(var(--color-text-primary))]">
                          {work.company}
                        </h3>
                        <button
                          onClick={() => window.open(work.website, "_blank")}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-[hsl(var(--color-text-secondary))] hover:text-accent"
                          aria-label={`Visit ${work.company} website`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-sm text-[hsl(var(--color-text-secondary))]">{work.role}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[hsl(var(--color-text-tertiary))]">
                      <Calendar className="w-3.5 h-3.5" />
                      {work.duration}
                    </div>
                  </header>

                  <p className="text-sm text-[hsl(var(--color-text-secondary))] leading-relaxed mb-4">
                    {work.description}
                  </p>

                  {work.highlights.length > 0 && (
                    <ul className="space-y-1.5 mb-5 text-sm text-[hsl(var(--color-text-secondary))] list-disc pl-5 marker:text-accent">
                      {work.highlights.map((h, i) => (
                        <li key={i} className="leading-relaxed">
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="chip-group chip-group--tight">
                    {work.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
