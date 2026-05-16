import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Now — Suryaansh Rathinam",
  description:
    "What Suryaansh Rathinam is working on, learning, and thinking about right now.",
}

const accentLink =
  "text-accent hover:text-accent-hover underline-offset-4 hover:underline transition-colors"

export default function NowPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[640px] px-6 py-20 sm:py-28">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono uppercase tracking-[0.12em] text-xs text-muted-foreground hover:text-accent transition-colors mb-12"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to home
        </Link>

        <h1 className="font-display text-4xl sm:text-5xl text-foreground leading-tight tracking-tight mb-3">
          What I&rsquo;m doing now
        </h1>
        <p className="font-mono uppercase tracking-[0.12em] text-xs text-muted-foreground mb-12">
          Last updated: May 2026
        </p>

        <div className="space-y-12 leading-[1.7] text-foreground/90">
          <section className="space-y-3">
            <h2 className="font-display text-2xl text-foreground">Location</h2>
            <p>Singapore, just back from a trip to India.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-foreground">Work</h2>
            <p>
              Started at{" "}
              <a
                href="https://www.stengg.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={accentLink}
              >
                ST Engineering
              </a>
              &rsquo;s R&amp;D division as a Senior AI Engineer earlier this month. Still in the
              settling-in phase &mdash; meeting people, mapping the landscape, figuring out where I
              can be most useful. Will write more here once the work crystallizes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-foreground">What I&rsquo;m thinking about</h2>
            <ul className="space-y-3 list-disc pl-6 marker:text-accent">
              <li>
                <span className="font-medium text-foreground">The agent stack.</span> Which
                abstractions hold up in production and which are scaffolding pretending to be
                primitives. MCP feels like it&rsquo;s becoming load-bearing faster than people
                expected.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Fine-tuning as a first-class skill again.
                </span>{" "}
                RAG-everything was a phase. For domain-specific work, fine-tuning a 7B&ndash;13B
                model often beats prompting a frontier one &mdash; and the tooling has finally
                caught up.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  The research-to-product gap in AI
                </span>{" "}
                is narrower than it&rsquo;s ever been, but the engineering around inference,
                evaluation, and reliability is still where most of the time actually goes.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-foreground">What I&rsquo;m learning</h2>
            <ul className="space-y-3 list-disc pl-6 marker:text-accent">
              <li>
                The internals of vLLM and Triton &mdash; wanted to understand serving infrastructure
                beyond &ldquo;you put a model behind an API.&rdquo;
              </li>
              <li>
                Reading more research papers than I did during the Masters, which is funny &mdash;
                the cadence is just different when there&rsquo;s no exam at the end.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-foreground">Side things</h2>
            <ul className="space-y-3 list-disc pl-6 marker:text-accent">
              <li>
                Slowly writing up some of the projects from my Masters &mdash; the Real-Time Meeting
                Summarizer in particular deserves a proper post rather than just a GitHub README.
              </li>
              <li>
                Starting to post on LinkedIn more deliberately. Trying to find a voice for short
                technical notes without crossing into LinkedIn-influencer territory.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-foreground">Not doing</h2>
            <ul className="space-y-3 list-disc pl-6 marker:text-accent">
              <li>
                Chasing every new framework. The half-life of the AI tooling space is too short to
                be early on everything.
              </li>
              <li>
                Side-project-as-launch. The bar for &ldquo;thing worth shipping&rdquo; is higher
                than it used to be.
              </li>
            </ul>
          </section>
        </div>

        <hr className="border-border my-16" />

        <p className="text-sm text-muted-foreground italic">
          This page is inspired by{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className={accentLink}
          >
            Derek Sivers&rsquo; /now
          </a>{" "}
          &mdash; a single page that says what I&rsquo;m working on right now, updated whenever
          something meaningful shifts.
        </p>
      </div>
    </main>
  )
}
