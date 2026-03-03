"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Professional } from "@/components/sections/Professional";
import { Music } from "@/components/sections/Music";
import { Movies } from "@/components/sections/Movies";
import { Fitness } from "@/components/sections/Fitness";

export default function VisionaryPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="bg-white text-neutral-900 font-sans selection:bg-black selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-50"
        style={{ scaleX }}
      />

      <Navbar />
      <Hero />
      <Professional />
      <Music />
      <Movies />
      <Fitness />
      <Footer />
    </div>
  );
}
