"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FiGithub, FiExternalLink, FiInfo } from "react-icons/fi";
import { ProjectMeta } from "@/data/projects-meta";
import { ProjectModal } from "./ProjectModal";

interface ProjectCardProps {
  project: ProjectMeta;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="flex flex-col h-full overflow-hidden group">
        {/* Image Preview Area */}
        <div className="relative w-full h-48 md:h-56 bg-muted border-b border-border overflow-hidden">
          {/* We use unoptimized for placeholder images, change in production if needed */}
          <Image 
            src={project.image} 
            alt={`${project.name} preview`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized={project.image.startsWith('http') || project.image.includes('placeholder')}
          />
          <div className="absolute inset-0 bg-background/20 backdrop-blur-[4px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <Button 
              variant="secondary" 
              className="rounded-full px-6 py-5 gap-2 font-semibold shadow-xl scale-90 group-hover:scale-100 transition-all duration-300 bg-background/90 hover:bg-background border border-border/50 text-foreground"
              onClick={() => setIsModalOpen(true)}
            >
              <FiInfo className="w-4 h-4" /> Deep Dive
            </Button>
          </div>
        </div>

        {/* Card Content */}
        <div className="flex flex-col flex-grow p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold">
              {project.name}
            </h3>
          </div>
          
          <p className="text-muted-foreground mb-4 flex-grow text-sm md:text-base">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                {tag}
              </span>
            ))}
          </div>

          {/* Card Footer Links */}
          <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex-1">
              <Button variant="outline" size="sm" className="w-full gap-2">
                <FiGithub aria-hidden="true" /> Source
              </Button>
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex-1">
                <Button variant="default" size="sm" className="w-full gap-2">
                  <FiExternalLink aria-hidden="true" /> Live Demo
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
