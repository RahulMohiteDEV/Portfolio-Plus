'use client';

import { useCursorEffect } from '@/hooks/useCursorEffect';

export function CursorDot() {
  const { cursorRef } = useCursorEffect();

  return (
    <div
      ref={cursorRef}
      className="fixed w-5 h-5 bg-primary/20 rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 hidden md:block transition-opacity duration-300 ease-out"
    />
  );
}