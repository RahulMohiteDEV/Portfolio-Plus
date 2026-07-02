'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { EXPERIENCE } from '@/lib/constants';

export function Experience() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto scroll-reveal">
      <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-16">
        Professional Journey
      </h3>
      <div className="timeline-line space-y-12 pb-8">
        {EXPERIENCE.map((exp) => (
          <div key={exp.title} className="timeline-node relative pl-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div>
                <h4 className="font-headline-md text-headline-md text-primary">{exp.title}</h4>
                <p className="font-body-lg text-on-surface">{exp.company}</p>
              </div>
              <p className="font-code text-on-surface-variant text-label-md px-4 py-1 bg-surface-container rounded-full w-fit">
                {exp.period}
              </p>
            </div>
            <ul className="space-y-3 text-on-surface-variant/80 font-body-md list-disc ml-4">
              {exp.achievements.map((achievement, index) => (
                <li key={index} className="[&>span]:text-on-surface [&>span]:font-semibold">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}