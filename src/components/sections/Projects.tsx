'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { PROJECTS } from '@/lib/constants';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export function Projects() {
  const ref = useScrollReveal<HTMLElement>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [gap, setGap] = useState(12);
  const [isMobile, setIsMobile] = useState(false);

  // Calculate items per view based on screen size - MOBILE FIRST
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      // Detect mobile
      setIsMobile(width < 768);
      
      if (width < 480) { // Small mobile phones
        setItemsPerView(1);
        setGap(8);
      } else if (width < 640) { // Mobile phones
        setItemsPerView(1);
        setGap(10);
      } else if (width < 768) { // Large phones / Small tablets
        setItemsPerView(1);
        setGap(12);
      } else if (width < 1024) { // Tablets
        setItemsPerView(2);
        setGap(16);
      } else if (width < 1280) { // Small desktops
        setItemsPerView(2);
        setGap(20);
      } else if (width < 1536) { // Desktops
        setItemsPerView(3);
        setGap(24);
      } else { // Large desktops
        setItemsPerView(3);
        setGap(28);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(PROJECTS.length / itemsPerView);
  const maxIndex = totalSlides - 1;

  // Auto-play slider - PAUSED ON MOBILE
  useEffect(() => {
    if (PROJECTS.length <= itemsPerView || isMobile) return;

    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [maxIndex, isDragging, itemsPerView, isMobile]);

  // Touch and mouse drag handlers - ENHANCED FOR MOBILE
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Enhanced touch handlers for better mobile experience
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Navigation functions
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth / itemsPerView;
      const scrollPosition = index * slideWidth * itemsPerView;
      sliderRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      goToSlide(currentIndex + 1);
    } else {
      goToSlide(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    } else {
      goToSlide(maxIndex);
    }
  };

  // Calculate card width - MOBILE OPTIMIZED
  const cardWidth = `calc((100% - ${gap * (itemsPerView - 1)}px) / ${itemsPerView})`;
  const translateX = `-${currentIndex * 100}%`;

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-section-gap px-4 sm:px-6 md:px-margin-mobile lg:px-margin-desktop max-w-[1320px] mx-auto" id="projects">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-10 lg:mb-12 gap-3 md:gap-6">
        <div>
          <h3 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg-mobile lg:text-headline-lg mb-2 md:mb-4">
            Featured Work
          </h3>
          <p className="text-on-surface-variant text-xs sm:text-sm md:text-base max-w-lg">
            Case studies of high-impact platforms built with scalable architecture.
          </p>
        </div>
        <div className="hidden md:block">
          <span className="font-code text-on-surface-variant text-label-md">SCROLL TO EXPLORE →</span>
        </div>
      </div>

      {/* Slider Container - MOBILE OPTIMIZED */}
      <div className="relative px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Navigation Arrows - HIDDEN ON MOBILE */}
        {PROJECTS.length > itemsPerView && !isMobile && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 bg-surface-container-high text-on-surface p-2 md:p-3 rounded-full border border-outline-variant/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20"
              aria-label="Previous projects"
            >
              <span className="material-symbols-outlined text-[20px] md:text-[24px]">chevron_left</span>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 bg-surface-container-high text-on-surface p-2 md:p-3 rounded-full border border-outline-variant/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20"
              aria-label="Next projects"
            >
              <span className="material-symbols-outlined text-[20px] md:text-[24px]">chevron_right</span>
            </button>
          </>
        )}

        {/* Projects Slider - TOUCH OPTIMIZED */}
        <div
          ref={sliderRef}
          className="overflow-hidden touch-pan-y"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              gap: `${gap}px`,
              transform: `translateX(${translateX})`,
            }}
          >
            {PROJECTS.map((project, index) => (
              <div
                key={project.title}
                className="flex-shrink-0"
                style={{
                  width: cardWidth,
                  minWidth: cardWidth,
                  maxWidth: cardWidth,
                }}
              >
                <div className="group spring-hover flex flex-col bg-surface-container-low border border-outline-variant/20 rounded-xl overflow-hidden hover-glow transition-all duration-300 h-full">
                  {/* Image - MOBILE OPTIMIZED */}
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      alt={project.title}
                      src={project.image}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
                  </div>

                  {/* Content - MOBILE OPTIMIZED */}
                  <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex-1 flex flex-col">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 mb-2 sm:mb-3 md:mb-4 tag-bounce">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 md:px-2.5 py-0.5 bg-surface-container-high text-primary rounded-full text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] font-code"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title - MOBILE OPTIMIZED */}
                    <h4 className="font-headline-md text-sm sm:text-base md:text-lg lg:text-headline-md mb-2 sm:mb-3 md:mb-4 line-clamp-1">
                      {project.title}
                    </h4>

                    {/* Details - MOBILE OPTIMIZED */}
                    <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5 lg:space-y-3 mb-3 sm:mb-4 md:mb-5 lg:mb-6 content-slide flex-1">
                      <div className="flex gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3">
                        <span className="font-bold text-primary shrink-0 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs">PROBLEM:</span>
                        <p className="text-on-surface-variant/80 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs line-clamp-2 sm:line-clamp-2 md:line-clamp-3">{project.problem}</p>
                      </div>
                      <div className="flex gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3">
                        <span className="font-bold text-primary shrink-0 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs">SOLUTION:</span>
                        <p className="text-on-surface-variant/80 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs line-clamp-2 sm:line-clamp-2 md:line-clamp-3">{project.solution}</p>
                      </div>
                      <div className="flex gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3">
                        <span className="font-bold text-primary shrink-0 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs">RESULT:</span>
                        <p className="text-on-surface-variant/80 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs line-clamp-2 sm:line-clamp-2 md:line-clamp-3">{project.result}</p>
                      </div>
                    </div>

                    {/* Buttons - MOBILE OPTIMIZED */}
                    <div className="flex gap-2 sm:gap-3 md:gap-3.5 lg:gap-4 border-t border-outline-variant/30 pt-2 sm:pt-2.5 md:pt-3 lg:pt-4">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-0.5 sm:gap-1 md:gap-1.5 text-on-surface hover:text-primary transition-colors font-label-md text-[8px] sm:text-[9px] md:text-[10px] lg:text-sm"
                      >
                        <span className="material-symbols-outlined text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px]">open_in_new</span>
                        <span className="hidden sm:inline">Live Demo</span>
                        <span className="sm:hidden">Demo</span>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-0.5 sm:gap-1 md:gap-1.5 text-on-surface hover:text-primary transition-colors font-label-md text-[8px] sm:text-[9px] md:text-[10px] lg:text-sm"
                      >
                        <span className="material-symbols-outlined text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px]">code</span>
                        <span className="hidden sm:inline">View Code</span>
                        <span className="sm:hidden">Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator - MOBILE OPTIMIZED */}
        {PROJECTS.length > itemsPerView && (
          <div className="flex justify-center gap-1.5 sm:gap-2 md:gap-2 mt-3 sm:mt-4 md:mt-5 lg:mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-4 sm:w-5 md:w-6 lg:w-8 bg-primary'
                    : 'w-1.5 sm:w-2 bg-outline-variant/50 hover:bg-primary/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Swipe indicator for mobile */}
      {isMobile && PROJECTS.length > 1 && (
        <div className="flex justify-center mt-3 md:hidden">
          <span className="text-[10px] sm:text-xs text-on-surface-variant/50 animate-pulse">
            👆 Swipe to explore
          </span>
        </div>
      )}
    </section>
  );
}