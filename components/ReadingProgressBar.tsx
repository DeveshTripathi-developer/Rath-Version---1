'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export function ReadingProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [percentage, setPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      const pct = Math.round(latest * 100);
      setPercentage(pct);
      setIsVisible(latest > 0.02 && latest < 0.99);
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* 1. Viewport Top Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-[#252525]/10 pointer-events-none"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading Progress"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-[#B3742D] via-[#CDAB7D] to-[#E5C583] origin-left shadow-[0_0_8px_rgba(179,116,45,0.6)]"
          style={{ scaleX }}
        />
      </div>

      {/* 2. Floating Subtle Reading Indicator Pill (Mobile & Desktop) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : -10,
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-14 right-4 sm:right-8 z-30 pointer-events-none hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-[#FFFFFF]/95 backdrop-blur-xs text-[#252525] border border-[#CDAB7D]/50 rounded-full shadow-xs text-[11px] font-mono font-medium"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#B3742D] animate-pulse" />
        <span>{percentage}% read</span>
      </motion.div>
    </>
  );
}
