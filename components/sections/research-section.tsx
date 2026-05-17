"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, FileText } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"

type ResearchItem = {
  title: string
  authors?: string
  institution?: string
  conference?: string
  conferenceLink?: string
  publication?: string
  publicationLink?: string
  pdf?: string
  certificate?: string
  type: string
  description: string
  abstractExcerpt?: string
  duration?: string
}

const featured: ResearchItem = {
  title: "Exploring IoT-Blockchain Integration in Agriculture: An Experimental Study",
  authors: "Namrata Mariam Chacko, Dr. V. G Narendra, Dr. Mamatha Balachandra, Suryaansh Rathinam",
  publication: "IEEE Access",
  publicationLink: "https://ieeexplore.ieee.org/document/10323331",
  pdf: "/Exploring_IoT-Blockchain_Integration_in_Agriculture_An_Experimental_Study.pdf",
  type: "IEEE Access",
  description:
    "Experimental study on the integration of IoT and blockchain technologies in agricultural applications.",
  abstractExcerpt:
    "An experimental study examining how IoT sensors and blockchain ledgers can be combined to improve traceability, trust, and data integrity in agricultural supply chains.",
}

const others: ResearchItem[] = [
  {
    title:
      "Survey of the use of AI models and techniques in the analysis and prediction of neuro-degenerative diseases",
    authors: "Dr. Srikanth Prabhu, Suryaansh Rathinam, Chirag Rao, Anurag Choudhary",
    conference: "AICECS 2023",
    conferenceLink: "http://aicecs.in/",
    publication: "IOP: Journal of Physics (Volume 2751)",
    publicationLink: "https://iopscience.iop.org/article/10.1088/1742-6596/2571/1/012022",
    pdf: "/Review_Paper.pdf",
    type: "Journal Paper",
    description:
      "Comprehensive survey of artificial intelligence applications in neurodegenerative disease analysis and prediction.",
  },
  {
    title: "Analysis and Comparison of Different Frontend Frameworks",
    authors: "Suryaansh Rathinam",
    conference: "ATIS 2022 Conference",
    publication: "Springer's CCIS Series (Volume 1804)",
    publicationLink: "https://link.springer.com/chapter/10.1007/978-981-99-2264-2_19",
    pdf: "/SuryaanshRathinam_ComparisonOfFrontendFrameworks.pdf",
    type: "Conference Paper",
    description:
      "Comprehensive analysis and performance comparison of popular frontend frameworks including React, Vue.js, and Angular.",
  },
]

const researchInternship: ResearchItem = {
  title: "Image Segmentation and Analysis of Ultrasound of Mouse Kidney using CNN",
  institution: "Medical Imaging and Theragnostic Lab, IIT Kharagpur",
  duration: "Jun – Aug 2023",
  type: "Research Internship",
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

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Featured: IEEE Access paper */}
          <article className="project-card card-hover reveal relative">
            <span className="absolute top-4 right-4 font-mono uppercase tracking-[0.2em] text-[10px] text-accent border border-accent/40 rounded-full px-2 py-0.5">
              Featured
            </span>
            <div className="font-mono uppercase tracking-[0.2em] text-[11px] text-[hsl(var(--color-text-tertiary))] mb-3">
              {featured.type}
            </div>
            <h3 className="text-xl sm:text-2xl font-display text-[hsl(var(--color-text-primary))] leading-tight mb-4 max-w-3xl">
              {featured.title}
            </h3>
            <p className="text-sm text-[hsl(var(--color-text-secondary))] mb-2">
              <span className="text-[hsl(var(--color-text-tertiary))]">Authors:</span>{" "}
              {featured.authors}
            </p>
            <p className="text-sm text-[hsl(var(--color-text-secondary))] leading-relaxed mb-5 max-w-3xl">
              {featured.abstractExcerpt}
            </p>
            <div className="flex flex-wrap gap-2">
              {featured.publicationLink && (
                <Button
                  size="sm"
                  onClick={() => window.open(featured.publicationLink, "_blank")}
                  className="btn-primary inline-flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on IEEE
                </Button>
              )}
              {featured.pdf && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleDownload(featured.pdf!)}
                  className="btn-secondary inline-flex items-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  PDF
                </Button>
              )}
            </div>
          </article>

          {/* Other publications */}
          <div className="grid md:grid-cols-2 gap-6">
            {others.map((paper, index) => (
              <article key={index} className="project-card card-hover reveal flex flex-col">
                <div className="font-mono uppercase tracking-[0.2em] text-[11px] text-accent mb-3">
                  {paper.type}
                </div>
                <h3 className="text-lg font-display text-[hsl(var(--color-text-primary))] leading-tight mb-3">
                  {paper.title}
                </h3>
                <div className="space-y-1 text-xs text-[hsl(var(--color-text-secondary))] mb-3">
                  {paper.authors && (
                    <p>
                      <span className="text-[hsl(var(--color-text-tertiary))]">Authors:</span>{" "}
                      {paper.authors}
                    </p>
                  )}
                  {paper.conference && (
                    <p>
                      <span className="text-[hsl(var(--color-text-tertiary))]">Conference:</span>{" "}
                      {paper.conference}
                    </p>
                  )}
                  {paper.publication && (
                    <p>
                      <span className="text-[hsl(var(--color-text-tertiary))]">Publication:</span>{" "}
                      {paper.publication}
                    </p>
                  )}
                </div>
                <p className="text-sm text-[hsl(var(--color-text-secondary))] leading-relaxed mb-4 flex-1">
                  {paper.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {paper.pdf && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDownload(paper.pdf!)}
                      className="btn-secondary inline-flex items-center !py-2 !px-4 text-xs"
                    >
                      <Download className="w-3.5 h-3.5 mr-1.5" />
                      PDF
                    </Button>
                  )}
                  {paper.publicationLink && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => window.open(paper.publicationLink, "_blank")}
                      className="btn-secondary inline-flex items-center !py-2 !px-4 text-xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                      View
                    </Button>
                  )}
                  {paper.conferenceLink && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => window.open(paper.conferenceLink, "_blank")}
                      className="btn-secondary inline-flex items-center !py-2 !px-4 text-xs"
                    >
                      <FileText className="w-3.5 h-3.5 mr-1.5" />
                      Conference
                    </Button>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Research experience */}
          <div className="reveal pt-6">
            <h3 className="font-mono uppercase tracking-[0.2em] text-xs text-[hsl(var(--color-text-tertiary))] mb-5">
              Research Experience
            </h3>
            <article className="project-card card-hover">
              <h4 className="text-lg font-display text-[hsl(var(--color-text-primary))] leading-tight mb-2">
                {researchInternship.title}
              </h4>
              <div className="text-xs text-[hsl(var(--color-text-secondary))] mb-3 space-y-1">
                <p>
                  <span className="text-[hsl(var(--color-text-tertiary))]">Institution:</span>{" "}
                  {researchInternship.institution}
                </p>
                <p>
                  <span className="text-[hsl(var(--color-text-tertiary))]">Duration:</span>{" "}
                  {researchInternship.duration}
                </p>
              </div>
              <p className="text-sm text-[hsl(var(--color-text-secondary))] leading-relaxed mb-4">
                {researchInternship.description}
              </p>
              {researchInternship.certificate && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleDownload(researchInternship.certificate!)}
                  className="btn-secondary inline-flex items-center !py-2 !px-4 text-xs"
                >
                  <Download className="w-3.5 h-3.5 mr-1.5" />
                  Certificate
                </Button>
              )}
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
