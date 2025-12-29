'use client';

/**
 * Header Component
 * Main site header with logo and navigation.
 */

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION, BRAND } from '@/lib/constants';
import { Logo } from '@/components/ui/Logo';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="container-wide">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 no-underline"
            aria-label={BRAND.name}
          >
            <Logo className="h-12 w-auto" />
            <span className="hidden text-lg font-bold text-skf-blue sm:block">
              {BRAND.shortName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Huvudnavigering"
          >
            {NAVIGATION.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium no-underline transition-colors ${
                  pathname === item.href
                    ? 'text-skf-blue'
                    : 'text-gray-600 hover:text-skf-blue'
                }`}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-skf-blue lg:hidden"
            aria-label="Öppna meny"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-100 lg:hidden">
          <nav className="container-wide py-4" aria-label="Mobilnavigering">
            <ul className="space-y-2">
              {NAVIGATION.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-md px-4 py-2 text-base font-medium no-underline transition-colors ${
                      pathname === item.href
                        ? 'bg-skf-blue-50 text-skf-blue'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-skf-blue'
                    }`}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
