import { SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 py-12 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">terminal</span>
            <span className="font-headline-md text-on-surface font-bold">{SITE_CONFIG.name}</span>
          </div>
          <p className="font-signature text-2xl text-primary/80 mt-2">Rahul Mohite</p>
        </div>

        <p className="font-label-md text-on-surface-variant text-center md:text-left">
          © 2024 Full Stack Dev. Built with high-performance engineering principles.
        </p>

        <div className="flex gap-8 font-label-md">
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            Github
          </a>
          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={SITE_CONFIG.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}