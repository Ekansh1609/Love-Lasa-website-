'use client';

import React, { useEffect, useRef } from 'react';

export function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!progressRef.current) return;
      const y = window.scrollY;
      const vh = window.innerHeight;
      const maxScroll = document.documentElement.scrollHeight - vh;
      if (maxScroll > 0) {
        progressRef.current.style.transform = `scaleX(${Math.min(1, y / maxScroll)})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[70] pointer-events-none">
      <div id="scroll-progress" ref={progressRef} className="h-full w-full" />
    </div>
  );
}
