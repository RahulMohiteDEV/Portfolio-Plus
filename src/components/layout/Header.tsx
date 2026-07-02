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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Function to handle resume download
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rahul_Mohite_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsMobileMenuOpen(false); // Close menu after download
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-200 ease-in-out',
          'bg-surface/80 backdrop-blur-md border-b border-outline-variant/30',
          isScrolled && 'bg-surface/95 py-2'
        )}
      >
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-margin-desktop h-16 sm:h-20 max-w-container-max mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span 
              className="material-symbols-outlined text-primary text-2xl sm:text-3xl" 
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              terminal
            </span>
            <span className="font-headline-md text-lg sm:text-xl md:text-headline-md font-bold tracking-tighter text-on-surface">
              {SITE_CONFIG.name}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-body-md text-body-md">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-on-surface-variant hover:text-primary transition-colors text-sm lg:text-base"
              >
                {item.label}
              </a>
            ))}
            <Button 
              variant="primary" 
              size="default"
              onClick={handleResumeDownload}
            >
              Resume
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-on-surface p-2 hover:bg-surface-container-high rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-surface/95 backdrop-blur-md transition-all duration-300 md:hidden',
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
        style={{ top: '64px' }}
      >
        <div className="flex flex-col items-center justify-start pt-8 px-6 space-y-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="text-on-surface text-xl font-body-md hover:text-primary transition-colors py-2 w-full text-center border-b border-outline-variant/20"
            >
              {item.label}
            </a>
          ))}
          <Button 
            variant="primary" 
            size="large"
            onClick={handleResumeDownload}
            className="w-full max-w-xs mt-4"
          >
            Resume
          </Button>
          
          {/* Social Links in Mobile Menu */}
          <div className="flex gap-6 mt-8 pt-6 border-t border-outline-variant/20 w-full justify-center">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <span className="material-symbols-outlined text-2xl">code</span>
            </a>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <span className="material-symbols-outlined text-2xl">group</span>
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-on-surface-variant hover:text-primary transition-colors"
              aria-label="Email"
            >
              <span className="material-symbols-outlined text-2xl">mail</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}