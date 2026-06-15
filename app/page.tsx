import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiStar, FiExternalLink, FiDownload } from "react-icons/fi";
import { contact, startups, skills, timeline } from "@/data/portfolio";
import { getFeaturedProjects } from "@/lib/github";
import { projectsMeta } from "@/data/projects-meta";
import { ProjectCard } from "@/components/ProjectCard";

export default async function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="fixed top-4 md:top-6 z-50 w-full flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full backdrop-blur-xl bg-background/70 border border-border/50 shadow-lg shadow-black/5 dark:shadow-white/5 transition-all hover:bg-background/80">
          <div className="font-extrabold text-xl tracking-tight mr-6 md:pr-6 md:border-r border-border/50">
            O&apos;Neil<span className="text-accent">.</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground mr-6">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#startup-corner" className="hover:text-foreground transition-colors">Startups</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#journey" className="hover:text-foreground transition-colors">Journey</a>
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
            Developer building <span className="text-accent">products</span>, not just websites.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-10 max-w-2xl leading-relaxed">
            I&apos;m O&apos;Neil. I engineer modern web applications, focusing on product growth, user experience, and scalable architecture.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects">
              <Button size="lg" className="gap-2">
                View Projects <FiArrowRight aria-hidden="true" />
              </Button>
            </a>
            <div className="flex items-center gap-2 ml-4">
              <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub Profile">
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-full">
                  <FiGithub className="w-5 h-5" aria-hidden="true" />
                </Button>
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-full">
                  <FiLinkedin className="w-5 h-5" aria-hidden="true" />
                </Button>
              </a>
              <a href={`mailto:${contact.email}`} aria-label="Send Email">
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-full">
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
              I am a frontend engineer obsessed with product thinking and clean UX. I have tutored in web development, shipped freelance work, and I am constantly building and learning through execution. My tech stack includes React, Next.js, and growing full-stack skills. I care about systems, mental models, and the details that separate good products from great ones.
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
            A sneak peek into the products I&apos;m actively incubating and building.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {startups.map((startup, idx) => (
              <Card key={idx} className="relative overflow-hidden group p-6">
                <div className="absolute top-0 right-0 p-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
                    {startup.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 mt-4 group-hover:text-accent transition-colors">{startup.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{startup.description}</p>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills">
          <SectionHeading>Technical Arsenal</SectionHeading>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground/80">Frontend & Languages</h3>
              <div className="flex flex-wrap gap-3">
                {skills.frontend.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg border border-border/50 text-sm font-medium hover:bg-muted transition-colors">
                    <skill.icon className="w-4 h-4 text-accent" aria-hidden="true" /> {skill.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground/80">Backend as a Service</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.baas.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg border border-border/50 text-sm font-medium hover:bg-muted transition-colors">
                      <skill.icon className="w-4 h-4 text-accent" aria-hidden="true" /> {skill.name}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground/80">Tools & Core</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.tools.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg border border-border/50 text-sm font-medium hover:bg-muted transition-colors">
                      <skill.icon className="w-4 h-4 text-accent" aria-hidden="true" /> {skill.name}
                    </div>
                  ))}
                </div>
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
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 border-t border-border flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">Let&apos;s Build Something.</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Whether you&apos;re a recruiter, a startup looking for a builder, or someone with a wild idea, I would love to connect.
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
