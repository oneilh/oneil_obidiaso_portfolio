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
  FiBarChart2,
} from "react-icons/fi";
import { profile, startups, skills, academicProjects } from "@/data/portfolio";
import { ExperienceTabs } from "@/components/ExperienceTabs";
import { getProjectMetaFromRepo } from "@/lib/github";
import { featuredProjects, ProjectMeta } from "@/data/projects-meta";
import { ProjectCard } from "@/components/ProjectCard";
import { EmailDropdown } from "@/components/EmailDropdown";
import { OtherProjectsModal } from "@/components/OtherProjectsModal";

export default async function Home() {
  const username = "oneilh";
  
  const fetchedProjects: ProjectMeta[] = (await Promise.all(
    featuredProjects.map(async (p) => {
      const repoData = await getProjectMetaFromRepo(username, p.repo);
      if (!repoData) return null;
      
      return {
        id: repoData.id || p.repo,
        name: repoData.name || p.repo.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()),
        description: repoData.description || "No description provided.",
        tags: repoData.tags || [],
        image: repoData.image || `/placeholder.png`,
        githubUrl: repoData.githubUrl || `https://github.com/${username}/${p.repo}`,
        liveUrl: repoData.liveUrl || undefined,
        repoName: `${username}/${p.repo}`,
        ...p,
      } as ProjectMeta;
    })
  )).filter((p): p is ProjectMeta => p !== null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="fixed top-4 md:top-6 z-50 w-full flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-between px-6 py-3 rounded-none backdrop-blur-xl bg-background/70 border-2 border-border shadow-lg shadow-black/5 dark:shadow-white/5 transition-all hover:bg-background/80">
          <div className="font-extrabold text-xl tracking-tight mr-6 md:pr-6 md:border-r-2 border-border">
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
          <div className="flex items-center md:pl-6 md:border-l-2 border-border">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12 flex flex-col gap-32">
        {/* Hero Section */}
        <section className="pt-12 md:pt-24 flex flex-col items-start max-w-3xl">
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-none mb-6">
            Building products that matter
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground/80 font-medium mb-10 max-w-2xl leading-relaxed">
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
                href={profile.github}
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
                href={profile.linkedin}
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
              <EmailDropdown
                email={profile.email}
                variant="ghost"
                size="sm"
                className="w-10 h-10 p-0 rounded-full"
                showText={false}
              />
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
        <section id="projects" className="w-full">
          <SectionHeading>Featured Projects</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
            {fetchedProjects.map((project, idx) => (
              <ProjectCard key={`${project.id}-${idx}`} project={project} />
            ))}
          </div>
        </section>

        <OtherProjectsModal />

        {/* Startup Corner Section */}
        <section id="startup-corner" className="max-w-4xl">
          <SectionHeading>Startup Corner</SectionHeading>
          <p className="text-muted-foreground mb-10 text-lg">
            A sneak peek into the products I&apos;m actively incubating and
            building.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {startups.map((startup, idx) => (
              <Card key={idx} className="relative overflow-hidden group p-8 !bg-card hover:!bg-card-hover backdrop-blur-sm transition-colors">
                <div className="absolute top-0 right-0 p-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
                    {startup.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-2 group-hover:text-accent transition-colors">
                  {startup.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-loose">
                  {startup.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Academic Projects Section */}
        <section id="academic-projects" className="max-w-4xl">
          <SectionHeading>Academic Projects</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {academicProjects.map((project, idx) => (
              <Card
                key={idx}
                className="relative overflow-hidden group p-10 border-2 border-border hover:border-accent transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 !bg-card hover:!bg-card-hover backdrop-blur-sm flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <FiBarChart2
                  className="absolute -bottom-6 -right-6 w-32 h-32 text-accent/[0.03] group-hover:text-accent/[0.08] transition-colors duration-500 transform -rotate-12 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex-grow flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 text-accent border-2 border-accent/40 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300"
                      >
                        <FiExternalLink
                          className="w-5 h-5"
                          aria-hidden="true"
                        />
                      </a>
                    )}
                  </div>

                  {project.grade && (
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-accent/10 text-accent border border-accent/20">
                        {project.grade}
                      </span>
                    </div>
                  )}

                  <p className="text-muted-foreground text-sm leading-loose mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground border border-border/50 group-hover:border-accent/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <SectionHeading>Technical Arsenal</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Frontend Card */}
            <Card className="md:col-span-2 p-6 flex flex-col justify-center relative overflow-hidden group/card !bg-card hover:!bg-card-hover backdrop-blur-sm transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <h3 className="text-xl font-bold mb-6 text-foreground/90 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Frontend & Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.frontend.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex items-center gap-2 px-4 py-2 bg-muted/50 hover:bg-background rounded-lg border-2 border-border hover:border-accent hover:-translate-y-1 hover:shadow-md hover:shadow-accent/10 transition-all duration-300 text-sm font-medium cursor-default"
                  >
                    <skill.icon
                      className={`w-4 h-4 text-accent transition-colors duration-300 ${skill.color}`}
                      aria-hidden="true"
                    />{" "}
                    <span className="relative z-10">{skill.name}</span>
                    {/* Tooltip */}
                    <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-foreground text-background text-xs px-2.5 py-1 rounded shadow-xl whitespace-nowrap z-20 font-medium">
                      {skill.context}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* BaaS Card */}
            <Card className="p-6 flex flex-col justify-center relative overflow-hidden group/card !bg-card hover:!bg-card-hover backdrop-blur-sm transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <h3 className="text-xl font-bold mb-6 text-foreground/90">
                Backend as a Service
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.baas.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex items-center gap-2 px-4 py-2 bg-muted/50 hover:bg-background rounded-lg border-2 border-border hover:border-accent hover:-translate-y-1 hover:shadow-md hover:shadow-accent/10 transition-all duration-300 text-sm font-medium cursor-default"
                  >
                    <skill.icon
                      className={`w-4 h-4 text-accent transition-colors duration-300 ${skill.color}`}
                      aria-hidden="true"
                    />{" "}
                    <span className="relative z-10">{skill.name}</span>
                    {/* Tooltip */}
                    <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-foreground text-background text-xs px-2.5 py-1 rounded shadow-xl whitespace-nowrap z-20 font-medium">
                      {skill.context}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Tools Card */}
            <Card className="md:col-span-2 p-6 flex flex-col justify-center relative overflow-hidden group/card !bg-card hover:!bg-card-hover backdrop-blur-sm transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <h3 className="text-xl font-bold mb-6 text-foreground/90">
                Tools & Core
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex items-center gap-2 px-4 py-2 bg-muted/50 hover:bg-background rounded-lg border-2 border-border hover:border-accent hover:-translate-y-1 hover:shadow-md hover:shadow-accent/10 transition-all duration-300 text-sm font-medium cursor-default"
                  >
                    <skill.icon
                      className={`w-4 h-4 text-accent transition-colors duration-300 ${skill.color}`}
                      aria-hidden="true"
                    />{" "}
                    <span className="relative z-10">{skill.name}</span>
                    {/* Tooltip */}
                    <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-foreground text-background text-xs px-2.5 py-1 rounded shadow-xl whitespace-nowrap z-20 font-medium">
                      {skill.context}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Data & Analytics Card */}
            <Card className="p-6 flex flex-col justify-center relative overflow-hidden group/card !bg-card hover:!bg-card-hover backdrop-blur-sm transition-colors">
              <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <h3 className="text-xl font-bold mb-6 text-foreground/90">
                Data & Analytics
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.data.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex items-center gap-2 px-4 py-2 bg-muted/50 hover:bg-background rounded-lg border-2 border-border hover:border-accent hover:-translate-y-1 hover:shadow-md hover:shadow-accent/10 transition-all duration-300 text-sm font-medium cursor-default"
                  >
                    <skill.icon
                      className={`w-4 h-4 text-accent transition-colors duration-300 ${skill.color}`}
                      aria-hidden="true"
                    />{" "}
                    <span className="relative z-10">{skill.name}</span>
                    {/* Tooltip */}
                    <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-foreground text-background text-xs px-2.5 py-1 rounded shadow-xl whitespace-nowrap z-20 font-medium">
                      {skill.context}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <ExperienceTabs />

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
            <EmailDropdown
              email={profile.email}
              variant="primary"
              size="lg"
              className="gap-2"
              showText={true}
            />
            <a href={profile.resume} target="_blank" rel="noreferrer">
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
