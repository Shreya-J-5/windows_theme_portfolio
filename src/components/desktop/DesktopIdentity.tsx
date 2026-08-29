'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

export default function DesktopIdentity() {
  const heroRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 120, damping: 24, mass: 0.5 });
  const y = useSpring(useMotionValue(0), { stiffness: 120, damping: 24, mass: 0.5 });

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = heroRef.current?.getBoundingClientRect();
      if (!bounds) return;
      x.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 6);
      y.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 4);
    };
    const handlePointerLeave = () => {
      x.set(0);
      y.set(0);
    };

    const hero = heroRef.current;
    hero?.addEventListener('pointermove', handlePointerMove);
    hero?.addEventListener('pointerleave', handlePointerLeave);
    return () => {
      hero?.removeEventListener('pointermove', handlePointerMove);
      hero?.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [shouldReduceMotion, x, y]);

  return (
    <div ref={heroRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
      <motion.div
        className="hero-identity flex flex-col items-center select-none"
        style={{ x, y }}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Windows badge */}
        <motion.div
          className="pointer-events-auto px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-[#0078d4] mb-3 backdrop-blur-md flex items-center gap-2 shadow-lg"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
            <rect x="1" y="1" width="8" height="8" rx="1" />
            <rect x="11" y="1" width="8" height="8" rx="1" />
            <rect x="1" y="11" width="8" height="8" rx="1" />
            <rect x="11" y="11" width="8" height="8" rx="1" />
          </svg>
          <span>Windows 11 Portfolio Edition</span>
        </motion.div>

        <motion.h1
          className="hero-name pointer-events-auto text-5xl md:text-7xl font-bold text-white mb-3 drop-shadow-2xl text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          whileHover={shouldReduceMotion ? undefined : { scale: 1.05, y: -2 }}
        >
          SHREYA <span className="text-[#0078d4]">JOLAPARA</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle pointer-events-auto text-xs md:text-sm text-gray-300 tracking-widest uppercase text-center px-4"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          AI/ML STUDENT • FULL-STACK DEVELOPER • CREATIVE DESIGNER
        </motion.p>
      </motion.div>
    </div>
  );
}
