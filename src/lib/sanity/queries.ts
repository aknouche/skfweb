/**
 * Sanity GROQ Queries
 * Centralized queries for fetching content
 */

// =============================================================================
// NEWS QUERIES
// =============================================================================

export const newsQueries = {
  all: `*[_type == "news"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    content,
    category,
    publishedAt,
    author,
    coverImage {
      asset->{
        _id,
        url
      },
      alt
    },
    tags,
    featured
  }`,

  latest: (limit: number) => `*[_type == "news"] | order(publishedAt desc)[0...${limit}] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    coverImage {
      asset->{
        _id,
        url
      },
      alt
    },
    featured
  }`,

  featured: `*[_type == "news" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    coverImage {
      asset->{
        _id,
        url
      },
      alt
    }
  }`,

  bySlug: (slug: string) => `*[_type == "news" && slug.current == "${slug}"][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    content,
    category,
    publishedAt,
    author,
    coverImage {
      asset->{
        _id,
        url
      },
      alt
    },
    documents[] {
      name,
      "url": file.asset->url,
      "mimeType": file.asset->mimeType,
      "originalFilename": file.asset->originalFilename
    },
    tags,
    featured
  }`,

  byCategory: (category: string) => `*[_type == "news" && category == "${category}"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    coverImage {
      asset->{
        _id,
        url
      },
      alt
    }
  }`,
};

// =============================================================================
// EVENT (KALENDER) QUERIES
// =============================================================================

const eventFields = `
  _id,
  eventType,
  title,
  "slug": slug.current,
  description,
  status,
  date,
  endDate,
  location,
  disciplines,
  organizer,
  registrationUrl,
  registrationDeadline,
  price,
  maxParticipants,
  targetLevel,
  instructor,
  targetAudience,
  meetingType,
  agendaUrl,
  minutesUrl,
  externalUrl,
  image {
    asset->{ _id, url },
    alt
  }
`;

export const eventQueries = {
  all: `*[_type == "event"] | order(date asc) { ${eventFields} }`,

  upcoming: `*[_type == "event" && status == "upcoming"] | order(date asc) { ${eventFields} }`,

  byType: (type: string) =>
    `*[_type == "event" && eventType == "${type}"] | order(date asc) { ${eventFields} }`,

  bySlug: (slug: string) => `*[_type == "event" && slug.current == "${slug}"][0] {
    ${eventFields},
    documents[] {
      name,
      "url": file.asset->url,
      type
    }
  }`,
};

// Backward-compat alias
export const competitionQueries = eventQueries;

