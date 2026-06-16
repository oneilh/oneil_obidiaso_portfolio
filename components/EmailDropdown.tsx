"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FiMail, FiCopy, FiCheck, FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface EmailDropdownProps {
  email: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  showText?: boolean;
}

export function EmailDropdown({
  email,
  variant = "outline",
  size = "md",
  className = "",
  showText = true,
}: EmailDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setIsOpen(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <FiMail aria-hidden="true" className={!showText ? "w-5 h-5" : ""} />
        {showText && <span>Say Hello</span>}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-50 mt-2 w-56 rounded-xl border-2 border-border bg-background p-1.5 shadow-xl shadow-black/5 dark:shadow-white/5 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col gap-1">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <FiExternalLink className="w-4 h-4" />
                Open Mail App
              </a>
              <button
                onClick={handleCopy}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors text-left"
              >
                {copied ? (
                  <FiCheck className="w-4 h-4 text-green-500" />
                ) : (
                  <FiCopy className="w-4 h-4" />
                )}
                {copied ? "Copied to clipboard!" : "Copy Email Address"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
