# Portfolio Update Specification v2

**Replaces** the previous `portfolio-updates.md` entirely. Drop the old file.

**Target site:** suryaanshrathinam.com (production)
**Stack:** Next.js App Router (inferred from `_next/image` paths and route structure)
**Context for Claude Code:** This site was updated once before. Most content changes landed, but the visual system did NOT — the site still reads as a monochrome default-dark template with no accent color, no atmosphere, and no consistent visual hierarchy. This spec is explicit about every visual change, with grep instructions where needed, so the warm palette and motion actually land this time.

---

## How to read this doc

Each section has either:
- **EXACT TEXT** — copy-paste this verbatim
- **TOKEN VALUES** — use these exact CSS variable names and hex codes
- **GREP HINTS** — search the codebase for these patterns to find what to change
- **REASONING** — context, optional to read

If you find conflicts between this doc and existing code, this doc wins.

---

## PART 1 — Critical Content Fixes

These didn't land last time. Fix them first.

### 1.1 About — Paragraph 1 (past tense, Masters completed)

**Find this exact text** in the About section:

> I'm pursuing my Masters of Computing (AI Specialization) at the National University of Singapore.

**Replace with:**

> I completed my Masters of Computing (AI Specialisation) at the National University of Singapore in December 2025.

Two changes: tense + UK spelling of "Specialisation."

### 1.2 About — Paragraph 2 (replace generic copy)

**Find this exact text:**

> Proficient as a Full Stack Developer with experience in ML Development, I've constantly worked on developing my skills by exploring various tech stacks, tools, and frameworks through diverse projects, fostering an unceasing desire for learning and growth.

**Replace with:**

> Before that I did a CS undergrad at Manipal, building production AI at startups in parallel — credit risk platforms, NL2SQL engines, fine-tuned speech models, and agentic systems.

Reasoning: the current copy is the weakest writing on the page. It reads like a fresher's cover letter. The replacement names actual work and gives readers something specific to remember.

### 1.3 About — Paragraph 3 (already correct, leave alone)

Current text is fine:

> Now I'm at ST Engineering's R&D division as a Senior AI Engineer. The work I'm drawn to lives at the intersection of AI research, real-time systems, and product engineering — which is where I've been heading the whole time.

### 1.4 Stats hero values (currently broken)

The stats currently display "0+" Years Experience and "1" Publications. The count-up targets are wrong.

Find the stat component data/props. Update to:

| Display label | Target value | Suffix |
|---|---|---|
| Years Experience | `3` | `+` |
| Publications | `3` | (none) |
| Masters in AI | `NUS` | (text, no count-up) |

**Verify after change:** Load the site, scroll to the About stats, wait for count-up to finish. Should read `3+`, `3`, `NUS`. If the third stat ("NUS") is animating as a number, exclude it from the count-up component.

### 1.5 Contact section copy (currently contradicts employment status)

**Find this exact text:**

> I'm currently open to new opportunities, freelance projects, and interesting collaborations. I'm particularly interested in projects involving AI/ML, full-stack development, or research opportunities.

**Replace with:**

> Happy to talk applied AI, LLM systems, agents, RAG, or the engineering side of shipping ML products. Not actively looking, but always up for an interesting conversation.

**Find:**

> Based in Singapore • Available for remote work worldwide

**Replace with:**

> Based in Singapore

**Find:**

> Book a 30-minute call to discuss opportunities, projects, or just to chat!

**Replace with:**

> 30-minute call. Coffee chat energy, not interview energy.

**Find:**

> Ready to Connect? Let's build something amazing together!

**Replace with:**

> Reach out

(The "Ready to Connect / Let's build something amazing" copy is generic LinkedIn-influencer-speak. Replace with something direct.)

### 1.6 Project title capitalization

**Find:** `GMAIL Rag System`
**Replace with:** `Gmail RAG System`

Gmail is the product name (title case), RAG is an acronym (all caps).

### 1.7 Date format consistency

The site mixes `2024-2025`, `May '26 - Present`, `Aug '25 - Apr '26`. Standardize everywhere to:

- **Education:** `Aug 2024 – Dec 2025` (en-dash, full month, full year)
- **Experience:** `May 2026 – Present` and `Aug 2025 – Apr 2026` (same format)
- **Projects:** `April 2025` (single date, full month, full year)

Use `–` (en-dash, U+2013) for ranges, not `-` (hyphen).

### 1.8 Spelling: "Specialisation" not "Specialization"

Singapore uses British English, and NUS spells it "Specialisation" on transcripts.

**Grep:** `Specialization` → replace all with `Specialisation`.

### 1.9 Featured Cards row (remove)

In the About section, below the bio paragraphs, there's a 2x2 grid of "feature" cards:

- Skills & Technologies — Explore my technical expertise
- Featured Projects — View my latest work
- Research Work — Academic publications
- Let's Connect — Schedule a meeting

**Remove this entire block.** The main nav already has Skills, Projects, Research, Contact. These cards add visual noise without adding navigation value. Also remove the "Connect With Me" button directly below them.

---

## PART 2 — Files to Remove

### 2.1 Delete `/now` page

Remove the route entirely:
- Delete `app/now/page.tsx` (or `pages/now.tsx`, whichever exists)
- Delete `app/now/` directory if empty after page deletion

### 2.2 Remove `/now` from footer

Find the footer where the `/NOW` link appears in mono caps next to `GITHUB` and `LINKEDIN`. Remove the `/NOW` link. Keep GITHUB and LINKEDIN.

---

## PART 3 — Visual System (the actual visual overhaul)

### 3.1 Color palette — WARM editorial direction

The current site is essentially `#000000` and `#FFFFFF` with no accent. This is the most important change in the spec. **Read this entire section carefully.**

**Step 1 — Define these CSS variables** in the global stylesheet (`globals.css` or equivalent):

```css
:root {
  /* Backgrounds — warm, layered */
  --color-bg-base: #14100B;          /* Deep warm-tinted near-black (NOT pure black) */
  --color-bg-elevated: #1C1812;      /* Cards, slightly lifted surfaces */
  --color-bg-subtle: #18130D;        /* Section dividers, very subtle differentiation */

  /* Foreground / text */
  --color-text-primary: #F0E9D8;     /* Warm cream — primary body and headings */
  --color-text-secondary: #B5A88F;   /* Muted warm beige — meta, captions, secondary */
  --color-text-tertiary: #6E6555;    /* Muted warm gray — labels, footnotes */

  /* Accent — warm terracotta */
  --color-accent: #D49A6A;           /* Primary accent — links, key interactive */
  --color-accent-hover: #E5B084;     /* Hover state, slightly brighter */
  --color-accent-muted: #8B6644;     /* Darker accent, used in subtle washes */
  --color-accent-glow: rgba(212, 154, 106, 0.15);  /* For glow effects, hover halos */

  /* Borders & dividers */
  --color-border-subtle: #2D2519;
  --color-border-medium: #45382A;

  /* Semantic (sparingly) */
  --color-success: #7FB89A;
  --color-error: #C97C7C;
}
```

**Step 2 — Hunt down every leftover color and replace it.** Grep the entire codebase for:

| Find | Replace with |
|---|---|
| `#000` or `#000000` (any case) | `var(--color-bg-base)` |
| `bg-black` (Tailwind) | `bg-[var(--color-bg-base)]` or a configured token |
| `text-white` | `text-[var(--color-text-primary)]` |
| `#fff` or `#ffffff` or `white` | `var(--color-text-primary)` |
| `#3b82f6` `#0066ff` `#2563eb` `blue-500` `blue-600` `blue-400` (any blues) | `var(--color-accent)` |
| Any hardcoded hex starting with `#1`, `#2`, `#3` not in this palette | Audit and re-token |

Specifically check these files / places where colors typically hide:
- `globals.css`, `theme.css`, `tailwind.config.js/ts`
- Every component file's inline styles
- Any `style={{ ... }}` JSX props
- SVG `fill=` and `stroke=` attributes on inline SVGs

**Step 3 — Verify after migration.** Open Chrome DevTools, inspect the body, confirm background-color is `#14100B`. Inspect any heading, confirm color is `#F0E9D8`. Inspect any link, confirm color is `#D49A6A` (or accent-hover on hover).

### 3.2 Background atmosphere

The current site is a flat color block. Add subtle atmosphere — barely perceptible, but transforms the feel.

**Step 1 — Subtle grain texture across the whole `<body>`:**

```css
body {
  background: var(--color-bg-base);
  position: relative;
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' /></filter><rect width='100%25' height='100%25' filter='url(%23n)' /></svg>");
  mix-blend-mode: overlay;
}
```

A 3% opacity noise overlay. Adds warmth and texture without being visible as "grain."

**Step 2 — Subtle radial gradient anchored to the top-right:**

In the hero section, add a positioned pseudo-element:

```css
.hero {
  position: relative;
  isolation: isolate;
}

.hero::after {
  content: '';
  position: absolute;
  top: -20%;
  right: -10%;
  width: 60%;
  height: 80%;
  background: radial-gradient(
    circle at center,
    var(--color-accent-glow) 0%,
    transparent 60%
  );
  z-index: -1;
  pointer-events: none;
}
```

This creates a soft terracotta glow behind the profile photo area. Almost imperceptible, but the page no longer reads as "flat black."

### 3.3 Typography — keep current fonts, lock down hierarchy

The serif display font is working well (looks like Fraunces from screenshots — confirm). Keep current fonts but enforce hierarchy.

**Font roles:**
- **Display serif (Fraunces or similar):** Hero name, all section headings (h2), big stat numerals, sub-headings within sections
- **Body sans:** Paragraphs, list items, navigation
- **Mono:** All-caps labels ("HI, MY NAME IS", "KEY HIGHLIGHTS", "TECHNOLOGIES USED"), dates in card metadata, tech tag text

**Section heading consistency.** Every section currently uses a big-serif heading + generic subtitle. Standardize:

- "About Me" → keep as "About"
- "My Projects" → keep as "Projects"
- "My Skills" → keep as "Skills"
- "Work Experience" → keep as "Experience"
- "Research Work" → keep as "Research"
- "Education" → keep as "Education"
- "Get In Touch With Me" → keep as "Contact"

**Replace the generic subtitles** under each section heading with something that has a point of view:

| Section | Current subtitle | Replace with |
|---|---|---|
| About | Passionate about creating innovative solutions through technology and research | *(remove entirely — let the bio paragraphs do the work)* |
| Projects | A collection of projects showcasing my expertise in full-stack development, AI/ML, and system design | Selected work — production systems and side experiments. |
| Skills | A comprehensive overview of my technical expertise across various domains | What I've actually shipped with. |
| Experience | Professional journey across startups and established companies | *(remove entirely)* |
| Research | *(check current subtitle)* | Peer-reviewed publications and research projects. |
| Education | My academic journey in computer science and artificial intelligence | *(remove entirely — let the cards speak)* |
| Contact | *(check current subtitle)* | Reach out. |

### 3.4 Section spacing

Current vertical gap between sections is massive (often a full screen of empty space). Tighten.

- **Section padding:** `padding-block: 8rem;` (128px top and bottom). Currently appears to be ~200px+ in many places.
- **Between section heading and first content:** `margin-bottom: 4rem;`
- **Hero to first section:** `margin-top: 0` on first section after hero (currently large gap).

### 3.5 Section label markers (new — adds editorial feel)

Add a small mono-caps section label *above* each section's serif heading, prefixed with a numbered marker in the accent color:

```
01 — ABOUT
About
```

Where `01 — ABOUT` is in `var(--color-accent)`, mono font, ~0.75rem, letter-spacing 0.2em, uppercase. The big serif "About" sits below.

Numbering:
- 01 — ABOUT
- 02 — PROJECTS
- 03 — SKILLS
- 04 — EXPERIENCE
- 05 — RESEARCH
- 06 — EDUCATION
- 07 — CONTACT

This single touch will do more for "editorial feel" than any other change in this spec.

---

## PART 4 — Component Redesign

### 4.1 Hero section

**Current state:** Big serif name, italic "I build AI systems.", body para, three CTA buttons, four social icons, profile photo right. Works fine structurally, just lifeless visually.

**Changes:**

1. **Tagline italic in accent color.** "I build AI systems." should render in `var(--color-accent)` italic. Currently it's white italic — losing the accent opportunity.

2. **Subtle underline on hero name on hover.** Custom animated underline drawing left-to-right under "Suryaansh Rathinam." when hovered. Cursor cursor for fun (default), no link behavior needed.

3. **Period at end of name in accent color.** Currently `Suryaansh Rathinam.` — make the final `.` `var(--color-accent)`. Tiny detail, big personality.

4. **CTA button styling:**
   - **Primary** (Download Resume): solid `var(--color-accent)` background, dark text, on hover slight scale (1.02) + accent-hover background
   - **Secondary** (Get In Touch, More About Me): transparent background, `var(--color-border-medium)` 1px border, on hover border becomes `var(--color-accent)` and text gains accent color

5. **Social icons** (GitHub, LinkedIn, Email, code icon for LeetCode): currently bare icons. Add:
   - Default: `var(--color-text-secondary)`
   - Hover: `var(--color-accent)` + slight vertical lift (translateY(-2px))
   - Smooth 200ms transition

6. **Profile photo treatment.** Currently a circular crop with no treatment. Add:
   - 1px ring in `var(--color-border-medium)`
   - On hover (or always, subtle): a soft outer glow using `var(--color-accent-glow)` — `box-shadow: 0 0 80px var(--color-accent-glow)`
   - Optional: very subtle floating animation (transform translateY oscillating ±4px over 6s loop). Use `prefers-reduced-motion` media query to disable.

7. **Background.** Apply the radial gradient atmosphere from 3.2 here.

### 4.2 About section

**Already covered:** paragraph rewrites (Part 1.1, 1.2), feature cards removal (Part 1.9), stats fixes (Part 1.4).

**Additional visual changes:**

1. **Stats redesign.** Currently three large serif numerals with vertical bar dividers. Keep the serif numerals (they work) but:
   - Numeral color: `var(--color-accent)` (not white)
   - Label color: `var(--color-text-tertiary)` mono caps, letter-spacing 0.2em
   - Dividers: thinner, `var(--color-border-subtle)`, slight opacity
   - Stagger entry animation: each stat fades + translates up 8px with 150ms delay between them

2. **Photo of you at the water** — keep it. Add the same 1px ring + glow treatment as hero photo, slightly subtler.

### 4.3 Projects section

**Current state:** Three card grid, dates with calendar icon, title, truncated description, oval tech chips, Code button. Cards have no visible borders — they float.

**Changes:**

1. **Add card borders.** Each project card gets a 1px border in `var(--color-border-subtle)`, rounded corners (8px), padding 1.5rem.

2. **Hover state.** On hover:
   - Border color transitions to `var(--color-accent-muted)` (200ms ease)
   - Subtle terracotta glow: `box-shadow: 0 8px 32px var(--color-accent-glow)`
   - Card lifts: `transform: translateY(-4px)`
   - Smooth transition: `transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1)`

3. **Tech chip redesign.** Currently oval chips with thick uniform borders, all-caps mono text. Change to:
   - Border: `var(--color-border-subtle)` 1px
   - Background: transparent
   - Text: `var(--color-text-secondary)` mono, 0.7rem, NOT all-caps (keep "FastAPI" as "FastAPI", "OpenAI" as "OpenAI" — proper case)
   - Padding: `0.25rem 0.65rem`
   - Border-radius: `9999px` (pill)
   - **First chip in each project list** gets accent treatment: text color `var(--color-accent)`, border `var(--color-accent-muted)`. This is the "headline" technology for that project.

4. **Code/Demo buttons.** Same secondary button style as hero CTA (transparent, border, hover accent). NOT solid full-width as they currently appear.

5. **Date display.** Currently `April 2025` etc. Keep format but reduce visual weight: `var(--color-text-tertiary)`, mono, 0.75rem, with the calendar icon at 14px.

6. **Title casing fix.** Already in Part 1.6 — "GMAIL Rag System" → "Gmail RAG System".

7. **Show All Projects.** Keep the collapse pattern but:
   - Button styling: ghost button with chevron, `var(--color-text-secondary)` text, hover to accent
   - When expanded: same hover treatment per card

### 4.4 Skills section

**Current state:** 2-column accordion. AI/ML expanded showing 15 chips. Programming Languages, Frontend, Backend, Databases & Cloud, Testing & Automation all collapsed and empty. Creates ugly asymmetric layout where left side has 15 chips and right side is empty.

**Changes — replace the accordion with a flat layout.**

1. **Remove the accordion entirely.** No collapse/expand. Every category is visible.

2. **Layout:** Single column (full width). Each category as a horizontal section:
   - Category name in serif (h3 size, e.g., 1.5rem), `var(--color-text-primary)`
   - Chips below in a wrapping flex/grid

3. **Order categories by relevance to current positioning:**
   1. Artificial Intelligence & Machine Learning
   2. Backend Development
   3. Programming Languages
   4. Databases & Cloud
   5. Frontend Development
   6. Testing & Automation

4. **Chip styling:** Same as project tech chips (see 4.3 point 3) — refined, proper-case, accent for the first chip in each category (signaling the headline skill).

5. **Stats row below skills.** Currently shows `50+ Technologies · 10+ Projects · 3 Research Papers · 5+ Work Experiences`. 
   - Remove `50+ Technologies` (vanity number, redundant with the skills list right above)
   - Keep: `10+ Projects · 3 Research Papers · 5+ Work Experiences`
   - Style same as the hero stats (serif numerals in accent, mono caps labels in tertiary)

### 4.5 Experience section

**Current state:** Vertical list of cards. Logo (or placeholder) + company + title on left, date on right, description below, "KEY HIGHLIGHTS" bullets, "TECHNOLOGIES USED" chips. ST Engineering, ThoutAI, Ridecell all have placeholder gray X-icon logos.

**Changes:**

1. **Replace placeholder logos.** From the `/assets` folder. Expected paths (Claude Code: confirm and use whatever's actually there):
   - `/public/assets/logos/st-engineering.svg` or `.png`
   - `/public/assets/logos/thoutai.svg` or `.png`
   - `/public/assets/logos/ridecell.svg` or `.png`
   
   If logo aspect ratios differ from the square crop in the layout, normalize: render each logo inside a `48x48px` container with `object-fit: contain` and a subtle `var(--color-bg-elevated)` background to handle transparency uniformly.

2. **Card structure tightening.** Current cards are very tall with lots of "KEY HIGHLIGHTS" / "TECHNOLOGIES USED" mono labels. Reduce to:
   - Header row: Logo (48x48) · Company name (serif, h3) + Title (body, secondary color) — on left. Date pill on right.
   - Description paragraph (1-2 lines).
   - Highlights as plain bullet list (no "KEY HIGHLIGHTS" label, no arrow icon — just standard bullets). 3-5 bullets max.
   - Tech chips inline at the bottom (no "TECHNOLOGIES USED" label). Same chip styling as projects.

3. **Remove empty "KEY HIGHLIGHTS" sections.** ST Engineering card currently shows the label with no content under it. If a card has no highlights yet, omit the section entirely.

4. **Card border and hover** same as projects (Part 4.3 point 2): subtle border, hover lift + glow.

5. **Timeline rail (optional but recommended).** Add a thin vertical line on the left of the experience list, with small accent-colored dots at each card's vertical center. Creates visual narrative of progression:
   ```
   ┃ ● ST Engineering
   ┃ ● ThoutAI
   ┃ ● Datalens AI
   ┃ ● ...
   ```
   Line: 1px, `var(--color-border-medium)`. Dots: 8px circle, `var(--color-accent)`.

6. **Date display.** Use full format: `May 2026 – Present`, `Aug 2025 – Apr 2026`, etc. Drop the `'26` shortened format. Currently appears as `May '26 - Present` — change to `May 2026 – Present`.

### 4.6 Education section

**Current state:** Two cards (NUS, Manipal). Logo + university name + degree + date + GPA + description + Cloud Computing/Software Engineering pills + "Relevant Coursework" collapsible.

**Changes:**

1. **GPA pill is redundant.** Currently shows `GPA: 4.45 / 5` inline AND a pill below saying `4.45 / 5 GPA`. Remove the pill, keep the inline display.

2. **Date format.** Already covered in 1.7 — change to `Aug 2024 – Dec 2025` and `Sep 2020 – Jul 2024`.

3. **Card border + hover** same pattern as projects.

4. **"Relevant Coursework" collapsible** is fine — it's a long list and benefits from collapse. Improve the chevron treatment: subtle rotate animation on expand (180deg, 200ms).

### 4.7 Research section

**Current state:** 4 cards in 2x2 grid. Each shows label (Journal Paper / Conference Paper / IEEE Paper / Research Internship), title, authors, conference, publication, description, action buttons.

**Changes:**

1. **Featured the IEEE Access paper.** It's your highest-prestige publication. Pull it out of the grid and feature it above as a larger single card spanning full width:
   - Larger title typography
   - Abstract excerpt (1-2 sentences) prominent
   - Authors line
   - Both "PDF" and "View" buttons as primary + secondary CTAs
   - A small "Featured" badge in accent color in the top-right corner
   
   Then the remaining three cards (Journal Paper, Conference Paper, Research Internship) sit below in a 3-column or 2-column grid.

2. **Distinguish "Research Internship" visually.** It's not a publication. Change its label color to `var(--color-text-tertiary)` instead of accent. Or add a separator: feature the 3 publications together, then a smaller "Research Experience" sub-section below for the internship.

3. **Action button consistency.** Currently uses inconsistent button counts (Certificate / PDF + View / PDF + View + Conference). Pick one icon set and stick to it:
   - PDF (download icon)
   - View (external link icon)
   - Conference / Certificate (link icon)

### 4.8 Contact section

Already covered in Part 1.5 for copy. Visual changes:

1. **Reduce sections.** Currently has "Let's Connect!" / "Schedule a Meeting" / GitHub LinkedIn / Email LeetCode / "Ready to Connect" / "Based in Singapore" — too much. Simplify to:
   - Single column, centered
   - Big serif heading "Contact" (consistent with other section headings)
   - Mono caps label above: "07 — CONTACT"
   - One body paragraph (the rewrite from 1.5)
   - One primary CTA: "Schedule a meeting" (calendar link)
   - Below it: row of 4 icon links (GitHub, LinkedIn, Email, LeetCode)
   - Footer line: "Based in Singapore · Usually responds within 24 hours"

2. **Profile photo (the second one, in suit).** Either:
   - Remove it (one profile photo on the page is enough, it's already in the hero)
   - Or keep, but smaller, as a circular avatar above the heading

I'd lean **remove**. The hero already establishes who you are visually.

3. **"Schedule a meeting" button.** Solid `var(--color-accent)` background, dark text, calendar icon. Same as hero primary CTA.

### 4.9 Footer

Current state:
```
© 2026 Suryaansh Rathinam        /NOW   GITHUB   LINKEDIN
```

Changes:

1. **Remove `/NOW` link** (per Part 2.2).

2. **Dynamic year.** Replace `2026` with `{new Date().getFullYear()}` so it auto-updates.

3. **Final footer:**
```
© {currentYear} Suryaansh Rathinam        GITHUB   LINKEDIN
```

4. **Subtle accent border above footer:** `border-top: 1px solid var(--color-border-subtle)`, padding-top 2rem.

---

## PART 5 — Motion System

Current site has minimal motion. Add these as a coherent system, not scattered.

### 5.1 On page load (hero only)

Each line of hero content fades in + translates up 8px, staggered:
- "HI, MY NAME IS" — 0ms
- "Suryaansh Rathinam." — 100ms
- "I build AI systems." — 200ms
- Body paragraph — 300ms
- CTA buttons — 400ms
- Social icons — 500ms
- Profile photo — 0ms but with longer duration (800ms), slight scale from 0.96 to 1.0

Duration each: 600ms · Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (smooth out-expo)

### 5.2 On scroll (every other section)

Use Intersection Observer. When a section enters the viewport (threshold 0.15):

- Section label (mono caps "01 — ABOUT") fades in
- Big serif heading fades + translates up 16px, 150ms after label
- Section content fades + translates up 24px, 300ms after heading
- Within content, cards/list items stagger 80-100ms apart

Duration: 700ms · Easing: same as 5.1

**Important:** Once a section has animated in, don't re-animate on scroll up. Use a `data-animated="true"` attribute after first trigger.

### 5.3 Stats count-up

Already specced. When stats section enters viewport, count from 0 to target over 1500ms with ease-out cubic. Stagger 150ms between the three stats.

### 5.4 Hover states (universal)

- **Links:** Color transition 200ms ease to `var(--color-accent-hover)` + animated underline draw from left (using `background-image: linear-gradient` trick or `::after` pseudo-element with `transform: scaleX`)
- **Cards:** Border + glow + lift, 300ms ease (see 4.3)
- **Buttons:** Background/border/text color transition 200ms ease
- **Icons:** Color + slight translateY(-2px), 200ms ease

### 5.5 Reduced motion

Wrap all animation logic in:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## PART 6 — Assets / Logos

Logo files should live in `/public/assets/logos/`.

Expected files (Claude Code: check actual filenames in `/assets` folder — adjust paths to match):

- `/public/assets/logos/st-engineering.{svg|png}`
- `/public/assets/logos/thoutai.{svg|png}`
- `/public/assets/logos/ridecell.{svg|png}`

Update the Experience component to use these instead of `placeholder.svg`. If logos are PNGs with non-square aspect ratios, render inside a 48x48 container with `object-fit: contain`.

---

## PART 7 — SEO / Meta (carry-forward from previous spec)

These were specified before — verify they actually landed:

### 7.1 Meta tags (use existing profile photo)

```html
<meta property="og:image" content="https://www.suryaanshrathinam.com/images/profile.jpg" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:image" content="https://www.suryaanshrathinam.com/images/profile.jpg" />
```

### 7.2 JSON-LD structured data

Add Person + ScholarlyArticle schema. Copy from the previous spec's section 4.2 (assume Claude Code has it). If not present, follow that structure.

### 7.3 Favicon

The SR monogram favicon from previous spec — verify it's in place. If still default, generate from this SVG:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <rect width="256" height="256" rx="48" fill="#14100B"/>
  <text x="128" y="172" font-family="Fraunces, 'Tiempos Headline', Georgia, serif" font-size="148" font-weight="500" fill="#F0E9D8" text-anchor="middle" letter-spacing="-4">SR</text>
</svg>
```

(Background updated to match the new `--color-bg-base`.)

---

## PART 8 — Implementation Order

Suggested sequence:

1. **Critical content fixes first** (Part 1) — fast, low-risk, immediately useful even before visual work
2. **Delete `/now` page** (Part 2) — cleanup before refactoring
3. **Color tokens** (Part 3.1) — define the variables in globals.css
4. **Grep + replace all colors** (Part 3.1 Step 2) — most important step. Go file by file. Verify after.
5. **Typography hierarchy + section labels** (Part 3.3 + 3.5) — apply the "01 — ABOUT" markers everywhere
6. **Background atmosphere** (Part 3.2) — grain + radial gradient
7. **Component pass — Hero, About, Projects, Skills, Experience, Education, Research, Contact, Footer** (Part 4) — work top-down through the page
8. **Logos** (Part 6) — swap placeholder.svg for actual files
9. **Motion** (Part 5) — add as final layer once everything is in place
10. **SEO carry-forward** (Part 7) — verify

---

## PART 9 — What NOT to change

- Section information architecture (sections stay in current order, except merging if mentioned above)
- Profile photos (the hero photo + the photo at the water)
- Education content (just date format and visual treatment)
- Project list itself (just titles, URLs, and visual treatment — not which projects)
- AIDF NUS experience entry stays
- Research content stays as-is, just visual treatment

---

## Verification checklist (run after implementation)

- [ ] Hero stats show `3+` Years Experience, `3` Publications, `NUS`
- [ ] About first paragraph says "I completed my Masters... in December 2025" with "Specialisation"
- [ ] About second paragraph mentions Manipal + production AI at startups (not the generic copy)
- [ ] Contact section says "Not actively looking" — no mention of "available for remote work worldwide"
- [ ] No placeholder logos for ST Engineering, ThoutAI, or Ridecell
- [ ] Every section has a `01 — ABOUT` style mono-caps label above the serif heading
- [ ] Background is warm-tinted dark (#14100B), not pure black
- [ ] Hovering any card or link triggers a visible accent transition
- [ ] "Gmail RAG System" is correctly capitalized
- [ ] Skills section is no longer an accordion — all categories visible
- [ ] Featured cards row at top of About is removed
- [ ] /now route returns 404 (page deleted)
- [ ] Footer has no `/NOW` link
- [ ] Dates everywhere use full month + full year format

---

*End of specification v2.*