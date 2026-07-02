'use client';

import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/shared/Button';

export function Contact() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="contact">
      <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-8 md:p-16">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6">
              Let's Build Something Great
            </h3>
            <p className="font-body-lg text-on-surface-variant mb-12">
              Ready to bring your next big idea to life? I'm currently open to freelance projects and full-time opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <span className="font-body-md">{SITE_CONFIG.email}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <span className="font-body-md">{SITE_CONFIG.location}</span>
              </div>
            </div>

            <Button
              variant="outline"
              size="large"
              className="mt-12 inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined">download</span>
              Download Resume (PDF)
            </Button>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block font-label-md mb-2 text-on-surface-variant">Name</label>
              <input
                type="text"
                className="w-full bg-surface border border-outline-variant rounded-lg p-4 focus:outline-none focus:border-primary transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block font-label-md mb-2 text-on-surface-variant">Email</label>
              <input
                type="email"
                className="w-full bg-surface border border-outline-variant rounded-lg p-4 focus:outline-none focus:border-primary transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block font-label-md mb-2 text-on-surface-variant">Message</label>
              <textarea
                rows={4}
                className="w-full bg-surface border border-outline-variant rounded-lg p-4 focus:outline-none focus:border-primary transition-colors"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-on-primary py-4 rounded-lg font-label-md font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}