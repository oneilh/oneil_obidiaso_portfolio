import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiStar,
  FiExternalLink,
  FiDownload,
  FiAward,
  FiBookOpen,
} from "react-icons/fi";
import { contact, startups, skills, timeline } from "@/data/portfolio";
import { getFeaturedProjects } from "@/lib/github";
import { projectsMeta } from "@/data/projects-meta";
import { ProjectCard } from "@/components/ProjectCard";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="fixed top-4 md:top-6 z-50 w-full flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-between px-6 py-3 rounded-none backdrop-blur-xl bg-background/70 border border-border/80 shadow-lg shadow-black/5 dark:shadow-white/5 transition-all hover:bg-background/80">
          <div className="font-extrabold text-xl tracking-tight mr-6 md:pr-6 md:border-r border-border/50">
            O&apos;Neil<span className="text-accent">.</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground mr-6">
            <a
              href="#about"
              className="hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="#startup-corner"
              className="hover:text-foreground transition-colors"
            >
              Startups
            </a>
            <a
              href="#skills"
              className="hover:text-foreground transition-colors"
            >
              Skills
            </a>
            <a
              href="#journey"
              className="hover:text-foreground transition-colors"
            >
              Journey
            </a>
          </nav>
          <div className="flex items-center md:pl-6 md:border-l border-border/50">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12 flex flex-col gap-32">
        {/* Hero Section */}
        <section className="pt-12 md:pt-24 flex flex-col items-start max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-6">
            Building products that matter
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-10 max-w-2xl leading-relaxed">
            Frontend engineer thinking like a founder. Full-stack thinking from
            UI to systems—obsessing over user retention, competitive fit, and
            how products actually grow.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects">
              <Button size="lg" className="gap-2">
                View Projects <FiArrowRight aria-hidden="true" />
              </Button>
            </a>
            <div className="flex items-center gap-2 ml-4">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-10 h-10 p-0 rounded-full"
                >
                  <FiGithub className="w-5 h-5" aria-hidden="true" />
                </Button>
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-10 h-10 p-0 rounded-full"
                >
                  <FiLinkedin className="w-5 h-5" aria-hidden="true" />
                </Button>
              </a>
              <a href={`mailto:${contact.email}`} aria-label="Send Email">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-10 h-10 p-0 rounded-full"
                >
                  <FiMail className="w-5 h-5" aria-hidden="true" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-3xl">
          <SectionHeading>About Me</SectionHeading>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am a frontend engineer obsessed with product thinking and clean
              UX. I have tutored in web development, shipped freelance work, and
              I am constantly building and learning through execution. My tech
              stack includes React, Next.js, and growing full-stack skills. I
              care about systems, mental models, and the details that separate
              good products from great ones.
            </p>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects">
          <SectionHeading>Featured Projects</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsMeta.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Startup Corner Section */}
        <section id="startup-corner" className="max-w-4xl">
          <SectionHeading>Startup Corner</SectionHeading>
          <p className="text-muted-foreground mb-8 text-lg">
            A sneak peek into the products I&apos;m actively incubating and
            building.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {startups.map((startup, idx) => (
              <Card key={idx} className="relative overflow-hidden group p-6">
                <div className="absolute top-0 right-0 p-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
                    {startup.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 mt-4 group-hover:text-accent transition-colors">
                  {startup.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {startup.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Academic Projects Section */}
        <section id="academic-projects" className="max-w-4xl">
          <SectionHeading>Academic Projects</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="relative overflow-hidden group p-6 flex flex-col">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                Business Intelligence Dashboard
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                A comprehensive dashboard built for coursework, leveraging data
                mining and visualization techniques to present actionable
                business insights.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {[
                  "Tableau",
                  "Power BI",
                  "Orange",
                  "Data Mining",
                  "Dashboards",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground border border-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <SectionHeading>Technical Arsenal</SectionHeading>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground/80">
                Frontend & Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.frontend.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg border border-border/50 text-sm font-medium hover:bg-muted transition-colors"
                  >
                    <skill.icon
                      className="w-4 h-4 text-accent"
                      aria-hidden="true"
                    />{" "}
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground/80">
                  Backend as a Service
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.baas.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg border border-border/50 text-sm font-medium hover:bg-muted transition-colors"
                    >
                      <skill.icon
                        className="w-4 h-4 text-accent"
                        aria-hidden="true"
                      />{" "}
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground/80">
                  Tools & Core
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.tools.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg border border-border/50 text-sm font-medium hover:bg-muted transition-colors"
                    >
                      <skill.icon
                        className="w-4 h-4 text-accent"
                        aria-hidden="true"
                      />{" "}
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Sub-section */}
            <div className="mt-16 pt-10 border-t border-border/50">
              <div className="flex items-center gap-3 mb-8">
                <FiAward className="w-6 h-6 text-accent" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-foreground">
                  Education & Certifications
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section id="journey" className="max-w-3xl">
          <SectionHeading>My Journey</SectionHeading>
          <div className="space-y-8 border-l-2 border-muted pl-6 ml-3 relative">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-[35px] top-1 h-5 w-5 rounded-full bg-background border-4 border-accent" />
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <span className="inline-block py-1 px-2 mt-1 mb-2 text-xs font-semibold bg-muted text-muted-foreground rounded-md">
                  {item.role} • {item.date}
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-12 border-t border-border flex flex-col items-center text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">
            Let&apos;s Build Something.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Whether you&apos;re a recruiter, a startup looking for a builder, or
            someone with a wild idea, I would love to connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`mailto:${contact.email}`}>
              <Button size="lg" className="gap-2">
                <FiMail aria-hidden="true" /> Say Hello
              </Button>
            </a>
            <a href={contact.resume} target="_blank" rel="noreferrer">
              <Button variant="outline" size="lg" className="gap-2">
                <FiDownload aria-hidden="true" /> View Resume
              </Button>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
