/**
 * Latest News Component
 * Shows latest 3 news articles on homepage
 */

import Link from 'next/link';
import { getLatestNews } from '@/lib/data/news';

export function LatestNews() {
  const news = getLatestNews(3);

  if (news.length === 0) {
    return null;
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-skf-blue sm:text-4xl">
            Senaste Nyheter
          </h2>
          <div className="mx-auto h-1 w-16 bg-skf-yellow"></div>
        </div>

        {/* News Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((article) => {
            const date = new Date(article.publishedAt);
            const dateStr = date.toLocaleDateString('sv-SE', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            });

            // Category color mapping
            const categoryColors: Record<string, string> = {
              Förbund: 'bg-blue-100 text-blue-800',
              Tävling: 'bg-green-100 text-green-800',
              Landslag: 'bg-purple-100 text-purple-800',
              Kommittéer: 'bg-orange-100 text-orange-800',
            };

            return (
              <article
                key={article.id}
                className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        categoryColors[article.category] || 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {article.category}
                    </span>
                    <time className="text-xs text-gray-500">{dateStr}</time>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-skf-blue">
                    <Link href={`/nyheter/${article.slug}`} className="hover:underline">
                      {article.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="mb-4 line-clamp-3 text-gray-700">{article.excerpt}</p>

                  {/* Read More Link */}
                  <Link
                    href={`/nyheter/${article.slug}`}
                    className="inline-flex items-center text-sm font-medium text-skf-blue hover:underline"
                  >
                    Läs mer →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            href="/nyheter"
            className="inline-flex items-center rounded-lg bg-skf-blue px-6 py-3 font-medium text-white transition-colors hover:bg-skf-blue/90"
          >
            Se alla nyheter
          </Link>
        </div>
      </div>
    </section>
  );
}
