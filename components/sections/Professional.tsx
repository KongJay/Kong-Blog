"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

// 1. Professional/Work Card (Classic Portfolio Style)
const ProjectCard = ({ title, category, year, color }: { title: string; category: string; year: string; color: string }) => {
  return (
    <motion.div 
      whileHover={{ scale: 0.98 }}
      className="group relative w-full aspect-[16/9] overflow-hidden bg-neutral-900 rounded-lg cursor-pointer"
    >
      <div className={`absolute inset-0 ${color} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="absolute inset-0 flex items-center justify-center">
         <span className="text-white/20 text-9xl font-serif font-bold opacity-0 group-hover:opacity-20 transition-opacity duration-500">
            {year}
         </span>
      </div>
      <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-sm font-medium text-white/60 mb-2 uppercase tracking-widest">{category}</p>
            <h3 className="text-3xl md:text-4xl font-serif text-white">{title}</h3>
          </div>
          <div className="bg-white text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <ExternalLink size={20} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Professional = () => {
  return (
    <Section id="professional" className="bg-white">
      <FadeIn className="mb-16 flex items-baseline gap-4">
        <h2 className="text-5xl md:text-7xl font-serif">Professional</h2>
        <span className="h-px w-20 bg-neutral-300 block"></span>
        <span className="text-sm uppercase tracking-widest text-neutral-500">Selected Works</span>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
              <ProjectCard title="Lumina System" category="Design System" year="2024" color="bg-[var(--color-brand-blue)]" />
          </FadeIn>
          <FadeIn delay={0.2}>
              <ProjectCard title="Apex Fintech" category="Web Application" year="2023" color="bg-neutral-800" />
          </FadeIn>
          <FadeIn delay={0.3} className="md:col-span-2">
              <ProjectCard title="Nebula AI Interface" category="Artificial Intelligence" year="2025" color="bg-black" />
          </FadeIn>
      </div>
    </Section>
  );
};
