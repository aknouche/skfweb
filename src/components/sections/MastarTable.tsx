'use client';

import { useState, useMemo } from 'react';
import { MASTERS } from '@/lib/mastargrad-data';

const GRADE_LABELS: Record<number, string> = {
  1: '1 DAN',
  2: '2 DAN',
  3: '3 DAN',
  4: '4 DAN',
  5: '5 DAN',
  6: '6 DAN',
};

const GRADE_BADGE: Record<number, string> = {
  1: 'bg-gray-100 text-gray-700',
  2: 'bg-skf-blue/20 text-skf-blue',
  3: 'bg-skf-blue/40 text-skf-blue',
  4: 'bg-skf-blue/60 text-white',
  5: 'bg-skf-blue text-white',
  6: 'bg-skf-yellow text-skf-blue font-semibold',
};

const ALL_GRADES = [1, 2, 3, 4, 5, 6];

export function MastarTable() {
  const [activeGrade, setActiveGrade] = useState<number | null>(null);
  const [search, setSearch] = useState('');

  const countByGrade = useMemo(
    () =>
      ALL_GRADES.reduce<Record<number, number>>((acc, g) => {
        acc[g] = MASTERS.filter((m) => m.grade === g).length;
        return acc;
      }, {}),
    []
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return MASTERS.filter((m) => {
      if (activeGrade !== null && m.grade !== activeGrade) return false;
      if (!q) return true;
      return (
        m.firstName.toLowerCase().includes(q) ||
        m.lastName.toLowerCase().includes(q) ||
        m.club.toLowerCase().includes(q)
      );
    }).sort((a, b) => a.lastName.localeCompare(b.lastName, 'sv'));
  }, [activeGrade, search]);

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrera efter grad">
        <button
          role="tab"
          aria-selected={activeGrade === null}
          onClick={() => setActiveGrade(null)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-150 ${
            activeGrade === null
              ? 'bg-skf-blue text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Alla ({MASTERS.length})
        </button>
        {ALL_GRADES.map((g) => (
          <button
            key={g}
            role="tab"
            aria-selected={activeGrade === g}
            onClick={() => setActiveGrade(g)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-150 ${
              activeGrade === g
                ? 'bg-skf-blue text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {GRADE_LABELS[g]} ({countByGrade[g]})
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="mt-4">
        <label htmlFor="mastar-search" className="sr-only">
          Sök mästare
        </label>
        <input
          id="mastar-search"
          type="search"
          placeholder="Sök på namn eller klubb…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-skf-blue focus:ring-1 focus:ring-skf-blue sm:max-w-sm"
        />
      </div>

      {/* Table */}
      <div className="mt-4 overflow-x-auto rounded-lg border border-gray-100">
        <table className="min-w-full divide-y divide-gray-100 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-4 py-3 text-left font-semibold text-skf-blue"
              >
                Namn
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left font-semibold text-skf-blue"
              >
                Klubb / Stad
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left font-semibold text-skf-blue"
              >
                Grad
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 bg-white">
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-8 text-center text-gray-400"
                >
                  Inga mästare hittades.
                </td>
              </tr>
            ) : (
              filtered.map((m, i) => (
                <tr
                  key={`${m.lastName}-${m.firstName}-${i}`}
                  className="transition-colors duration-100 hover:bg-gray-50"
                >
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
                    {m.firstName} {m.lastName}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{m.club || '—'}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block rounded-full px-3 py-0.5 text-xs ${GRADE_BADGE[m.grade]}`}
                    >
                      {GRADE_LABELS[m.grade]}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Count */}
      <p className="mt-3 text-xs text-gray-400">
        Visar {filtered.length} av {MASTERS.length} mästare
      </p>
    </div>
  );
}
