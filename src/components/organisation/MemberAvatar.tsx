/**
 * MemberAvatar
 * Shows a member's photo, or a placeholder silhouette until one is supplied.
 */

import Image from 'next/image';
import type { CommitteeMember } from '@/lib/types';

export default function MemberAvatar({ member }: { member: CommitteeMember }) {
  if (member.image?.url) {
    return (
      <Image
        src={member.image.url}
        alt={member.image.alt}
        width={256}
        height={256}
        /* object-top keeps heads inside the circle when the source is a tall portrait */
        className="h-32 w-32 shrink-0 rounded-full object-cover object-top"
      />
    );
  }

  return (
    <div
      className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-skf-blue-50 text-skf-blue-200"
      aria-hidden="true"
    >
      <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.7 0 8 1.34 8 4v2H4v-2c0-2.66 5.3-4 8-4zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      </svg>
    </div>
  );
}
