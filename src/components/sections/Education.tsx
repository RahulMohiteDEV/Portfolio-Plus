'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { EDUCATION } from '@/lib/constants';

export function Education() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto scroll-reveal">
      <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-12 text-center">
        Academic Credentials
      </h3>
      <div className="grid md:grid-cols-2 gap-8">
        {EDUCATION.map((edu) => (
          <div
            key={edu.degree}
            className="p-8 bg-surface-container border border-outline-variant/30 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="material-symbols-outlined text-primary text-[40px]">
                {edu.icon}
              </span>
              <div>
                <h4 className="font-headline-md text-headline-md">{edu.degree}</h4>
                <p className="text-on-surface-variant">{edu.institution}</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6">
              <p className="font-code text-primary">CGPA: {edu.cgpa}</p>
              <p className="text-label-md text-on-surface-variant">{edu.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}