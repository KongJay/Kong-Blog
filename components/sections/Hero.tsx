"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import Lanyard from "@/components/ui/Lanyard";

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
        <FadeIn delay={0.4} className="relative h-screen hidden lg:block -mt-20">
            <div className="absolute inset-0 flex items-start justify-center">
               <Lanyard 
                  position={[0, 0, 15]} 
                  gravity={[0, -40, 0]} 
                  className="w-full h-full -ml-40"
               />
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
