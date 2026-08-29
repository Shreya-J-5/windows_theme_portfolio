'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem('hasBooted')) {
      onComplete();
      return;
    }

    const completeTimeout = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        sessionStorage.setItem('hasBooted', 'true');
        onComplete();
      }, 500);
    }, 2200);

    return () => clearTimeout(completeTimeout);
  }, [onComplete]);

  if (sessionStorage.getItem('hasBooted') && isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-[#000000] flex flex-col items-center justify-center select-none"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Windows Logo */}
            <div className="mb-10">
              <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
                <rect x="2" y="2" width="38" height="38" rx="2" fill="#0078d4" />
                <rect x="44" y="2" width="42" height="38" rx="2" fill="#0078d4" />
                <rect x="2" y="44" width="38" height="42" rx="2" fill="#0078d4" />
                <rect x="44" y="44" width="42" height="42" rx="2" fill="#0078d4" />
              </svg>
            </div>

            {/* Windows 11 loading spinner */}
            <div className="relative w-8 h-8">
              <motion.div
                className="absolute inset-0 border-2 border-transparent border-t-[#0078d4] rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
