/**
 * Committee detail page - statically generated at build time
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCommitteeBySlug, getAllCommittees } from '@/lib/data/committees';
import MemberAvatar from '@/components/organisation/MemberAvatar';

interface Props {
  params: Promise<{ slug: string }>;
}

/** Swedish numbers are stored in local format (0723-244416) but linked in E.164 */
function telHref(phone: string) {
  const digits = phone.replace(/\D/g, '');
  return digits.startsWith('0') ? `tel:+46${digits.slice(1)}` : `tel:${digits}`;
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

  const [chair, ...restMembers] = committee.members;
  const namedMembers = restMembers.filter((m) => m.name && m.name !== m.role);

  return (
    <main className="py-12 lg:py-16">
      <div className="container-narrow">
        <Link
          href="/kommitteer/organisation"
          className="inline-flex items-center gap-1 text-sm font-medium text-skf-blue hover:underline"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Tillbaka till organisationskartan
        </Link>

        <h1 className="mt-4 text-3xl font-bold text-skf-blue lg:text-4xl">{committee.name}</h1>

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

          {chair && (
            <section>
              <h2 className="mb-4 text-2xl font-bold text-skf-blue">Ledning</h2>
              <div className="flex flex-col items-center gap-6 rounded-xl border border-gray-200 p-6 sm:flex-row sm:items-start">
                <MemberAvatar member={chair} />
                <div className="min-w-0 text-center sm:text-left">
                  <p className="text-lg font-bold text-gray-900">
                    {chair.name && chair.name !== chair.role ? chair.name : 'Namn meddelas inom kort'}
                  </p>
                  <p className="text-sm font-medium text-skf-blue">{chair.role}</p>

                  <div className="mt-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Idrottsbakgrund &amp; CV
                    </h3>
                    {chair.bio?.length ? (
                      <div className="mt-1 space-y-3 text-gray-600">
                        {chair.bio.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-1 text-gray-600">
                        Profil och idrottsbakgrund publiceras inom kort.
                      </p>
                    )}
                  </div>

                  {chair.highlights && chair.highlights.length > 0 && (
                    <div className="mt-4 border-l-4 border-skf-yellow pl-4 text-left">
                      <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                        I korthet
                      </h3>
                      <ul className="mt-1 space-y-1 text-sm text-gray-600">
                        {chair.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {(chair.email || chair.phone) && (
                    <div className="mt-4 flex flex-col items-center gap-1 sm:flex-row sm:gap-4">
                      {chair.email && (
                        <a href={`mailto:${chair.email}`} className="text-sm text-skf-blue hover:underline">
                          {chair.email}
                        </a>
                      )}
                      {chair.phone && (
                        <a href={telHref(chair.phone)} className="text-sm text-skf-blue hover:underline">
                          {chair.phone}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {namedMembers.length > 0 && (
            <section>
              <h2 className="mb-4 text-2xl font-bold text-skf-blue">Övriga ledamöter</h2>
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
