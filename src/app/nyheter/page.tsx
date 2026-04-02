/**
 * News Listing Page
 * Shows all news articles from Sanity CMS
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { fetchLatestNews } from '@/lib/data/news';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Nyheter',
  description: 'Senaste nyheterna från Svenska Kickboxningsförbundet',
};

export default async function NewsPage() {
  const news = await fetchLatestNews(50);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container-wide">
        <SectionHeader
          title="Nyheter"
          subtitle="Senaste nytt från Svenska Kickboxningsförbundet"
        />

        {news.length === 0 ? (
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-gray-600">Inga nyheter att visa just nu.</p>
          </div>
        ) : (
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {news.map((article) => {
              const date = new Date(article.publishedAt);
              const dateStr = date.toLocaleDateString('sv-SE', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              });

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
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    </Link>
                  )}
                  <div className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="rounded-full bg-skf-blue/10 px-3 py-1 text-xs font-medium text-skf-blue">
                        {article.category}
                      </span>
                      <time className="text-xs text-gray-500">{dateStr}</time>
                    </div>

                    <h2 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-skf-blue">
                      <Link href={`/nyheter/${article.slug}`} className="hover:underline">
                        {article.title}
                      </Link>
                    </h2>

                    <p className="mb-4 line-clamp-3 text-gray-700">{article.excerpt}</p>

                    <Link
                      href={`/nyheter/${article.slug}`}
                      className="inline-flex items-center text-sm font-medium text-skf-blue hover:underline"
                    >
                      Läs mer
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
