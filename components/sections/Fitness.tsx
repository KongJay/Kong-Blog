"use client";

import React from "react";
import { Activity, Dumbbell } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

// 4. Fitness Card (Stats/Dashboard Style)
const FitnessStat = ({ label, value, unit, icon: Icon }: { label: string; value: string; unit: string; icon: any }) => {
  return (
    <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 hover:border-neutral-300 transition-colors">
        <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-neutral-200 rounded-lg text-neutral-700">
                <Icon size={20} />
            </div>
            <span className="text-xs font-bold uppercase text-neutral-400 tracking-wider">This Week</span>
        </div>
        <div className="flex items-baseline gap-1">
            <h3 className="text-4xl font-bold text-neutral-900 tracking-tight">{value}</h3>
            <span className="text-sm text-neutral-500 font-medium">{unit}</span>
        </div>
        <p className="text-sm text-neutral-400 mt-2">{label}</p>
    </div>
  );
};

export const Fitness = () => {
  return (
    <Section id="fitness" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-orange)]/10 text-[var(--color-brand-orange)] text-xs font-bold uppercase tracking-wider mb-6">
                  <Dumbbell size={14} />
                  <span>Physical Status</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">
                  Strong Body, <br/> Sharper Mind.
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  I believe in the symbiotic relationship between physical endurance and cognitive performance. Tracking progress keeps me disciplined in both code and cardio.
              </p>
              
              {/* Simple Activity Graph (CSS only representation) */}
              <div className="h-32 flex items-end gap-1 mb-2">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                      <div key={i} className="flex-1 bg-neutral-100 rounded-t-sm relative group">
                          <div className="absolute bottom-0 left-0 right-0 bg-[var(--color-brand-orange)] rounded-t-sm transition-all duration-1000" style={{ height: `${h}%` }}></div>
                          <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded">
                              {h}min
                          </div>
                      </div>
                  ))}
              </div>
              <div className="flex justify-between text-xs text-neutral-400 font-mono uppercase">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FadeIn delay={0.2}>
                  <FitnessStat label="Running Distance" value="42.5" unit="km" icon={Activity} />
              </FadeIn>
              <FadeIn delay={0.3}>
                  <FitnessStat label="Avg. Heart Rate" value="68" unit="bpm" icon={Activity} />
              </FadeIn>
              <FadeIn delay={0.4}>
                  <FitnessStat label="Workout Sessions" value="5" unit="days" icon={Dumbbell} />
              </FadeIn>
              <FadeIn delay={0.5}>
                  <FitnessStat label="Sleep Avg." value="7.2" unit="hrs" icon={Activity} />
              </FadeIn>
          </div>
      </div>
    </Section>
  );
};
