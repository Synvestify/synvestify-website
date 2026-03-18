# Synvestify — Next.js + Tailwind CSS

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Add your logo
Copy your `logo.png` into the `/public` folder:
```
synvestify/
  public/
    logo.png   ← put it here
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production
```bash
npm run build
npm start
```

---

## Project Structure

```
src/
  app/
    layout.js          ← Root layout, metadata, GA, JSON-LD
    page.js            ← Homepage (assembles all sections)
    globals.css        ← Tailwind base + custom utilities

  components/
    Navbar.jsx         ← Fixed nav, dropdown, mobile menu
    Hero.jsx           ← Hero + live SIP calculator
    MarqueeTrustBar.jsx← Scrolling trust ticker
    Philosophy.jsx     ← About / Our Philosophy section
    Services.jsx       ← Numbered services list
    HowItWorks.jsx     ← 4-step process
    Testimonials.jsx   ← 3 client reviews
    Blog.jsx           ← Featured + small blog cards
    FAQ.jsx            ← Accordion FAQ
    CTASection.jsx     ← CTA banner + contact info
    Footer.jsx         ← 4-column footer + disclaimer
    ScrollRevealProvider.jsx ← Scroll animation hook

  hooks/
    useScrollReveal.js ← IntersectionObserver for .reveal elements

tailwind.config.js     ← Custom colors: navy, sky, brand-*
```

## Custom Tailwind Colors

| Token             | Hex       | Usage                  |
|-------------------|-----------|------------------------|
| `navy`            | #1A3C8C   | Buttons, headings      |
| `navy-dark`       | #0a1e4a   | Hero background        |
| `navy-mid`        | #122d6e   | Hover states           |
| `navy-light`      | #1254B0   | Gradients              |
| `sky`             | #00A0DC   | Accents, tags          |
| `sky-light`       | #33B8ED   | Hero italic, highlights|
| `brand-soft`      | #F4F7FF   | Alternate bg sections  |
| `brand-pale`      | #EEF3FF   | Light backgrounds      |
| `brand-border`    | #E2E8F8   | All borders            |

## Pages to Build Next
- [ ] `/about`
- [ ] `/contact`
- [ ] `/calculators`
- [ ] `/blog` (listing)
- [ ] `/blog/[slug]` (post template)
- [ ] `/tax-planning`
- [ ] `/insurance-planning`
- [ ] `/goal-based-planning`
- [ ] `/risk-profiling`
