"use client";

import React from "react";
import Link from "next/link";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 p-6 md:p-10 flex justify-between items-center z-40 mix-blend-difference text-white">
      <Link href="/" className="text-xl font-bold tracking-tighter">ALEX.DEV</Link>
      <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide items-center">
        <a href="#professional" className="hover:opacity-70 transition-opacity">WORK</a>
        <a href="#music" className="hover:opacity-70 transition-opacity">MUSIC</a>
        <a href="#movies" className="hover:opacity-70 transition-opacity">FILM</a>
        <a href="#fitness" className="hover:opacity-70 transition-opacity">FITNESS</a>
        <AnimatedThemeToggler />
      </div>
      <div className="md:hidden flex items-center gap-4">
        <AnimatedThemeToggler />
        <button>MENU</button>
      </div>
    </nav>
  );
};
