"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Calendar, ChevronDown, ChevronUp } from "lucide-react"

const projects = [
  {
    title: "Document and Video Q&A System",
    date: "Feb 2025",
    description:
      "A web app for uploading PDFs and YouTube videos, processing them into chunks, and interacting via chat. Uses MongoDB for document storage, Pinecone for vector retrieval, and OpenAI for responses. Features include document/video processing, vector storage, and a chat interface for querying.",
    github: "https://github.com/suryaansh2002/multi-doc-chat-rag",
    website: "https://multi-doc-chat-rag-client.vercel.app/",
    tags: ["React", "MongoDB", "Pinecone", "OpenAI", "RAG", "Vector DB"],
  },
  {
    title: "Real Time Meeting Summarizer",
    date: "Nov 2024",
    description:
      "Developed a Chrome extension with FastAPI backend that captures and processes real-time audio from browser tabs. Implemented an ML pipeline using OpenAI Whisper for transcription and Mistral-7B model for intelligent summarization, featuring speaker diarization and knowledge graph generation for contextual understanding.",
    github: "https://github.com/suryaansh2002/real_time_meeting_sumarizer",
    tags: ["Chrome Extension", "FastAPI", "OpenAI Whisper", "Mistral-7B", "ML Pipeline"],
  },
  {
    title: "Distributed Maze Game",
    date: "Oct 2024",
    description:
      "Implemented multi-threaded server logic with dynamic server swapping for continuous operation, handling player crashes and asynchronous movements. Used TCP/Java RMI for reliable messaging and constructed a tracker-based player registry to enhance peer discovery and reduce system load, demonstrating fault-tolerance in gaming.",
    github: "https://github.com/suryaansh2002/cs5223-A1",
    tags: ["Java", "TCP", "RMI", "Multi-threading", "Distributed Systems"],
  },
  {
    title: "IRCTC Tatlak Booking",
    date: "Feb 2025",
    description:
      "A desktop application built using Electron JS and Python to allow users to automate scheduling the booking process of Tatkal tickets from the Indian Railways IRCTC Website. This is done using Selenium for browser automation and apscheduler to schedule Cron jobs.",
    github: "https://github.com/suryaansh2002/IRCTC_Tatkal",
    tags: ["Electron", "Python", "Selenium", "Automation", "Desktop App"],
  },
  {
    title: "SLCM Automation",
    date: "Sept 2023",
    description:
      "Created a Selenium-based web scraping and automation tool to streamline data collection and form filling from the Student Lifecycle Management (SLCM) portal. This tool reduces manual effort and enhances data accuracy for academic processes.",
    github: "https://github.com/suryaansh2002/form_filling_automation",
    website: "https://mitcse.manipal.edu/mentor",
    certificate: "https://drive.google.com/file/d/1CNSnxxN68ZbROibg1_3gB_JncxbmDmhl/view?usp=sharing",
    tags: ["Selenium", "Python", "Web Scraping", "Automation"],
  },
  {
    title: "Psychup",
    date: "Feb 2022",
    description:
      "A platform aimed at increasing awareness and providing content regarding psychology and mental health.",
    github: "https://github.com/suryaansh2002/psychup",
    website: "https://psychup.netlify.app/",
    tags: ["React", "Mental Health", "Content Platform", "Netlify"],
  },
  {
    title: "Decrypt",
    date: "Feb 2022",
    description:
      "Engineered the backend for an annual online cryptic hunt competition conducted by IEEE SBM, accommodating over 500 participants. The system ensures seamless user experience and robust performance during high-traffic events.",
    github: "https://github.com/suryaansh2002/d3crypt_backend",
    tags: ["Backend", "Competition Platform", "High Traffic", "IEEE"],
  },
  {
    title: "Discussion Rooms",
    date: "Jan 2022",
    description:
      "Developed a web application facilitating real-time discussions, built with an HTML-CSS frontend and a Python (Django) backend. The platform supports user authentication, topic creation, and interactive conversations.",
    github: "https://github.com/suryaansh2002/Discussion_Rooms_Django_App",
    tags: ["Django", "Python", "Real-time", "Web App"],
  },
  {
    title: "DataGrad",
    date: "Sept 2021",
    description:
      "Developed a platform to bridge the gap between top MOOCs like Coursera, Udacity, EdX, and students eager to learn new skills. The application recommends the top 5 relevant courses based on the user's skill level and interests, simplifying the learning process.",
    github: "https://github.com/suryaansh2002/datagrad",
    website: "https://datagrad.netlify.app/",
    tags: ["Course Recommendation", "MOOC", "Machine Learning", "Education"],
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
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <h2 className="text-section-title gradient-text">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, AI/ML, and system design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <Card key={index} className="project-card reveal group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                <CardTitle className="group-hover:gradient-text transition-all duration-300">{project.title}</CardTitle>
                <CardDescription className="line-clamp-3">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(project.github, "_blank")}
                    className="flex-1"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  {project.website && (
                    <Button size="sm" onClick={() => window.open(project.website, "_blank")} className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                  {project.certificate && (
                    <Button size="sm" variant="outline" onClick={() => window.open(project.certificate, "_blank")}>
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <Button onClick={() => setShowAll(!showAll)} variant="outline" className="btn-secondary">
            {showAll ? (
              <>
                <ChevronUp className="w-5 h-5 mr-2" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5 mr-2" />
                Show All Projects ({projects.length - 3} more)
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  )
}
