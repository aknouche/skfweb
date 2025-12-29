# Claude Code Best Practices - SKF Website

## Project Overview
Official website for Svenska Kickboxningsförbundet (Swedish Kickboxing Federation). Information-first approach with phased development.

## Design Principles
- **Trust & Transparency**: Clean, calm layout that inspires confidence
- **Hierarchy over Features**: Clear information structure before advanced functionality
- **Reusability**: Few page templates, maximum component reuse
- **Information Site First**: Not a complex system - focus on content delivery

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Fonts**: Inter (Frutiger fallback)

## Brand Guidelines (SKF Grafisk Profil)

**CRITICAL: These guidelines are MANDATORY and based on the official SKF Grafisk Profil. No deviations allowed.**

### Core Brand Principles
1. **Clarity** (Tydlighet) - Sender must always be easily identifiable
2. **Consistency** (Konsekvens) - Same visual expression regardless of channel
3. **Simplicity** (Enkelhet) - Easy to follow without specialized design knowledge
4. **Sustainability** (Hållbarhet) - Works long-term, not trend-dependent

### Color System
```typescript
// EXACT color codes - NEVER deviate
const BRAND_COLORS = {
  primary: {
    name: 'SKF Blue',
    hex: '#0F2454',
    rgb: 'rgb(15, 36, 84)',
    cmyk: '98/87/17/4',
    usage: 'Primary background, headings, main brand areas'
  },
  accent: {
    name: 'SKF Yellow',
    hex: '#F5DC32',
    rgb: 'rgb(245, 220, 50)',
    cmyk: '4/6/92/0',
    usage: 'Accent color - USE SPARINGLY for CTAs, highlights, lines'
  },
  text: {
    name: 'Black',
    hex: '#000000',
    rgb: 'rgb(0, 0, 0)',
    cmyk: '0/0/0/100',
    usage: 'Body text, informational text, contrasting elements'
  }
} as const;
```

**Color Usage Rules:**
- ✅ Blue as primary background, heading color, or main surfaces
- ✅ Yellow SPARINGLY as accent for important elements (CTAs, lines, highlights)
- ✅ Black primarily for body text
- ❌ Yellow must NEVER dominate large areas
- ❌ NO secondary colors without approval
- ❌ Yellow text on light backgrounds (poor contrast)
- ✅ Dark text on light background for longer text
- ✅ White/light text on blue background allowed for headings

### Typography System
```typescript
// PRIMARY: Frutiger (professional production)
const TYPOGRAPHY = {
  primary: {
    family: 'Frutiger',
    weights: {
      heading: 'Frutiger LT 75 Black',      // H1, main titles
      subheading: 'Frutiger LT 65 Bold',    // H2, H3, section titles
      body: 'Frutiger LT 55 Roman',         // Body text, descriptions
      caption: 'Frutiger LT 55 Roman',      // Smaller text
    }
  },
  // FALLBACK: When Frutiger unavailable (Office, web tools)
  fallback: {
    family: 'Inter, Arial',
    note: 'Use same hierarchy as Frutiger'
  }
} as const;
```

**Typography Rules:**
- ✅ Frutiger for all professional communication
- ✅ Inter/Arial ONLY when Frutiger technically unavailable
- ✅ Left-aligned text (centered only for short headers)
- ✅ Generous line spacing for readability
- ✅ Maintain clear hierarchy (H1 > H2 > H3 > body)
- ❌ NEVER mix multiple typefaces
- ❌ NO decorative or informal fonts

### Logo Usage
**Primary Logo:**
- Symbol (figure + circular emblem) + logotype text
- ALWAYS use in official federation communication

**Logo Variants (ONLY these approved):**
- **Color version** - Primary choice (always)
- **Black version** - B&W print only
- **Negative version** - Dark/colored backgrounds

**Logo Rules:**
- ✅ Maintain clear zone (frizon) around logo - no text/graphics
- ✅ Never smaller than minimum size (readability)
- ✅ Consistent placement within same material
- ❌ NEVER change logo colors
- ❌ NEVER distort proportions
- ❌ NEVER rotate logo
- ❌ NEVER add shadows, effects, or outlines
- ❌ NEVER place on low-contrast backgrounds
- ❌ NEVER combine with other elements to create new symbol

### Image Guidelines
**Image Strategy:**
- Activity and movement (aktivitet och rörelse)
- Presence and intensity (närvaro och intensitet)
- Focus on athletic performance (idrottslig prestation)
- Documentary and authentic over staged

**Approved Subjects:**
- Training in club/national team environments
- Competition and match moments
- Movement, technique, power transfer
- Active practitioners in realistic sports settings

**Image Quality Requirements:**
- ✅ High technical quality and sharpness
- ✅ Clear main focus
- ✅ Natural light or even lighting
- ✅ Balanced contrast
- ✅ Colors harmonize with brand palette
- ❌ NO generic stock photos without connection to sport
- ❌ NO low-resolution or blurry images
- ❌ NO overly edited/filtered images
- ❌ NO staged group photos without context

### Graphic Elements
**Layout Principles:**
- Clear hierarchy
- Generous whitespace (active design choice)
- Consistent placement of recurring elements
- Content always prioritized over decoration

**Allowed Elements:**
- Simple, clear forms
- Stable lines and surfaces
- Structure, discipline, movement
- Color fields for structure/separation (blue primary, yellow accent)
- Straight lines as dividers/markers

**Restrictions:**
- ❌ NO custom graphic elements outside manual
- ❌ NO patterns, illustrations, or symbols not approved
- ❌ NO combining elements in new ways

## Code Style

### Component Structure
```typescript
// Always use this pattern for components
interface ComponentProps {
  // Props here
}

export function ComponentName({ prop }: ComponentProps) {
  return (
    // JSX here
  )
}
```

### File Organization
```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── ui/          # Reusable UI components (Button, Card, etc.)
│   ├── layout/      # Header, Footer, Navigation
│   └── sections/    # Page-specific sections (Hero, NewsGrid, etc.)
└── lib/             # Utilities, constants, types
```

### Naming Conventions
- **Components**: PascalCase (`Button.tsx`, `NewsCard.tsx`)
- **Utilities**: camelCase (`formatDate.ts`, `apiHelpers.ts`)
- **Constants**: SCREAMING_SNAKE_CASE (`BRAND_COLORS`, `API_ENDPOINTS`)
- **Types/Interfaces**: PascalCase with descriptive names (`NewsArticle`, `CompetitionEvent`)

## Development Guidelines

### Component Best Practices
1. **Keep components small and focused** - Single responsibility
2. **Extract reusable logic** - Create custom hooks for complex state
3. **Use TypeScript strictly** - No `any` types without good reason
4. **Semantic HTML** - Use proper elements (`nav`, `article`, `section`, etc.)
5. **Accessibility first** - ARIA labels, keyboard navigation, contrast ratios

### Styling with Tailwind
```typescript
// ALWAYS use exact brand colors
// Good - Exact brand tokens
<button className="bg-[#0F2454] text-white hover:bg-[#0F2454]/90">
<div className="bg-[#F5DC32]">  // Yellow accent - use sparingly!
<p className="text-[#000000]">  // Black text

// Bad - Random colors (NEVER DO THIS)
<button className="bg-blue-800 text-white">
<div className="bg-yellow-400">

// Good - Typography
<h1 className="font-bold text-4xl">  // Inter Bold (Frutiger fallback)
<p className="text-base">             // Inter Regular

// Bad - Wrong fonts
<h1 className="font-serif">
<p className="font-mono">
```

### Brand Color Implementation in Tailwind Config
```typescript
// tailwind.config.mjs - MUST include exact brand colors
export default {
  theme: {
    extend: {
      colors: {
        'skf-blue': '#0F2454',
        'skf-yellow': '#F5DC32',
        'skf-black': '#000000',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],  // Frutiger fallback
      }
    }
  }
}

// Then use as:
// className="bg-skf-blue text-white"
// className="bg-skf-yellow"  // Use sparingly!
```

### Content Management
- **Hardcoded in P1**: All content can be hardcoded initially
- **Prepare for CMS**: Structure data to easily migrate to Sanity/Contentful later
- **Use TypeScript interfaces**: Define content shapes even for static data

### Performance
- **Image Optimization**: Always use Next.js `<Image>` component
- **Code Splitting**: Let Next.js handle this automatically
- **Font Loading**: Use `next/font` for optimal loading

## Priority-Based Development

### P1 - Core Launch (Current Focus)
Pages to design and build first:
1. **Startsida (Homepage)** - Highest priority
2. **Tävlingar (Competitions)** - Information only, no complex systems
3. **Om Förbundet (About)** - Transparency and trust
4. **Kommittéer (Committees)** - Structure and visibility
5. **Landslaget (National Team)** - Showcase
6. **Nyheter (News)** - Living content

**P1 Philosophy**: Build a fully functional official website with core information. Simple, clear, trustworthy.

### What NOT to Build in P1
- E-commerce/shop integration
- Advanced filtering/search
- Live results/streaming
- User authentication
- Complex database operations
- Multilingual (prepare architecture, implement in P4)

## Common Patterns

### Page Structure
```typescript
export default function PageName() {
  return (
    <main>
      <Hero />
      <ContentSection />
      <CTASection />
    </main>
  )
}
```

### Data Fetching (P1)
```typescript
// Static data for P1
const NEWS_ARTICLES = [
  { id: 1, title: '...', date: '...' },
  // ...
]

// Prepare for CMS migration
interface NewsArticle {
  id: number
  title: string
  date: string
  category: 'Förbund' | 'Tävling' | 'Landslag' | 'Kommittéer'
}
```

## Git Workflow
- **Branch naming**: `feature/page-name` or `fix/issue-description`
- **Commit messages**: Conventional commits (feat:, fix:, chore:, docs:)
- **PR process**: Keep PRs focused and reviewable

## Testing Strategy
- **P1**: Manual testing, visual regression
- **P2+**: Add unit tests for utilities, integration tests for forms

## Accessibility Requirements
- **WCAG 2.1 AA compliance** minimum
- **Keyboard navigation** for all interactive elements
- **Screen reader support** with proper ARIA labels
- **Color contrast** meets AA standards (especially with brand colors)

## SEO Considerations
- **Semantic HTML** throughout
- **Meta tags** on all pages (use Next.js Metadata API)
- **Alt text** for all images
- **Proper heading hierarchy** (h1 → h2 → h3)

## Questions to Ask Before Building
1. Is this P1, P2, P3, or P4?
2. Can this be a reusable component?
3. Does this follow brand guidelines?
4. Is this accessible?
5. Will this work with a CMS later?

## Common Pitfalls to Avoid
- ❌ Adding features not in current priority
- ❌ Over-engineering simple pages
- ❌ Deviating from brand colors
- ❌ Creating too many one-off components
- ❌ Ignoring accessibility
- ❌ Building P2+ features in P1

## Resources
- Design System: SKF Grafisk Profil
- Framework: [Next.js Documentation](https://nextjs.org/docs)
- Styling: [Tailwind CSS](https://tailwindcss.com/docs)
- Accessibility: [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## When in Doubt
Keep it simple. This is an information website first. Trust and clarity over complexity.

---

## Brand Compliance Checklist

Before committing any design or component, verify:

### Colors ✓
- [ ] Only using #0F2454 (blue), #F5DC32 (yellow), #000000 (black)
- [ ] Yellow used sparingly, not dominating large areas
- [ ] Proper contrast for all text (dark on light preferred)
- [ ] No arbitrary colors added

### Typography ✓
- [ ] Using Inter (Frutiger fallback in web)
- [ ] Clear hierarchy maintained (H1 > H2 > H3 > body)
- [ ] Left-aligned text for body content
- [ ] Generous line spacing
- [ ] No mixing of multiple typefaces

### Logo ✓
- [ ] Correct variant used (color/black/negative)
- [ ] Sufficient clear zone (frizon) around logo
- [ ] Not modified, rotated, or distorted
- [ ] No effects, shadows, or outlines
- [ ] Placed on appropriate contrast background

### Images ✓
- [ ] Shows authentic kickboxing activity
- [ ] High technical quality
- [ ] Natural/realistic (not over-edited)
- [ ] Clear focus and subject
- [ ] Harmonizes with brand colors

### Layout ✓
- [ ] Clear visual hierarchy
- [ ] Generous whitespace
- [ ] Content prioritized over decoration
- [ ] Simple, functional forms
- [ ] Consistent element placement

### Accessibility ✓
- [ ] WCAG 2.1 AA compliant
- [ ] Keyboard navigable
- [ ] Proper ARIA labels
- [ ] Sufficient color contrast
- [ ] Semantic HTML

### Priority Alignment ✓
- [ ] Feature is in current priority (P1/P2/P3/P4)
- [ ] Not over-engineered
- [ ] Reusable where appropriate
- [ ] CMS-ready data structure

**If ANY checkbox fails, do not proceed. Fix the issue first.**

---

## Key Reminders

1. **This is an INFORMATION site, not a complex system** - Keep it simple
2. **Brand guidelines are MANDATORY** - No creative deviations
3. **Yellow is an ACCENT color** - Use sparingly
4. **Frutiger is the real font** - Inter is just the web fallback
5. **Build for P1 first** - Don't jump ahead to advanced features
6. **Trust and clarity** - Professional, calm, authoritative

## Quick Brand Reference

```typescript
// Copy-paste ready constants
export const SKF_COLORS = {
  blue: '#0F2454',
  yellow: '#F5DC32',
  black: '#000000',
} as const;

export const SKF_FONTS = {
  primary: 'Inter',  // Frutiger fallback for web
  fallback: 'Arial, sans-serif',
} as const;
```
