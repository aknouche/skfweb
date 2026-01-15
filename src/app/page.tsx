/**
 * Homepage
 * Startsida för Svenska Kickboxningsförbundet
 */

import { Hero } from '@/components/sections/Hero';
import { QuickActions } from '@/components/sections/QuickActions';
import { UpcomingCompetitions } from '@/components/sections/UpcomingCompetitions';
import { LatestNews } from '@/components/sections/LatestNews';
import { PartnersSection } from '@/components/sections/PartnersSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickActions />
      <UpcomingCompetitions />
      <LatestNews />
      <PartnersSection />
    </>
  );
}
