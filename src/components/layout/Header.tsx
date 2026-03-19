'use client';

/**
 * Header Component
 * Main site header with logo and navigation.
 * Supports dropdown menus for items with children.
 * Accepts dynamic navigation data from Sanity CMS.
 */

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BRAND, type NavItem } from '@/lib/constants';
import { Logo } from '@/components/ui/Logo';

interface HeaderProps {
  navigation?: NavItem[];
}

function DesktopNavItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const hasChildren = item.children && item.children.length > 0;
  const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'ArrowDown' && isOpen && dropdownRef.current) {
      e.preventDefault();
      const firstLink = dropdownRef.current.querySelector('a');
      firstLink?.focus();
    }
  };

  const handleDropdownKeyDown = (e: React.KeyboardEvent, index: number) => {
    const links = dropdownRef.current?.querySelectorAll('a');
    if (!links) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % links.length;
      (links[nextIndex] as HTMLElement).focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = index === 0 ? links.length - 1 : index - 1;
      (links[prevIndex] as HTMLElement).focus();
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (hasChildren) {
    return (
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href={item.href}
          className={`flex items-center gap-1 text-sm font-medium no-underline transition-colors duration-200 ${
            isActive ? 'text-skf-blue' : 'text-gray-700 hover:text-skf-blue'
          }`}
          aria-current={pathname === item.href ? 'page' : undefined}
          aria-expanded={isOpen}
          aria-haspopup="true"
          onKeyDown={handleKeyDown}
        >
          {item.label}
          <svg
            className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Link>

        <div
          ref={dropdownRef}
          className={`absolute left-0 top-full z-50 mt-2 w-72 rounded-lg border border-gray-100 bg-white py-2 shadow-lg transition-all duration-200 ${
            isOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-2'
          }`}
        >
          {item.children!.map((child, index) => (
            <Link
              key={child.href}
              href={child.href}
              className={`block px-4 py-2 text-sm no-underline transition-colors duration-200 ${
                pathname === child.href
                  ? 'bg-skf-blue-50 text-skf-blue'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-skf-blue'
              }`}
              aria-current={pathname === child.href ? 'page' : undefined}
              onKeyDown={(e) => handleDropdownKeyDown(e, index)}
              tabIndex={isOpen ? 0 : -1}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (item.external) {
    return (
      <span className="flex items-center gap-2 text-sm font-medium text-gray-400 cursor-not-allowed">
        {item.label}
        {item.badge && (
          <span className="rounded-full bg-skf-yellow px-2 py-0.5 text-xs font-medium text-skf-blue">
            {item.badge}
          </span>
        )}
      </span>
    );
  }

  return (
    <Link
      href={item.href}
      className={`text-sm font-medium no-underline transition-colors duration-200 ${
        isActive ? 'text-skf-blue' : 'text-gray-700 hover:text-skf-blue'
      }`}
      aria-current={pathname === item.href ? 'page' : undefined}
    >
      {item.label}
    </Link>
  );
}

function MobileNavItem({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

  if (hasChildren) {
    return (
      <li>
        <div className="flex items-center justify-between">
          <Link
            href={item.href}
            className={`flex-1 rounded-md px-4 py-2 text-base font-medium no-underline transition-colors duration-200 ${
              pathname === item.href
                ? 'bg-skf-blue-50 text-skf-blue'
                : 'text-gray-700 hover:bg-gray-50 hover:text-skf-blue'
            }`}
            aria-current={pathname === item.href ? 'page' : undefined}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
          <button
            type="button"
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-label={isExpanded ? 'Dölj undermeny' : 'Visa undermeny'}
          >
            <svg
              className={`h-5 w-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        <div
          className={`overflow-hidden transition-all duration-200 ease-in-out ${
            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="ml-4 mt-1 space-y-1 border-l-2 border-gray-100 pl-4">
            {item.children!.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className={`block rounded-md px-4 py-2 text-sm no-underline transition-colors duration-200 ${
                    pathname === child.href
                      ? 'bg-skf-blue-50 text-skf-blue'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-skf-blue'
                  }`}
                  aria-current={pathname === child.href ? 'page' : undefined}
                  onClick={onNavigate}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  }

  if (item.external) {
    return (
      <li>
        <span className="flex items-center gap-2 rounded-md px-4 py-2 text-base font-medium text-gray-400">
          {item.label}
          {item.badge && (
            <span className="rounded-full bg-skf-yellow px-2 py-0.5 text-xs font-medium text-skf-blue">
              {item.badge}
            </span>
          )}
        </span>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={item.href}
        className={`block rounded-md px-4 py-2 text-base font-medium no-underline transition-colors duration-200 ${
          isActive
            ? 'bg-skf-blue-50 text-skf-blue'
            : 'text-gray-700 hover:bg-gray-50 hover:text-skf-blue'
        }`}
        aria-current={pathname === item.href ? 'page' : undefined}
        onClick={onNavigate}
      >
        {item.label}
      </Link>
    </li>
  );
}

export function Header({ navigation = [] }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? 'border-gray-200 bg-white/80 shadow-sm backdrop-blur-md'
          : 'border-gray-100 bg-white'
      }`}
    >
      <div className="container-wide">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            aria-label={BRAND.name}
          >
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Huvudnavigering"
          >
            {navigation.map((item) => (
              <DesktopNavItem key={item.href} item={item} pathname={pathname} />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-skf-blue transition-colors duration-200 lg:hidden"
            aria-label={mobileMenuOpen ? 'Stäng meny' : 'Öppna meny'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-gray-100 transition-all duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 border-t-0'
        }`}
      >
        <nav className="container-wide py-4" aria-label="Mobilnavigering">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <MobileNavItem
                key={item.href}
                item={item}
                pathname={pathname}
                onNavigate={() => setMobileMenuOpen(false)}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
