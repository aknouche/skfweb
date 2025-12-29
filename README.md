# Svenska Kickboxningsförbundet - Official Website

Official website for Svenska Kickboxningsförbundet (Swedish Kickboxing Federation).

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) - React framework
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **TypeScript**: For type safety
- **Hosting**: [Vercel](https://vercel.com/)
- **CMS**: Sanity/Contentful (planned)
- **Backend**: Supabase (planned)

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

# Start production server
npm run start
```

## Project Structure

```
src/
├── app/            # Next.js App Router
│   ├── layout.tsx  # Root layout
│   ├── page.tsx    # Homepage
│   └── globals.css # Global styles
├── components/
│   ├── ui/         # Button, Card, Logo
│   ├── layout/     # Header, Footer
│   └── sections/   # Hero, NewsGrid (future)
└── lib/            # Constants, utilities
```

## Development Phases

- **Phase 1 (Current)**: Foundation, basic pages
- **Phase 2**: CMS integration, content pages
- **Phase 3**: Supabase backend, advanced features
- **Phase 4**: Multilingual support
