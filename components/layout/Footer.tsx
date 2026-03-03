"use client";

import React from "react";
import { Github, Twitter, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-20 px-6 md:px-20 text-center">
      <h2 className="text-4xl font-serif mb-8">Let's connect.</h2>
      <div className="flex justify-center gap-6 text-neutral-400">
        <Twitter className="hover:text-white cursor-pointer transition-colors" />
        <Github className="hover:text-white cursor-pointer transition-colors" />
        <Instagram className="hover:text-white cursor-pointer transition-colors" />
        <Mail className="hover:text-white cursor-pointer transition-colors" />
      </div>
      <p className="mt-10 text-neutral-600 text-sm">© 2025 Alex Portfolio.</p>
    </footer>
  );
};
