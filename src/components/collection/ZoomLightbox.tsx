'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface ZoomLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onStepIndex: (delta: number) => void;
  title: string;
}

function ZoomLightboxInner({
  onClose,
  images,
  currentIndex,
  onStepIndex,
  title,
}: Omit<ZoomLightboxProps, 'isOpen'>) {
  const [zoomScale, setZoomScale] = useState(2.2);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [prevIndex, setPrevIndex] = useState(currentIndex);
  const [isDragging, setIsDragging] = useState(false);
  const isPointerDownRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0, panX: 0, panY: 0 });

  // Reset pan during render whenever current image changes
  if (currentIndex !== prevIndex) {
    setPrevIndex(currentIndex);
    setPanX(0);
    setPanY(0);
  }

  const handleZoomIn = useCallback(() => {
    setZoomScale((prev) => Math.min(4.0, Number((prev + 0.4).toFixed(1))));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoomScale((prev) => Math.max(1.0, Number((prev - 0.4).toFixed(1))));
  }, []);

  const handleResetZoom = useCallback(() => {
    setZoomScale(2.2);
    setPanX(0);
    setPanY(0);
  }, []);

  // Keyboard navigation: Escape, ArrowLeft, ArrowRight, +, -, 0
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onStepIndex(-1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        onStepIndex(1);
      } else if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        handleZoomIn();
      } else if (e.key === '-' || e.key === '_') {
        e.preventDefault();
        handleZoomOut();
      } else if (e.key === '0') {
        e.preventDefault();
        handleResetZoom();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onStepIndex, handleZoomIn, handleZoomOut, handleResetZoom]);

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      handleZoomIn();
    } else if (e.deltaY > 0) {
      handleZoomOut();
    }
  };

  // Fine mousemove pan when pointer is fine (desktop) and not dragging
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isDragging || isPointerDownRef.current || !viewportRef.current) return;
      if (window.matchMedia('(pointer: fine)').matches) {
        const rect = viewportRef.current.getBoundingClientRect();
        const nx = Math.max(-1, Math.min(1, ((e.clientX - rect.left) / rect.width) * 2 - 1));
        const ny = Math.max(-1, Math.min(1, ((e.clientY - rect.top) / rect.height) * 2 - 1));
        setPanX(nx);
        setPanY(ny);
      }
    },
    [isDragging]
  );

  // Pointer down: ONLY initiate drag if not clicking a button/control
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest('button, [role="button"], a')) {
      return;
    }
    isPointerDownRef.current = true;
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      panX,
      panY,
    };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDownRef.current || !viewportRef.current) return;
    const dist = Math.hypot(e.clientX - dragStartRef.current.x, e.clientY - dragStartRef.current.y);

    if (dist > 4 && !isDragging) {
      setIsDragging(true);
      try {
        viewportRef.current.setPointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }

    if (!isDragging) return;
    const rect = viewportRef.current.getBoundingClientRect();
    const dx = (e.clientX - dragStartRef.current.x) / (rect.width * 0.45);
    const dy = (e.clientY - dragStartRef.current.y) / (rect.height * 0.45);
    setPanX(Math.max(-1, Math.min(1, dragStartRef.current.panX - dx)));
    setPanY(Math.max(-1, Math.min(1, dragStartRef.current.panY - dy)));
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isPointerDownRef.current = false;
    setIsDragging(false);
    if (viewportRef.current && viewportRef.current.hasPointerCapture(e.pointerId)) {
      try {
        viewportRef.current.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }
  };

  const currentSrc = images[currentIndex] || images[0];
  const counterText = `${String(currentIndex + 1).padStart(2, '0')} / ${String(images.length).padStart(2, '0')}`;

  const tx = -panX * 28;
  const ty = -panY * 28;

  return (
    <div
      className="fixed inset-0 z-[75] bg-obsidian/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-300 select-none"
      onClick={onClose}
    >
      {/* Top Bar: Title & Counter & Close */}
      <div
        className="w-full flex items-center justify-between text-ivory border-b border-ivory/10 pb-4 z-30"
        onClick={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-brass-light font-medium block">
            Macro Fabric Inspection
          </span>
          <h4 className="font-serif text-lg sm:text-2xl text-ivory font-light truncate max-w-[200px] sm:max-w-md">
            {title}
          </h4>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <span className="text-xs uppercase tracking-[0.24em] text-ivory/70">
            {counterText}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-obsidian/60 border border-ivory/20 hover:bg-crimson hover:border-crimson text-ivory flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
            aria-label="Close zoom lightbox"
            title="Close (Esc)"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage with Image Viewport */}
      <div
        className="relative flex-1 w-full max-w-5xl mx-auto my-3 sm:my-4 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Panning Canvas */}
        <div
          ref={viewportRef}
          onWheel={handleWheel}
          onMouseMove={handleMouseMove}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className={`w-full h-full max-h-[74vh] overflow-hidden flex items-center justify-center select-none touch-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ touchAction: 'none' }}
        >
          <img
            src={currentSrc}
            alt={title}
            style={{
              transform: `scale(${zoomScale}) translate(${tx}%, ${ty}%)`,
              transition: isDragging ? 'none' : 'transform 0.15s ease-out',
            }}
            className="max-h-[74vh] w-auto object-contain pointer-events-none select-none"
          />
        </div>

        {/* Previous Image Arrow Button (Completely decoupled from dragging) */}
        {images.length > 1 && (
          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              onStepIndex(-1);
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-obsidian/85 hover:bg-crimson border-2 border-ivory/25 hover:border-crimson text-ivory flex items-center justify-center transition-all cursor-pointer focus:outline-none shadow-xl group"
            aria-label="Previous image"
            title="Previous Image (←)"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:-translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        {/* Next Image Arrow Button (Completely decoupled from dragging) */}
        {images.length > 1 && (
          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              onStepIndex(1);
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-obsidian/85 hover:bg-crimson border-2 border-ivory/25 hover:border-crimson text-ivory flex items-center justify-center transition-all cursor-pointer focus:outline-none shadow-xl group"
            aria-label="Next image"
            title="Next Image (→)"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}

        {/* Bottom Right Zoom Scale Controls (+, reset, -) */}
        <div
          className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-30 flex items-center gap-1.5 bg-obsidian/90 backdrop-blur-md border border-ivory/25 rounded-full p-1.5 shadow-2xl"
          onPointerDown={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              handleZoomOut();
            }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full text-ivory/80 hover:text-ivory hover:bg-ivory/15 flex items-center justify-center transition-colors cursor-pointer focus:outline-none text-lg font-light"
            aria-label="Zoom out"
            title="Zoom Out (−)"
          >
            &minus;
          </button>
          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              handleResetZoom();
            }}
            className="px-2.5 py-1 text-[10px] uppercase tracking-wider text-brass-light hover:text-ivory font-medium transition-colors cursor-pointer focus:outline-none"
            aria-label="Reset zoom"
            title="Reset Zoom (0)"
          >
            {zoomScale}x
          </button>
          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              handleZoomIn();
            }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full text-ivory/80 hover:text-ivory hover:bg-ivory/15 flex items-center justify-center transition-colors cursor-pointer focus:outline-none text-lg font-light"
            aria-label="Zoom in"
            title="Zoom In (+)"
          >
            +
          </button>
        </div>
      </div>

      {/* Bottom Hint */}
      <p className="text-center text-[10px] uppercase tracking-[0.26em] text-ivory/50">
        Use arrows to change image &bull; + / − or scroll to zoom &bull; Drag to inspect &bull; Press Esc to close
      </p>
    </div>
  );
}

export function ZoomLightbox(props: ZoomLightboxProps) {
  if (!props.isOpen || props.images.length === 0) return null;
  return (
    <ZoomLightboxInner
      key={props.title}
      onClose={props.onClose}
      images={props.images}
      currentIndex={props.currentIndex}
      onStepIndex={props.onStepIndex}
      title={props.title}
    />
  );
}
