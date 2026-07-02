'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { PROJECTS } from '@/lib/constants';
import Image from 'next/image';
import { Button } from '@/components/shared/Button';

export function Projects() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1320px] mx-auto" id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4">
            Featured Work
          </h3>
          <p className="text-on-surface-variant max-w-lg">
            Case studies of high-impact platforms built with scalable architecture.
          </p>
        </div>
        <div className="hidden md:block">
          <span className="font-code text-on-surface-variant text-label-md">SCROLL TO EXPLORE →</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="group spring-hover flex flex-col bg-surface-container-low border border-outline-variant/20 rounded-xl overflow-hidden hover-glow transition-all duration-300"
          >
            <div className="aspect-video relative overflow-hidden">
              <Image
                alt={project.title}
                src={project.image}
                width={800}
                height={450}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
            </div>

            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-6 tag-bounce">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-surface-container-high text-primary rounded-full text-[12px] font-code"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h4 className="font-headline-md text-headline-md mb-6">{project.title}</h4>

              <div className="space-y-4 mb-8 content-slide">
                <div className="flex gap-4">
                  <span className="font-bold text-primary shrink-0">PROBLEM:</span>
                  <p className="text-on-surface-variant/80 text-sm">{project.problem}</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-primary shrink-0">SOLUTION:</span>
                  <p className="text-on-surface-variant/80 text-sm">{project.solution}</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-primary shrink-0">RESULT:</span>
                  <p className="text-on-surface-variant/80 text-sm">{project.result}</p>
                </div>
              </div>

              <div className="flex gap-6 border-t border-outline-variant/30 pt-6">
                <a
                  href="#"
                  className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors font-label-md"
                >
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  Live Demo
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors font-label-md"
                >
                  <span className="material-symbols-outlined text-[18px]">code</span>
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}