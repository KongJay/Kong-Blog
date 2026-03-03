"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Music as MusicIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

// 2. Music Card (Vinyl/Audio Player Style)
const MusicCard = ({ title, artist, albumCover }: { title: string; artist: string; albumCover: string }) => {
  return (
    <motion.div 
        whileHover={{ y: -10 }}
        className="flex items-center gap-6 p-6 bg-neutral-100 rounded-2xl hover:bg-neutral-200 transition-colors cursor-pointer group"
    >
        <div className="relative w-24 h-24 bg-neutral-800 rounded-full flex-shrink-0 animate-spin-slow shadow-xl overflow-hidden">
             {/* Vinyl Effect */}
             <div className="absolute inset-0 border-4 border-neutral-900 rounded-full opacity-20"></div>
             <div className="absolute inset-[30%] bg-neutral-300 rounded-full"></div>
             {/* Use a real image in production */}
             <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-orange-400 opacity-60"></div>
        </div>
        <div className="flex-1">
            <h4 className="text-xl font-bold font-serif mb-1">{title}</h4>
            <p className="text-neutral-500 text-sm uppercase tracking-wide">{artist}</p>
            <div className="mt-4 h-1 bg-neutral-300 rounded-full overflow-hidden">
                <div className="h-full bg-black w-1/3 group-hover:w-2/3 transition-all duration-1000"></div>
            </div>
        </div>
        <div className="w-10 h-10 flex items-center justify-center border border-neutral-300 rounded-full group-hover:bg-black group-hover:text-white transition-all">
            <Play size={16} fill="currentColor" />
        </div>
    </motion.div>
  );
};

export const Music = () => {
  return (
    <Section id="music" className="bg-neutral-50 relative overflow-hidden">
      {/* Decorative Waveform Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <div className="flex gap-1 items-end h-64">
              {[...Array(20)].map((_, i) => (
                  <motion.div 
                      key={i} 
                      className="w-4 bg-black"
                      animate={{ height: ["20%", "80%", "40%"] }}
                      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                  />
              ))}
          </div>
      </div>

      <div className="max-w-4xl mx-auto w-full z-10">
          <FadeIn className="text-center mb-16">
              <MusicIcon className="w-12 h-12 mx-auto mb-4 text-neutral-400" />
              <h2 className="text-5xl md:text-6xl font-serif mb-4">On Rotation</h2>
              <p className="text-neutral-500">The soundtrack to my code. Curated weekly.</p>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6">
              <FadeIn delay={0.1}>
                  <MusicCard title="Midnight City" artist="M83" albumCover="" />
              </FadeIn>
              <FadeIn delay={0.2}>
                  <MusicCard title="Cornfield Chase" artist="Hans Zimmer" albumCover="" />
              </FadeIn>
              <FadeIn delay={0.3}>
                  <MusicCard title="Instant Crush" artist="Daft Punk" albumCover="" />
              </FadeIn>
          </div>
      </div>
    </Section>
  );
};
