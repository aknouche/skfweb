/**
 * Homepage
 * Startsida för Svenska Kickboxningsförbundet
 *
 * Structure optimized for user experience:
 * - Hero: Brand introduction
 * - QuickActions: Primary CTAs for key user journeys
 * - UpcomingCompetitions: Featured events (2 items)
 * - LatestNews: Recent updates (2 items)
 *
 * Note: PartnersSection moved to P2 (placeholder content removed)
 */

import { Hero } from '@/components/sections/Hero';
import { QuickActions } from '@/components/sections/QuickActions';
import { UpcomingCompetitions } from '@/components/sections/UpcomingCompetitions';
import { LatestNews } from '@/components/sections/LatestNews';

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickActions />
      <UpcomingCompetitions />
      <LatestNews />
    </>
  );
}
