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

  // RFC 5987 encoding is required for non-ASCII filenames (e.g. Swedish å/ä/ö).
  // Provide both a safe ASCII fallback and the UTF-8 encoded name so all
  // browsers pick one they can handle.
  const asciiFallback = filename.replace(/[^\x20-\x7E]/g, '_');
  const encoded = encodeURIComponent(filename).replace(/'/g, '%27');

  return new Response(upstream.body, {
    headers: {
      'Content-Type': contentType,
      'Content-Disposition': `attachment; filename="${asciiFallback}"; filename*=UTF-8''${encoded}`,
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
