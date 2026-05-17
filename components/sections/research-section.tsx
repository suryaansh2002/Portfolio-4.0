"use client"

import { useEffect, useRef } from "react"
import { Download, ExternalLink, FileText } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"

type Entry = {
  kind: "paper" | "internship"
  venueLabel: string
  year: string
  title: string
  meta: string
  description: string
  primaryHref?: string
  primaryLabel?: string
  pdf?: string
  certificate?: string
  conferenceLink?: string
}

const spotlight: Entry = {
  kind: "paper",
  venueLabel: "IEEE Access",
  year: "2023",
  title: "Exploring IoT-Blockchain Integration in Agriculture: An Experimental Study",
  meta: "Namrata Mariam Chacko, Dr. V. G Narendra, Dr. Mamatha Balachandra, Suryaansh Rathinam",
  description:
    "An experimental study on combining IoT sensors and blockchain ledgers to improve traceability, trust, and data integrity in agricultural supply chains — examining the engineering trade-offs of running a permissioned chain alongside field-deployed sensor networks.",
  primaryHref: "https://ieeexplore.ieee.org/document/10323331",
  primaryLabel: "View on IEEE",
  pdf: "/Exploring_IoT-Blockchain_Integration_in_Agriculture_An_Experimental_Study.pdf",
}

const rest: Entry[] = [
  {
    kind: "paper",
    venueLabel: "IOP · Journal",
    year: "2023",
    title:
      "Survey of AI models and techniques in the analysis and prediction of neuro-degenerative diseases",
    meta: "Dr. Srikanth Prabhu, Suryaansh Rathinam, Chirag Rao, Anurag Choudhary",
    description:
      "Comprehensive survey of AI models and techniques applied to the analysis and prediction of neurodegenerative diseases.",
    primaryHref: "https://iopscience.iop.org/article/10.1088/1742-6596/2571/1/012022",
    primaryLabel: "View",
    pdf: "/Review_Paper.pdf",
    conferenceLink: "http://aicecs.in/",
  },
  {
    kind: "paper",
    venueLabel: "Springer · Conference",
    year: "2022",
    title: "Analysis and Comparison of Different Frontend Frameworks",
    meta: "Suryaansh Rathinam · ATIS 2022",
    description:
      "Analysis and performance comparison of popular frontend frameworks — React, Vue.js, and Angular.",
    primaryHref: "https://link.springer.com/chapter/10.1007/978-981-99-2264-2_19",
    primaryLabel: "View",
    pdf: "/SuryaanshRathinam_ComparisonOfFrontendFrameworks.pdf",
  },
  {
    kind: "internship",
    venueLabel: "Research Internship",
    year: "2023",
    title: "Image Segmentation of Mouse Kidney Ultrasound using CNN",
    meta: "Medical Imaging & Theragnostic Lab, IIT Kharagpur · Jun – Aug 2023",
    description:
      "Conducted research on medical image analysis using convolutional neural networks for ultrasound image segmentation of mouse kidney samples.",
    certificate: "/KGP_Certificate.pdf",
  },
]

function handleDownload(url: string) {
  const link = document.createElement("a")
  link.href = url
  link.download = url.split("/").pop() || "document.pdf"
  link.click()
}

export function ResearchSection() {
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
    <section id="research" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className="mb-16 reveal text-center">
          <SectionLabel number="05" label="Research" align="center" className="mb-4" />
          <h2 className="text-section-title">Research</h2>
          <p className="text-base text-[hsl(var(--color-text-secondary))] max-w-2xl mx-auto mt-3">
            Peer-reviewed publications and research projects.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          <SpotlightCard entry={spotlight} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((entry, i) => (
              <CompactCard key={i} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function VenueTag({ venueLabel, year }: { venueLabel: string; year: string }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="font-mono uppercase tracking-[0.18em] text-[10px] text-accent">
        {venueLabel}
      </span>
      <span className="font-mono text-[10px] text-[hsl(var(--color-text-tertiary))]">·</span>
      <span className="font-mono text-[10px] text-[hsl(var(--color-text-tertiary))]">{year}</span>
    </div>
  )
}

function SpotlightCard({ entry }: { entry: Entry }) {
  return (
    <article className="project-card card-hover reveal relative overflow-hidden">
      {/* Soft top-right accent halo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-20 w-72 h-72 rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, hsl(var(--color-accent) / 0.18) 0%, transparent 65%)",
        }}
      />

      <div className="relative grid md:grid-cols-[1fr,auto] gap-6 md:gap-10 items-start">
        <div className="min-w-0">
          <VenueTag venueLabel={entry.venueLabel} year={entry.year} />

          <h3 className="font-display text-2xl sm:text-3xl text-[hsl(var(--color-text-primary))] leading-tight mt-3 mb-3 max-w-3xl">
            {entry.title}
          </h3>

          <p className="text-xs text-[hsl(var(--color-text-tertiary))] mb-4">{entry.meta}</p>

          <p className="text-sm sm:text-base text-[hsl(var(--color-text-secondary))] leading-relaxed mb-6 max-w-3xl">
            {entry.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {entry.primaryHref && (
              <a
                href={entry.primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center !py-2.5 !px-5 text-xs"
              >
                <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                {entry.primaryLabel}
              </a>
            )}
            {entry.pdf && (
              <button
                onClick={() => handleDownload(entry.pdf!)}
                className="btn-secondary inline-flex items-center !py-2.5 !px-5 text-xs"
              >
                <Download className="w-3.5 h-3.5 mr-1.5" />
                PDF
              </button>
            )}
          </div>
        </div>

        {/* Large display year */}
        <div className="hidden md:block self-stretch border-l border-[hsl(var(--color-border-subtle))] pl-8">
          <div className="font-display text-6xl lg:text-7xl text-[hsl(var(--color-text-tertiary))] leading-none">
            {entry.year}
          </div>
          <div className="font-mono uppercase tracking-[0.2em] text-[10px] text-[hsl(var(--color-text-tertiary))] mt-2">
            Published
          </div>
        </div>
      </div>
    </article>
  )
}

function CompactCard({ entry }: { entry: Entry }) {
  return (
    <article className="project-card card-hover reveal flex flex-col">
      <VenueTag venueLabel={entry.venueLabel} year={entry.year} />

      <h3 className="font-display text-base sm:text-lg text-[hsl(var(--color-text-primary))] leading-snug mt-3 mb-2.5">
        {entry.title}
      </h3>

      <p className="text-[11px] text-[hsl(var(--color-text-tertiary))] mb-3 line-clamp-2">
        {entry.meta}
      </p>

      <p className="text-xs sm:text-sm text-[hsl(var(--color-text-secondary))] leading-relaxed mb-5 flex-1">
        {entry.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {entry.primaryHref && (
          <a
            href={entry.primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center !py-1.5 !px-3 text-[11px]"
          >
            <ExternalLink className="w-3 h-3 mr-1" />
            {entry.primaryLabel}
          </a>
        )}
        {entry.pdf && (
          <button
            onClick={() => handleDownload(entry.pdf!)}
            className="btn-secondary inline-flex items-center !py-1.5 !px-3 text-[11px]"
          >
            <Download className="w-3 h-3 mr-1" />
            PDF
          </button>
        )}
        {entry.certificate && (
          <button
            onClick={() => handleDownload(entry.certificate!)}
            className="btn-secondary inline-flex items-center !py-1.5 !px-3 text-[11px]"
          >
            <Download className="w-3 h-3 mr-1" />
            Certificate
          </button>
        )}
        {entry.conferenceLink && (
          <a
            href={entry.conferenceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center !py-1.5 !px-3 text-[11px]"
          >
            <FileText className="w-3 h-3 mr-1" />
            Conference
          </a>
        )}
      </div>
    </article>
  )
}
