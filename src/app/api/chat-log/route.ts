import { NextRequest } from 'next/server';

const MAX_QUERY_LENGTH = 300;

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body || typeof body.query !== 'string' || !body.query.trim()) {
    return new Response('Invalid payload', { status: 400 });
  }

  const query = body.query.trim().slice(0, MAX_QUERY_LENGTH);
  const matchedTopicId =
    typeof body.matchedTopicId === 'string' ? body.matchedTopicId : null;

  console.log(
    JSON.stringify({
      event: 'chat_query',
      matched: matchedTopicId !== null,
      matchedTopicId,
      query: matchedTopicId ? undefined : query,
    })
  );

  return new Response(null, { status: 204 });
}
