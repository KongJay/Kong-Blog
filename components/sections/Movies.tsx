"use client";

import React from "react";
import { Film } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

// 3. Movie Card (Film Strip/Cinematic Style)
const MovieCard = ({ title, director, year, quote }: { title: string; director: string; year: string; quote: string }) => {
  return (
    <div className="relative w-full aspect-[2/3] md:aspect-[3/4] bg-black text-white p-1 rounded-sm overflow-hidden group cursor-pointer">
        {/* Film Strip Holes */}
        <div className="absolute left-0 top-0 bottom-0 w-4 border-r border-white/20 flex flex-col justify-between py-2 z-10 bg-black/50 backdrop-blur-sm">
            {[...Array(8)].map((_, i) => (
                <div key={i} className="w-2 h-3 bg-white/20 mx-auto rounded-[1px]"></div>
            ))}
        </div>
        
        {/* Content */}
        <div className="h-full w-full relative">
            <div className="absolute inset-0 bg-neutral-800 group-hover:scale-110 transition-transform duration-700"></div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            
            <div className="absolute bottom-0 left-4 right-0 p-6">
                <p className="text-xs text-white/70 mb-2 tracking-widest uppercase font-mono">{year} • {director}</p>
                <h3 className="text-3xl font-serif italic leading-tight mb-4 group-hover:translate-x-2 transition-transform">{title}</h3>
                <p className="text-sm text-white/60 font-serif border-l-2 border-white/30 pl-3 hidden group-hover:block transition-all animate-in fade-in slide-in-from-bottom-2">
                    "{quote}"
                </p>
            </div>
        </div>
    </div>
  );
};

export const Movies = () => {
  return (
    <Section id="movies" className="bg-black text-white">
       <FadeIn className="mb-16 text-center md:text-left">
          <div className="flex items-center gap-4 mb-2 justify-center md:justify-start">
              <Film className="text-white/50" />
              <span className="text-sm uppercase tracking-[0.2em] text-white/50">Cinephile Log</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-white">Recent Watchlist</h2>
       </FadeIn>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <FadeIn delay={0.1}>
              <MovieCard 
                  title="Inception" 
                  director="Christopher Nolan" 
                  year="2010" 
                  quote="Dreams feel real while we're in them."
              />
          </FadeIn>
          <FadeIn delay={0.2}>
              <MovieCard 
                  title="Her" 
                  director="Spike Jonze" 
                  year="2013" 
                  quote="I'm yours and I'm not yours."
              />
          </FadeIn>
          <FadeIn delay={0.3}>
              <MovieCard 
                  title="Blade Runner 2049" 
                  director="Denis Villeneuve" 
                  year="2017" 
                  quote="All the best memories are hers."
              />
          </FadeIn>
       </div>
    </Section>
  );
};
