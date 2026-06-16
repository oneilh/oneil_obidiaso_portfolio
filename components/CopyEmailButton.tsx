"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FiCopy, FiCheck } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface CopyEmailButtonProps {
  email: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  showText?: boolean;
}

export function CopyEmailButton({
  email,
  variant = "outline",
  size = "md",
  className = "",
  showText = true,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleCopy}
      title="Copy Email Address"
      aria-label="Copy Email Address"
    >
      <div className="flex items-center gap-2 relative">
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.div
              key="check"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.15 }}
            >
              <FiCheck className={showText ? "" : "w-5 h-5 text-green-500"} aria-hidden="true" />
            </motion.div>
          ) : (
            <motion.div
              key="copy"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.15 }}
            >
              <FiCopy className={showText ? "" : "w-5 h-5"} aria-hidden="true" />
            </motion.div>
          )}
        </AnimatePresence>
        {showText && <span>{copied ? "Copied!" : "Copy Email"}</span>}
      </div>
    </Button>
  );
}
