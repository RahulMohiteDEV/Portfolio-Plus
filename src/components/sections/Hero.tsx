'use client';

import { useEffect, useRef } from 'react';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/shared/Button';

export function Hero() {
  const preTitleRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [
      { ref: preTitleRef, delay: 100 },
      { ref: subtitleRef, delay: 600 },
      { ref: descRef, delay: 750 },
      { ref: ctaRef, delay: 900 },
      { ref: socialRef, delay: 1050 },
    ];

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current!.style.transition = 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)';
          ref.current!.style.opacity = '1';
          ref.current!.style.transform = 'translateY(0)';
        }, delay);
      }
    });
  }, []);

  return (
    <section className="min-h-[80vh] flex items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-20 relative">
      <div className="relative z-10 w-full md:w-3/4">
        <p
          ref={preTitleRef}
          className="font-code text-primary mb-4 tracking-widest uppercase opacity-0 translate-y-5"
        >
          Available for new opportunities
        </p>

        <h1 className="font-display text-display mb-6 leading-none flex flex-wrap gap-x-4">
          <span className="word-reveal"><span>Full</span></span>
          <span className="word-reveal"><span>Stack</span></span>
          <span className="word-reveal"><span>Dev</span></span>
        </h1>

        <h2
          ref={subtitleRef}
          className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface-variant mb-8 max-w-2xl opacity-0 translate-y-5"
        >
          MERN & Next.js Full Stack Developer
        </h2>

        <p
          ref={descRef}
          className="font-body-lg text-body-lg text-on-surface-variant/80 max-w-xl mb-12 opacity-0 translate-y-5"
        >
          Building scalable, high-performance web applications with a focus on CI/CD and AI integration.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-wrap gap-4 mb-12 opacity-0 translate-y-5"
        >
          <Button variant="primary" size="large" href="#projects">
            View Projects
            <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
          </Button>
          <Button variant="outline" size="large">
            Download Resume
            <span className="material-symbols-outlined text-[20px]">download</span>
          </Button>
        </div>

        <div
          ref={socialRef}
          className="flex gap-6 opacity-0 translate-y-5"
        >
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors"
            title="GitHub"
          >
            <span className="material-symbols-outlined">code</span>
          </a>
          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors"
            title="LinkedIn"
          >
            <span className="material-symbols-outlined">group</span>
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="text-on-surface-variant hover:text-primary transition-colors"
            title="Email"
          >
            <span className="material-symbols-outlined">mail</span>
          </a>
        </div>
      </div>
    </section>
  );
}