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
        className="flex flex-col h-full overflow-hidden group relative !bg-card hover:!bg-card-hover backdrop-blur-sm border-[3px] border-border/80 hover:border-accent/80 dark:border-border/40 dark:hover:border-accent/60 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Subtle background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Image Preview Area */}
        <div className="relative w-full h-40 md:h-48 bg-muted overflow-hidden border-b border-border/50">
          <Image 
            src={project.image} 
            alt={`${project.name} preview`}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            unoptimized={project.image.startsWith('http') || project.image.includes('placeholder')}
          />
          {/* Overlay gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm bg-background/10">
            <Button 
              variant="default" 
              className="rounded-full px-5 py-4 gap-2 font-semibold shadow-2xl scale-90 group-hover:scale-100 transition-all duration-500 ease-out text-sm pointer-events-none"
            >
              <FiInfo className="w-4 h-4" /> Explore Project
            </Button>
          </div>
        </div>

        {/* Card Content */}
        <div className="flex flex-col flex-grow p-4 md:p-5 relative z-10">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-extrabold tracking-tight group-hover:text-accent transition-colors duration-300">
              {project.name}
            </h3>
          </div>
          
          <p className="text-muted-foreground mb-4 flex-grow text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5 relative z-20">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] sm:text-xs font-medium px-2.5 py-0.5 rounded-md bg-accent/5 text-accent/90 border border-accent/20 hover:bg-accent/15 hover:border-accent/30 transition-all duration-300 cursor-default">
                {tag}
              </span>
            ))}
          </div>

          {/* Card Footer Links */}
          <div className="flex items-center gap-2 mt-auto pt-3 border-t border-border/50">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="flex-1"
              onClick={(e) => e.stopPropagation()}
            >
              <Button variant="outline" size="sm" className="w-full gap-2 border-border/50 hover:bg-muted/80 hover:text-foreground transition-all h-8 text-xs">
                <FiGithub aria-hidden="true" className="w-3.5 h-3.5" /> Source
              </Button>
            </a>
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1"
                onClick={(e) => e.stopPropagation()}
              >
                <Button variant="default" size="sm" className="w-full gap-2 group/btn h-8 text-xs">
                  Live Demo <FiArrowRight aria-hidden="true" className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
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
