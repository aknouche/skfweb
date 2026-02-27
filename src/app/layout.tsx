import type { Metadata } from 'next';
import { HeaderWrapper } from '@/components/layout/HeaderWrapper';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/ui/CookieBanner';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Svenska Kickboxningsförbundet',
    template: '%s | Svenska Kickboxningsförbundet',
  },
  description:
    'Svenska Kickboxningsförbundet - Sveriges nationella förbund för kickboxning',
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    siteName: 'Svenska Kickboxningsförbundet',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <head>
        {/* Google Fonts - Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans" suppressHydrationWarning>
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-skf-yellow focus:px-4 focus:py-2 focus:text-skf-blue focus:font-medium focus:outline-none"
        >
          Hoppa till innehåll
        </a>
        <HeaderWrapper />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
