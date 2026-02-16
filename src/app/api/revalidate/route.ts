import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

async function revalidate(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');

  if (secret !== process.env.REVALIDATION_SECRET) {
    return new Response('Invalid secret', { status: 401 });
  }

  revalidatePath('/', 'layout');

  return Response.json({ revalidated: true, now: Date.now() });
}

export { revalidate as GET, revalidate as POST };
