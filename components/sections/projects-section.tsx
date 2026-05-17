"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Calendar, ChevronDown, ChevronUp } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"

const projects = [
  {
    title: "Gmail RAG System",
    date: "April 2025",
    description:
      "A full-stack AI application that enables users to query their Gmail content using natural language. Implements secure Gmail OAuth login, fetches emails and attachments, converts them into embeddings using sentence transformers, and stores them in Pinecone. Users can ask questions and receive contextually relevant answers powered by Ollama LLM. The system is architected with a FastAPI backend, Next.js frontend, and supports attachment processing (PDF, CSV, text).",
    github: "https://github.com/suryaansh2002/gmail-rag",
    tags: ["RAG", "Next.js", "FastAPI", "Python", "Pinecone", "Ollama", "OAuth", "Vector DB"],
  },
  {
    title: "Document and Video Q&A System",
    date: "February 2025",
    description:
      "A web app for uploading PDFs and YouTube videos, processing them into chunks, and interacting via chat. Uses MongoDB for document storage, Pinecone for vector retrieval, and OpenAI for responses. Features include document/video processing, vector storage, and a chat interface for querying.",
    github: "https://github.com/suryaansh2002/multi-doc-chat-rag",
    website: "https://multi-doc-chat-rag-client.vercel.app/",
    tags: ["RAG", "React", "MongoDB", "Pinecone", "OpenAI", "Vector DB"],
  },
  {
    title: "Real Time Meeting Summarizer",
    date: "November 2024",
    description:
      "Developed a Chrome extension with FastAPI backend that captures and processes real-time audio from browser tabs. Implemented an ML pipeline using OpenAI Whisper for transcription and Mistral-7B model for intelligent summarization, featuring speaker diarization and knowledge graph generation for contextual understanding.",
    github: "https://github.com/suryaansh2002/real_time_meeting_sumarizer",
    tags: ["ML Pipeline", "Chrome Extension", "FastAPI", "Whisper", "Mistral-7B"],
  },
  {
    title: "Distributed Maze Game",
    date: "October 2024",
    description:
      "Implemented multi-threaded server logic with dynamic server swapping for continuous operation, handling player crashes and asynchronous movements. Used TCP/Java RMI for reliable messaging and constructed a tracker-based player registry to enhance peer discovery and reduce system load, demonstrating fault-tolerance in gaming.",
    github: "https://github.com/suryaansh2002/cs5223-A1",
    tags: ["Distributed Systems", "Java", "TCP", "RMI", "Multi-threading"],
  },
  {
    title: "IRCTC Tatkal Booking",
    date: "February 2025",
    description:
      "A desktop application built using Electron JS and Python to allow users to automate scheduling the booking process of Tatkal tickets from the Indian Railways IRCTC Website. This is done using Selenium for browser automation and apscheduler to schedule Cron jobs.",
    github: "https://github.com/suryaansh2002/IRCTC_Tatkal",
    tags: ["Automation", "Electron", "Python", "Selenium"],
  },
  {
    title: "SLCM Automation",
    date: "September 2023",
    description:
      "Created a Selenium-based web scraping and automation tool to streamline data collection and form filling from the Student Lifecycle Management (SLCM) portal. This tool reduces manual effort and enhances data accuracy for academic processes.",
    github: "https://github.com/suryaansh2002/form_filling_automation",
    website: "https://mitcse.manipal.edu/mentor",
    certificate: "https://drive.google.com/file/d/1CNSnxxN68ZbROibg1_3gB_JncxbmDmhl/view?usp=sharing",
    tags: ["Automation", "Selenium", "Python", "Web Scraping"],
  },
]

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
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

    const observeElements = () => {
      const elements = sectionRef.current?.querySelectorAll(".reveal")
      elements?.forEach((el) => observer.observe(el))
    }

    observeElements()
    const timeoutId = setTimeout(observeElements, 100)

    return () => {
      observer.disconnect()
      clearTimeout(timeoutId)
    }
  }, [showAll])

  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className="mb-16 reveal text-center">
          <SectionLabel number="03" label="Projects" align="center" className="mb-4" />
          <h2 className="text-section-title">Projects</h2>
          <p className="text-base text-[hsl(var(--color-text-secondary))] max-w-2xl mx-auto mt-3">
            Selected work — production systems and side experiments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className="project-card card-hover reveal group flex flex-col"
            >
              <div className="flex items-center gap-2 text-xs text-[hsl(var(--color-text-tertiary))] font-mono mb-3">
                <Calendar className="w-3.5 h-3.5" />
                {project.date}
              </div>
              <h3 className="text-xl font-display text-[hsl(var(--color-text-primary))] mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[hsl(var(--color-text-secondary))] leading-relaxed mb-5 line-clamp-3">
                {project.description}
              </p>

              <div className="chip-group chip-group--tight mb-5 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tech-chip">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => window.open(project.github, "_blank")}
                  className="flex-1 border border-[hsl(var(--color-border-subtle))] hover:border-accent hover:text-accent hover:bg-transparent"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                {project.website && (
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => window.open(project.website, "_blank")}
                    className="flex-1 border border-[hsl(var(--color-border-subtle))] hover:border-accent hover:text-accent hover:bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                )}
                {project.certificate && (
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => window.open(project.certificate, "_blank")}
                    className="border border-[hsl(var(--color-border-subtle))] hover:border-accent hover:text-accent hover:bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 font-mono uppercase tracking-[0.12em] text-xs text-[hsl(var(--color-text-secondary))] hover:text-accent transition-colors"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show all projects ({projects.length - 3} more)
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
