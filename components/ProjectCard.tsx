"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FiGithub, FiExternalLink, FiInfo, FiArrowRight } from "react-icons/fi";
import { ProjectMeta } from "@/data/projects-meta";
import { ProjectModal } from "./ProjectModal";

interface ProjectCardProps {
  project: ProjectMeta;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card 
        className="flex flex-col h-full overflow-hidden group relative bg-card! lg:hover:bg-card-hover! backdrop-blur-sm border-[3px] border-border/80 lg:hover:border-accent/80 dark:border-border/40 dark:lg:hover:border-accent/60 shadow-sm transition-all duration-500 lg:hover:shadow-2xl lg:hover:shadow-accent/10 lg:hover:-translate-y-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        onClick={() => setIsModalOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsModalOpen(true);
          }
        }}
        tabIndex={0}
      >
        {/* Subtle background gradient on hover */}
        <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Image Preview Area */}
        <div className="relative w-full h-40 md:h-48 bg-muted overflow-hidden border-b border-border/50">
          <Image 
            src={project.image} 
            alt={`${project.name} preview`}
            fill
            className="object-cover transition-transform duration-700 ease-out lg:group-hover:scale-110"
            unoptimized={project.image.startsWith('http') || project.image.includes('placeholder')}
          />
          {/* Overlay gradient for readability */}
          <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/20 to-transparent opacity-60 lg:group-hover:opacity-80 transition-opacity duration-500" />
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 lg:group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm bg-background/10">
            <Button 
              variant="primary" 
              className="rounded-full px-5 py-4 gap-2 font-semibold shadow-2xl scale-90 lg:group-hover:scale-100 transition-all duration-500 ease-out text-sm pointer-events-none"
            >
              <FiInfo className="w-4 h-4" /> Explore Project
            </Button>
          </div>
        </div>

        {/* Card Content */}
        <div className="flex flex-col grow p-4 md:p-5 relative z-10">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-extrabold tracking-tight lg:group-hover:text-accent transition-colors duration-300">
              {project.name}
            </h3>
          </div>
          
          <p className="text-muted-foreground mb-4 grow text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-y-1.5 gap-x-0 mb-5 relative z-20">
            {project.tags.map((tag, index) => (
              <span key={tag} className="flex items-center text-[10px] sm:text-[11px] font-bold text-muted-foreground/70 uppercase tracking-wider cursor-default lg:hover:text-accent transition-colors">
                {tag}
                {index < project.tags.length - 1 && <span className="mx-2.5 text-border/60">•</span>}
              </span>
            ))}
          </div>

          {/* Card Footer Links */}
          <div className="mt-auto pt-6 flex items-center justify-between border-t border-border/40 z-30 relative">
            {project.githubUrl && project.githubUrl !== "#" && project.githubUrl !== "" ? (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                aria-label={`View source code for ${project.name} on GitHub`}
                onClick={(e) => e.stopPropagation()}
                className="text-[10px] font-bold text-muted-foreground lg:hover:text-foreground inline-flex items-center gap-2 uppercase tracking-[0.15em] relative group/gh"
              >
                <FiGithub className="w-3.5 h-3.5" /> Source
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 lg:group-hover/gh:w-full"></span>
              </a>
            ) : <div />}

            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer"
                aria-label={`View live demo of ${project.name}`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2.5 text-xs font-bold text-accent group/demo uppercase tracking-wider"
              >
                <span className="lg:group-hover/demo:text-accent/80 transition-colors">Live Site</span>
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center lg:group-hover/demo:bg-accent lg:group-hover/demo:text-accent-foreground transition-all duration-500 shadow-sm">
                  <FiArrowRight className="w-4 h-4 -rotate-45 lg:group-hover/demo:rotate-0 transition-transform duration-500 ease-out" />
                </div>
              </a>
            )}
          </div>
        </div>
      </Card>

      <ProjectModal 
        project={project} 
        isOpen={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
    </>
  );
}
