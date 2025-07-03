"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, FileText, Award } from "lucide-react"

const researchWork = [
  {
    title: "Image Segmentation and Analysis of Ultrasound of Mouse Kidney using CNN",
    institution: "Medical Imaging and Theragnostic Lab, IIT Kharagpur",
    duration: "Jun - Aug 2023",
    type: "Research Internship",
    certificate: "/KGP_Certificate.pdf",
    description:
      "Conducted research on medical image analysis using convolutional neural networks for ultrasound image segmentation of mouse kidney samples.",
  },
  {
    title: "Analysis and Comparison of Different Frontend Frameworks",
    authors: "Suryaansh Rathinam",
    conference: "ATIS 2022 Conference",
    conferenceLink: "https://atis2022.com/",
    publication: "Springer's CCIS Series (Volume 1804)",
    publicationLink: "https://link.springer.com/chapter/10.1007/978-981-99-2264-2_19",
    pdf: "/SuryaanshRathinam_ComparisonOfFrontendFrameworks.pdf",
    type: "Conference Paper",
    description:
      "Comprehensive analysis and performance comparison of popular frontend frameworks including React, Vue.js, and Angular.",
  },
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
    title: "Exploring IoT-Blockchain Integration in Agriculture: An Experimental Study",
    authors: "Namrata Mariam Chacko, Dr. V. G Narendra, Dr. Mamatha Balachandra, Suryaansh Rathinam",
    publication: "IEEE Access",
    publicationLink: "https://ieeexplore.ieee.org/document/10323331",
    pdf: "/Exploring_IoT-Blockchain_Integration_in_Agriculture_An_Experimental_Study.pdf",
    type: "IEEE Paper",
    description:
      "Experimental study on the integration of IoT and blockchain technologies in agricultural applications.",
  },
]

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
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleDownload = (url: string) => {
    const link = document.createElement("a")
    link.href = url
    link.download = url.split("/").pop() || "document.pdf"
    link.click()
  }

  return (
    <section id="research" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <h2 className="text-section-title gradient-text">Research Work</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Academic publications and research contributions in AI, computer science, and interdisciplinary fields
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {researchWork.map((research, index) => (
            <Card key={index} className="project-card reveal group">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary" className="mb-2">
                    <Award className="w-3 h-3 mr-1" />
                    {research.type}
                  </Badge>
                </div>

                <CardTitle className="text-lg leading-tight group-hover:gradient-text transition-all duration-300">
                  {research.title}
                </CardTitle>

                <div className="space-y-2 text-sm text-muted-foreground">
                  {research.authors && (
                    <p>
                      <strong>Authors:</strong> {research.authors}
                    </p>
                  )}
                  {research.institution && (
                    <p>
                      <strong>Institution:</strong> {research.institution}
                    </p>
                  )}
                  {research.conference && (
                    <p>
                      <strong>Conference:</strong> {research.conference}
                    </p>
                  )}
                  {research.publication && (
                    <p>
                      <strong>Publication:</strong> {research.publication}
                    </p>
                  )}
                  {research.duration && (
                    <p>
                      <strong>Duration:</strong> {research.duration}
                    </p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{research.description}</p>

                <div className="flex flex-wrap gap-2">
                  {research.pdf && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDownload(research.pdf!)}
                      className="flex-1 min-w-0"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                  )}
                  {research.certificate && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDownload(research.certificate!)}
                      className="flex-1 min-w-0"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Certificate
                    </Button>
                  )}
                  {research.publicationLink && (
                    <Button
                      size="sm"
                      onClick={() => window.open(research.publicationLink, "_blank")}
                      className="flex-1 min-w-0"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  )}
                  {research.conferenceLink && (
                    <Button size="sm" variant="ghost" onClick={() => window.open(research.conferenceLink, "_blank")}>
                      <FileText className="w-4 h-4 mr-2" />
                      Conference
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Stats */}
        <div className="mt-16 text-center reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">4</div>
              <div className="text-muted-foreground">Publications</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">3</div>
              <div className="text-muted-foreground">Conferences</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">2</div>
              <div className="text-muted-foreground">Journals</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">1</div>
              <div className="text-muted-foreground">Research Internship</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
