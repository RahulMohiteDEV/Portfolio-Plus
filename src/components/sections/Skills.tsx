'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SkillBar } from '@/components/shared/SkillBar';
import { SKILLS } from '@/lib/constants';

const categories = [
  {
    title: 'Frontend',
    skills: SKILLS.frontend,
    icon: 'monitor',
    span: 'md:col-span-2',
    color: 'primary' as const,
  },
  {
    title: 'Backend',
    skills: SKILLS.backend,
    icon: 'server',
    span: 'md:col-span-2',
    color: 'secondary' as const,
  },
  {
    title: 'Database',
    skills: SKILLS.database,
    icon: 'database',
    span: 'md:col-span-2',
    color: 'secondary' as const,
  },
  {
    title: 'DevOps & Infrastructure',
    skills: SKILLS.devops,
    icon: 'terminal',
    span: 'md:col-span-3',
    color: 'primary' as const,
  },
  {
    title: 'AI Integration',
    skills: SKILLS.ai,
    icon: 'cpu',
    span: 'md:col-span-3',
    color: 'tertiary' as const,
  },
];

export function Skills() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="skills">
      <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-12 text-center">
        Technical Arsenal
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <div
            key={category.title}
            className={`${category.span} bg-surface-container-low border border-outline-variant/30 rounded-xl p-6 hover-glow transition-all duration-300`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className={`material-symbols-outlined text-${category.color}`}>
                {category.icon}
              </span>
              <h4 className="font-headline-md text-headline-md">{category.title}</h4>
            </div>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={category.color}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}