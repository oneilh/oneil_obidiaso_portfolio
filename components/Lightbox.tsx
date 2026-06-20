"use client";

import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
}

export function Lightbox({ images, currentIndex, isOpen, onClose, onChangeIndex }: LightboxProps) {
  // Navigation handlers
  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onChangeIndex(currentIndex - 1);
    }
  }, [currentIndex, onChangeIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < images.length - 1) {
      onChangeIndex(currentIndex + 1);
    }
  }, [currentIndex, images.length, onChangeIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handlePrev, handleNext, onClose]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Swipe handlers using Framer Motion drag event
  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = offset.x;
    const swipeVelocity = velocity.x;

    if (swipe < -50 || swipeVelocity < -500) {
      handleNext();
    } else if (swipe > 50 || swipeVelocity > 500) {
      handlePrev();
    }
  };

  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md pointer-events-auto"
        >
          {/* Image Container */}
          <div 
            className="relative w-full h-full max-w-7xl max-h-[100vh] p-4 flex items-center justify-center"
            onClick={onClose}
            onPointerDown={(e) => {
              if (e.target === e.currentTarget) {
                onClose();
              }
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -20 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                onClick={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
                className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`Gallery image ${currentIndex + 1}`}
                  fill
                  className="object-contain pointer-events-none select-none"
                  sizes="100vw"
                  priority
                  unoptimized={images[currentIndex].startsWith("http") || images[currentIndex].includes("placeholder")}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Close Button */}
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            onPointerDown={(e) => { e.stopPropagation(); onClose(); }}
            className="absolute top-4 right-4 z-[100] p-3 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full cursor-pointer pointer-events-auto"
            aria-label="Close lightbox"
          >
            <FiX className="w-8 h-8 pointer-events-none" />
          </button>

          {/* Prev Button */}
          {currentIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              onPointerDown={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-[100] p-3 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full hidden sm:block cursor-pointer pointer-events-auto"
              aria-label="Previous image"
            >
              <FiChevronLeft className="w-8 h-8 pointer-events-none" />
            </button>
          )}

          {/* Next Button */}
          {currentIndex < images.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              onPointerDown={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-[100] p-3 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full hidden sm:block cursor-pointer pointer-events-auto"
              aria-label="Next image"
            >
              <FiChevronRight className="w-8 h-8 pointer-events-none" />
            </button>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium tracking-widest bg-black/40 px-4 py-2 rounded-full pointer-events-none">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
