"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function SectionHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`text-3xl md:text-4xl font-bold tracking-tight mb-8 ${className}`}
    >
      {children}
    </motion.h2>
  );
}
