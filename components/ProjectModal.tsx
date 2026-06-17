"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { FiX, FiGithub, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProjectMeta } from "@/data/projects-meta";

interface ProjectModalProps {
  project: ProjectMeta;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({ project, isOpen, onOpenChange }: ProjectModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 transition-opacity" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] gap-4 border-2 border-border bg-background p-6 shadow-lg sm:rounded-lg md:w-full h-[90vh] md:h-[85vh] overflow-hidden flex flex-col">
          
          <div className="flex justify-between items-start mb-6 shrink-0">
            <div className="flex-grow">
              <Dialog.Title className="text-2xl md:text-3xl font-extrabold tracking-tight">{project.name}</Dialog.Title>
              <Dialog.Description className="text-muted-foreground mt-1 mb-4 text-sm md:text-base">
                Deep dive into the architecture, challenges, and details.
              </Dialog.Description>
              
              <div className="flex flex-wrap items-center gap-3">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Button variant="outline" size="sm" className="gap-2 rounded-full px-5 h-9 font-medium">
                      <FiGithub className="w-4 h-4" /> Source Code
                    </Button>
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    <Button variant="default" size="sm" className="gap-2 rounded-full px-5 h-9 font-medium group/btn">
                      Visit Site <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                )}
              </div>
            </div>
            <Dialog.Close asChild>
              <button className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground ml-4 mt-1">
                <FiX className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </button>
            </Dialog.Close>
          </div>

          <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
            {project.details ? (
              <div className="space-y-8 pb-8 mt-2">
                {project.details.overview && (
                  <section>
                    <h3 className="text-xl font-semibold mb-3">Overview</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.details.overview}
                    </p>
                  </section>
                )}
                
                {project.details.features && project.details.features.length > 0 && (
                  <section>
                    <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      {project.details.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {project.details.technicalHighlights && project.details.technicalHighlights.length > 0 && (
                  <section>
                    <h3 className="text-xl font-semibold mb-3">Technical Highlights</h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      {project.details.technicalHighlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {project.details.gallery && project.details.gallery.length > 0 && (
                  <section>
                    <h3 className="text-xl font-semibold mb-4">Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.details.gallery.map((img, i) => (
                        <div key={i} className="relative h-48 md:h-64 rounded-lg overflow-hidden border border-border">
                          <Image 
                            src={img} 
                            alt={`${project.name} gallery image ${i + 1}`} 
                            fill 
                            className="object-cover"
                            unoptimized={img.startsWith('http') || img.includes('placeholder')}
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                <p>No detailed information available for this project.</p>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
