'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      id="scroll-progress"
      className="fixed top-0 left-0 h-0.5 bg-primary z-[100] transition-width duration-100 ease-linear"
      style={{ width: `${progress}%` }}
    />
  );
}