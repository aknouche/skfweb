/**
 * Committee detail page - statically generated at build time
 */

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCommitteeBySlug, getAllCommittees } from '@/lib/data/committees';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllCommittees().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const committee = getCommitteeBySlug(slug);

  if (!committee) {
    return { title: 'Kommitté hittades inte | Svenska Kickboxningsförbundet' };
  }

  return {
    title: `${committee.name} | Svenska Kickboxningsförbundet`,
    description: committee.description,
  };
}

export default async function CommitteePage({ params }: Props) {
  const { slug } = await params;
  const committee = getCommitteeBySlug(slug);

  if (!committee) {
    notFound();
  }

  const namedMembers = committee.members.filter((m) => m.name && m.name !== m.role);

  return (
    <main className="py-12 lg:py-16">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-skf-blue lg:text-4xl">{committee.name}</h1>

        <div className="mt-6 space-y-4 text-lg text-gray-700">
          <p>{committee.description}</p>
        </div>

        <div className="mx-auto my-8 h-1 w-16 bg-skf-yellow"></div>

        <div className="mt-10 space-y-12 text-gray-700">
          {committee.mandate && (
            <section>
              <h2 className="mb-4 text-2xl font-bold text-skf-blue">Uppdrag</h2>
              <p>{committee.mandate}</p>
            </section>
          )}

          {committee.responsibilities.length > 0 && (
            <section>
              <h2 className="mb-4 text-2xl font-bold text-skf-blue">Ansvarsområden</h2>
              <ul className="ml-6 list-disc space-y-2">
                {committee.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </section>
          )}

          {namedMembers.length > 0 && (
            <section>
              <h2 className="mb-4 text-2xl font-bold text-skf-blue">Ledamöter</h2>
              <div className="space-y-3">
                {namedMembers.map((member, i) => (
                  <div key={i} className="rounded-lg border border-gray-200 p-4">
                    <p className="font-semibold text-gray-900">{member.name}</p>
                    {member.role && <p className="text-sm text-gray-600">{member.role}</p>}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="mt-1 block text-sm text-skf-blue hover:underline"
                      >
                        {member.email}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {committee.contact?.email && (
            <section>
              <h2 className="mb-4 text-2xl font-bold text-skf-blue">Kontakt</h2>
              <a
                href={`mailto:${committee.contact.email}`}
                className="text-skf-blue hover:underline"
              >
                {committee.contact.email}
              </a>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
