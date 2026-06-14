export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  homepage: string | null;
}

export async function getFeaturedProjects(username: string): Promise<GitHubRepo[]> {
  const token = process.env.GITHUB_TOKEN;
  
  const headers: HeadersInit = {
    "Accept": "application/vnd.github.v3+json",
  };

  if (token) {
    headers["Authorization"] = `token ${token}`;
  }

  try {
    // For this example we fetch repos for the user and sort by updated
    // Alternatively, you can use search API for specific topics: 
    // `https://api.github.com/search/repositories?q=user:${username}+topic:portfolio`
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`, {
      headers,
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch GitHub repos: ${res.statusText}`);
    }

    const repos: GitHubRepo[] = await res.json();
    
    // Filter out forks and return top 4
    const featured = repos.filter((repo) => !repo.fork).slice(0, 4);
    
    if (featured.length === 0) {
      throw new Error("No public repos found");
    }
    
    return featured;
      
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
    // Fallback data for demonstration
    return [
      {
        id: 1,
        name: "portfolio-website",
        description: "My personal portfolio highlighting my work as a product builder.",
        html_url: "#",
        stargazers_count: 12,
        language: "TypeScript",
        homepage: null,
      },
      {
        id: 2,
        name: "nextjs-saas-template",
        description: "A full-stack template with authentication and billing.",
        html_url: "#",
        stargazers_count: 45,
        language: "TypeScript",
        homepage: null,
      }
    ];
  }
}
