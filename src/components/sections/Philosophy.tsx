'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const philosophies = [
  {
    icon: 'verified_user',
    title: 'Clean Code',
    description: 'Writing readable, maintainable, and self-documenting code. I prioritize architecture over quick fixes to ensure long-term scalability.',
  },
  {
    icon: 'bolt',
    title: 'Fast Delivery',
    description: 'Leveraging modern frameworks and automated CI/CD pipelines to move from concept to production with high velocity and zero friction.',
    className: 'md:mt-[15px]',
  },
  {
    icon: 'forum',
    title: '',
    description: 'Bridging the gap between technical complexity and business value. I maintain transparency and alignment throughout the development cycle.',
  },
  
];

export function Philosophy() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-section-gap bg-surface-container-lowest">
      <div ref={ref} className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop scroll-reveal">
        <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-12 text-center">
          My Engineering Philosophy
        </h3>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {philosophies.map((item) => (
            <div
              key={item.title}
              className={`p-8 border border-outline-variant/30 rounded-xl bg-surface-container-low hover:border-primary/50 transition-colors ${item.className || ''}`}
            >
              <span className="material-symbols-outlined text-primary text-[48px] mb-6">
                {item.icon}
              </span>
              <h4 className="font-headline-md mb-4">{item.title}</h4>
              <p className="text-on-surface-variant">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}