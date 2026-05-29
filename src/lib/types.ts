/**
 * TypeScript Interfaces for SKF Website
 *
 * These interfaces define the data shapes for all content.
 * In P1: Static data in lib/data/
 * In P2+: Migrate to CMS (Sanity/Contentful) with same structure
 */

// =============================================================================
// NEWS & ARTICLES
// =============================================================================

export type NewsCategory = 'Förbund' | 'Tävling' | 'Landslag' | 'Kommittéer';

// Portable Text block type from Sanity
export type PortableTextBlock = {
  _type: 'block';
  _key: string;
  style?: string;
  children: { _type: string; text: string; marks?: string[] }[];
  markDefs?: { _type: string; _key: string }[];
};

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string | PortableTextBlock[]; // String for static, Portable Text for Sanity
  category: NewsCategory;
  publishedAt: string; // ISO date string
  updatedAt?: string;
  author?: string;
  coverImage?: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  tags?: string[];
  featured?: boolean;
  documents?: {
    name: string;
    url: string;
    mimeType?: string;
    originalFilename?: string;
  }[];
}

// =============================================================================
// CALENDAR EVENTS
// =============================================================================

export type CalendarEventType =
  | 'tavling'
  | 'lager'
  | 'utbildning'
  | 'forbundsmote'
  | 'ovrig';

export type EventStatus = 'upcoming' | 'ongoing' | 'completed';

export type CompetitionDiscipline =
  | 'Point Fighting'
  | 'Light Contact'
  | 'Kick Light'
  | 'Full Contact'
  | 'Low Kick'
  | 'K1';

export interface CalendarEvent {
  id: string;
  eventType: CalendarEventType;
  title: string;
  slug: string;
  description: string;
  status: EventStatus;
  date: string; // ISO date
  endDate?: string;
  location?: {
    venue: string;
    city: string;
    address?: string;
  };
  image?: {
    url: string;
    alt: string;
  };
  // Tävling + Läger
  disciplines?: CompetitionDiscipline[];
  // Tävling + Läger + Utbildning
  organizer?: string;
  registrationDeadline?: string;
  registrationUrl?: string;
  // Läger + Utbildning
  price?: number;
  maxParticipants?: number;
  // Läger only
  targetLevel?: 'beginner' | 'intermediate' | 'advanced' | 'elite' | 'all';
  // Utbildning only
  instructor?: string;
  targetAudience?: string;
  // Förbundsmöte only
  meetingType?: 'arsmote' | 'styrelsemote' | 'ovrig';
  agendaUrl?: string;
  minutesUrl?: string;
  // Övrigt only
  externalUrl?: string;
  // Tävling only
  documents?: {
    name: string;
    url: string;
    type: 'rules' | 'program' | 'results' | 'other';
  }[];
}

// Backward-compat aliases
export type Competition = CalendarEvent;
export type CompetitionStatus = EventStatus;

// =============================================================================
// COMMITTEES
// =============================================================================

export type CommitteeType =
  | 'styrelsen'
  | 'kommunikation'
  | 'fou'
  | 'utbildning'
  | 'landslag'
  | 'tavling'
  | 'gradering'
  | 'marknad';

export interface CommitteeMember {
  name: string;
  role: string;
  email?: string;
  phone?: string;
  image?: {
    url: string;
    alt: string;
  };
}

export interface Committee {
  id: CommitteeType;
  name: string;
  slug: string;
  description: string;
  mandate: string; // Uppdrag
  responsibilities: string[]; // Ansvarsområden
  members: CommitteeMember[];
  contact: {
    email?: string;
    phone?: string;
  };
  documents?: {
    name: string;
    url: string;
  }[];
}

// =============================================================================
// NATIONAL TEAM
// =============================================================================

export type TeamCategory = 'senior' | 'junior';
export type TeamDiscipline = CompetitionDiscipline;

export interface TeamMember {
  name: string;
  discipline: TeamDiscipline;
  weightClass?: string;
  image?: {
    url: string;
    alt: string;
  };
  achievements?: string[];
}

export interface NationalTeam {
  category: TeamCategory;
  members: TeamMember[];
  staff?: {
    name: string;
    role: string;
    email?: string;
  }[];
  selectionCriteria?: string;
  trainingSchedule?: string;
}

// =============================================================================
// ORGANIZATION & ABOUT
// =============================================================================

export interface OrganizationDocument {
  id: string;
  title: string;
  category: 'stadgar' | 'policy' | 'protokoll' | 'beslut' | 'other';
  date: string;
  fileUrl: string;
  description?: string;
}

export interface HistoryEntry {
  year: number;
  title: string;
  description: string;
  image?: {
    url: string;
    alt: string;
  };
}

// =============================================================================
// PARTNERS & SPONSORS
// =============================================================================

export type PartnerType = 'main' | 'official' | 'supplier';

export interface Partner {
  id: string;
  name: string;
  type: PartnerType;
  logo: {
    url: string;
    alt: string;
  };
  website?: string;
  description?: string;
}

// =============================================================================
// CMS INTEGRATION HELPERS
// =============================================================================

/**
 * Generic content interface for CMS
 * All content types extend this base
 */
export interface BaseContent {
  _id?: string; // CMS ID
  _type?: string; // CMS content type
  _createdAt?: string;
  _updatedAt?: string;
}

/**
 * Helper type for Sanity/Contentful portable text/rich text
 */
export type RichText = any; // Replace with Sanity PortableText or Contentful RichText type

/**
 * Helper for CMS image references
 */
export interface CMSImage {
  _type?: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
  };
}

// =============================================================================
// API RESPONSE TYPES
// =============================================================================

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ApiError {
  message: string;
  code?: string;
  details?: unknown;
}
