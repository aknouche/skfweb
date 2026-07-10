export const dynamic = 'force-dynamic';

import { Hero } from '@/components/sections/Hero';
import { UpcomingCompetitions } from '@/components/sections/UpcomingCompetitions';
import { LatestNews } from '@/components/sections/LatestNews';

export default function HomePage() {
  return (
    <>
      <Hero />
      <LatestNews />
      <UpcomingCompetitions />
    </>
  );
}
