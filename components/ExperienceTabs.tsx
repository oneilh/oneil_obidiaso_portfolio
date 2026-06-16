'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { FiAward, FiBookOpen } from "react-icons/fi";
import { timeline } from "@/data/portfolio";

export function ExperienceTabs() {
  const [activeTab, setActiveTab] = useState<'journey' | 'education'>('journey');

  return (
    <section id="experience" className="mt-16 pt-10 border-t border-border/50">
      <div className="flex items-center gap-6 mb-8">
        <button
          onClick={() => setActiveTab('journey')}
          className={`pb-2 text-2xl font-bold transition-colors relative ${activeTab === 'journey' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground/80'}`}
        >
          My Journey
          {activeTab === 'journey' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent" />
          )}
        </button>
        <button
          onClick={() => setActiveTab('education')}
          className={`pb-2 text-2xl font-bold transition-colors relative ${activeTab === 'education' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground/80'}`}
        >
          Education & Certifications
          {activeTab === 'education' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent" />
          )}
        </button>
      </div>

      <div className="min-h-[400px]">
        {activeTab === 'journey' && (
          <div className="space-y-8 border-l-2 border-muted/50 pl-8 ml-3 relative animate-in fade-in duration-500 max-w-4xl">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline dot with hover glow */}
                <span className="absolute -left-[41px] top-6 h-5 w-5 rounded-full bg-background border-4 border-accent/50 group-hover:border-accent group-hover:shadow-[0_0_12px_rgba(var(--accent),0.5)] transition-all duration-300" />
                
                <Card className="p-6 relative overflow-hidden border-border/40 hover:border-accent/60 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 bg-background/40 backdrop-blur-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <span className="inline-block py-1 px-3 text-xs font-bold bg-accent/10 text-accent border border-accent/20 rounded-full w-fit">
                        {item.date}
                      </span>
                    </div>
                    
                    <h4 className="text-base font-semibold text-foreground/80 mb-4">
                      {item.role}
                    </h4>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500">
            <Card className="relative overflow-hidden group p-8 border-border/40 hover:border-accent/60 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 bg-background/40 backdrop-blur-md flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <FiBookOpen className="absolute -bottom-6 -right-6 w-32 h-32 text-accent/[0.03] group-hover:text-accent/[0.08] transition-colors duration-500 transform -rotate-12 pointer-events-none" aria-hidden="true" />
              
              <div className="relative z-10 flex-grow flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-2xl font-extrabold text-foreground tracking-tight group-hover:text-accent transition-colors">
                      Middlesex University, London
                    </h4>
                    <p className="text-accent/90 font-medium mt-2 text-base">
                      BSc IT & Business Information Systems
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 text-accent border border-accent/20 group-hover:scale-110 group-hover:bg-accent/20 group-hover:shadow-[0_0_15px_rgba(var(--accent),0.2)] transition-all duration-300">
                    <FiBookOpen className="w-6 h-6" aria-hidden="true" />
                  </div>
                </div>
                
                <div className="h-px w-full bg-gradient-to-r from-border/50 to-transparent mb-6" />
                
                <div className="flex-grow">
                  <h5 className="text-xs font-bold mb-4 text-foreground/50 uppercase tracking-[0.2em]">
                    Relevant Modules
                  </h5>
                  <ul className="space-y-3 text-sm text-muted-foreground/90">
                    <li className="flex items-start gap-3 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-1.5 shrink-0 group-hover/item:bg-accent transition-colors" />{" "}
                      <span className="leading-relaxed group-hover/item:text-foreground transition-colors">
                        Business Intelligence
                      </span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-1.5 shrink-0 group-hover/item:bg-accent transition-colors" />{" "}
                      <span className="leading-relaxed group-hover/item:text-foreground transition-colors">
                        Strategic Information Systems
                      </span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-1.5 shrink-0 group-hover/item:bg-accent transition-colors" />{" "}
                      <span className="leading-relaxed group-hover/item:text-foreground transition-colors">
                        IT Solutions & Deployment
                      </span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-1.5 shrink-0 group-hover/item:bg-accent transition-colors" />{" "}
                      <span className="leading-relaxed group-hover/item:text-foreground transition-colors">
                        Technology Innovation & Entrepreneurship
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="relative overflow-hidden group p-8 border-border/40 hover:border-accent/60 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 bg-background/40 backdrop-blur-md flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <FiAward className="absolute -bottom-6 -right-6 w-32 h-32 text-accent/[0.03] group-hover:text-accent/[0.08] transition-colors duration-500 transform -rotate-12 pointer-events-none" aria-hidden="true" />
              
              <div className="relative z-10 flex-grow flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-2xl font-extrabold text-foreground tracking-tight group-hover:text-accent transition-colors">
                      Aptech Computer Education, Lagos
                    </h4>
                    <p className="text-accent/90 font-medium mt-2 text-base">
                      Advanced Diploma in Software Engineering
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 text-accent border border-accent/20 group-hover:scale-110 group-hover:bg-accent/20 group-hover:shadow-[0_0_15px_rgba(var(--accent),0.2)] transition-all duration-300">
                    <FiAward className="w-6 h-6" aria-hidden="true" />
                  </div>
                </div>
                
                <div className="h-px w-full bg-gradient-to-r from-border/50 to-transparent mb-6" />
                
                <div className="flex-grow">
                  <h5 className="text-xs font-bold mb-4 text-foreground/50 uppercase tracking-[0.2em]">
                    Key Focus Areas
                  </h5>
                  <ul className="space-y-3 text-sm text-muted-foreground/90">
                    <li className="flex items-start gap-3 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-1.5 shrink-0 group-hover/item:bg-accent transition-colors" />{" "}
                      <span className="leading-relaxed group-hover/item:text-foreground transition-colors">
                        Web & Mobile App Development
                      </span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-1.5 shrink-0 group-hover/item:bg-accent transition-colors" />{" "}
                      <span className="leading-relaxed group-hover/item:text-foreground transition-colors">
                        Object-Oriented Programming
                      </span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-1.5 shrink-0 group-hover/item:bg-accent transition-colors" />{" "}
                      <span className="leading-relaxed group-hover/item:text-foreground transition-colors">
                        Database Management Systems
                      </span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-1.5 shrink-0 group-hover/item:bg-accent transition-colors" />{" "}
                      <span className="leading-relaxed group-hover/item:text-foreground transition-colors">
                        Systems Analysis & Design
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
