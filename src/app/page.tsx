import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { About } from '@/components/sections/About';
import { Philosophy } from '@/components/sections/Philosophy';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Philosophy />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}