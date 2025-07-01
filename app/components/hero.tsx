"use client";
import React, { useEffect, useState } from "react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@radix-ui/react-hover-card";
import { FaReact, FaArrowDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Taglines you want to loop through dynamically
const taglines = [
  "Design. Develop. Deliver.",
  "Bringing Design to Life Through Code and Creativity",
  " Transforming ideas into elegant code",
];

export default function HeroSection() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [taglineIndex, setTaglineIndex] = useState(0);

  // Show scroll indicator after a delay
  useEffect(() => {
    const scrollTimer = setTimeout(() => setShowScrollIndicator(true), 2000);
    return () => clearTimeout(scrollTimer);
  }, []);

  // Rotate taglines every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen relative overflow-hidden flex flex-col items-center justify-center text-center bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900">
      
      {/* Background blur effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 px-6 flex flex-col items-center justify-center flex-grow">
        {/* Developer Badge */}
        <div className="inline-block mb-6 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-sky-400 to-purple-500 rounded-lg blur-md opacity-30"></div>
          <div className="relative px-6 py-2 bg-neutral-800 rounded-lg shadow-inner shadow-black/20">
            <span className="text-xs font-semibold tracking-widest uppercase text-neutral-300">
              Frontend Developer
            </span>
          </div>
        </div>

        {/* Name with hover info card */}
        <div className="mb-6">
          <HoverCard>
            <HoverCardTrigger asChild>
              <h1
                className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 cursor-pointer transition-transform hover:scale-105"
                aria-label="Syed Minam Ur Rehman - Frontend Developer"
              >
                Syed Minam Ur Rehman
              </h1>
            </HoverCardTrigger>
            <HoverCardContent className="backdrop-blur-md bg-white/5 border border-white/20 text-white rounded-xl p-6 shadow-2xl w-72">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center mr-4">
                  <FaReact className="w-6 h-6 text-blue-400 animate-spin-slow" />
                </div>
                <div>
                  <h2 className="text-xl font-medium mb-1">Frontend Developer</h2>
                  <p className="text-sm text-neutral-300">
                    Specializing in React, Next.js, animations, and beautiful UI/UX design.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        {/* Dynamic Tagline */}
        <AnimatePresence mode="wait">
          <motion.h2
            key={taglines[taglineIndex]}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="text-xl font-medium text-neutral-300 h-8 overflow-hidden"
          >
            {taglines[taglineIndex]}
          </motion.h2>
        </AnimatePresence>

        {/* Decorative separator */}
        <div className="mt-8 mb-12 flex justify-center">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "96px", opacity: 0.5 }}
            transition={{ delay: 1, duration: 1 }}
            className="h-1 bg-gradient-to-r from-transparent via-neutral-400 to-transparent rounded"
          />
        </div>
      </div>

      {/* Scroll Indicator - Now placed at the bottom of the screen with fixed positioning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={showScrollIndicator ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="w-full flex flex-col items-center pb-12 mt-auto"
      >
        <span className="text-neutral-400 text-sm mb-2 tracking-wider uppercase">
          Scroll to explore
        </span>
        <div className="animate-bounce">
          <FaArrowDown className="text-neutral-400" />
        </div>
      </motion.div>

      {/* Global styles for slow animation */}
      <style jsx global>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
}