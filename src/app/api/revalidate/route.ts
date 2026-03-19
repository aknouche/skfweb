import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

// Timing-safe string comparison to prevent timing attacks on the secret
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

async function revalidate(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret') ?? '';
  const expected = process.env.REVALIDATION_SECRET ?? '';

  if (!expected || !timingSafeEqual(secret, expected)) {
    return new Response('Invalid secret', { status: 401 });
  }

  revalidatePath('/', 'layout');

  return Response.json({ revalidated: true, now: Date.now() });
}

export { revalidate as GET, revalidate as POST };
