/**
 * ContactForm
 * Client component – handles the contact form with optimistic state via useActionState.
 */

'use client';

import { useActionState } from 'react';
import { Button } from '@/components/ui/Button';
import { submitContactForm, type ContactFormState } from '@/app/kontakt/actions';

const SUBJECTS = [
  'Allmän fråga',
  'Tävling & licenser',
  'Förbundsmedlemskap',
  'Landslaget',
  'Press & media',
  'Annat',
] as const;

const initialState: ContactFormState = { status: 'idle' };

const fieldClasses =
  'w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 ' +
  'placeholder:text-gray-400 focus:border-skf-blue focus:outline-none ' +
  'focus:ring-2 focus:ring-skf-blue/20 disabled:cursor-not-allowed disabled:opacity-50';

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.status === 'success') {
    return (
      <div role="status" className="rounded-md border border-green-200 bg-green-50 px-6 py-5">
        <p className="font-semibold text-green-800">Tack för ditt meddelande!</p>
        <p className="mt-1 text-sm text-green-700">Vi återkommer så snart som möjligt.</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-5">
      {/* Honeypot: hidden from real users, bots will fill it in */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        className="hidden"
      />

      {state.status === 'error' && state.message && (
        <div role="alert" className="rounded-md border border-red-200 bg-red-50 px-4 py-3">
          <p className="text-sm text-red-700">{state.message}</p>
        </div>
      )}

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
          Namn{' '}
          <span aria-hidden="true" className="text-red-500">
            *
          </span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          disabled={isPending}
          placeholder="För- och efternamn"
          className={fieldClasses}
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
          E-post{' '}
          <span aria-hidden="true" className="text-red-500">
            *
          </span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={isPending}
          placeholder="din@epost.se"
          className={fieldClasses}
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-gray-700">
          Ämne{' '}
          <span aria-hidden="true" className="text-red-500">
            *
          </span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          disabled={isPending}
          defaultValue=""
          className={fieldClasses}
        >
          <option value="" disabled>
            Välj ett ämne
          </option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
          Meddelande{' '}
          <span aria-hidden="true" className="text-red-500">
            *
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={isPending}
          placeholder="Skriv ditt meddelande här…"
          className={`${fieldClasses} resize-none`}
        />
      </div>

      <Button type="submit" disabled={isPending}>
        {isPending ? 'Skickar…' : 'Skicka meddelande'}
      </Button>
    </form>
  );
}
