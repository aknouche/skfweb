/**
 * OrgChart
 * Visual, clickable organisation chart: Förbundsstämma → Styrelsen →
 * Förbundskoordinator → Kommittéer. Committee nodes link to their detail page.
 */

import Link from 'next/link';
import { getAllCommittees } from '@/lib/data/committees';

const nodeBaseClass =
  'flex min-w-[190px] max-w-xs flex-col items-center gap-1 rounded-xl border-2 border-skf-blue bg-white px-5 py-4 text-center shadow-sm transition-all';

function OrgNode({
  title,
  subtitle,
  href,
}: {
  title: string;
  subtitle: string;
  href?: string;
}) {
  const inner = (
    <>
      <p className="font-bold text-skf-blue">{title}</p>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </>
  );

  if (!href) {
    return (
      <div className={nodeBaseClass} role="group" aria-label={title}>
        {inner}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={`${nodeBaseClass} no-underline hover:-translate-y-0.5 hover:border-skf-yellow hover:shadow-md`}
      aria-label={`Läs mer om ${title}`}
    >
      {inner}
    </Link>
  );
}

function Connector() {
  return <div className="h-8 w-px shrink-0 bg-gray-300" aria-hidden="true" />;
}

export default function OrgChart() {
  const committees = getAllCommittees();
  const styrelsen = committees.find((c) => c.id === 'styrelsen');
  const otherCommittees = committees.filter((c) => c.id !== 'styrelsen');

  return (
    <div className="flex flex-col items-center py-4">
      <OrgNode title="Förbundsstämma" subtitle="Högsta beslutande organ" />
      <Connector />
      <OrgNode
        title="Styrelsen"
        subtitle="Strategisk ledning"
        href={styrelsen ? `/kommitteer/${styrelsen.slug}` : undefined}
      />
      <Connector />
      <OrgNode title="Förbundskoordinator" subtitle="Operativ ledning" />
      <Connector />

      <div className="w-full rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-4 py-8 sm:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wide text-gray-400">
          Kommittéer
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherCommittees.map((committee) => (
            <OrgNode
              key={committee.id}
              title={committee.name}
              subtitle="Klicka för ansvar, uppdrag och ordförande"
              href={`/kommitteer/${committee.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
