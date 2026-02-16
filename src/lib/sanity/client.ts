/**
 * Sanity Client Configuration
 * Used for fetching data from Sanity CMS
 */

import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';

// Sanity image source type
type SanityImageSource = Parameters<ReturnType<typeof createImageUrlBuilder>['image']>[0];

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

/**
 * Check if Sanity is configured
 */
export const isSanityConfigured = Boolean(projectId);

/**
 * Sanity client for fetching data
 */
export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset,
  apiVersion,
  useCdn: false,
});

/**
 * Image URL builder
 */
const builder = createImageUrlBuilder(client);

export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}

/**
 * Helper to safely fetch from Sanity
 * Returns null if Sanity is not configured
 */
export async function sanityFetch<T>(query: string, params = {}): Promise<T | null> {
  if (!isSanityConfigured) {
    return null;
  }

  try {
    return await client.fetch<T>(query, params, {
      next: { revalidate: 0 },
    });
  } catch (error) {
    console.error('Sanity fetch error:', error);
    return null;
  }
}
