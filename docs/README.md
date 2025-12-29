# Project Documentation & Assets

This directory contains all project documentation, content sources, and design assets that are **not** directly served on the website.

## Directory Structure

### `/design/` - Design Assets & References
- **sitemap.pdf** - Site structure and page hierarchy
- **brand-guidelines.pdf** - SKF Grafisk Profil (if available as PDF)
- **wireframes/** - Design mockups and wireframes
- **mockups/** - Visual design mockups

### `/content/` - Content Documents for Sections
Content documents, text files, or reference materials for each major section:

- **about/** - Om Förbundet (About Federation)
  - Organization structure
  - Policies and bylaws
  - History
  - Meeting protocols

- **competitions/** - Tävlingar (Competitions)
  - Competition information
  - Rules and regulations
  - Disciplines info

- **committees/** - Kommittéer (Committees)
  - Committee descriptions
  - Member information
  - Mandates and responsibilities

- **national-team/** - Landslaget (National Team)
  - Team rosters
  - Selection criteria
  - Staff information
  - Projects and initiatives

- **news/** - Nyheter (News)
  - News articles (until CMS integration)
  - Press releases

### `/assets/` - Source Files
Original, unprocessed asset files:

- **logos/** - Original logo files (AI, EPS, high-res SVG)
  - Keep original source files here
  - Export web-ready versions to `/public/images/logos/`

## Public Assets

Files in `/public/` are directly accessible on the website:

- `/public/images/logos/` - Web-ready logo files (SVG, PNG)
- `/public/images/hero/` - Hero section images
- `/public/images/competitions/` - Competition photos
- `/public/images/team/` - National team photos
- `/public/images/partners/` - Partner/sponsor logos
- `/public/documents/` - Public PDFs (rules, protocols, documents)

## File Naming Conventions

### Images
- Use lowercase with hyphens: `competition-image-1.jpg`
- Be descriptive: `hero-kickboxing-action.jpg`
- Include dimensions for specific sizes: `logo-horizontal-1200.png`

### Logos
- Format: `skf-logo-[variant]-[size].[ext]`
- Examples:
  - `skf-logo-color.svg`
  - `skf-logo-black.svg`
  - `skf-logo-negative.svg`
  - `skf-logo-horizontal-color.svg`

### Documents
- Use descriptive names: `competition-rules-2025.pdf`
- Include dates for versioned docs: `meeting-protocol-2025-01.pdf`

## Workflow

1. **Add source materials** to `/docs/content/[section]/`
2. **Process for web** (optimize images, export logos)
3. **Move web-ready files** to appropriate `/public/` directory
4. **Reference in code** using `/images/...` paths (Next.js serves from public root)

## Image Optimization

Before adding images to `/public/`:
- Compress images (use tools like ImageOptim, TinyPNG)
- Use appropriate formats:
  - **SVG** for logos and icons
  - **WebP** or **JPG** for photos
  - **PNG** only when transparency needed
- Resize to appropriate dimensions (don't serve oversized images)
- Follow brand guidelines for image quality

## Notes

- Never commit sensitive or internal-only documents to public repo
- Keep original source files in `/docs/assets/`
- Only web-optimized, ready-to-use files go in `/public/`
- This directory (`/docs/`) can be added to `.gitignore` if it contains sensitive materials
