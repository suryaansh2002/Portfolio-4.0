import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { EducationSection } from "@/components/sections/education-section"
import { WorkExperienceSection } from "@/components/sections/work-experience-section"
import { ResearchSection } from "@/components/sections/research-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ScrollProgress />
      <Header />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <WorkExperienceSection />
        <ResearchSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
