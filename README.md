# Svenska Kickboxningsförbundet - Official Website

Official website for Svenska Kickboxningsförbundet (Swedish Kickboxing Federation).

## Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **TypeScript**: For type safety
- **CMS**: Sanity/Contentful (planned)

## Design System

Based on SKF Grafisk Profil:

| Token | Value | Usage |
|-------|-------|-------|
| Primary Blue | `#0F2454` | Main brand color |
| Accent Yellow | `#F5DC32` | Accents, CTAs |
| Black | `#000000` | Text |
| Font | Inter (Frutiger fallback) | All text |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/         # Button, Card, Logo
│   ├── layout/     # Header, Footer
│   └── sections/   # Hero, NewsGrid (future)
├── layouts/        # BaseLayout
├── pages/          # Route pages
├── lib/            # Constants, utilities
├── styles/         # Global CSS
└── content/        # Markdown content (future)
```

## Development Phases

- **Phase 1 (Current)**: Foundation, basic pages
- **Phase 2**: CMS integration, content pages
- **Phase 3**: Advanced features
- **Phase 4**: Multilingual support
