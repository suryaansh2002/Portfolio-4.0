# Portfolio Update Specification

**Target site:** suryaanshrathinam.com
**Stack assumption:** Next.js (based on `_next/image` paths). Adjust file references if structure differs.
**Goal:** Update content to reflect new role at ST Engineering, fix outdated/incorrect data, overhaul visual system away from generic-AI-portfolio aesthetic, add `/now` page, improve SEO.

---

## Part 1 — Content Updates

### 1.1 Hero Section

**Current copy (third sentence of hero subtitle):**

> "...Currently building a Meeting Intelligence Platform at [ThoutAI](https://thout.ai/)."

**Replace with:**

> "...Currently a Senior AI Engineer at [ST Engineering](https://www.stengg.com/)."

**Full updated hero subtitle:**

> I turn research into real products — from fine-tuning ML models to deploying the full-stack systems that put them in users' hands. Currently a Senior AI Engineer at [ST Engineering](https://www.stengg.com/).

---

### 1.2 About Section — Third Paragraph

**Current text:**

> Right now at [ThoutAI](https://thout.ai/), I'm leading the backend and AI team — architecting the infrastructure behind a Meeting Intelligence Platform that turns conversations into action. The work sits at the intersection of AI agents, real-time systems, and product engineering, which is exactly where I like to be.

**Replace with:**

> Now I'm at [ST Engineering](https://www.stengg.com/)'s R&D division as a Senior AI Engineer. The work I'm drawn to lives at the intersection of AI research, real-time systems, and product engineering — which is where I've been heading the whole time.

First two paragraphs of the About section remain unchanged.

---

### 1.3 Stats Block (under About)

**Content stays exactly as-is:**

- 2+ Years Experience
- 3 Publications
- NUS Masters in AI

**UI/animation updates (see Part 3 for full spec):**
- Count-up animation on the numbers when the section enters viewport (use intersection observer)
- Numerals in display serif font, label in mono caps
- Subtle vertical dividers between the three stats instead of horizontal stacking on desktop
- Stagger entry: each stat fades + translates up with a 100ms delay between them

---

### 1.4 Experience Section

**Add as new top entry (most recent):**

```
Senior AI Engineer
ST Engineering — https://www.stengg.com/
May 2026 – Present · Singapore

Senior AI Engineer in the Research & Development division.

Tags: Python · AI/ML · R&D
```

*(Description intentionally minimal — replace with project specifics as work crystallizes.)*

**Update existing ThoutAI entry:**

- Change end date: `Aug 2025 – Present` → `Aug 2025 – Apr 2026`
- Change all verbs to past tense:
  - "Leading the backend and AI team..." → "Led the backend and AI team..."
  - "Architecting backend services..." → "Architected backend services..."
  - "Building AI Agents..." → "Built AI Agents..."
  - "Developing the frontend interface..." → "Developed the frontend interface..."

All other entries (DatalensAI, AIDF NUS, Moneyflo, Ridecell, KaizIQ, NUS TA) remain unchanged.

---

### 1.5 Education Section

**GPA updates (matching official LinkedIn values):**

- **NUS:** `GPA: 4.63 / 5` → `GPA: 4.45 / 5`
- **Manipal Institute of Technology:** `GPA: 9.47 / 10` → `GPA: 9.30 / 10`

All other education content unchanged.

---

### 1.6 Projects Section

**Fix duplicate GitHub URL bug.** Currently both "Gmail RAG System" and "Document & Video Q&A System" point to `https://github.com/suryaansh2002/multi-doc-chat-rag`.

**Update Gmail RAG System project links to:**

- GitHub: `https://github.com/suryaansh2002/gmail-rag`

**Document & Video Q&A System keeps:**
- GitHub: `https://github.com/suryaansh2002/multi-doc-chat-rag`
- Live demo: `https://multi-doc-chat-rag-client.vercel.app/`

---

### 1.7 Social Links — LeetCode URL Fix

**Current (incorrect):**
```
https://leetcode.com/suryaanshrathinam/
```

**Replace with (correct):**
```
https://leetcode.com/suryaansh28
```

Update everywhere the LeetCode link appears (likely hero section, contact section, and footer — search for `leetcode.com` across the codebase).

---

## Part 2 — New `/now` Page

Create a new route at `/now` with the following content. Inspired by [Derek Sivers' /now movement](https://nownownow.com/about).

**Page metadata:**
- Title: `Now — Suryaansh Rathinam`
- Meta description: `What Suryaansh Rathinam is working on, learning, and thinking about right now.`
- No new entry in main nav. Add a small text link in the footer: `/now`.

**Page content:**

```markdown
# What I'm doing now

*Last updated: May 2026*

---

## Location
Singapore, just back from a trip to India.

## Work
Started at ST Engineering's R&D division as a Senior AI Engineer earlier this month. Still in the settling-in phase — meeting people, mapping the landscape, figuring out where I can be most useful. Will write more here once the work crystallizes.

## What I'm thinking about

- **The agent stack.** Which abstractions hold up in production and which are scaffolding pretending to be primitives. MCP feels like it's becoming load-bearing faster than people expected.
- **Fine-tuning as a first-class skill again.** RAG-everything was a phase. For domain-specific work, fine-tuning a 7B–13B model often beats prompting a frontier one — and the tooling has finally caught up.
- **The research-to-product gap in AI** is narrower than it's ever been, but the engineering around inference, evaluation, and reliability is still where most of the time actually goes.

## What I'm learning

- The internals of vLLM and Triton — wanted to understand serving infrastructure beyond "you put a model behind an API."
- Reading more research papers than I did during the Masters, which is funny — the cadence is just different when there's no exam at the end.

## Side things

- Slowly writing up some of the projects from my Masters — the Real-Time Meeting Summarizer in particular deserves a proper post rather than just a GitHub README.
- Starting to post on LinkedIn more deliberately. Trying to find a voice for short technical notes without crossing into LinkedIn-influencer territory.

## Not doing

- Chasing every new framework. The half-life of the AI tooling space is too short to be early on everything.
- Side-project-as-launch. The bar for "thing worth shipping" is higher than it used to be.

---

*This page is inspired by [Derek Sivers' /now](https://nownownow.com/about) — a single page that says what I'm working on right now, updated whenever something meaningful shifts.*
```

**Styling notes for /now page:**
- Use the same theme tokens as the rest of the site
- Display font for the `#` heading
- Body font for paragraphs, mono small-caps for the "Last updated" line
- Generous line-height (1.7) and max-width ~640px for readability
- Use the accent color for the inline links

---

## Part 3 — Visual System Overhaul

### 3.1 Aesthetic Direction

**Current state:** Brittany Chiang–style template with blue accent — common in the AI-engineer-portfolio space, reads as generic.

**New direction: Editorial-meets-Technical.**

Warm cream foreground on deep ink background, single terracotta/copper accent, distinctive serif display font paired with refined sans body and mono accents. Signals research + engineering craft. Distinctive without being chaotic.

**Reference points:** The Browser Company landing pages, older Stripe blog posts, MIT Technology Review online, Plain Text Journal aesthetic.

---

### 3.2 Color Tokens

Replace existing color variables with these. Use CSS custom properties / Tailwind config / whatever the codebase uses.

```css
:root {
  /* Backgrounds */
  --color-bg-base: #0F1419;        /* Deep ink — primary background */
  --color-bg-elevated: #1A1F26;    /* Cards, elevated surfaces */
  --color-bg-subtle: #14191F;      /* Section dividers, subtle fills */

  /* Foreground / text */
  --color-text-primary: #ECE6D8;   /* Warm cream — headings, body */
  --color-text-secondary: #A39B8A; /* Muted warm gray — meta, captions */
  --color-text-tertiary: #6B6555;  /* Very muted — labels, footnotes */

  /* Accent (replaces all current blues) */
  --color-accent: #D49A6A;         /* Warm terracotta/copper */
  --color-accent-hover: #E0AB7E;   /* Lighter on hover */
  --color-accent-muted: #8B6644;   /* Darker variant for backgrounds */

  /* Borders & dividers */
  --color-border-subtle: #2A3138;
  --color-border-medium: #3F4853;

  /* Semantic (use sparingly) */
  --color-success: #7FB89A;
  --color-error: #C97C7C;
}
```

**Rules of use:**
- Background hierarchy: base → elevated for cards → subtle for section dividers
- Body text always primary; meta/captions/dates always secondary; small labels tertiary
- Accent is for links, hover states, key interactive elements only — used sparingly creates impact
- Never use pure white (#FFFFFF) or pure black (#000000) anywhere on the site
- Replace every instance of the existing blue with `--color-accent`

---

### 3.3 Typography

**Font stack — load via Google Fonts or self-host:**

```css
:root {
  --font-display: 'Fraunces', 'Tiempos Headline', Georgia, serif;
  --font-body: 'IBM Plex Sans', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'IBM Plex Mono', ui-monospace, monospace;
}
```

**Usage:**
- **Display font (Fraunces):** All headings (`h1`–`h3`), the hero name, stat numerals, section numbers (01., 02., etc.). Use weight 400–500 for large display, italic optical-size for emphasis.
- **Body font (IBM Plex Sans):** All paragraph text, navigation, button labels, form inputs. Weight 400 body, 500 for emphasis.
- **Mono font (JetBrains Mono):** All-caps labels ("EXPERIENCE", "01."), the "Last updated" line on /now, tech tags on project cards, any code/inline `code` elements.

**Tracking and sizing:**
- Hero name: `clamp(3.5rem, 8vw, 6rem)`, line-height 1.05, letter-spacing -0.02em
- H2 section headings: `clamp(1.75rem, 4vw, 2.5rem)`, line-height 1.15
- Body: 1rem (16px), line-height 1.65
- Mono labels: 0.75rem, letter-spacing 0.12em, uppercase, secondary text color

**Remove if currently used:** Inter, Roboto, generic system-only font stacks, Space Grotesk.

---

### 3.4 Motion & Animation

Use the **Motion** library (motion.dev) for React, or pure CSS where possible. Animation philosophy: one well-orchestrated page load with staggered reveals + scroll-triggered section entries. Avoid scattered micro-interactions.

**On initial page load (hero):**
- Each line of hero text fades in + translates up 8px, staggered 100ms apart:
  1. "Hi, my name is" (300ms in)
  2. "Suryaansh Rathinam." (400ms in)
  3. "I build AI systems." (500ms in)
  4. Subtitle paragraph (600ms in)
  5. CTA buttons (800ms in, slight scale from 0.98)

**On scroll (sections):**
- Each section heading + content fades in + translates up 20px when entering viewport (use intersection observer with `threshold: 0.15`)
- Use `will-change: transform, opacity` to keep it 60fps
- Duration: 600ms, easing: `cubic-bezier(0.16, 1, 0.3, 1)` (the "out-expo-like" curve)

**Stats section (specific to this redesign):**
- When stats section enters viewport, each numeral count-ups from 0 to its final value over 1500ms
  - "2+" counts 0 → 2, suffix "+" appears at end
  - "3" counts 0 → 3
  - "NUS" doesn't animate (it's text) — fades in instead
- Stagger 150ms between the three columns
- After count-up, the entire row has a subtle bottom-border that draws left-to-right over 800ms

**Hover states:**
- Links: accent color transition 200ms ease, animated underline reveal from left
- Project cards: subtle lift on hover (`translateY(-4px)`), border color brightens to `--color-accent-muted`, shadow appears
- Buttons: background fades to accent-muted, scale 1.02

**Avoid:**
- Bouncy spring animations everywhere
- Parallax scrolling (overused, often janky)
- Mouse-following cursor effects (cliché)
- Particles in the background

---

## Part 4 — SEO & Meta

### 4.1 Meta Tags Update

**Current `<head>` meta tags need these updates:**

```html
<!-- Description -->
<meta name="description" content="Suryaansh Rathinam — Senior AI Engineer at ST Engineering R&D. Building production AI systems at the intersection of research and engineering. Masters in AI from NUS." />

<!-- Open Graph -->
<meta property="og:title" content="Suryaansh Rathinam — AI Engineer" />
<meta property="og:description" content="Senior AI Engineer at ST Engineering R&D. Building production AI systems at the intersection of research and engineering." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.suryaanshrathinam.com/" />
<meta property="og:image" content="https://www.suryaanshrathinam.com/images/profile.jpg" />

<!-- Twitter -->
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Suryaansh Rathinam — AI Engineer" />
<meta name="twitter:description" content="Senior AI Engineer at ST Engineering R&D. Building production AI systems at the intersection of research and engineering." />
<meta name="twitter:image" content="https://www.suryaanshrathinam.com/images/profile.jpg" />
```

**Note on social preview image:** Using the existing profile photo at `/images/profile.jpg` as the OG/Twitter share image. The Twitter card is set to `summary` (small square thumbnail) since the profile photo is square — `summary_large_image` would crop awkwardly. If the profile photo path differs in the codebase, update both `og:image` and `twitter:image` to match. Use an absolute URL (with `https://www.suryaanshrathinam.com` prefix) so Open Graph crawlers can resolve it.

---

### 4.2 Structured Data (JSON-LD)

Add this `<script type="application/ld+json">` block to the homepage `<head>`:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Suryaansh Rathinam",
  "url": "https://www.suryaanshrathinam.com",
  "image": "https://www.suryaanshrathinam.com/images/profile.jpg",
  "jobTitle": "Senior AI Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "ST Engineering",
    "url": "https://www.stengg.com/"
  },
  "alumniOf": [
    {
      "@type": "CollegeOrUniversity",
      "name": "National University of Singapore",
      "url": "https://www.nus.edu.sg/"
    },
    {
      "@type": "CollegeOrUniversity",
      "name": "Manipal Institute of Technology",
      "url": "https://manipal.edu/mit.html"
    }
  ],
  "sameAs": [
    "https://github.com/suryaansh2002",
    "https://www.linkedin.com/in/suryaansh-rathinam/",
    "https://leetcode.com/suryaansh28"
  ],
  "knowsAbout": [
    "Artificial Intelligence",
    "Machine Learning",
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "AI Agents",
    "Full-Stack Engineering"
  ]
}
```

**Additionally — add `ScholarlyArticle` schema for each publication.** Each publication card in the Publications section should include structured data like:

```json
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": "Exploring IoT-Blockchain Integration in Agriculture: An Experimental Study",
  "author": {
    "@type": "Person",
    "name": "Suryaansh Rathinam"
  },
  "datePublished": "2024",
  "publisher": "IEEE Access",
  "url": "https://ieeexplore.ieee.org/document/10510501"
}
```

Repeat for the IOP and Springer publications.

---

### 4.3 Favicon / Title Bar Icon

Replace the existing favicon with an "SR" monogram that matches the new visual system. The current favicon (likely default Next.js or unset) does no brand work.

**Design intent:** Bold "SR" in the site's display serif, warm cream on deep ink, rounded square. The period from the nav wordmark ("SR.") is intentionally omitted — at 16×16 it would be illegible noise.

**SVG source — save as `/public/favicon.svg`:**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <rect width="256" height="256" rx="48" fill="#0F1419"/>
  <text 
    x="128" 
    y="172" 
    font-family="Fraunces, 'Tiempos Headline', Georgia, serif"
    font-size="148" 
    font-weight="500"
    fill="#ECE6D8"
    text-anchor="middle"
    letter-spacing="-4">SR</text>
</svg>
```

**Files to generate and place in `/public`:**

| File | Size | Purpose |
|------|------|---------|
| `favicon.ico` | multi-res (16, 32, 48) | Legacy browser tab |
| `favicon-16x16.png` | 16×16 | Modern fallback |
| `favicon-32x32.png` | 32×32 | Modern fallback |
| `apple-touch-icon.png` | 180×180 | iOS home screen |
| `android-chrome-192x192.png` | 192×192 | Android home screen |
| `android-chrome-512x512.png` | 512×512 | PWA / large displays |

**How to generate** (any of these works):

- **Easiest:** paste the SVG into [realfavicongenerator.net](https://realfavicongenerator.net/), download the bundle, drop into `/public`
- **Programmatic:** use `sharp` to resize the SVG to each PNG size, then `to-ico` to bundle the .ico
- **CLI:** `magick favicon.svg -resize 32x32 favicon-32x32.png` (ImageMagick) repeated per size

**Next.js App Router convention (if the codebase uses it):**

Skip the manual meta tags below — instead place files directly in the `app/` directory and Next.js will generate the correct `<link>` tags automatically:

- `app/icon.svg`
- `app/apple-icon.png` (180×180)
- `app/favicon.ico`

**Manual HTML meta tags (if not using App Router conventions):**

Add to `<head>`:

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
```

**Optional — `site.webmanifest` for PWA support:**

Save as `/public/site.webmanifest`:

```json
{
  "name": "Suryaansh Rathinam",
  "short_name": "SR",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#0F1419",
  "background_color": "#0F1419",
  "display": "standalone"
}
```

**Font dependency note:** The SVG references Fraunces with a serif fallback chain. When the SVG is rasterized to PNG, the generator will substitute Georgia if Fraunces isn't available on the build machine — which is fine, the visual difference is minimal at small sizes. For a truly font-independent favicon, convert the "SR" text to paths in a vector editor before rasterizing.

---

## Part 5 — Code-Level Changes

### 5.1 Dynamic Footer Year

**Find footer copyright line:**
```
© 2026 Suryaansh Rathinam
```

**Replace with React/JSX:**
```jsx
© {new Date().getFullYear()} Suryaansh Rathinam
```

If footer is in a server component or static HTML, use the framework's date utility or build-time injection — but client-side `new Date().getFullYear()` is simplest and accurate.

---

### 5.2 Stat Counter Animation

Implement count-up for the stats section. Suggested approach using `useEffect` + `requestAnimationFrame`:

```jsx
function CountUp({ end, duration = 1500, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(Math.floor(end * eased));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}
```

Use as: `<CountUp end={2} suffix="+" />` and `<CountUp end={3} />`.

---

### 5.3 Section Reveal Animation

For scroll-triggered section reveals, either use Motion's `whileInView` prop (cleanest), or a generic `<Reveal>` wrapper component using IntersectionObserver. Apply to: About, Experience, Education, Skills, Projects, Publications, Contact section headings + content.

---

## Part 6 — Implementation Order

Suggested order of operations:

1. **Content updates first** (Part 1) — fast, low-risk, immediately useful even before visual changes ship
2. **Theme tokens** (Part 3.2) — define color variables before touching components
3. **Typography** (Part 3.3) — load fonts, set up font variables, replace existing font references
4. **Component-by-component visual pass** — update each component to use new tokens, remove all hardcoded blues, replace fonts
5. **Animations** (Part 3.4 + Part 5.2 + Part 5.3) — add motion in one focused pass
6. **`/now` page** (Part 2) — new route, link from footer
7. **SEO & meta** (Part 4.1, 4.2) — meta tags and structured data
8. **Favicon** (Part 4.3) — generate icon set from SR monogram SVG, wire up
9. **Footer year** (Part 5.1) — quick win

---

## Part 7 — Things NOT to Change

To avoid scope creep:

- Do not add IIT Kharagpur research entries (intentionally kept off the portfolio)
- Do not remove the AIDF NUS experience entry (kept on portfolio even though not on LinkedIn)
- Do not change publication content
- Do not add new projects unless explicitly asked
- Do not change the overall information architecture (sections in the same order)
- Do not change the profile photos or banner images
- Do not add a blog/writing section in this pass — that's a separate decision

---

## Open Items / Pending User Input

- [ ] Optional: update profile photo for visual consistency with LinkedIn (not in this spec)

---

*End of specification.*