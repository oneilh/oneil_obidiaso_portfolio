"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { FiX } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { ProjectMeta } from "@/data/projects-meta";

interface ProjectModalProps {
  project: ProjectMeta;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({ project, isOpen, onOpenChange }: ProjectModalProps) {
  const [readme, setReadme] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchReadme = async () => {
    if (readme || isLoading) return;
    
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://raw.githubusercontent.com/${project.repoName}/main/README.md`);
      if (!response.ok) {
        // Try master branch if main fails
        const masterResponse = await fetch(`https://raw.githubusercontent.com/${project.repoName}/master/README.md`);
        if (!masterResponse.ok) {
          throw new Error("Could not fetch README");
        }
        const text = await masterResponse.text();
        setReadme(text);
      } else {
        const text = await response.text();
        setReadme(text);
      }
    } catch (err) {
      setError("Failed to load project details.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => {
      if (open) fetchReadme();
      onOpenChange(open);
    }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 transition-opacity" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] gap-4 border-2 border-border bg-background p-6 shadow-lg sm:rounded-lg md:w-full h-[90vh] md:h-[85vh] overflow-hidden flex flex-col">
          
          <div className="flex justify-between items-start mb-4 shrink-0">
            <div>
              <Dialog.Title className="text-2xl font-bold">{project.name}</Dialog.Title>
              <Dialog.Description className="text-muted-foreground mt-1">
                Deep dive into the architecture, challenges, and details.
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <FiX className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </button>
            </Dialog.Close>
          </div>

          <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
            {isLoading ? (
              <div className="space-y-4 animate-pulse">
                <div className="h-8 bg-muted rounded w-1/3"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
                <div className="h-4 bg-muted rounded w-4/6"></div>
                <div className="h-64 bg-muted rounded w-full mt-6"></div>
              </div>
            ) : error ? (
              <div className="text-destructive p-4 border-2 border-destructive rounded-lg bg-destructive/10">
                {error}
              </div>
            ) : (
              <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {readme || ""}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
