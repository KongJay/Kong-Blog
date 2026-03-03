"use client";

import React from "react";

export const Section = ({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) => {
  return (
    <section id={id} className={`min-h-screen flex flex-col justify-center px-6 md:px-20 py-20 ${className}`}>
      {children}
    </section>
  );
};
