export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  homepage: string | null;
  topics?: string[];
}

import { featuredProjects, otherProjects, ProjectMeta } from "../data/projects-meta";

export async function getFeaturedProjects(username: string): Promise<ProjectMeta[]> {
  try {
    const projects = [];

    for (const item of featuredProjects) {
      if (item.repo) {
        const repoName = item.repo;
        const projectMeta = await getProjectMetaFromRepo(username, repoName);

        projects.push({
          id: repoName,
          name: repoName.replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase()),
          description: "No description provided.",
          tags: [],
          image: "/placeholder.png",
          githubUrl: `https://github.com/${username}/${repoName}`,
          repoName: `${username}/${repoName}`,
          ...projectMeta,
          ...item,
        });
      } else {
        projects.push({
          id: item.id || `custom-${Math.random().toString(36).substring(7)}`,
          name: item.name || "Unknown Project",
          description: item.description || "",
          tags: item.tags || [],
          image: item.image || "/placeholder.png",
          githubUrl: item.githubUrl || "#",
          liveUrl: item.liveUrl,
          repoName: item.repoName || item.name || "unknown",
          ...item,
        } as ProjectMeta);
      }
    }

    if (projects.length === 0) {
      throw new Error("No public featured repos found");
    }

    return projects;
  } catch (error) {
    console.error("Error fetching featured projects:", error);
    // Fallback data for demonstration
    return [
      {
        id: "1",
        name: "portfolio-website",
        description: "My personal portfolio highlighting my work as a product builder.",
        tags: ["TypeScript", "Next.js"],
        image: "/placeholder.png",
        githubUrl: "#",
        repoName: "oneilh/portfolio-website",
      },
      {
        id: "2",
        name: "nextjs-saas-template",
        description: "A full-stack template with authentication and billing.",
        tags: ["TypeScript", "Next.js"],
        image: "/placeholder.png",
        githubUrl: "#",
        repoName: "oneilh/nextjs-saas-template",
      }
    ];
  }
}

export async function getOtherProjects(username: string): Promise<ProjectMeta[]> {
  try {
    const projects: ProjectMeta[] = [];

    for (const item of otherProjects) {
      if (item.repo) {
        const repoName = item.repo;
        const projectMeta = await getProjectMetaFromRepo(username, repoName);

        projects.push({
          id: repoName,
          name: repoName.replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase()),
          description: "No description provided.",
          tags: [],
          image: "/placeholder.png",
          githubUrl: `https://github.com/${username}/${repoName}`,
          repoName: `${username}/${repoName}`,
          ...projectMeta,
          ...item,
        });
      } else {
        projects.push({
          id: item.id || `custom-${Math.random().toString(36).substring(7)}`,
          name: item.name || "Unknown Project",
          description: item.description || "",
          tags: item.tags || [],
          image: item.image || "/placeholder.png",
          githubUrl: item.githubUrl || "#",
          liveUrl: item.liveUrl,
          repoName: item.repoName || item.name || "unknown",
          ...item,
        } as ProjectMeta);
      }
    }

    return projects;
  } catch (error) {
    console.error("Error fetching other projects:", error);
    return [];
  }
}

export async function getProjectByRepo(username: string, repo: string): Promise<GitHubRepo | null> {
  const token = process.env.GITHUB_TOKEN;
  
  const headers: HeadersInit = {
    "Accept": "application/vnd.github.v3+json",
  };

  if (token) {
    headers["Authorization"] = `token ${token}`;
  }

  try {
    const res = await fetch(`https://api.github.com/repos/${username}/${repo}`, {
      headers,
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch GitHub repo ${repo}: ${res.statusText}`);
    }

    const data: GitHubRepo = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching GitHub project ${repo}:`, error);
    return null;
  }
}

export async function getProjectMetaFromRepo(username: string, repo: string): Promise<Partial<ProjectMeta> | null> {
  try {
    let res = await fetch(`https://raw.githubusercontent.com/${username}/${repo}/master/project-meta.json`, {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      res = await fetch(`https://raw.githubusercontent.com/${username}/${repo}/main/project-meta.json`, {
        next: { revalidate: 3600 }
      });
    }

    if (!res.ok) {
      console.warn(`Could not find project-meta.json in ${username}/${repo}`);
      return null;
    }

    try {
      const projectMeta = await res.json();
      return projectMeta;
    } catch (parseError) {
      console.warn(`Malformed JSON in project-meta.json for ${repo}:`, parseError);
      return null;
    }

  } catch (error) {
    console.error(`Error fetching project-meta.json for ${repo}:`, error);
    return null;
  }
}
