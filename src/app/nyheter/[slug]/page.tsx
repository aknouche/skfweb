/**
 * News Article Detail Page
 * Shows a single news article from Sanity CMS or static data
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchNewsBySlug, fetchLatestNews } from '@/lib/data/news';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await fetchNewsBySlug(slug);

  if (!article) {
    return {
      title: 'Nyhet hittades inte',
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export async function generateStaticParams() {
  const news = await fetchLatestNews(50);
  return news.map((article) => ({
    slug: article.slug,
  }));
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await fetchNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  const date = new Date(article.publishedAt);
  const dateStr = date.toLocaleDateString('sv-SE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="bg-white py-16">
      <div className="container-wide">
        {/* Back link */}
        <Link
          href="/nyheter"
          className="mb-8 inline-flex items-center text-sm font-medium text-skf-blue hover:underline"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Tillbaka till nyheter
        </Link>

        {/* Article header */}
        <header className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center gap-4">
            <span className="rounded-full bg-skf-blue/10 px-3 py-1 text-sm font-medium text-skf-blue">
              {article.category}
            </span>
            <time className="text-sm text-gray-500">{dateStr}</time>
          </div>

          <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          {article.author && (
            <p className="mb-8 text-gray-600">Av {article.author}</p>
          )}

          {article.excerpt && (
            <p className="mb-8 text-xl leading-relaxed text-gray-700">
              {article.excerpt}
            </p>
          )}
        </header>

        {/* Article content */}
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-skf-blue">
            {/* For now, render content as plain text with basic formatting */}
            {article.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return (
                  <h2 key={index} className="mt-8 text-2xl font-bold text-gray-900">
                    {paragraph.replace('# ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h3 key={index} className="mt-6 text-xl font-bold text-gray-900">
                    {paragraph.replace('## ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="ml-4 text-gray-700">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              }
              if (paragraph.trim()) {
                return (
                  <p key={index} className="mt-4 text-gray-700">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-12 border-t border-gray-200 pt-8">
              <h4 className="mb-4 text-sm font-medium text-gray-500">Taggar</h4>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
