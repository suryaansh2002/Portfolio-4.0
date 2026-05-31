import type React from "react"
import type { Metadata, Viewport } from "next"
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
const ogImage = `${siteUrl}/images/profile.jpg`
const titleFull = "Suryaansh Rathinam — Senior AI Engineer in Singapore"
const titleShort = "Suryaansh Rathinam — AI Engineer"
const description =
  "Senior AI Engineer at ST Engineering R&D in Singapore. Building production LLM, RAG, and agentic systems. Masters in AI from NUS."

export const viewport: Viewport = {
  themeColor: "#14100B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: titleFull,
    template: "%s — Suryaansh Rathinam",
  },
  description,
  keywords: [
    "Suryaansh Rathinam",
    "Senior AI Engineer",
    "AI Engineer Singapore",
    "ST Engineering",
    "Machine Learning Engineer",
    "LLM Engineer",
    "RAG",
    "AI Agents",
    "NUS Masters in AI",
    "Singapore",
  ],
  authors: [{ name: "Suryaansh Rathinam", url: siteUrl }],
  creator: "Suryaansh Rathinam",
  publisher: "Suryaansh Rathinam",
  category: "technology",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    title: titleShort,
    description,
    siteName: "Suryaansh Rathinam",
    firstName: "Suryaansh",
    lastName: "Rathinam",
    username: "suryaansh2002",
    images: [
      {
        url: ogImage,
        alt: "Suryaansh Rathinam — Senior AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: titleShort,
    description,
    images: [ogImage],
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Suryaansh Rathinam",
  givenName: "Suryaansh",
  familyName: "Rathinam",
  url: siteUrl,
  image: ogImage,
  jobTitle: "Senior AI Engineer",
  description:
    "Senior AI Engineer at ST Engineering R&D. Building production LLM, RAG, and agentic systems at the intersection of research and engineering.",
  worksFor: {
    "@type": "Organization",
    name: "ST Engineering",
    url: "https://www.stengg.com/",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Singapore",
    addressCountry: "SG",
  },
  nationality: {
    "@type": "Country",
    name: "India",
  },
  homeLocation: {
    "@type": "Place",
    name: "Singapore",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "National University of Singapore",
      url: "https://www.nus.edu.sg/",
      sameAs: "https://en.wikipedia.org/wiki/National_University_of_Singapore",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Manipal Institute of Technology",
      url: "https://manipal.edu/mit.html",
      sameAs: "https://en.wikipedia.org/wiki/Manipal_Institute_of_Technology",
    },
  ],
  sameAs: [
    "https://github.com/suryaansh2002",
    "https://www.linkedin.com/in/suryaanshrathinam/",
    "https://leetcode.com/suryaansh28",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "AI Agents",
    "Full-Stack Engineering",
    "Natural Language Processing",
    "Computer Vision",
  ],
  knowsLanguage: ["en", "hi"],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Suryaansh Rathinam",
  description,
  inLanguage: "en",
  author: { "@id": `${siteUrl}/#person` },
  publisher: { "@id": `${siteUrl}/#person` },
}

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/#profile`,
  url: siteUrl,
  name: titleShort,
  description,
  inLanguage: "en",
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#person` },
  mainEntity: { "@id": `${siteUrl}/#person` },
}

const publicationsJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline:
      "Exploring IoT-Blockchain Integration in Agriculture: An Experimental Study",
    author: { "@id": `${siteUrl}/#person` },
    datePublished: "2023",
    publisher: { "@type": "Organization", name: "IEEE Access" },
    url: "https://ieeexplore.ieee.org/document/10323331",
    isPartOf: { "@type": "Periodical", name: "IEEE Access" },
  },
  {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline:
      "Survey of the use of AI models and techniques in the analysis and prediction of neuro-degenerative diseases",
    author: { "@id": `${siteUrl}/#person` },
    datePublished: "2023",
    publisher: { "@type": "Organization", name: "IOP Publishing" },
    url: "https://iopscience.iop.org/article/10.1088/1742-6596/2571/1/012022",
    isPartOf: { "@type": "Periodical", name: "Journal of Physics: Conference Series" },
  },
  {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: "Analysis and Comparison of Different Frontend Frameworks",
    author: { "@id": `${siteUrl}/#person` },
    datePublished: "2022",
    publisher: { "@type": "Organization", name: "Springer" },
    url: "https://link.springer.com/chapter/10.1007/978-981-99-2264-2_19",
    isPartOf: { "@type": "Periodical", name: "Springer CCIS (Volume 1804)" },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
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
