import { NextRequest } from 'next/server';

const ALLOWED_ORIGIN = 'https://cdn.sanity.io';

export async function GET(req: NextRequest) {
  const fileUrl = req.nextUrl.searchParams.get('url');
  const filename = req.nextUrl.searchParams.get('filename') || 'bilaga';

  if (!fileUrl || !fileUrl.startsWith(ALLOWED_ORIGIN)) {
    return new Response('Invalid URL', { status: 400 });
  }

  const upstream = await fetch(fileUrl);
  if (!upstream.ok) {
    return new Response('File not found', { status: 404 });
  }

  const contentType =
    upstream.headers.get('content-type') || 'application/octet-stream';

  return new Response(upstream.body, {
    headers: {
      'Content-Type': contentType,
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
