import { NextRequest, NextResponse } from 'next/server';

// In-memory store: IP → { count, windowStart }
// Note: this resets on each cold start. For persistent rate limiting use Vercel KV or Upstash Redis.
const rateLimitStore = new Map<string, { count: number; windowStart: number }>();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;       // max contact form submissions per IP per window

function getIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  );
}

export function middleware(req: NextRequest) {
  // Only rate-limit the contact form server action path
  if (req.method === 'POST' && req.nextUrl.pathname === '/kontakt') {
    const ip = getIp(req);
    const now = Date.now();
    const entry = rateLimitStore.get(ip);

    if (!entry || now - entry.windowStart > WINDOW_MS) {
      rateLimitStore.set(ip, { count: 1, windowStart: now });
    } else {
      entry.count += 1;
      if (entry.count > MAX_REQUESTS) {
        return new NextResponse(
          JSON.stringify({ error: 'För många förfrågningar. Försök igen om en stund.' }),
          { status: 429, headers: { 'Content-Type': 'application/json' } },
        );
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/kontakt'],
};
