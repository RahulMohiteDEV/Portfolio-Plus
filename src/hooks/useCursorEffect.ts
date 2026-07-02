'use client';

import { useEffect, useRef } from 'react';

export function useCursorEffect() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const cursorX = useRef(0);
  const cursorY = useRef(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const animateCursor = () => {
      const dx = mouseX.current - cursorX.current;
      const dy = mouseY.current - cursorY.current;
      cursorX.current += dx * 0.15;
      cursorY.current += dy * 0.15;
      cursor.style.left = cursorX.current + 'px';
      cursor.style.top = cursorY.current + 'px';
      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return { cursorRef };
}