/**
 * HeaderWrapper - Server Component
 *
 * Fetches dynamic navigation data from Sanity CMS and passes it to the Header.
 * This allows the Header to display dynamic content (committees, news, competitions)
 * from the CMS while keeping the Header as a client component for interactivity.
 */

import { Header } from './Header';
import { fetchDynamicNavigation, getStaticNavigation } from '@/lib/data/navigation';

export async function HeaderWrapper() {
  let navigation;

  try {
    // Fetch dynamic navigation from Sanity
    navigation = await fetchDynamicNavigation();
  } catch (error) {
    // Fall back to static navigation on error
    console.error('Failed to fetch dynamic navigation:', error);
    navigation = getStaticNavigation();
  }

  return <Header navigation={navigation} />;
}
