"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`rounded-xl border border-border bg-background/50 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = "Card";
