/**
 * Homepage
 * Startsida för Svenska Kickboxningsförbundet
 *
 * Structure optimized for user experience:
 * - Hero: Brand introduction
 * - UpcomingCompetitions: Featured events (2 items)
 * - LatestNews: Recent updates (2 items)
 *
 * Note: PartnersSection moved to P2 (placeholder content removed)
 */

import { Hero } from '@/components/sections/Hero';
import { UpcomingCompetitions } from '@/components/sections/UpcomingCompetitions';
import { LatestNews } from '@/components/sections/LatestNews';

export default function HomePage() {
  return (
    <>
      <Hero />
      <UpcomingCompetitions />
      <LatestNews />
    </>
  );
}
