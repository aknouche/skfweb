/**
 * Contact form server action
 *
 * Sends email via Resend (https://resend.com).
 * Falls back to console logging in development when env vars are missing.
 *
 * Required env vars in .env.local:
 *   RESEND_API_KEY     – API key from resend.com (free tier: 3000 emails/month)
 *   RESEND_FROM_EMAIL  – Verified sender address, e.g. "noreply@svenskakickboxning.se"
 *                        Use "onboarding@resend.dev" for local testing (sends only to your Resend account email)
 */

'use server';

import { Resend } from 'resend';
import { CONTACT } from '@/lib/constants';

export interface ContactFormState {
  status: 'idle' | 'success' | 'error';
  message?: string;
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = (formData.get('name') as string | null)?.trim();
  const email = (formData.get('email') as string | null)?.trim();
  const subject = (formData.get('subject') as string | null)?.trim();
  const message = (formData.get('message') as string | null)?.trim();

  if (!name || !email || !subject || !message) {
    return { status: 'error', message: 'Alla fält måste fyllas i.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: 'error', message: 'Ange en giltig e-postadress.' };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    // Dev fallback: log when env vars are not configured
    console.log('[Contact form] Submission received (no Resend config):', {
      name,
      email,
      subject,
      message,
    });
    return { status: 'success' };
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `SKF Kontaktformulär <${fromEmail}>`,
      to: 'ml.aknouche@gmail.com',
      replyTo: email,
      subject: `Kontaktformulär: ${subject}`,
      text: [
        `Namn: ${name}`,
        `E-post: ${email}`,
        `Ämne: ${subject}`,
        '',
        'Meddelande:',
        message,
      ].join('\n'),
    });

    if (error) {
      throw new Error(error.message);
    }

    return { status: 'success' };
  } catch (err) {
    console.error('[Contact form] Resend error:', err);
    return {
      status: 'error',
      message: 'Något gick fel. Försök igen eller skicka ett e-postmeddelande direkt.',
    };
  }
}
