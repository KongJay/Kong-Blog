"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

export const Hero = () => {
  return (
    <Section className="h-screen relative overflow-hidden flex items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Column: Text */}
        <div>
          <FadeIn>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tight mb-8">
              The <br />
              <span className="italic font-light text-neutral-400">Holistic</span> <br />
              Developer.
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2} className="max-w-xl">
            <p className="text-xl md:text-2xl font-light text-neutral-600 leading-relaxed">
              Coding is just one part of the equation. <br/>
              Explore the intersections of my professional craft and personal passions.
            </p>
          </FadeIn>
        </div>

        {/* Right Column: Visual Element */}
        <FadeIn delay={0.4} className="relative h-[60vh] hidden lg:block">
            {/* 
              Option 1: Abstract 3D Shapes (CSS Only representation) 
              Use a real 3D library (Three.js/Spline) for better effect in production
            */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                    animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                        duration: 20, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                    className="w-[400px] h-[400px] border-[1px] border-neutral-200 rounded-full absolute"
                />
                <motion.div 
                    animate={{ 
                        rotate: [360, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                        duration: 25, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                    className="w-[300px] h-[300px] border-[1px] border-neutral-300 rounded-full absolute rotate-45"
                />
                 <motion.div 
                    animate={{ 
                       y: [0, -20, 0]
                    }}
                    transition={{ 
                        duration: 5, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                    className="relative z-10 w-64 h-80 bg-neutral-900 overflow-hidden rounded-t-full"
                >
                    {/* Placeholder for Portrait Image */}
                    <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-black opacity-80"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                        <span className="text-white/20 font-serif text-6xl italic">You</span>
                    </div>
                </motion.div>
            </div>
        </FadeIn>
      </div>
      
      {/* Abstract Background Element (Moved to be more subtle) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-neutral-100 rounded-full blur-3xl opacity-30 -z-10"></div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400"
      >
        <span className="text-xs tracking-widest uppercase">Explore</span>
        <ArrowDown className="animate-bounce" size={16} />
      </motion.div>
    </Section>
  );
};
