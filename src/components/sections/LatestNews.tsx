/**
 * Latest News Component
 * Shows latest 3 news articles on homepage
 */

import Link from 'next/link';
import Image from 'next/image';
import { fetchLatestNews } from '@/lib/data/news';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';

export async function LatestNews() {
  // Show only 2 latest news items on homepage for reduced content density
  const news = await fetchLatestNews(2);

  if (news.length === 0) {
    return null;
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Senaste Nyheter" />

        {/* News Grid - 2 items for cleaner homepage */}
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {news.map((article) => {
            const date = new Date(article.publishedAt);
            const dateStr = date.toLocaleDateString('sv-SE', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            });

            // Category styling - using SKF brand colors only
            // All categories use subtle blue variations for brand consistency
            const categoryStyle = 'bg-skf-blue/10 text-skf-blue';

            return (
              <article
                key={article.id}
                className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                {article.coverImage?.url && (
                  <Link href={`/nyheter/${article.slug}`} tabIndex={-1}>
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={article.coverImage.url}
                        alt={article.coverImage.alt || article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </Link>
                )}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${categoryStyle}`}
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
          <Button href="/nyheter">Se alla nyheter</Button>
        </div>
      </div>
    </section>
  );
}
