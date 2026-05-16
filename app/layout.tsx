import type React from "react"
import type { Metadata } from "next"
import { Fraunces, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
})

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

const siteUrl = "https://www.suryaanshrathinam.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Suryaansh Rathinam — AI Engineer",
  description:
    "Suryaansh Rathinam — Senior AI Engineer at ST Engineering R&D. Building production AI systems at the intersection of research and engineering. Masters in AI from NUS.",
  keywords:
    "Suryaansh Rathinam, Senior AI Engineer, ST Engineering, AI Engineer, Machine Learning, LLMs, RAG, AI Agents, NUS, Singapore",
  authors: [{ name: "Suryaansh Rathinam" }],
  creator: "Suryaansh Rathinam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Suryaansh Rathinam — AI Engineer",
    description:
      "Senior AI Engineer at ST Engineering R&D. Building production AI systems at the intersection of research and engineering.",
    siteName: "Suryaansh Rathinam",
    images: [
      {
        url: `${siteUrl}/images/profile.jpg`,
        alt: "Suryaansh Rathinam",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Suryaansh Rathinam — AI Engineer",
    description:
      "Senior AI Engineer at ST Engineering R&D. Building production AI systems at the intersection of research and engineering.",
    images: [`${siteUrl}/images/profile.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Suryaansh Rathinam",
  url: siteUrl,
  image: `${siteUrl}/images/profile.jpg`,
  jobTitle: "Senior AI Engineer",
  worksFor: {
    "@type": "Organization",
    name: "ST Engineering",
    url: "https://www.stengg.com/",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "National University of Singapore",
      url: "https://www.nus.edu.sg/",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Manipal Institute of Technology",
      url: "https://manipal.edu/mit.html",
    },
  ],
  sameAs: [
    "https://github.com/suryaansh2002",
    "https://www.linkedin.com/in/suryaansh-rathinam/",
    "https://leetcode.com/suryaansh28",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "AI Agents",
    "Full-Stack Engineering",
  ],
}

const publicationsJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline:
      "Exploring IoT-Blockchain Integration in Agriculture: An Experimental Study",
    author: { "@type": "Person", name: "Suryaansh Rathinam" },
    datePublished: "2023",
    publisher: "IEEE Access",
    url: "https://ieeexplore.ieee.org/document/10323331",
  },
  {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline:
      "Survey of the use of AI models and techniques in the analysis and prediction of neuro-degenerative diseases",
    author: { "@type": "Person", name: "Suryaansh Rathinam" },
    datePublished: "2023",
    publisher: "IOP Journal of Physics",
    url: "https://iopscience.iop.org/article/10.1088/1742-6596/2571/1/012022",
  },
  {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: "Analysis and Comparison of Different Frontend Frameworks",
    author: { "@type": "Person", name: "Suryaansh Rathinam" },
    datePublished: "2022",
    publisher: "Springer CCIS Series (Volume 1804)",
    url: "https://link.springer.com/chapter/10.1007/978-981-99-2264-2_19",
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {publicationsJsonLd.map((article, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
          />
        ))}
      </head>
      <body
        className={`${fraunces.variable} ${plexSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
