# Personal Academic & AI Engineer Website — Build Prompt

## Overview

Build a modern, professional personal website for a **PhD student and AI Engineer** specializing in
**Computer Vision & Remote Sensing** at the **University of Twente**, who also works as an
**AI Software Engineer at Baykar Technology** (Aug 2023 – Present).

The site serves two audiences simultaneously:
- **Academic peers & researchers** → publications, research projects, blog
- **Industry employers & companies** → demonstrated skills, real-world projects, professional background

---

## Tech Stack (Required)

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS v3
- **Blog/Content:** MDX with `next-mdx-remote` or `contentlayer`
- **Dark/Light Mode:** `next-themes`
- **Publications:** JSON-driven static file
- **Deployment ready:** Vercel
- **Language:** TypeScript
- **Package manager:** npm

---

## Design System

- **Style:** Clean, open, professional — academic portfolio with modern polish. NOT startup/flashy.
- **Font:** Inter (sans-serif) for body; optionally Lora serif for blog posts
- **Color palette:**
  - Light mode: white `#ffffff`, dark text `#111827`, accent blue `#2563eb`
  - Dark mode: dark bg `#0f172a`, light text `#f1f5f9`, accent blue `#3b82f6`
  - Baykar accent (use sparingly, only on Industry page hero): `#D01212`
- **Dark/Light toggle:** Accessible toggle in navbar, persisted via `localStorage`
- **Spacing:** Generous whitespace, max ~65ch for prose
- **No heavy animations** — subtle hover states only
- **Fully responsive:** Mobile-first

---

## Site Structure & Pages

### 1. `/` — Home / Hero

- Full name placeholder: **[YOUR NAME]**
- Title: `PhD Researcher & AI Engineer`
- Two affiliation badges side by side:
  - `University of Twente` → `https://www.utwente.nl`
  - `Baykar Technology` → `https://www.baykartech.com` (subtle red `#D01212` dot accent)
- Short bio placeholder: 2–3 sentences about Computer Vision + Remote Sensing research and industry work
- Two CTA buttons: `View Research →` (→ `/research`) and `Industry Work →` (→ `/industry`)
- Social links row: GitHub, LinkedIn, Google Scholar, Email
- Profile photo: `public/avatar.jpg` — gray circle with initials fallback if missing
- **Recent activity strip** below hero: 2 latest blog posts + 1 latest publication as small cards

---

### 2. `/about` — About Me

- Extended bio with placeholder paragraphs covering: research journey, PhD focus (CV & Remote Sensing), Baykar industry experience
- **Experience timeline** (most recent first):
  - 🏢 AI Software Engineer — Baykar Technology, Aug 2023 – Present
  - 🎓 PhD Researcher — University of Twente, [START YEAR] – Present
  - 🎓 [MSc/BSc] — [UNIVERSITY], [YEAR]
- **Skills grid** (tag chips):
  - Research: Computer Vision, Remote Sensing, Object Detection, Semantic Segmentation, Change Detection, Similarity Search, Image Projection & Georeferencing, Self-supervised Learning
  - Engineering: Python, PyTorch, TensorFlow, CUDA, Docker, Git, FastAPI, ONNX, TensorRT
  - Tools: QGIS, GDAL, Weights & Biases, HuggingFace, SLURM, Linux
- **CV download button** → `public/cv.pdf`
- UT profile link: `https://people.utwente.nl/[USERNAME]`

---

### 3. `/research` — Research (Academic)

#### Publications
- Data from `data/publications.json` — scaffold 3 placeholder entries (mix of conference + journal)
- Each card: title, authors, venue badge (blue=conference, green=journal), year, collapsible abstract, PDF / arXiv / Code / BibTeX buttons
- BibTeX copy-to-clipboard button
- Filter bar: All / Conference / Journal

#### Research Projects
- 2–3 placeholder academic project cards: title, description, status badge (Ongoing/Completed), tech tags

---

### 4. `/industry` — Industry Work ⭐

Showcase of professional work done at Baykar Technology in **Remote Sensing AI**.

#### Layout: Hero + Project List (vertical)

**Hero section:**
- Section heading: `Industry Work`
- Company block: Baykar Technology logo placeholder (gray rect), role `AI Software Engineer`, period `Aug 2023 – Present`
- One-line description: `Building production-grade Computer Vision systems for remote sensing and aerial intelligence applications.`
- Tech stack chips: `Python` `PyTorch` `ONNX` `TensorRT` `GDAL` `QGIS` `Docker` `CUDA` `FastAPI`
- Subtle note banner (italic, muted): `All demonstrations use publicly available datasets. Proprietary systems and data are not disclosed.`

**Project preview cards below hero:**
Full-width horizontal cards (media left, text right on desktop; stacked on mobile). Each card:
- Category badge (color-coded)
- Project title (bold, large)
- 1–2 sentence description
- Tech chips
- Media placeholder: styled gray box, dashed border, 16:9 aspect ratio, centered label `[ Video / GIF — coming soon ]`
- `View Project →` button → `/industry/[slug]`

**5 projects to scaffold:**

| # | Slug | Title | Category | Badge color |
|---|------|-------|----------|-------------|
| 1 | `object-detection-aerial` | Aerial Object Detection | Object Detection | blue |
| 2 | `semantic-segmentation-maps` | Land Cover Semantic Segmentation | Semantic Segmentation | green |
| 3 | `change-detection` | Multi-temporal Change Detection | Change Detection | orange |
| 4 | `similarity-search` | Visual Similarity Search | Similarity Search | purple |
| 5 | `image-projection` | Image Projection & Georeferencing | Image Projection | teal |

---

### 5. `/industry/[slug]` — Individual Project Detail Page

**Media-first layout.** Structure top to bottom:

```
1. BREADCRUMB
   Industry Work > [Project Title]

2. HERO MEDIA ZONE (full width)
   Large MediaPlaceholder, 16:9, label: "[Primary Demo — Video / GIF]"
   Caption below: "Demonstration using publicly available remote sensing datasets"

3. PROJECT HEADER
   Category badge | Title (h1) | Overview paragraph (placeholder) | Tech chips

4. SECONDARY MEDIA GRID (2 columns, stack on mobile)
   MediaPlaceholder 4:3 "[Before / After comparison]"
   MediaPlaceholder 4:3 "[Output visualization]"

5. TECHNICAL DETAILS (3 cards, horizontal row, stack on mobile)
   Card A — "Problem":  2–3 sentences placeholder
   Card B — "Approach": 2–3 sentences placeholder
   Card C — "Results":  placeholder metrics (e.g. mAP: XX.X%)

6. ADDITIONAL MEDIA (optional single wide slot)
   MediaPlaceholder 16:9 "[Additional visualization]"

7. PROJECT NAVIGATION
   ← Previous Project    Next Project →
```

**Placeholder content per project:**

**object-detection-aerial**
- Overview: "Real-time detection of vehicles, aircraft, and infrastructure in high-resolution aerial and satellite imagery using custom-trained detection architectures optimized for overhead perspectives."
- Approach: Multi-scale inference, small object handling, real-time optimization
- Metrics: `mAP@50: XX.X%` · `Inference: XX ms`
- Tech: PyTorch, ONNX, TensorRT, CUDA, Docker

**semantic-segmentation-maps**
- Overview: "Pixel-level classification of land cover types — buildings, vegetation, roads, water bodies — from multi-spectral aerial imagery."
- Approach: Encoder-decoder architecture, multi-spectral input, sliding window inference
- Metrics: `mIoU: XX.X%`
- Tech: PyTorch, GDAL, OpenCV
- Note: secondary media slot 1 should use `BeforeAfterSlider` component instead of static placeholder

**change-detection**
- Overview: "Detecting and localizing changes between aerial images captured at different time points, enabling monitoring of construction, deforestation, and urban growth."
- Approach: Siamese dual-branch architecture, bitemporal image pairs
- Metrics: `F1: XX.X%` · `IoU: XX.X%`
- Tech: PyTorch, GDAL, Docker

**similarity-search**
- Overview: "Embedding-based retrieval system that finds visually similar patches or regions across large-scale remote sensing image archives."
- Approach: Contrastive learning embeddings, FAISS approximate nearest neighbor search
- Metrics: `Recall@5: XX.X%`
- Tech: PyTorch, FAISS, HuggingFace, FastAPI

**image-projection**
- Overview: "Projecting aerial and satellite imagery onto geographic coordinate systems, enabling accurate spatial analysis and map overlay."
- Approach: Camera model calibration, homography estimation, coordinate transformation pipelines
- Metrics: `Reprojection error: X.XX px`
- Tech: OpenCV, GDAL, QGIS, NumPy

---

### 6. `/projects` — Personal / Open Source Projects

- 2-column grid (1 on mobile)
- 3 placeholder cards: FastAPI+Docker CV serving API, HuggingFace Spaces demo, open-source remote sensing toolkit
- Tech tags, GitHub / Demo links per card

---

### 7. `/blog` — Blog (MDX)

- Post list: title, date, auto reading time, tags, excerpt
- 2 placeholder MDX posts in `content/blog/`:

  `getting-started-with-vision-transformers.mdx`
  ```
  ---
  title: "Getting Started with Vision Transformers"
  date: "2024-03-01"
  tags: ["computer-vision", "transformers", "deep-learning"]
  excerpt: "A practical introduction to ViT and how it compares to CNNs for image classification tasks."
  ---
  ```
  (~300 words placeholder body with headings, code block, callout)

  `remote-sensing-object-detection-guide.mdx`
  ```
  ---
  title: "Object Detection in Remote Sensing: Challenges and Approaches"
  date: "2024-02-10"
  tags: ["remote-sensing", "object-detection", "aerial-imagery"]
  excerpt: "Why standard detection models struggle with aerial imagery, and how to adapt them for overhead perspectives."
  ---
  ```
  (~300 words placeholder body)

- Individual post `/blog/[slug]`: MDX with `rehype-pretty-code` + `shiki` syntax highlighting, auto table of contents, reading time, tags, Back to Blog link

---

### 8. `/contact` — Contact

- Email: `[EMAIL]@utwente.nl`
- UT profile, GitHub, LinkedIn, Google Scholar links
- Static mailto "form" — no backend required

---

## Components to Build

| Component | Description |
|-----------|-------------|
| `Navbar` | Initials logo, nav links (Home · About · Research · Industry · Projects · Blog · Contact), dark/light toggle, sticky, mobile hamburger. Active link highlighted. Industry link has subtle red dot indicator. |
| `Footer` | Copyright, social links |
| `MediaPlaceholder` | `props: label, aspectRatio ('16/9' or '4/3'), className`. Gray bg, dashed border, centered italic muted label. Easy to swap for real `<video>` or `<Image>` later. |
| `BeforeAfterSlider` | Two images with draggable center divider. Pure CSS + vanilla JS — no library. |
| `IndustryProjectCard` | Wide horizontal card for `/industry` list. Media placeholder left, content right. |
| `ProjectNav` | Prev / Next navigation between `/industry/[slug]` pages |
| `PublicationCard` | Collapsible abstract, venue badge, BibTeX copy-to-clipboard |
| `ProjectCard` | Personal projects grid card |
| `BlogCard` | Title, date, reading time, tags, excerpt |
| `ThemeToggle` | Sun/moon icon, `next-themes` |
| `AvatarPlaceholder` | Initials circle fallback |
| `Tag` / `Badge` | Reusable chip with color variants |
| `TechChips` | Row of small gray tech tags |
| `CalloutBox` | MDX info/warning/tip blocks |
| `TableOfContents` | Auto-generated from MDX headings |

---

## Data Files

### `data/publications.json`
3 placeholder entries:
```json
[
  {
    "title": "[PLACEHOLDER] Efficient Object Detection in Low-Light Aerial Conditions",
    "authors": "[YOUR NAME], Co-Author A, Co-Author B",
    "venue": "CVPR 2024",
    "year": 2024,
    "type": "conference",
    "abstract": "Lorem ipsum abstract placeholder.",
    "pdf": "#", "arxiv": "#", "code": "#",
    "bibtex": "@inproceedings{placeholder2024,\n  title={...},\n  author={...},\n  booktitle={CVPR},\n  year={2024}\n}"
  },
  {
    "title": "[PLACEHOLDER] Self-Supervised Representation Learning for Remote Sensing",
    "authors": "[YOUR NAME], Supervisor Name",
    "venue": "NeurIPS 2023",
    "year": 2023,
    "type": "conference",
    "abstract": "Lorem ipsum abstract placeholder.",
    "pdf": "#", "arxiv": "#", "code": null,
    "bibtex": "@inproceedings{placeholder2023,\n  title={...},\n  author={...},\n  booktitle={NeurIPS},\n  year={2023}\n}"
  },
  {
    "title": "[PLACEHOLDER] A Survey of Vision Transformers for Remote Sensing Dense Prediction",
    "authors": "[YOUR NAME], et al.",
    "venue": "IEEE TPAMI",
    "year": 2023,
    "type": "journal",
    "abstract": "Lorem ipsum abstract placeholder.",
    "pdf": "#", "arxiv": "#", "code": null,
    "bibtex": "@article{placeholder2023b,\n  title={...},\n  author={...},\n  journal={IEEE TPAMI},\n  year={2023}\n}"
  }
]
```

### `data/industry-projects.ts`
Strongly typed TypeScript array (not JSON). Define `IndustryProject` type with fields:
`slug`, `title`, `category`, `categoryColor`, `shortDescription`, `overview`, `tech: string[]`,
`problem`, `approach`, `results`, `metrics: {label: string, value: string}[]`,
`primaryMedia: {label, aspectRatio, type}`,
`secondaryMedia: {label, aspectRatio, type}[]`,
`additionalMedia?: {label, aspectRatio, type}`

Populate with all 5 projects using the placeholder content defined above.
`generateStaticParams` for `/industry/[slug]` reads slugs from this array.

---

## File Structure

```
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/page.tsx
│   ├── research/page.tsx
│   ├── industry/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── projects/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   ├── MediaPlaceholder.tsx
│   ├── BeforeAfterSlider.tsx
│   ├── IndustryProjectCard.tsx
│   ├── ProjectNav.tsx
│   ├── PublicationCard.tsx
│   ├── ProjectCard.tsx
│   ├── BlogCard.tsx
│   ├── AvatarPlaceholder.tsx
│   ├── Tag.tsx
│   ├── TechChips.tsx
│   ├── CalloutBox.tsx
│   └── TableOfContents.tsx
├── content/blog/
│   ├── getting-started-with-vision-transformers.mdx
│   └── remote-sensing-object-detection-guide.mdx
├── data/
│   ├── publications.json
│   └── industry-projects.ts
├── public/
│   ├── avatar.jpg
│   ├── cv.pdf
│   └── industry/
│       ├── object-detection-aerial/      ← drop media files here
│       ├── semantic-segmentation-maps/
│       ├── change-detection/
│       ├── similarity-search/
│       └── image-projection/
├── lib/
│   ├── mdx.ts
│   └── reading-time.ts
├── styles/globals.css
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## Key Implementation Notes

1. **Dark mode:** `next-themes` with `attribute="class"`. Tailwind `darkMode: "class"`.
2. **Industry data:** Load from `data/industry-projects.ts`. Adding a project = add one object to the array.
3. **MediaPlaceholder:** When real media is added, replace with `<video autoPlay loop muted playsInline>` or `next/image` inside the same aspect-ratio wrapper div. The slot dimensions must not change.
4. **BeforeAfterSlider:** Pure CSS + JS drag. No library. Used on segmentation project detail page.
5. **SEO:** `generateMetadata` on every page. Open Graph. `robots.txt` + `sitemap.xml` via route handlers.
6. **Performance:** `next/image` everywhere, `next/font` for Inter, no heavy client libs.
7. **Accessibility:** `aria-labels` on all interactive elements, WCAG AA contrast, keyboard navigable.
8. **Navbar active state:** Highlight current route. Industry link gets a subtle `#D01212` dot only.

---

## Placeholder Personal Info

| Field | Placeholder |
|-------|-------------|
| Full name | `[YOUR NAME]` |
| Email | `[EMAIL]@utwente.nl` |
| GitHub | `github.com/[USERNAME]` |
| LinkedIn | `linkedin.com/in/[USERNAME]` |
| Google Scholar ID | `[SCHOLAR_ID]` |
| UT profile | `people.utwente.nl/[USERNAME]` |
| PhD start year | `[START YEAR]` |

---

## Suggested Build Order

1. `npx create-next-app@latest` (TypeScript + Tailwind + App Router)
2. Install deps: `next-themes` `gray-matter` `next-mdx-remote` `rehype-pretty-code` `shiki`
3. Global layout + Navbar + Footer + ThemeToggle
4. `data/industry-projects.ts` — full typed data
5. Home page (Hero, dual affiliation badges, recent strip)
6. About page (timeline with Baykar)
7. Industry overview `/industry`
8. Industry detail `/industry/[slug]` with MediaPlaceholder + BeforeAfterSlider
9. Research page + publications JSON
10. Projects page
11. Blog MDX infrastructure + posts
12. Contact page
13. SEO: metadata, sitemap, robots
14. Final pass: responsive, dark mode, a11y

---

## Definition of Done

- [ ] All pages render without errors in light and dark mode
- [ ] `/industry` shows hero + all 5 project preview cards
- [ ] `/industry/[slug]` renders correctly for all 5 slugs
- [ ] `MediaPlaceholder` renders at correct 16:9 and 4:3 ratios
- [ ] `BeforeAfterSlider` works on desktop and touch/mobile
- [ ] `ProjectNav` prev/next works across all industry projects
- [ ] Blog MDX renders with syntax-highlighted code blocks
- [ ] Publications JSON loads, BibTeX copy works
- [ ] Dark/light toggle persists on page refresh
- [ ] `npm run build` — zero errors
- [ ] Zero TypeScript errors
- [ ] All `[PLACEHOLDER]` and `[BRACKETS]` clearly present for easy find & replace
- [ ] `public/industry/[slug]/` empty folders created, ready for media files
