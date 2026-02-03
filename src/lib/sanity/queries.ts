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
// COMPETITION QUERIES
// =============================================================================

export const competitionQueries = {
  all: `*[_type == "competition"] | order(date asc) {
    _id,
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
    image {
      asset->{
        _id,
        url
      },
      alt
    }
  }`,

  upcoming: `*[_type == "competition" && status == "upcoming"] | order(date asc) {
    _id,
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
    image {
      asset->{
        _id,
        url
      },
      alt
    }
  }`,

  bySlug: (slug: string) => `*[_type == "competition" && slug.current == "${slug}"][0] {
    _id,
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
    image {
      asset->{
        _id,
        url
      },
      alt
    },
    documents[] {
      name,
      "url": file.asset->url,
      type
    }
  }`,
};

// =============================================================================
// COMMITTEE QUERIES
// =============================================================================

export const committeeQueries = {
  all: `*[_type == "committee"] | order(name asc) {
    _id,
    "id": committeeId,
    name,
    "slug": slug.current,
    description,
    mandate,
    responsibilities,
    members[] {
      name,
      role,
      email,
      phone,
      image {
        asset->{
          _id,
          url
        }
      }
    },
    "contact": {
      "email": contactEmail,
      "phone": contactPhone
    }
  }`,

  bySlug: (slug: string) => `*[_type == "committee" && slug.current == "${slug}"][0] {
    _id,
    "id": committeeId,
    name,
    "slug": slug.current,
    description,
    mandate,
    responsibilities,
    members[] {
      name,
      role,
      email,
      phone,
      image {
        asset->{
          _id,
          url
        }
      }
    },
    "contact": {
      "email": contactEmail,
      "phone": contactPhone
    },
    documents[] {
      name,
      "url": file.asset->url
    }
  }`,

  byId: (id: string) => `*[_type == "committee" && committeeId == "${id}"][0] {
    _id,
    "id": committeeId,
    name,
    "slug": slug.current,
    description,
    mandate,
    responsibilities,
    members[] {
      name,
      role,
      email,
      phone,
      image {
        asset->{
          _id,
          url
        }
      }
    },
    "contact": {
      "email": contactEmail,
      "phone": contactPhone
    }
  }`,
};
