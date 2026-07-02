'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { SITE_CONFIG, NAV_ITEMS } from '@/lib/constants';
import { Button } from '@/components/shared/Button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-200 ease-in-out',
        'bg-surface/80 backdrop-blur-md border-b border-outline-variant/30',
        isScrolled && 'bg-surface/95 py-2'
      )}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 max-w-container-max mx-auto">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
            terminal
          </span>
          <span className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface">
            {SITE_CONFIG.name}
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-body-md text-body-md">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button variant="primary" size="default">
            Resume
          </Button>
        </nav>

        <button
          className="md:hidden text-on-surface"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}