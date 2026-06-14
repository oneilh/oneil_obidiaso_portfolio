import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiStar, FiExternalLink, FiDownload } from "react-icons/fi";
import { contact, startups, skills, timeline } from "@/data/portfolio";
import { getFeaturedProjects } from "@/lib/github";

export default async function Home() {
  const projects = await getFeaturedProjects("vercel"); // Using a placeholder user to ensure data is returned for now

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight">
            O&apos;Neil<span className="text-accent">.</span>
          </div>
          <nav className="flex items-center gap-4">
            <ThemeToggle />
          </nav>
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
                View Projects <FiArrowRight />
              </Button>
            </a>
            <div className="flex items-center gap-2 ml-4">
              <a href={contact.github} target="_blank" rel="noreferrer">
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-full">
                  <FiGithub className="w-5 h-5" />
                </Button>
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-full">
                  <FiLinkedin className="w-5 h-5" />
                </Button>
              </a>
              <a href={`mailto:${contact.email}`}>
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-full">
                  <FiMail className="w-5 h-5" />
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
              I specialize in bridging the gap between design and engineering. While my core expertise is in 
              frontend development (React, Next.js), I care deeply about the entire product lifecycle—from 
              database schema design to the final user micro-interactions.
            </p>
            <p>
              Currently, I am learning and diving deeper into Advanced AI integrations, Serverless Edge computing, 
              and optimizing web performance for low-bandwidth environments. I believe a great developer understands 
              the <em>why</em> behind a product, not just the <em>how</em>.
            </p>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects">
          <SectionHeading>Featured Projects</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((repo) => (
              <Card key={repo.id} className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">
                    <a href={repo.html_url} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                      {repo.name}
                    </a>
                  </h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <FiStar /> <span>{repo.stargazers_count}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 flex-grow">{repo.description}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                  <span className="text-sm font-medium text-accent">{repo.language}</span>
                  <a href={repo.homepage || repo.html_url} target="_blank" rel="noreferrer">
                    <Button variant="ghost" size="sm" className="gap-2">
                      View <FiExternalLink />
                    </Button>
                  </a>
                </div>
              </Card>
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
              <Card key={idx} className="relative overflow-hidden group">
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
                    <skill.icon className="w-4 h-4 text-accent" /> {skill.name}
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
                      <skill.icon className="w-4 h-4 text-accent" /> {skill.name}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground/80">Tools & Core</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.tools.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg border border-border/50 text-sm font-medium hover:bg-muted transition-colors">
                      <skill.icon className="w-4 h-4 text-accent" /> {skill.name}
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
            Whether you&apos;re a recruiter, a startup looking for a builder, or someone with a wild idea—I&apos;d love to connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`mailto:${contact.email}`}>
              <Button size="lg" className="gap-2">
                <FiMail /> Say Hello
              </Button>
            </a>
            <a href={contact.resume} target="_blank" rel="noreferrer">
              <Button variant="outline" size="lg" className="gap-2">
                <FiDownload /> View Resume
              </Button>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
