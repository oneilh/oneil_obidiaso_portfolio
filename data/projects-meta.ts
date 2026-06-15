export interface ProjectMeta {
  id: string;
  name: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
  repoName: string; // The "owner/repo" string to fetch the README
}

export const projectsMeta: ProjectMeta[] = [
  {
    id: "firn0",
    name: "Firn0",
    description: "An esports platform for organizing and participating in tournaments.",
    image: "/api/placeholder/800/400", // We will use a placeholder for now
    githubUrl: "https://github.com/oneil-obidiaso/firn0", // Replace with actual URL
    liveUrl: "https://firn0.com", // Replace with actual URL
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoName: "oneil-obidiaso/firn0", // Replace with actual owner/repo
  },
  {
    id: "portfolio",
    name: "Developer Portfolio",
    description: "My personal developer portfolio built with Next.js and Tailwind CSS.",
    image: "/api/placeholder/800/400",
    githubUrl: "https://github.com/oneil-obidiaso/oneil_obidiaso_portfolio",
    liveUrl: "https://oneil-obidiaso.vercel.app",
    tags: ["Next.js", "React", "Tailwind CSS"],
    repoName: "oneil-obidiaso/oneil_obidiaso_portfolio",
  }
  // Add more projects here
];
