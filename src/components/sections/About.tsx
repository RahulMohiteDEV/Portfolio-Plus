'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Image from 'next/image';

export function About() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto scroll-reveal"
      id="about"
    >
      <div className="grid md:grid-cols-2 gap-gutter items-center">
        <div className="relative aspect-square max-w-md mx-auto md:mx-0">
          <div className="absolute inset-0 bg-primary/10 rounded-xl rotate-3" />
          <div className="absolute inset-0 bg-surface-container-high rounded-xl border border-outline-variant/30 flex items-center justify-center overflow-hidden">
            <Image
              alt="Professional developer workspace"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9zmU8dUnJpqk0i6SHdHIbtOiN2xvigXGmogOWaQuz8D53nYNxx0FHS5hmkuedRXR-3A7Ypp2fLZCSumtCNSH5c077Unb0BzoNJ76QSO-n0Xlol7POwQb-5hgOHDGEisdvL0uXoOFKdTtAju3dSf88zth5Efl6LF7AxoDsKVDnZGHVIAVKdgUsQKNFh203W1npYAuRtw4xNuYhY418oUSvpKR4keWHJeUOrnFNfqWFVrbTjkmufzWN"
              width={600}
              height={600}
              className="w-full h-full object-cover"
              priority
              unoptimized
            />
          </div>
        </div>

        <div>
          <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8">
            Crafting Excellence in the Full Stack
          </h3>
          <div className="space-y-6 font-body-lg text-on-surface-variant/80">
            <p>
              With a Master's in Computer Science and a strong foundation in JavaScript, TypeScript, and database management, I bring a blend of academic knowledge and practical experience to every project. I am committed to continuous learning and delivering high-impact, accessible web applications.
            </p>
            <p>
              Currently, I am contributing as a <span className="text-primary font-bold">MERN Full Stack Developer at Satara Biochem</span>, where I lead the development of critical internal tools and high-performance web platforms using TypeScript and cutting-edge DevOps workflows.
            </p>
            <p>
              I believe in the power of automation and AI to accelerate the development lifecycle without compromising on code quality or performance metrics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}