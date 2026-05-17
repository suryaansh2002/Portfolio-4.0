"use client"

import { useEffect, useRef, useState } from "react"
import { Download, ExternalLink, FileText, BookOpen, Microscope } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"

type Paper = {
  title: string
  authors: string
  conference?: string
  conferenceLink?: string
  publication: string
  publicationLink: string
  pdf?: string
  venueLabel: string
  venueTone: "ieee" | "iop" | "springer"
  year: string
  description: string
}

const papers: Paper[] = [
  {
    title: "Exploring IoT-Blockchain Integration in Agriculture: An Experimental Study",
    authors: "Namrata Mariam Chacko, Dr. V. G Narendra, Dr. Mamatha Balachandra, Suryaansh Rathinam",
    publication: "IEEE Access",
    publicationLink: "https://ieeexplore.ieee.org/document/10323331",
    pdf: "/Exploring_IoT-Blockchain_Integration_in_Agriculture_An_Experimental_Study.pdf",
    venueLabel: "IEEE Access",
    venueTone: "ieee",
    year: "2023",
    description:
      "Experimental study on combining IoT sensors and blockchain ledgers to improve traceability, trust, and data integrity in agricultural supply chains.",
  },
  {
    title:
      "Survey of the use of AI models and techniques in the analysis and prediction of neuro-degenerative diseases",
    authors: "Dr. Srikanth Prabhu, Suryaansh Rathinam, Chirag Rao, Anurag Choudhary",
    conference: "AICECS 2023",
    conferenceLink: "http://aicecs.in/",
    publication: "IOP Journal of Physics (Vol. 2751)",
    publicationLink: "https://iopscience.iop.org/article/10.1088/1742-6596/2571/1/012022",
    pdf: "/Review_Paper.pdf",
    venueLabel: "IOP · Journal Paper",
    venueTone: "iop",
    year: "2023",
    description:
      "Comprehensive survey of AI models and techniques applied to the analysis and prediction of neurodegenerative diseases.",
  },
  {
    title: "Analysis and Comparison of Different Frontend Frameworks",
    authors: "Suryaansh Rathinam",
    conference: "ATIS 2022",
    publication: "Springer CCIS (Vol. 1804)",
    publicationLink: "https://link.springer.com/chapter/10.1007/978-981-99-2264-2_19",
    pdf: "/SuryaanshRathinam_ComparisonOfFrontendFrameworks.pdf",
    venueLabel: "Springer · Conference",
    venueTone: "springer",
    year: "2022",
    description:
      "Analysis and performance comparison of popular frontend frameworks — React, Vue.js, and Angular.",
  },
]

const internship = {
  title: "Image Segmentation and Analysis of Ultrasound of Mouse Kidney using CNN",
  institution: "Medical Imaging and Theragnostic Lab, IIT Kharagpur",
  duration: "Jun – Aug 2023",
  certificate: "/KGP_Certificate.pdf",
  description:
    "Conducted research on medical image analysis using convolutional neural networks for ultrasound image segmentation of mouse kidney samples.",
}

function handleDownload(url: string) {
  const link = document.createElement("a")
  link.href = url
  link.download = url.split("/").pop() || "document.pdf"
  link.click()
}

export function ResearchSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activePaper, setActivePaper] = useState<number | null>(null)

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
    <section id="research" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className="mb-16 reveal text-center">
          <SectionLabel number="05" label="Research" align="center" className="mb-4" />
          <h2 className="text-section-title">Research</h2>
          <p className="text-base text-[hsl(var(--color-text-secondary))] max-w-2xl mx-auto mt-3">
            Peer-reviewed publications and research projects.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-10">
          {/* Publications */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display text-[hsl(var(--color-text-primary))]">
                Publications
              </h3>
              <span className="ml-auto font-mono text-xs text-[hsl(var(--color-text-tertiary))]">
                {String(papers.length).padStart(2, "0")}
              </span>
            </div>

            <ul className="divide-y divide-[hsl(var(--color-border-subtle))] border-y border-[hsl(var(--color-border-subtle))]">
              {papers.map((paper, index) => (
                <PaperRow
                  key={index}
                  paper={paper}
                  isOpen={activePaper === index}
                  onToggle={() => setActivePaper(activePaper === index ? null : index)}
                />
              ))}
            </ul>
          </div>

          {/* Research experience */}
          <div className="reveal pt-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                <Microscope className="w-4 h-4" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display text-[hsl(var(--color-text-primary))]">
                Research Experience
              </h3>
            </div>
            <article className="project-card card-hover">
              <h4 className="text-lg font-display text-[hsl(var(--color-text-primary))] leading-tight mb-2">
                {internship.title}
              </h4>
              <div className="text-xs text-[hsl(var(--color-text-secondary))] mb-3 space-y-1">
                <p>
                  <span className="text-[hsl(var(--color-text-tertiary))]">Institution:</span>{" "}
                  {internship.institution}
                </p>
                <p>
                  <span className="text-[hsl(var(--color-text-tertiary))]">Duration:</span>{" "}
                  {internship.duration}
                </p>
              </div>
              <p className="text-sm text-[hsl(var(--color-text-secondary))] leading-relaxed mb-4">
                {internship.description}
              </p>
              <button
                onClick={() => handleDownload(internship.certificate)}
                className="btn-secondary inline-flex items-center !py-2 !px-4 text-xs"
              >
                <Download className="w-3.5 h-3.5 mr-1.5" />
                Certificate
              </button>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

interface PaperRowProps {
  paper: Paper
  isOpen: boolean
  onToggle: () => void
}

function PaperRow({ paper, isOpen, onToggle }: PaperRowProps) {
  return (
    <li className="group">
      <button
        onClick={onToggle}
        className="w-full text-left py-5 px-2 sm:px-4 transition-colors hover:bg-[hsl(var(--color-bg-elevated)/0.5)]"
        aria-expanded={isOpen}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-mono uppercase tracking-[0.18em] text-[10px] text-accent">
                {paper.venueLabel}
              </span>
              <span className="font-mono text-[10px] text-[hsl(var(--color-text-tertiary))]">
                · {paper.year}
              </span>
            </div>
            <h4 className="font-display text-base sm:text-lg text-[hsl(var(--color-text-primary))] leading-snug group-hover:text-accent transition-colors">
              {paper.title}
            </h4>
            <p className="text-xs text-[hsl(var(--color-text-tertiary))] mt-1.5 line-clamp-1 sm:line-clamp-none">
              {paper.authors}
            </p>
          </div>
          <span
            className={`shrink-0 mt-1 font-mono text-xs text-[hsl(var(--color-text-tertiary))] transition-transform duration-200 ${
              isOpen ? "rotate-45 text-accent" : ""
            }`}
            aria-hidden="true"
          >
            +
          </span>
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-2 sm:px-4 space-y-4">
            <p className="text-sm text-[hsl(var(--color-text-secondary))] leading-relaxed max-w-3xl">
              {paper.description}
            </p>
            {paper.conference && (
              <p className="text-xs text-[hsl(var(--color-text-secondary))]">
                <span className="text-[hsl(var(--color-text-tertiary))]">Conference:</span>{" "}
                {paper.conferenceLink ? (
                  <a
                    href={paper.conferenceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    {paper.conference}
                  </a>
                ) : (
                  paper.conference
                )}
              </p>
            )}
            <div className="flex flex-wrap gap-2">
              <a
                href={paper.publicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center !py-2 !px-4 text-xs"
              >
                <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                View on {paper.publication.split(" ")[0]}
              </a>
              {paper.pdf && (
                <button
                  onClick={() => handleDownload(paper.pdf!)}
                  className="btn-secondary inline-flex items-center !py-2 !px-4 text-xs"
                >
                  <Download className="w-3.5 h-3.5 mr-1.5" />
                  PDF
                </button>
              )}
              {paper.conferenceLink && (
                <a
                  href={paper.conferenceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center !py-2 !px-4 text-xs"
                >
                  <FileText className="w-3.5 h-3.5 mr-1.5" />
                  Conference
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
