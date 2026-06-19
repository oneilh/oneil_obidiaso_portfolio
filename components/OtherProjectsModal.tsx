"use client";

import React, { useState, useEffect } from "react";
import { ProjectMeta } from "@/data/projects-meta";
import { FiX, FiFolder, FiGithub, FiExternalLink } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface OtherProjectsModalProps {
  projects: ProjectMeta[];
}

export function OtherProjectsModal({ projects }: OtherProjectsModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="flex justify-center mt-12 mb-8">
      <Button 
        onClick={() => setIsOpen(true)} 
        size="lg" 
        variant="outline" 
        className="gap-2 border-2 hover:bg-accent/10 hover:text-accent transition-colors"
      >
        <FiFolder aria-hidden="true" />
        View Other Projects
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-3xl bg-card border border-border shadow-2xl rounded-2xl flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-2xl font-bold">Project Archive</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsOpen(false)}
                className="rounded-full hover:bg-muted p-2"
              >
                <FiX className="w-5 h-5" />
              </Button>
            </div>
            
            {/* Body */}
            <div className="p-6 overflow-y-auto grow flex flex-col gap-4">
              <p className="text-muted-foreground mb-2">
                A collection of other neat projects, experiments, and tools I&apos;ve built.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project) => (
                  <Card key={project.id} className="p-5 flex flex-col h-full bg-muted/30 border-border/50 hover:border-accent/50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <FiFolder className="w-8 h-8 text-accent/70" />
                      <div className="flex gap-3 items-center">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-accent transition-all hover:-translate-y-1 p-1">
                            <FiGithub className="w-5 h-5" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-accent transition-all hover:-translate-y-1 p-1">
                            <FiExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-lg mb-2">{project.name}</h4>
                    <p className="text-sm text-muted-foreground grow mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-md font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
